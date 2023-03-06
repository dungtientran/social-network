import { openModelSelect } from '@/redux/sliceRducer/modelSelectSlice';
import React, { useState } from 'react';
import { BsArrowsAngleContract, BsThreeDots, BsArrowsAngleExpand } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

const DotSelect = ({ hadleZoom }) => {
    const [isZoom, setIsZoom] = useState(false);

    const distpatch = useDispatch();

    const { isOpenModelSelect } = useSelector(state => state.openModelSelect);
    const handleOpenModelSelect = (e) => {
        e.stopPropagation();
        distpatch(openModelSelect(!isOpenModelSelect));
    }
    const handleOnClickIsZoom = (e) => {
        e.stopPropagation();
        hadleZoom()
        distpatch(openModelSelect(!isOpenModelSelect));
        setIsZoom(!isZoom);
    }

    return (

        <div className='relative dotSelect'>
            <span className='cursor-pointer ' onClick={handleOpenModelSelect}><BsThreeDots size={18} /></span>
            {isOpenModelSelect && (
                <div className='absolute min-w-[300px] top-[100%] right-[50%] bg-[#18191A] p-3 rounded-md'>
                    <div
                        className='w-full h-ful flex items-center gap-2  hover:bg-hover-bg cursor-pointer rounded-md'
                        onClick={handleOnClickIsZoom}
                    >
                        <p className='p-2 bg-[#3A3B3C] rounded-full shadow-xl'>
                            {!isZoom ? <BsArrowsAngleContract size={25} /> : <BsArrowsAngleExpand size={25}/>}
                        </p>
                        <p className='font-semibold text-lg'>{isZoom ? 'Mở rộng bảng điều khiển' : 'Thu gọn bảng điều khiển'}</p>
                    </div>
                </div>
            )}
        </div>

    )
}

export default DotSelect