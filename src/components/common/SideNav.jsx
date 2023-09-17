import { LiaSearchSolid } from 'react-icons/lia'
import { IoMenu, IoCalendarClear } from 'react-icons/io5'
import { TbDashboard, TbMailFilled, TbBellFilled } from 'react-icons/tb'
import { PiChatsCircleBold, PiSquaresFourFill, PiGearSixFill } from 'react-icons/pi'
import { MdPermContactCalendar, MdLibraryAddCheck } from 'react-icons/md'
import { FaAngleRight, FaAngleLeft, FaFileInvoiceDollar } from 'react-icons/fa6'
import { RxDragHandleDots1 } from 'react-icons/rx'
import { BsArrowRight, BsPersonVideo3, BsShop, BsFolderFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'



const SideNav = ({ showHideNav }) => {
  // const [hideNav, setHideNav] = useState()
  // useEffect(()=>{
  //   setHideNav(showHideNav)
  // },[])
  // const toggleSideNav = () => {
  //   setHideNav(!hideNav);
  // }
  // console.log(showHideNav)
  // console.log(hideNav)
  return (
    <div className={`min-w-1/5 p-4 bg-[#15132B] text-white shadow-2xl shadow-black z-50 xl:block ${showHideNav ? 'block fixed overflow-y-auto custom-scroll h-screen' : 'hidden'}`} id="sideNav">
      <div className="pl-6 pt-2 flex items-center justify-between">
        <p> weframetech </p>
        <IoMenu className={`w-7 h-7 text-[#7879F1] ${showHideNav ? 'hidden' : 'block'}`} />
        <FaAngleLeft className={`w-7 h-7 text-[#7879F1] ${showHideNav ? 'block' : 'hidden'}`} />
      </div>
      <div className="xl:hidden mt-4 flex bg-[#211A75] px-4 py-2 items-center rounded-full">
        <LiaSearchSolid className="w-7 h-7 text-[#7879F1] font-bold" />
        <input type="search" className="outline-none w-full bg-[#211A75] text-white px-2 py-1" placeholder="Search here" />
      </div>
      <div className="xl:hidden flex text-[#777BF1] mt-6 justify-between">
        <span className="flex items-center">
          <TbBellFilled className="w-6 h-6" />
          <p className='relative bottom-3 right-4 px-1 bg-[#5DCFFF] text-black font-bold rounded-full'>17</p>
        </span>
        <span className="flex items-center">
          <BsPersonVideo3 className="w-6 h-6" />
          <p className='relative bottom-3 right-4 px-2 bg-[#5DCFFF] text-black font-bold rounded-full'>5</p>
        </span>
        <span className="flex items-center">
          <MdLibraryAddCheck className="w-6 h-6" />
          <p className='relative bottom-3 right-4 px-2 bg-[#5DCFFF] text-black font-bold rounded-full'>2</p>
        </span>
        <span className="flex items-center">
          <BsFolderFill className="w-6 h-6" />
          <p className='relative bottom-3 right-4 px-2 bg-[#E328AF] border-2 border-[#15132B] text-black font-bold rounded-full'>!</p>
        </span>
      </div>
      <div className="p-4 pt-6">
        <p>MAIN MENU</p>
        <div className='pt-4 text-sm'>
          <span className='flex gap-4 items-center py-3 text-[#464366]'>
            <TbDashboard className='w-7 h-7' /> <p> Dashboard </p>
          </span>
          <span className='flex gap-4 items-center justify-between py-3 text-[#464366]'>
            <span className='flex gap-4 items-center'>
              <TbMailFilled className='w-7 h-7' /> <p> Email </p>
            </span>
            <span className='flex gap-4 items-center'>
              <p className='px-1 bg-[#5DCFFF] text-white rounded-full'>17</p>
              <FaAngleRight className='text-[#7879F1]' />
            </span>
          </span>
          <span className='flex gap-4 items-center py-3 text-[#7879F1]'>
            <PiChatsCircleBold className='w-7 h-7' /> <p> Chat </p>
          </span>
          <span className='flex gap-4 items-center justify-between py-3 text-[#6418C3]'>
            <span className='flex gap-4 items-center'>
              <PiSquaresFourFill className='w-7 h-7' /> <p> Kanban </p>
            </span>
            <span className='text-[#7879F1]'>
              <FaAngleRight />
            </span>
          </span>
          <span className='flex gap-4 items-center justify-between py-3 text-[#7879F1]'>
            <span className='flex gap-4 items-center'>
              <MdPermContactCalendar className='w-7 h-7' /> <p> Contact </p>
            </span>
            <span className=''>
              <p className='px-3 py-2 bg-[#E328AF] rounded-full text-white font-bold'>NEW</p>
            </span>
          </span>
          <span className='flex gap-4 items-center py-3 text-[#7879F1]'>
            <IoCalendarClear className='w-7 h-7' /> <p> Calendar </p>
          </span>
          <span className='flex gap-4 items-center justify-between py-3 text-[#7879F1]'>
            <span className='flex gap-4 items-center'>
              <BsPersonVideo3 className='w-7 h-7' /> <p> Courses </p>
            </span>
            <span>
              <FaAngleRight />
            </span>
          </span>
          <span className='flex gap-4 items-center py-3 text-[#7879F1]'>
            <BsShop className='w-7 h-7' /> <p> Shop </p>
          </span>
          <span className='flex gap-4 items-center justify-between py-3 text-[#7879F1]'>
            <span className='flex gap-4 items-center'>
              <FaFileInvoiceDollar className='w-7 h-7' /> <p> Invoices </p>
            </span>
            <span>
              <FaAngleRight />
            </span>
          </span>
          <span className='flex gap-4 items-center py-3 text-[#7879F1]'>
            <PiGearSixFill className='w-7 h-7' /> <p> Settings </p>
          </span>
        </div>
        <div className='mt-8 bg-gradient-to-br from-[#076ECD] to-[#1CBBFF] rounded-xl p-5'>
          <RxDragHandleDots1 className='w-8 h-8' />
          <p className='text-2xl'>Increase your work with kanban</p>
          <BsArrowRight className='w-6 h-6' />
        </div>
      </div>
    </div>
  )
}

export default SideNav;
