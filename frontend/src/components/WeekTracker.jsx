import { CalendarDays } from "lucide-react"
import Day from "./Day"
const WeekTracker = () => {
  return (
    <div className="mt-8 md:mt-12 bg-white p-4 sm:p-6 md:p-10 rounded-2xl shadow-lg relative overflow-hidden space-y-6">
        <div className="flex items-center gap-2">
            <CalendarDays className="w-10 h-10 text-blue-500 bg-blue-100 p-2 rounded-2xl" />
            <h2 className="text-2xl font-semibold text-gray-900">This Week</h2>
        </div>
        <div className="flex items-center gap-2 justify-between">
           
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
           
        </div>
    </div>
  )
}

export default WeekTracker