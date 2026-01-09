import { Flame } from "lucide-react"

const Streak = () => {
    return (
        <div className="mt-8 md:mt-12 bg-gradient-to-br from-orange-500 to-amber-500 p-6 md:p-10 rounded-2xl shadow-lg shadow-orange-200 text-white relative overflow-hidden">
            <div className="space-y-3 relative z-10">
                <h2 className="text-lg md:text-xl font-medium flex items-center gap-2 text-orange-50">
                    <Flame className="w-5 h-5 md:w-6 md:h-6 fill-orange-100/30" />
                    Current Streak
                </h2>
                <div className="flex items-baseline gap-1">
                    <span className="text-5xl md:text-6xl font-bold tracking-tight">0</span>
                    <span className="text-xl md:text-2xl font-medium text-orange-100">days</span>
                </div>
                <p className="text-sm md:text-base text-orange-50 font-medium pt-2">
                    Complete your goal to keep the streak alive!
                </p>
            </div>

            {/* Decorative background circle */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        </div>
    )
}

export default Streak