import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Brain, Network, Database, Lock, Cpu, Stethoscope } from 'lucide-react';

export const Tech = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                {/* Header */}
                <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 mb-6"
                    >
                        Under the Hood
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto"
                    >
                        A symbiotic fusion of Deep Learning and Medical Science.
                    </motion.p>
                </div>

                {/* Feature Grid 1 - Left Aligned */}
                <section className="max-w-7xl mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition-all duration-700" />
                        <div className="relative p-8 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-xl h-[400px] flex items-center justify-center">
                            <Brain className="w-32 h-32 text-blue-400" />
                            {/* Decorative nodes */}
                            <div className="absolute top-10 right-10 w-4 h-4 bg-teal-400 rounded-full animate-pulse" />
                            <div className="absolute bottom-10 left-10 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-75" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                            <Network className="w-6 h-6 text-blue-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Neural Processing</h2>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            Our proprietary model, <span className="text-white font-medium">NeuroScan v4</span>, processes symptom data through 14 layers of analysis. It identifies patterns and correlations that traditional diagnostic trees miss, cross-referencing against 50 million anonymized patient records in real-time.
                        </p>
                    </motion.div>
                </section>

                {/* Feature Grid 2 - Right Aligned (Reversed on desktop) */}
                <section className="max-w-7xl mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 md:order-1"
                    >
                        <div className="w-12 h-12 bg-teal-900/50 rounded-xl flex items-center justify-center mb-6 border border-teal-500/30">
                            <Database className="w-6 h-6 text-teal-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Live Medical Database</h2>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            The system updates daily with the latest medical journals, WHO alerts, and CDC guidelines. MediScan doesn't just know what happened yesterday; it understands what's happening right now.
                        </p>
                        <ul className="mt-8 space-y-4">
                            {[
                                "Real-time outbreak tracking",
                                "Peer-reviewed sources only",
                                "Regional endemic awareness"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 md:order-2 relative group"
                    >
                        <div className="absolute inset-0 bg-teal-500/20 blur-3xl rounded-full group-hover:bg-teal-500/30 transition-all duration-700" />
                        <div className="relative p-8 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-xl h-[400px] flex items-center justify-center">
                            <div className="grid grid-cols-3 gap-4">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className={`w-16 h-16 rounded-xl bg-white/5 border border-white/10 animate-pulse`}
                                        style={{ animationDelay: `${i * 0.1}s` }} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Tech Stack Pills */}
                <section className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: Lock, label: "AES-256 Encrypted" },
                            { icon: Cpu, label: "Edge Computing" },
                            { icon: Brain, label: "Transformer Models" },
                            { icon: Stethoscope, label: "Clinical Validation" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-3 text-center"
                            >
                                <item.icon className="w-8 h-8 text-gray-400" />
                                <span className="text-sm font-semibold text-gray-200">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
