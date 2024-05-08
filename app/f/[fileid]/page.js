"use client"
import React, {useEffect, useState} from 'react'
import { app } from '../../../firebaseConfig'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import FileItem from './_components/FileItemC'
import Image from 'next/image';
import Link from 'next/link';

function FileView({params}){
    
    const db = getFirestore(app);
    const [file,setFile] = useState();
    useEffect(() =>{
        console.log(params?.fileid);
        params?.fileid&&getFileInfo();
    },[])

    const getFileInfo = async() =>{
        const docRef = doc(db, "uploadedFile", params?.fileid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setFile(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
    }

    return (
        <div className='
        bg-gray-100 h-screen w-full flex justify-center items-center flex-col gap-4'>
            <Link href={'/files'}>
                <Image src='/logo.svg' width={100} height={70}/>
            </Link>
            <FileItem file={file}/>
        </div>
        
    )
}

export default FileView;