function AnalysisChart() {
    const chartRef = React.useRef(null);
    const [chartInstance, setChartInstance] = React.useState(null);

    React.useEffect(() => {
        if (!chartRef.current) return;

        const ctx = chartRef.current.getContext('2d');
        
        // Gradient Green
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(34, 197, 94, 0.5)'); // Green 500
        gradient.addColorStop(1, 'rgba(34, 197, 94, 0)');

        const newChart = new ChartJS(ctx, {
            type: 'line',
            data: {
                labels: ['09:00', '09:15', '09:30', '09:45', '10:00', '10:15', '10:30'],
                datasets: [{
                    label: 'Vehicle Density',
                    data: [45, 52, 48, 65, 84, 78, 82],
                    borderColor: '#22c55e', // Green 500
                    backgroundColor: gradient,
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#22c55e',
                    pointBorderColor: '#000',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#22c55e'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        titleColor: '#22c55e',
                        bodyColor: '#e2e8f0',
                        borderColor: 'rgba(34, 197, 94, 0.3)',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: false,
                        titleFont: { size: 14, weight: 'bold' }
                    }
                },
                scales: {
                    x: {
                        grid: { display: false, drawBorder: false },
                        ticks: { color: '#4b5563', font: { family: 'monospace' } }
                    },
                    y: {
                        grid: { color: 'rgba(34, 197, 94, 0.05)', drawBorder: false },
                        ticks: { color: '#4b5563', font: { family: 'monospace' } }
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                }
            }
        });

        setChartInstance(newChart);

        return () => {
            if (newChart) newChart.destroy();
        };
    }, []);

    return (
        <div className="glass-panel p-6 border-green-500/20">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                     <div className="w-2 h-6 bg-green-500 rounded-sm"></div>
                     <h3 className="text-white font-bold tracking-wide">DENSITY TREND</h3>
                </div>
                <div className="flex gap-2">
                    <button className="px-3 py-1 rounded bg-green-500/20 border border-green-500/30 text-xs text-green-400 hover:bg-green-500/30 transition-colors font-mono">1H</button>
                    <button className="px-3 py-1 rounded bg-transparent text-xs text-gray-500 hover:text-white transition-colors font-mono">24H</button>
                </div>
            </div>
            <div className="h-64 w-full">
                <canvas ref={chartRef}></canvas>
            </div>
        </div>
    );
}