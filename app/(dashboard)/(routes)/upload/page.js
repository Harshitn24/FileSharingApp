"use client"
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm'
// import { app } from '@/app/firebaseConfig'
import { app } from '../../../../firebaseConfig'
//import { getStorage } from "firebase/storage"
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs'
import GenerateRandomString from '../../../_utils/GenerateRandomString'
import { useRouter } from 'next/navigation'

function Upload() {

    const {user} = useUser();
    const [progress,setProgress] = useState();
    const router = useRouter();
    const storage = getStorage(app);
    const db = getFirestore(app);
    const [fileDocId,setFileDocId] = useState();
    const [uploadCompleted,setUploadCompleted] = useState();
    const uploadFile = (file)=>{
        const metadata = {
            contentType: file.types
        };
        const storageRef = ref(storage ,'file-upload/'+file?.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        uploadTask.on('state_changed',
    (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //console.log('Upload is ' + progress + '% done');
    setProgress(progress);
    },
    (error) => {
        switch (error.code) {
            case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
            case 'storage/canceled':
            // User canceled the upload
            break;
            case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
    }, 
    () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        saveInfo(file,downloadURL);
        });
    }
    )
    }

    const saveInfo = async(file,fileUrl) =>{
        const docId = GenerateRandomString().toString();
        await setDoc(doc(db,"uploadedFile",docId),{
            fileName :  file.name,
            fileSize : file.size,
            fileType:file.type,
            fileUrl : fileUrl,
            userEmail : user.primaryEmailAddress.emailAddress,
            userName : user.fullName,
            password :'',
            id:docId,
            shortUrl : process.env.NEXT_PUBLIC_BASE_URL+'f/'+docId
        });
        setFileDocId(docId);
        setUploadCompleted(true);
    }

        useEffect(()=>{
            uploadCompleted&&
            setTimeout(()=>{
                setUploadCompleted(false);
                router.push('/file-preview/'+fileDocId);
            },1000)
        },[uploadCompleted==true])

    return (
    <div className='p-5 px-8 md:px-28'>
        <h2 className='text-[20px] text-center m-5'>Start 
            <strong className='text-primary'> Uploading </strong>  files and 
            <strong className='text-primary'> Share</strong> it</h2>
    <UploadForm 
    uploadBtnClick={(file)=>{uploadFile(file)}}
    progress = {progress}
    />
    </div>
    )
}

export default Upload
