import GlobalApi from '../../../../../_utils/GlobalApi';
import { Copy } from 'lucide-react';
import React, { useState } from 'react'
import { useUser } from '@clerk/nextjs';

function FileShareForm({file , onPasswordSave}) {

    const [isPasswordEnable,setIsEnablePassword] = useState(false);
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState();
    const {user} = useUser();

    const sendEmail = ()=>{
        const data = {
            emailToSend:email,
            userName:user?.fullName,
            fileName:file.fileName,
            fileSize:file.fileSize,
            fileType:file.fileType,
            shortUrl:file.shortUrl,
            fileUrl:file.fileUrl
        }
        GlobalApi.SendEmail(data).then(resp=>{
            console.log(resp);
            
        })
    };
    
    const onCopyClick = ()=>{
        navigator.clipboard.writeText(file.shortUrl);
    }

    return file&&(
    <div className='flex flex-col gap-2'>
        <div>
        <label className='text-[14px] text-gray-500'>ShortUrl </label>
        <div className='flex gap-5 p-2 border rounded-md justify-between'>
        <input type="text" value={file.shortUrl} disabled
            className='disabled:text-gray-500 bg-transparent
            outline-none w-full'/>
            <Copy className='text-gray-400 hover:text-gray-600 cursor-pointer'
            onClick={()=>onCopyClick()}/>
        </div>
        </div>
        
        <div className='gap-3 flex mt-5'>
            <input type='checkbox' onChange = {(e)=>setIsEnablePassword(true)}/>
            <label>Enable Password?</label>
        </div>

        {isPasswordEnable?
            <div className='flex gap-3 items-center'>
            <div className='border rounded-md w-full p-2'>
                <input type='password' 
                className='disabled:text-gray-500 bg-transparent outline-none'
                onChange = {(e) => setPassword(e.target.value)} />
            </div> 
            <button className='p-2 bg-primary text-white 
            rounded-md disabled:bg-gray-300 hover:bg-blue-600'
            disabled={password?.length<3}
            onClick = {()=>onPasswordSave(password)}>
                Save
            </button>
            </div>:null
        }

        <div className='border rounded-md p-3 mt-5'>
            <label className='text-[14px] text-gray-500'>Send Email to</label>
            <div className='border rounded-md p-2'>
                <input type="email"
                placeholder='example@gmail.com'
                className='bg-transparent outline-none'
                onChange = {(e) => setEmail(e.target.value)} />
            </div>
            <button className='p-2 disabled:bg-gray-50 bg-primary text-white
            hover:bg-blue-600 w-full mt-2 rounded-md'
            onClick = {()=>sendEmail()}>
                Send Email
            </button>
        </div>

    </div>
    )
}

export default FileShareForm
