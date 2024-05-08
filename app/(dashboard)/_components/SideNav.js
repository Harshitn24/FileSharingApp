"use client"
import { File, Newspaper, Shield, Upload } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function SideNav({closeSideBar}) {
    const menuList = [
        {
            id:1,
            name:'Files',
            icon:File,
            path:'/files'
        },
        {
            id:2,
            name:'Upload',
            icon:Upload,
            path:'/upload'
        },
        {
            id:3,
            name:'Upgrade',
            icon:Shield,
            path:'/upgrade'
        },
        // {
        //     id:4,
        //     name:'Newsletter',
        //     icon:Newspaper,
        //     path:'/newsletter'
        // }
    ]

    const [activeIndex,setActiveIndex] = useState(0);
    return (
    <div className='shadow-sm border-r h-full'>
        <div className='p-5 border-b'>
            <Image src='./logo.svg' width={80} height={80} />
        </div>
        <div className='flex flex-col float-left w-full'>
        {menuList.map((item,index)=>(
                <button className={`flex gap-4 p-5 px-10
                hover:bg-gray-100 w-full 
                text-gray-500
                ${activeIndex==index?'bg-blue-50 text-primary':null}`}
                onClick={()=>{setActiveIndex(index);closeSideBar()}}
                >
                <item.icon/>
                <Link href={item.path}> <h2>{item.name}</h2> </Link>
                </button>
            ))}
        </div>
    </div>
    )
}

export default SideNav
