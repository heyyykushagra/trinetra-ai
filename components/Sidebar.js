function Sidebar() {
    const menuItems = [
        { icon: 'icon-layout-dashboard', label: 'Overview', active: true },
        { icon: 'icon-video', label: 'Live Sources' },
        { icon: 'icon-chart-bar', label: 'Analytics' },
        { icon: 'icon-history', label: 'History' },
        { icon: 'icon-settings', label: 'Configuration' }
    ];

    return (
        <aside className="fixed left-0 top-20 bottom-0 w-64 border-r border-white/5 bg-[#050505] hidden lg:flex flex-col justify-between py-6">
            <div className="px-4">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6 px-3">Main Navigation</div>
                <div className="space-y-1">
                    {menuItems.map((item, index) => (
                        <button 
                            key={index}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                                item.active 
                                ? 'bg-white/5 text-white' 
                                : 'text-slate-500 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            <div className={`${item.icon} text-lg ${item.active ? 'text-emerald-400' : 'text-slate-600 group-hover:text-slate-400'} transition-colors`}></div>
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="px-4">
                <div className="p-4 rounded-xl bg-gradient-to-b from-slate-900 to-black border border-white/5">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Infrastructure</span>
                        <div className="flex gap-1">
                             <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                             <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/30"></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-slate-400">
                            <span>CPU Usage</span>
                            <span className="text-white font-mono">32%</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400">
                            <span>GPU Memory</span>
                            <span className="text-white font-mono">8.4GB</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}