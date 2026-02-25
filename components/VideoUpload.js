function VideoUpload({ onAnalysisComplete, onStartProcessing, isProcessing }) {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [progress, setProgress] = React.useState(0);

  // Fake cinematic progress animation
  React.useEffect(() => {
    let interval;

    if (isProcessing) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 95) return prev; // stop at 95% until backend responds
          return prev + Math.random() * 8;
        });
      }, 300);
    }

    return () => clearInterval(interval);
  }, [isProcessing]);

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a video file.");
      return;
    }

    try {
      setError(null);
      onStartProcessing();

      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

      setProgress(100); // complete bar
      setTimeout(() => {
        onAnalysisComplete(data);
      }, 500);

    } catch (err) {
      console.error(err);
      setError("Processing failed. Please try again.");
    }
  };

  return (
    <div className="glass-panel p-10 border border-emerald-500/20 bg-gradient-to-b from-[#0e0e0e] to-[#080808] rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-300">

      {!isProcessing ? (
        <div className="text-center">

          <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
            Upload Traffic Footage
          </h3>

          <div className="flex flex-col items-center gap-5">

            <label className="cursor-pointer px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition text-slate-300 text-sm tracking-wide">
              Select Video File
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                className="hidden"
              />
            </label>

            {selectedFile && (
              <div className="text-xs text-slate-500 font-mono">
                {selectedFile.name}
              </div>
            )}

            <button
              onClick={handleUpload}
              className="mt-4 px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-emerald-500/20"
            >
              Analyze Video
            </button>

            {error && (
              <p className="text-red-400 text-sm mt-2">
                {error}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-6">

          <h3 className="text-white text-lg mb-6 tracking-wide">
            Processing Traffic Data...
          </h3>

          {/* Progress Bar */}
          <div className="w-full max-w-md mx-auto">

            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden relative">

              <div
                className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.7)] transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>

            </div>

            <div className="text-emerald-400 text-sm mt-3 font-mono tracking-widest">
              {Math.floor(progress)}%
            </div>

          </div>

          <p className="text-slate-500 text-xs mt-4">
            Running vehicle detection & congestion analysis
          </p>
        </div>
      )}
    </div>
  );
}