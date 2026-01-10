import { ChevronDown, Clock8 } from "lucide-react"


const Progress = () => {
    return (
        <div className="mt-8 md:mt-12 bg-white p-6 md:p-10 rounded-2xl shadow-lg  relative overflow-hidden space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">

                    <Clock8 className="bg-orange-100 p-2 rounded-2xl w-10 h-10 text-orange-500" />
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-medium text-gray-900 tracking-tight leading-none">Today's Progress</h3>
                        <p className="text-sm text-gray-500 tracking-wider leading-none">2.0/4 hours</p>
                    </div>

                </div>
                <div className="flex items-center gap-2 border border-gray-200 rounded-2xl px-4 py-2 ">
                   <button className="text-sm font-medium text-gray-900">Daily</button>
                   <ChevronDown className="w-5 h-5 text-gray-500" />
                </div>
            </div>
            <div className="relative">
                <div className="py-3 bg-orange-100 rounded-2xl"></div>
                <div className="absolute top-0 left-0 w-1/2 h-full bg-orange-500 rounded-2xl z-10"></div>
            </div>
        </div>
    )
}

export default Progress