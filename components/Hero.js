function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#050505]">
            {/* Soft Ambient Background */}
            <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
            
            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-md mb-10 group cursor-default hover:border-emerald-500/30 transition-colors duration-500">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm font-medium text-slate-300">New: 3-Model Ensemble Architecture</span>
                    <div className="icon-arrow-right text-slate-500 text-xs group-hover:translate-x-0.5 transition-transform"></div>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-white">
                    Traffic Intelligence <br />
                    <span className="text-gradient">Redefined.</span>
                </h1>
                
                <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                    Deploy autonomous drone fleets to analyze traffic flow, detect congestion, and optimize city infrastructure with military-grade precision.
                </p>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                    <a href="dashboard.html" className="btn-primary flex items-center gap-2 group">
                        Start Analysis
                        <div className="icon-chevron-right group-hover:translate-x-0.5 transition-transform"></div>
                    </a>
                    <a href="#demo" className="px-8 py-3 rounded-full text-slate-300 font-medium hover:text-white hover:bg-white/5 transition-all flex items-center gap-2">
                        <div className="icon-circle-play text-xl"></div>
                        Watch Demo
                    </a>
                </div>

                {/* Simulated 3D Drone Representation using CSS composition */}
                <div className="mt-24 relative mx-auto w-full max-w-5xl" style={{ perspective: '1000px' }}>
                    <div className="relative z-10 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl animate-float">
                        <div className="relative aspect-[21/9] rounded-xl overflow-hidden bg-slate-900 border border-white/5">
                             {/* Abstract Visualization */}
                             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/50 via-slate-900 to-black"></div>
                             
                             {/* Central Focus Ring */}
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-emerald-500/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                <div className="w-48 h-48 border border-white/10 rounded-full border-dashed"></div>
                             </div>
                             
                             {/* Scanning Beam */}
                             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-emerald-500/10 blur-sm animate-[pulse_3s_ease-in-out_infinite]"></div>
                             
                             {/* HUD Data Points */}
                             <div className="absolute inset-0 p-12 flex justify-between items-end">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                        <div className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase">Target Locked</div>
                                    </div>
                                    <div className="text-3xl font-mono font-light text-white">84<span className="text-sm text-slate-500 ml-1">vph</span></div>
                                </div>
                                <div className="space-y-2 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <div className="text-[10px] font-mono text-blue-400 tracking-widest uppercase">System Status</div>
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                    </div>
                                    <div className="text-3xl font-mono font-light text-white">99.8<span className="text-sm text-slate-500 ml-1">%</span></div>
                                </div>
                             </div>
                        </div>
                    </div>
                    
                    {/* Shadow/Glow under the card */}
                    <div className="absolute -inset-4 bg-emerald-500/20 blur-[100px] -z-10 rounded-full opacity-40"></div>
                </div>
            </div>
        </div>
    );
}