// ===============================
// ERROR BOUNDARY (DO NOT REMOVE)
// ===============================
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error("React Error:", error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">SYSTEM FAILURE</h1>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-emerald-600 rounded-xl"
            >
              Reboot Interface
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ===============================
// MAIN DASHBOARD
// ===============================
function DashboardApp() {
  const [analysisResult, setAnalysisResult] = React.useState(null);
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleStartProcessing = () => {
    setIsProcessing(true);
  };

  const handleAnalysisComplete = (result) => {
    setAnalysisResult(result);
    setIsProcessing(false);
  };

  const isHigh =
    analysisResult && analysisResult.congestionProb > 70;

  return (
    <div className="h-screen bg-black relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 animate-gradient bg-[linear-gradient(120deg,#00110f,#000000,#001b18)]"></div>
      <div className="neural-bg"></div>

      <div className="relative z-10 h-full flex flex-col">
        <Navbar activePage="dashboard" />
        <Sidebar />

        <main className="lg:ml-64 px-10 pt-20 flex-1 flex flex-col justify-between">

          {/* HEADER (Compact) */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-white neon-title">
              TRINETRA AI CONTROL SYSTEM
            </h1>
            <p className="text-slate-400 mt-2 text-sm max-w-xl">
              Tactical AI-driven traffic intelligence & predictive congestion modeling.
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

            <div className="lg:col-span-2">
              <VideoUpload
                onStartProcessing={handleStartProcessing}
                onAnalysisComplete={handleAnalysisComplete}
                isProcessing={isProcessing}
              />
            </div>

            <div className="flex flex-col gap-6">

              <StatsCard
                title="Congestion Probability"
                value={
                  analysisResult
                    ? `${analysisResult.congestionProb}%`
                    : "—"
                }
                color={isHigh ? "red" : "emerald"}
                icon="icon-activity"
              />

              <div className="grid grid-cols-2 gap-6">
                <StatsCard
                  title="Vehicles"
                  value={
                    analysisResult
                      ? analysisResult.vehicleCount
                      : "—"
                  }
                  color="blue"
                  icon="icon-car"
                />

                <StatsCard
                  title="Density"
                  value={
                    analysisResult
                      ? analysisResult.density
                      : "—"
                  }
                  color="amber"
                  icon="icon-grid-2x2"
                />
              </div>
            </div>
          </div>

          {/* AI INSIGHT (Pulled Up + Compact) */}
          <div className={`relative p-6 rounded-2xl border transition-all duration-500 ${
              isHigh
                ? "border-rose-500/40 shadow-[0_0_60px_rgba(244,63,94,0.2)]"
                : "border-emerald-500/30 shadow-[0_0_60px_rgba(16,185,129,0.15)]"
            } bg-gradient-to-b from-[#0f0f0f] to-[#070707]`}>

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-2 h-2 rounded-full ${
                isHigh ? "bg-rose-500 animate-pulse" : "bg-emerald-500 animate-pulse"
              }`}></div>
              <h3 className="text-lg font-semibold text-white">
                Tactical AI Recommendation
              </h3>
            </div>

            {analysisResult ? (
              <>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-4 text-slate-300 text-sm leading-relaxed">
                  {analysisResult.recommendation}
                </div>

                <pre className="text-xs text-emerald-400 bg-black/70 p-4 rounded-xl border border-white/10 max-h-40 overflow-y-auto">
                  {JSON.stringify(analysisResult, null, 2)}
                </pre>
              </>
            ) : (
              <div className="text-slate-600 text-sm">
                Awaiting traffic intelligence...
              </div>
            )}
          </div>

        </main>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientMove 20s ease infinite;
        }

        .neon-title {
          text-shadow: 0 0 20px rgba(16,185,129,0.6);
        }

        .neural-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(16,185,129,0.8) 2px, transparent 3px),
            radial-gradient(circle at 70% 60%, rgba(16,185,129,0.7) 2px, transparent 3px),
            radial-gradient(circle at 40% 80%, rgba(16,185,129,0.7) 2px, transparent 3px);
          background-size: 500px 500px;
          animation: neuralFloat 40s linear infinite;
          opacity: 0.25;
        }

        @keyframes neuralFloat {
          0% { background-position: 0 0; }
          100% { background-position: 500px 500px; }
        }
        `}
      </style>

    </div>
  );
}

// ===============================
// RENDER ROOT
// ===============================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <DashboardApp />
  </ErrorBoundary>
);