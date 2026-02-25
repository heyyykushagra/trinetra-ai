// Important: DO NOT remove this `ErrorBoundary` component.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">System Error</h1>
            <p className="text-gray-400 mb-4">Neural link interrupted.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-emerald-600 rounded hover:bg-emerald-500"
            >
              Reboot System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="bg-[#050505] min-h-screen" data-name="landing-page" data-file="app.js">
        <Navbar activePage="home" />
        <Hero />
        
        {/* Features Section */}
        <section className="py-32 relative overflow-hidden bg-[#050505]">
             <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Three Models. <span className="text-emerald-400">One Mind.</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                        Our proprietary fusion architecture combines the speed of YOLOv8 with the depth of EfficientNet and the predictive power of Random Forest.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { 
                            model: "Detection Layer",
                            title: "YOLOv8 Core", 
                            desc: "Real-time object detection processing 4K drone footage at 60 FPS to identify vehicles and pedestrians.", 
                            icon: "icon-scan-face" 
                        },
                        { 
                            model: "Analysis Layer",
                            title: "EfficientNet", 
                            desc: "Deep convolutional networks analyze road surface conditions, weather patterns, and traffic density.", 
                            icon: "icon-cpu" 
                        },
                        { 
                            model: "Prediction Layer",
                            title: "Random Forest", 
                            desc: "Ensemble learning algorithms predict congestion probability 30 minutes into the future.", 
                            icon: "icon-brain-circuit" 
                        }
                    ].map((feature, i) => (
                        <div key={i} className="glass-panel p-10 hover:border-emerald-500/30 transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>
                            
                            <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                                <div className={`${feature.icon} text-slate-300 group-hover:text-emerald-400 text-2xl transition-colors`}></div>
                            </div>
                            <div className="text-[10px] font-bold text-emerald-500 mb-3 uppercase tracking-widest">{feature.model}</div>
                            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed font-light">{feature.desc}</p>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-12 bg-[#020202]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center">
                        <div className="icon-aperture text-emerald-500 text-xs"></div>
                    </div>
                    <span className="font-bold text-slate-300 tracking-tight">Trinetra AI</span>
                </div>
                <div className="text-slate-600 text-sm font-mono">
                    © 2026 Trinetra AI Systems. All rights reserved.
                </div>
            </div>
        </footer>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);