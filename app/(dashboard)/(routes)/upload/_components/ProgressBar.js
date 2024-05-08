import React from 'react'
import PopUp from './PopUp'

function ProgressBar({progress}) {
    return (
    <div className='bg-gray-400 w-full h-5 mt-3 rounded-full'>
        <div className='py-0.2 bg-primary h-5 rounded-full text-[12px] text-white' style = {{width:`${progress}%`}}>
        {`${Number(progress).toFixed(0)}%`}
        {progress==100?<PopUp/>:null}
        </div>
        
    </div>
    )
}

export default ProgressBar
