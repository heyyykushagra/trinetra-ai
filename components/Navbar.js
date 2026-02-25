function Navbar({ activePage }) {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <div className="icon-aperture text-black text-sm"></div>
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white">Trinetra<span className="text-emerald-400">AI</span></span>
                </div>
                
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                    <a href="index.html" className={`hover:text-white transition-colors duration-300 ${activePage === 'home' ? 'text-white' : ''}`}>Product</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Technology</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Enterprise</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Pricing</a>
                </div>

                <div className="flex items-center gap-4">
                    {activePage === 'home' ? (
                        <a href="dashboard.html" className="hidden md:flex items-center gap-2 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/5 px-5 py-2 rounded-full transition-all duration-300 group">
                            Launch Dashboard
                            <div className="icon-arrow-right w-4 h-4 text-slate-400 group-hover:text-white transition-colors"></div>
                        </a>
                    ) : (
                         <div className="flex items-center gap-3 pl-6 border-l border-white/5">
                            <div className="flex flex-col items-end">
                                <span className="text-xs font-semibold text-white">Kushagra Singh</span>
                                <span className="text-[10px] text-emerald-400">Admin</span>
                            </div>
                            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center text-xs font-bold border border-white/10 ring-2 ring-black">
                                JD
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}