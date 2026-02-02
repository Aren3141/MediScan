import { motion } from 'framer-motion';
import { Activity, Heart, Wifi } from 'lucide-react';
import { useState, useEffect } from 'react';

// Random data generator
const useRandomData = (min: number, max: number) => {
    const [data, setData] = useState(min);
    useEffect(() => {
        const interval = setInterval(() => {
            setData(Math.floor(Math.random() * (max - min) + min));
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return data;
};

export const LiveVitals = () => {
    const bpm = useRandomData(60, 100);
    const oxygen = useRandomData(95, 99);
    const latency = useRandomData(12, 45);

    return (
        <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold text-white">Live System Status</h2>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-green-500 font-mono text-sm">SYSTEM OPERATIONAL</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Visual Card 1: Heartbeat */}
                    <div className="p-6 bg-slate-900/40 border border-white/10 rounded-2xl backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-slate-400 text-xs font-mono">AVG. USER HEART RATE</span>
                            <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                        </div>
                        <div className="text-5xl font-mono text-white mb-2">{bpm} <span className="text-lg text-slate-500">BPM</span></div>
                        {/* Fake Graph Line */}
                        <div className="h-10 w-full bg-slate-900 rounded-lg overflow-hidden flex items-end gap-1">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [`${Math.random() * 100}%`, `${Math.random() * 50}%`] }}
                                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
                                    className="w-1.5 bg-red-500/50 rounded-t-sm"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Visual Card 2: Neural Load */}
                    <div className="p-6 bg-slate-900/40 border border-white/10 rounded-2xl backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-slate-400 text-xs font-mono">NEURAL LOAD</span>
                            <Activity className="w-5 h-5 text-blue-500" />
                        </div>
                        <div className="text-5xl font-mono text-white mb-2">{oxygen}% <span className="text-lg text-slate-500">EFFICIENCY</span></div>
                        {/* Fake Wave */}
                        <div className="h-10 w-full bg-slate-900 rounded-lg overflow-hidden relative">
                            <motion.div
                                animate={{ x: ["-100%", "0%"] }}
                                transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent w-[200%]"
                            />
                        </div>
                    </div>

                    {/* Visual Card 3: Global Latency */}
                    <div className="p-6 bg-slate-900/40 border border-white/10 rounded-2xl backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-slate-400 text-xs font-mono">GLOBAL LATENCY</span>
                            <Wifi className="w-5 h-5 text-teal-500" />
                        </div>
                        <div className="text-5xl font-mono text-white mb-2">{latency} <span className="text-lg text-slate-500">MS</span></div>
                        <div className="flex gap-1 mt-4">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex-1 h-1 bg-teal-500/20 rounded-full overflow-hidden">
                                    <motion.div
                                        animate={{ width: "100%" }}
                                        initial={{ width: "0%" }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className="h-full bg-teal-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
