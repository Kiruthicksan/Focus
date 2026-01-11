import { BookOpen } from "lucide-react"

const Subject = () => {
    return (
        <div className="bg-gray-50 p-2 sm:p-4 md:py-2 md:px-4 rounded-2xl hover:bg-gray-100 transition cursor-pointer">
            <div className="flex items-center gap-3 md:gap-4 justify-between">
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 bg-orange-100 p-2 rounded-xl sm:rounded-2xl shrink-0" />
                <div className="flex items-center justify-between w-full">
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 tracking-tight">LeetCode</h3>
                        <p className="text-xs sm:text-sm text-gray-500 tracking-wider">Sun, Jan 11</p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <p className="text-sm text-gray-500 tracking-wider whitespace-nowrap">2.5 h</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Subject