import { BookOpen, Plus } from "lucide-react"
import Subject from "./Subject"

const RecentSession = () => {
    return (
        <div className="mt-8 md:mt-12 bg-white p-4 sm:p-6 md:p-10 rounded-2xl shadow-lg relative overflow-hidden space-y-6 ">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="flex items-center gap-4 text-lg sm:text-xl font-semibold text-gray-900 tracking-wider">
                    <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-green-500 bg-green-100 p-2 rounded-2xl" />
                    Recent Session
                </p>
                <button className="w-full sm:w-auto bg-orange-500 text-white px-4 py-2 rounded-2xl transition hover:bg-orange-600 flex items-center gap-2">
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                    Log Session
                </button>
            </div>
            <div className="space-y-4">
                <Subject />
                <Subject />
                <Subject />
                <Subject />
                <Subject />
            </div>
        </div>
    )
}

export default RecentSession