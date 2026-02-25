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
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">UI Crash Detected</h1>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-emerald-600 rounded"
            >
              Reload
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
    console.log("Backend Result:", result);
    setAnalysisResult(result);
    setIsProcessing(false);
  };

  return (
    <div className="bg-[#050505] min-h-screen pb-12">
      <Navbar activePage="dashboard" />
      <Sidebar />

      <main className="lg:ml-64 pt-28 px-8">

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          {/* VIDEO UPLOAD */}
          <div className="lg:col-span-2">
            <VideoUpload
              onStartProcessing={handleStartProcessing}
              onAnalysisComplete={handleAnalysisComplete}
              isProcessing={isProcessing}
            />
          </div>

          {/* STATS COLUMN */}
          <div className="flex flex-col gap-6">

            <StatsCard
              title="Congestion Probability"
              value={
                analysisResult
                  ? `${analysisResult.congestionProb}%`
                  : "—"
              }
              color={
                analysisResult && analysisResult.congestionProb > 70
                  ? "red"
                  : "emerald"
              }
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

        {/* ================= AI INSIGHT ================= */}
        <div className="glass-panel p-6 bg-[#080808]">
          <h3 className="font-medium text-white mb-4">
            AI Insight
          </h3>

          {analysisResult ? (
            <>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 mb-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {analysisResult.recommendation}
                </p>
              </div>

              <pre className="text-xs text-emerald-400 bg-black/50 p-3 rounded border border-white/10 overflow-x-auto">
                {JSON.stringify(analysisResult, null, 2)}
              </pre>
            </>
          ) : (
            <div className="text-slate-600 text-sm">
              Waiting for analysis data...
            </div>
          )}
        </div>

      </main>
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