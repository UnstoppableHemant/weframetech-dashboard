import { BsThreeDots, BsClock, BsDot } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'


const DashboardData = () => {
    return (
        <div className="flex shrink-0 py-8 custom-scroll px-4 gap-4 text-white overflow-x-auto space-x-5 justify-between">
            <div className="min-w-[300px]">
                <div className="flex items-center px-4 justify-between font-bold">
                    <h3>To-Do List (24)</h3>
                    <div className="p-1 bg-[#6418C3] rounded"><FaPlus className="text-lg font-bold" /></div>
                </div>
                <div className="bg-[#070519] rounded-md">
                    <div className="mt-6 p-4 rounded-md bg-[#211A75] hover:origin-bottom-left hover:rotate-6 hover:relative hover:left-4 hover:top-2">
                        <span className="flex justify-between items-center">
                            <span className="flex items-center text-[#FFAB2D]"><BsDot className="w-6 h-6" /><p className="text-xs">Important</p></span>
                            <BsThreeDots />
                        </span>
                        <p className="text-sm mt-1">Create sign up sheet for holiday student/parent conferences.</p>
                        <div className="h-1.5 rounded w-full mt-4 bg-[#1E1C3A]">
                            <div className="h-1.5 rounded bg-[#FFAB2D] w-[30%]"></div>
                        </div>
                        <div className="flex mt-4 items-center justify-between">
                            <div className="flex items-center">
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full z-40"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-2 z-30"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-4 z-20"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-6 z-10"></span>
                            </div>
                            <span className="flex gap-2 text-[#A5A5A5]"><BsClock /> <p className="text-xs">Due in 4 Days</p></span>
                        </div>
                    </div>
                </div>
                <div className="bg-[#070519] rounded-md">
                    <div className="mt-6 p-4 rounded-md bg-[#211A75] hover:origin-bottom-left hover:rotate-6 hover:relative hover:left-4 hover:top-2">
                        <span className="flex justify-between items-center">
                            <span className="flex items-center text-[#E328AF]"><BsDot className="w-6 h-6" /><p className="text-xs">Instructor Meeting</p></span>
                            <BsThreeDots />
                        </span>
                        <p className="text-sm mt-1">Plan holiday demonstration program. Create outline.</p>
                        <div className="h-1.5 rounded w-full mt-4 bg-[#1E1C3A]">
                            <div className="h-1.5 rounded bg-[#E328AF] w-[40%]"></div>
                        </div>
                        <div className="flex mt-4 items-center justify-between">
                            <div className="flex items-center">
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full z-40"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-2 z-30"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-4 z-20"></span>
                            </div>
                            <span className="flex gap-2 text-[#A5A5A5]"><BsClock /> <p className="text-xs">Due in 4 Days</p></span>
                        </div>
                    </div>
                </div>
                <div className="bg-[#070519] rounded-md">
                    <div className="mt-6 p-4 rounded-md bg-[#211A75] hover:origin-bottom-left hover:rotate-6 hover:relative hover:left-4 hover:top-2">
                        <span className="flex justify-between items-center">
                            <span className="flex items-center text-[#38E25D]"><BsDot className="w-6 h-6" /><p className="text-xs">Database</p></span>
                            <BsThreeDots />
                        </span>
                        <p className="text-sm mt-1">Determine how many boards need to be ordered for testing and demo.</p>
                        <div className="h-1.5 rounded w-full mt-4 bg-[#1E1C3A]">
                            <div className="h-1.5 rounded bg-[#38E25D] w-[20%]"></div>
                        </div>
                        <div className="flex mt-4 items-center justify-between">
                            <div className="flex items-center">
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full z-40"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-2 z-30"></span>
                            </div>
                            <span className="flex gap-2 text-[#A5A5A5]"><BsClock /> <p className="text-xs">Due in 4 Days</p></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-w-[300px]">
                <div className="flex items-center px-4 justify-between font-bold">
                    <h3>In Progress (2)</h3>
                    <div className="p-1 bg-[#211A75] rounded text-[#6418C3]"><FaPlus className="text-lg font-bold" /></div>
                </div>
                <div className="bg-[#070519] rounded-md">
                    <div className="mt-6 p-4 rounded-md bg-[#211A75] hover:origin-bottom-left hover:rotate-6 hover:relative hover:left-4 hover:top-2">
                        <span className="flex justify-between items-center">
                            <span className="flex items-center text-[#5DCFFF]"><BsDot className="w-6 h-6" /><p className="text-xs">Videos</p></span>
                            <BsThreeDots />
                        </span>
                        <p className="text-sm mt-1">Create sparring tutorial video for the weekly class.</p>
                        <div className="h-1.5 rounded w-full mt-4 bg-[#1E1C3A]">
                            <div className="h-1.5 rounded bg-[#5DCFFF] w-[80%]"></div>
                        </div>
                        <div className="flex mt-4 items-center justify-between">
                            <div className="flex items-center">
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full z-40"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-2 z-30"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-4 z-20"></span>
                            </div>
                            <span className="flex gap-2 text-[#A5A5A5]"><BsClock /> <p className="text-xs">Due in 4 Days</p></span>
                        </div>
                    </div>
                </div>
                <div className="bg-[#070519] rounded-md">
                    <div className="mt-6 p-4 rounded-md bg-[#211A75] hover:origin-bottom-left hover:rotate-6 hover:relative hover:left-4 hover:top-2">
                        <span className="flex justify-between items-center">
                            <span className="flex items-center text-[#FF4A55]"><BsDot className="w-6 h-6" /><p className="text-xs">BUGS FIXING</p></span>
                            <BsThreeDots />
                        </span>
                        <p className="text-sm mt-1">Payment gateway needs reauthorization.</p>
                        <div className="h-1.5 rounded w-full mt-4 bg-[#1E1C3A]">
                            <div className="h-1.5 rounded bg-[#FF4A55] w-[95%]"></div>
                        </div>
                        <div className="flex mt-4 items-center justify-between">
                            <div className="flex items-center">
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full z-40"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-2 z-30"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-4 z-20"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-6 z-10"></span>
                            </div>
                            <span className="flex gap-2 text-[#A5A5A5]"><BsClock /> <p className="text-xs">Due in 4 Days</p></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-w-[300px]">
                <div className="flex items-center px-4 justify-between font-bold">
                    <h3>Done (3)</h3>
                    <div className="p-1 bg-[#211A75] rounded text-[#6418C3]"><FaPlus className="text-lg font-bold" /></div>
                </div>
                <div className="bg-[#070519] rounded-md">
                    <div className="mt-6 p-4 rounded-md bg-[#211A75] hover:origin-bottom-left hover:rotate-6 hover:relative hover:left-4 hover:top-2">
                        <span className="flex justify-between items-center">
                            <span className="flex items-center text-[#FF4A55]"><BsDot className="w-6 h-6" /><p className="text-xs">BUGS FIXING</p></span>
                            <BsThreeDots />
                        </span>
                        <p className="text-sm mt-1">Action Button needed for Google Maps visits.</p>
                        <div className="h-1.5 rounded w-full mt-4 bg-[#1E1C3A]">
                            <div className="h-1.5 rounded bg-[#FF4A55] w-[100%]"></div>
                        </div>
                        <div className="flex mt-4 items-center justify-between">
                            <div className="flex items-center">
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full z-40"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-2 z-30"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-4 z-20"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-6 z-10"></span>
                            </div>
                            <span className="flex gap-2 text-[#A5A5A5]"><BsClock /> <p className="text-xs">Due in 4 Days</p></span>
                        </div>
                    </div>
                </div>
                <div className="bg-[#070519] rounded-md">
                    <div className="mt-6 p-4 rounded-md bg-[#211A75] hover:origin-bottom-left hover:rotate-6 hover:relative hover:left-4 hover:top-2">
                        <span className="flex justify-between items-center">
                            <span className="flex items-center text-[#38E25D]"><BsDot className="w-6 h-6" /><p className="text-xs">Database</p></span>
                            <BsThreeDots />
                        </span>
                        <p className="text-sm mt-1">Update new instructor photos.</p>
                        <div className="h-1.5 rounded w-full mt-4 bg-[#1E1C3A]">
                            <div className="h-1.5 rounded bg-[#38E25D] w-[100%]"></div>
                        </div>
                        <div className="flex mt-4 items-center justify-between">
                            <div className="flex items-center">
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full z-40"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-2 z-30"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-4 z-20"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-6 z-10"></span>
                            </div>
                            <span className="flex gap-2 text-[#A5A5A5]"><BsClock /> <p className="text-xs">Due in 4 Days</p></span>
                        </div>
                    </div>
                </div>
                <div className="bg-[#070519] rounded-md">
                    <div className="mt-6 p-4 rounded-md bg-[#211A75] hover:origin-bottom-left hover:rotate-6 hover:relative hover:left-4 hover:top-2">
                        <span className="flex justify-between items-center">
                            <span className="flex items-center text-[#E328AF]"><BsDot className="w-6 h-6" /><p className="text-xs">Instructor Meeting</p></span>
                            <BsThreeDots />
                        </span>
                        <p className="text-sm mt-1">Review/correct yellow belt techniques.</p>
                        <div className="h-1.5 rounded w-full mt-4 bg-[#1E1C3A]">
                            <div className="h-1.5 rounded bg-[#E328AF] w-[100%]"></div>
                        </div>
                        <div className="flex mt-4 items-center justify-between">
                            <div className="flex items-center">
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full z-40"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-2 z-30"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-4 z-20"></span>
                                <span className="p-2 bg-[#C4C4C4] border-2 border-[#15132B] rounded-full relative right-6 z-10"></span>
                            </div>
                            <span className="flex gap-2 text-[#A5A5A5]"><BsClock /> <p className="text-xs">Due in 4 Days</p></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-w-[300px]">
                <div className="flex items-center px-4 justify-between font-bold">
                    <h3>Revised (0)</h3>
                    <div className="p-1 bg-[#211A75] rounded text-[#6418C3]"><FaPlus className="text-lg font-bold" /></div>
                </div>
                <div className="bg-[#211A75] rounded-lg mt-6 p-4">
                    <div className="bg-[#15132B] border-dashed border-2 border-[#7879F1] p-2 rounded-lg text-[#7879F1]">
                        <p className="text-center">Move Card Here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardData