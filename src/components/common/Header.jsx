import { IoMenu } from 'react-icons/io5'
import { BsPersonVideo3, BsFolderFill } from 'react-icons/bs'
import { LiaSearchSolid } from 'react-icons/lia'
import { TbBellFilled, TbTriangleInvertedFilled } from 'react-icons/tb'
import { MdLibraryAddCheck } from 'react-icons/md'
import useShowHideSidenav from '../customHooks/useShowHideSidenav'


const Header = () => {
    // const showHideNav = () => {
    //     useShowHideSidenav(true)
    // } 
    return (
        <div className="sm:px-6 px-3 py-4 bg-[#15132B] w-full flex items-center justify-between">
            <div className="sm:pl-6 pl-4 pt-2 items-center xl:hidden flex gap-3">
                <IoMenu className='w-7 h-7 text-[#7879F1]' />
                <p className="text-white"> weframetech </p>
            </div>
            <div className="xl:flex hidden bg-[#211A75] px-4 py-2 items-center rounded-full">
                <LiaSearchSolid className="w-7 h-7 text-[#7879F1] font-bold" />
                <input type="search" className="outline-none w-full bg-[#211A75] text-white px-2 py-1" placeholder="Search here" />
            </div>
            <div className="xl:block hidden">
                <p className="text-[#50179D] text-xs font-bold"><u>OTHER MENUS</u></p>
            </div>
            <div className="xl:flex hidden text-[#777BF1]">
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
            <div className="xl:flex hidden bg-[#211A75] px-4 py-2 items-center gap-2 rounded-full">
                <div className="p-4 bg-[#C4C4C4] rounded-full"></div>
                <p className="text-white text-sm font-bold">ENGLISH</p>
                <TbTriangleInvertedFilled className="w-3 h-3 text-[#6418C3] font-bold" />
            </div>
            <div className="flex gap-2 items-center border-s-2 pl-4 border-[#1E1C3A]">
                <div className="p-4 bg-[#C4C4C4] rounded-lg"></div>
                <span>
                    <p className="text-white sm:text-md text-sm font-bold">Instructor Day</p>
                    <p className="text-[#7879F1] sm:text-sm text-xs">Super Admin</p>
                </span>
                <TbTriangleInvertedFilled className="w-3 h-3 text-[#6418C3] font-bold" />
            </div>
        </div>
    )
}

export default Header