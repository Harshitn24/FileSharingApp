"use client"
import React from 'react'
import SideNav from './_components/SideNav'
import TopHeader from './_components/TopHeader'
import { useState } from 'react';

function layout({children}) {
    const [toggle,setToggle] = useState();
    return (
    <div>
        <div className=' h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex hidden'>
            <SideNav closeSideBar={()=>setToggle(false)}/>
        </div>

        {toggle?<div className='h-full w-64 flex-col fixed inset-y-0 z-30 bg-white flex'>
            <SideNav closeSideBar={()=>setToggle(false)}/>
        </div>:null}
    <div className='md:ml-64'>
        <TopHeader setToggleBar={()=>setToggle(true)}/>
        {children}
    </div>
    </div>
    )
}

export default layout
