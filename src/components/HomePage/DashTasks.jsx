import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { MdPersonAddAlt1 } from 'react-icons/md'
import { BiSolidMessageDetail, BiDotsVerticalRounded } from 'react-icons/bi'

const DashTasks = () => {
    return (
        <div className="px-6 py-8 bg-[#15132B] w-full text-white rounded flex gap-3">
            <BsFillArrowLeftCircleFill className="mt-2 w-6 h-6 text-[#A5A5A5]" />
            <div className="w-full">
                <div className="flex justify-between">
                    <div>
                        <p className="text-xl font-bold mb-1">School November Tasks</p>
                        <p className="text-xs mb-2">Created by Instructor Day on November 31, 2022</p>
                    </div>
                    <div className="flex text-right gap-2 items-center">
                        <div className="md:block hidden">
                            <p className="text-sm font-bold text-white">Centered Martial Arts</p>
                            <p className="text-xs text-[#A5A5A5]">Sunnyvale, Ca</p>
                        </div>
                        <div className="md:block hidden p-4 bg-[#C4C4C4] rounded-lg"></div>
                        <BiDotsVerticalRounded className="w-5 h-5 text-[#A5A5A5]" />
                    </div>
                </div>
                <div className="xl:flex block justify-between">
                    <div className="md:flex block items-center">
                        <div className="flex items-center">
                            <span className="p-4 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full"></span>
                            <span className="p-4 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-2"></span>
                            <span className="p-4 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-4"></span>
                            <span className="p-4 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-6"></span>
                            <span className="px-2 py-1 bg-[#E328AF] border-2 border-[#15132B] rounded-full relative right-8">5+</span>
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs font-bold md:mt-0 mt-4">
                            <button className="flex items-center gap-2 px-3 rounded-lg py-1 bg-[#6418C3]"><MdPersonAddAlt1 className="w-5 h-5" /> Invite People</button>
                            <button className="flex items-center gap-2 px-3 rounded-lg py-1 border border-[#7879F1]">Private</button>
                            <button className="flex items-center gap-2 px-3 rounded-lg py-1 bg-[#7879F1]">Edit</button>
                            <button className="flex items-center gap-2 px-3 rounded-lg py-1 border border-[#7879F1]"><BiSolidMessageDetail className="w-5 h-5" /> 45 Comments</button>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 lg:mt-0 mt-4">
                        <p className="text-xs">Total Progress 60%</p>
                        <div className="h-2 rounded w-48 bg-[#1E1C3A]">
                            <div className="h-2 rounded bg-[#6418C3] w-[40%]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashTasks