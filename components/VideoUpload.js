function VideoUpload({ onAnalysisComplete, onStartProcessing, isProcessing }) {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a video file.");
      return;
    }

    try {
      onStartProcessing();

      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      onAnalysisComplete(data);

    } catch (err) {
      console.error(err);
      setError("Processing failed.");
    }
  };

  return (
    <div className="glass-panel p-8 text-center">
      {!isProcessing ? (
        <>
          <h3 className="text-xl text-white mb-4">
            Upload Traffic Video
          </h3>

          <input
            type="file"
            accept="video/*"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="mb-4"
          />

          <button onClick={handleUpload} className="btn-primary">
            Analyze Video
          </button>

          {error && <p className="text-red-400 mt-3">{error}</p>}
        </>
      ) : (
        <>
          <h3 className="text-white mb-4">
            Processing...
          </h3>
          <div className="animate-spin w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto"></div>
        </>
      )}
    </div>
  );
}