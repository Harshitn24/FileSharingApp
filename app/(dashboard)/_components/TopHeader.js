import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader() {
    return (
    <div className='flex p-5 border-b item-center justify-between md:justify-end'>
        <AlignJustify className='md:hidden'/>
        <Image src='./logo.svg' width={80} height = {80} className='md:hidden'/>
        <UserButton/>
    </div>
    )
}

export default TopHeader
