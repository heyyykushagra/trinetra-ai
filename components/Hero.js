function Hero({ onSequenceComplete }) {
  const orbRef = React.useRef(null);
  const [phase, setPhase] = React.useState("enter");
  const [contentVisible, setContentVisible] = React.useState(false);

  React.useEffect(() => {
    const timers = [];

    timers.push(setTimeout(() => setPhase("descend"), 1000));
    timers.push(setTimeout(() => setPhase("hover"), 3200));
    timers.push(setTimeout(() => setPhase("settle"), 4800));

    timers.push(
      setTimeout(() => {
        setPhase("exit");
        setContentVisible(true);
        onSequenceComplete && onSequenceComplete();
      }, 6500)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  React.useEffect(() => {
    const handleMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 100;
      const y = (window.innerHeight / 2 - e.clientY) / 100;
      if (orbRef.current) {
        orbRef.current.style.transform =
          `rotateY(${x}deg) rotateX(${y}deg)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const dronePosition = {
    enter: "-top-96 scale-30 opacity-0",
    descend: "top-8 scale-110 opacity-100",
    hover: "top-16 scale-100 opacity-100",
    settle: "top-20 scale-95 opacity-100",
    exit: "top-20 scale-85 opacity-0",
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.06),transparent_40%)]"></div>

      {/* Drone */}
      {phase !== "exit" && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 transition-all duration-[2500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${dronePosition[phase]}`}
        >
          <div className="relative w-32 h-32">

            <div className="absolute inset-0 rounded-full border border-white/20 backdrop-blur-md shadow-[0_0_80px_rgba(255,255,255,0.15)]"></div>

            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-white animate-rotor"></div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-white animate-rotor"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-24 w-[2px] bg-white animate-rotor"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-24 w-[2px] bg-white animate-rotor"></div>

            <div className="absolute inset-10 bg-black rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-24 items-center transition-all duration-[1500ms] ${
          contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >

        {/* LEFT */}
        <div>

          <div className="text-[12px] uppercase tracking-[0.45em] text-emerald-400 mb-14">
            TRINETRA AI — AUTONOMOUS TRAFFIC INTELLIGENCE
          </div>

          <h1 className="text-[90px] md:text-[140px] font-extrabold leading-[0.85] tracking-tight text-white">
            Intelligent
            <br />
            Infrastructure.
          </h1>

          <p className="mt-12 max-w-xl text-lg text-slate-400 leading-relaxed">
            Real-time drone-powered systems monitoring traffic flow,
            forecasting congestion and optimizing modern city mobility.
          </p>

          <div className="mt-16 flex gap-12 items-center">

            {/* ULTRA Highlight CTA */}
            <a
              href="dashboard.html"
              className="relative px-10 py-4 rounded-full 
              bg-gradient-to-r from-emerald-400 to-cyan-400
              text-black font-bold text-lg
              transition-all duration-300
              hover:scale-105
              shadow-[0_0_40px_rgba(16,185,129,0.4)]
              hover:shadow-[0_0_100px_rgba(16,185,129,0.8)]"
            >
              Launch Platform
            </a>

            <a
              href="#demo"
              className="text-slate-500 text-lg hover:text-white transition-colors duration-300"
            >
              View Demo
            </a>

          </div>
        </div>

        {/* RIGHT ORB — SHIFTED */}
        <div className="relative flex items-center justify-end perspective-[1200px]">

          <div className="absolute right-0 translate-x-20 xl:translate-x-32">

            <div
              ref={orbRef}
              className="relative w-[500px] h-[500px] transition-transform duration-200 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >

              <div className="absolute inset-0 rounded-full border border-white/10"></div>
              <div className="absolute inset-16 rounded-full border border-emerald-500/30 animate-spin-slow"></div>
              <div className="absolute inset-32 rounded-full border border-white/10 border-dashed"></div>

              {/* 3D CORE */}
              <div className="absolute inset-[170px] rounded-full 
                bg-gradient-to-br from-slate-900 via-black to-slate-950
                border border-white/10
                shadow-[inset_0_0_60px_rgba(0,0,0,0.9),0_0_80px_rgba(16,185,129,0.4)]
                flex items-center justify-center">

                <div className="absolute inset-6 rounded-full border border-emerald-500/30"></div>
                <div className="w-8 h-8 bg-emerald-400 rounded-full blur-md animate-pulse"></div>

                <span className="absolute text-[10px] tracking-[0.4em] text-white">
                  TRINETRA CORE
                </span>

              </div>

            </div>

          </div>
        </div>

      </div>

      <style>
        {`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotor {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 80s linear infinite;
        }

        .animate-rotor {
          animation: rotor 0.6s linear infinite;
        }
        `}
      </style>

    </section>
  );
}