
import { FcMoneyTransfer } from "react-icons/fc";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCalendarTimes } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
const OutlookGrid = () => {
  return (
    <div className='flex flex-col md:flex-row gap-5  w-full overflow-hidden' >
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-200 '>
                    <FcMoneyTransfer className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light '>
                        Total Income
                        <div className='flex items-center' >
                            <strong className='text-xl text-gray-700 font-semibold'>₹1500</strong>
                            <span className='text-sm text-green-500 pl-2'>+234</span>
                        </div>
                    </span>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-400 '>
                    <FaCalendarCheck className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light '>
                        Number of Appointment Done
                        <div className='flex items-center' >
                            <strong className='text-xl text-gray-700 font-semibold'>25</strong>
                            <span className='text-sm text-gray-700 pl-2'>Total Assigned: 35</span>
                        </div>
                    </span>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-red-500 '>
                    <FaCalendarTimes className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light '>
                        Cancelled Appointment
                        <div className='flex items-center' >
                            <strong className='text-xl text-gray-700 font-semibold '>10</strong>
                        </div>
                    </span>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-300 '>
                    <GoStarFill className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light '>
                        Rating
                        <div className='flex items-center' >
                            <strong className='text-xl text-gray-700 font-semibold ml-0.5'>4.5</strong>
                        </div>
                    </span>
                </div>
            </BoxWrapper>
        </div>
  )
}

export default OutlookGrid

function BoxWrapper({children}){
    return<div className=" bg-white rounded-sm p-2 flex-1 border-gray-200 flex items-center">{children}</div>
}