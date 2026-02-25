function StatsCard({
    title,
    value,
    unit = "",
    trend = null,
    icon,
    color = "emerald",
    subtitle
}) {

    const colorConfigs = {
        emerald: {
            icon: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20"
        },
        red: {
            icon: "text-rose-400",
            bg: "bg-rose-500/10",
            border: "border-rose-500/20"
        },
        blue: {
            icon: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        amber: {
            icon: "text-amber-400",
            bg: "bg-amber-500/10",
            border: "border-amber-500/20"
        },
        purple: {
            icon: "text-violet-400",
            bg: "bg-violet-500/10",
            border: "border-violet-500/20"
        },
    };

    const theme = colorConfigs[color] || colorConfigs.emerald;

    // Safe value rendering (handles 0 correctly)
    const displayValue =
        value === 0
            ? 0
            : value
            ? value
            : "—";

    return (
        <div className="glass-panel p-6 relative group hover:border-white/10 transition-all duration-500">

            {/* Icon + Trend */}
            <div className="flex justify-between items-start mb-2">

                <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center border ${theme.border} ${theme.bg}`}
                >
                    <div className={`${icon} ${theme.icon} text-lg`}></div>
                </div>

                {trend !== null && (
                    <div
                        className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-white/5 border border-white/5 ${
                            trend > 0 ? "text-rose-400" : "text-emerald-400"
                        }`}
                    >
                        {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
                    </div>
                )}
            </div>

            {/* Value */}
            <div className="mt-4">
                <h3 className="text-3xl font-medium text-white tracking-tight">
                    {displayValue}
                    {unit && (
                        <span className="text-sm text-slate-500 font-normal ml-1">
                            {unit}
                        </span>
                    )}
                </h3>

                <p className="text-sm text-slate-500 font-medium mt-1">
                    {title}
                </p>
            </div>

            {/* Subtitle */}
            {subtitle && (
                <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-xs text-slate-500">
                        {subtitle}
                    </p>
                </div>
            )}
        </div>
    );
}