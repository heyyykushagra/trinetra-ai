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
      border: "border-emerald-500/30",
      glow: "shadow-[0_0_40px_rgba(16,185,129,0.35)]"
    },
    red: {
      icon: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/30",
      glow: "shadow-[0_0_40px_rgba(244,63,94,0.35)]"
    },
    blue: {
      icon: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      glow: "shadow-[0_0_40px_rgba(59,130,246,0.35)]"
    },
    amber: {
      icon: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/30",
      glow: "shadow-[0_0_40px_rgba(245,158,11,0.35)]"
    },
    purple: {
      icon: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/30",
      glow: "shadow-[0_0_40px_rgba(139,92,246,0.35)]"
    }
  };

  const theme = colorConfigs[color] || colorConfigs.emerald;

  const displayValue =
    value === 0 ? 0 : value ? value : "—";

  return (
    <div
      className={`relative p-7 rounded-2xl 
      bg-gradient-to-b from-[#111111] to-[#0a0a0a] 
      border ${theme.border} 
      transition-all duration-300 
      hover:scale-[1.03] ${theme.glow}`}
    >

      {/* Neon Overlay Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-10 blur-2xl bg-emerald-500 pointer-events-none"></div>

      {/* Icon + Trend */}
      <div className="relative flex justify-between items-start mb-5">

        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center border ${theme.border} ${theme.bg}`}
        >
          <div className={`${icon} ${theme.icon} text-lg`}></div>
        </div>

        {trend !== null && (
          <div
            className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-white/5 border border-white/10 ${
              trend > 0 ? "text-rose-400" : "text-emerald-400"
            }`}
          >
            {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
          </div>
        )}
      </div>

      {/* Value */}
      <div className="relative">
        <h3 className="text-5xl font-extrabold text-white tracking-tight">
          {displayValue}
          {unit && (
            <span className="text-lg text-slate-500 font-medium ml-2">
              {unit}
            </span>
          )}
        </h3>

        <p className="text-xs uppercase tracking-widest text-slate-500 mt-3">
          {title}
        </p>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <div className="relative mt-6 pt-5 border-t border-white/5">
          <p className="text-xs text-slate-500 leading-relaxed">
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
}