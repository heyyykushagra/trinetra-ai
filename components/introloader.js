function IntroLoader({ onFinish }) {
  const [progress, setProgress] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(() => onFinish(), 800);
          }, 600);
          return 100;
        }
        return p + 1.2; // slower, smoother
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-[1200ms] ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Cinematic radial light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]"></div>

      {/* Logo */}
      <div className="absolute top-1/2 -translate-y-24 text-center animate-fadeIn">
        <h1 className="text-white text-3xl tracking-[0.6em] font-light">
          TRINETRA
        </h1>
        <div className="text-slate-600 text-xs tracking-[0.4em] mt-3">
          AUTONOMOUS INTELLIGENCE
        </div>
      </div>

      {/* Thin Premium Loading Line */}
      <div className="absolute bottom-40 w-80">
        <div className="h-[1px] bg-white/10 w-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 1.4s ease forwards;
        }
        `}
      </style>
    </div>
  );
}