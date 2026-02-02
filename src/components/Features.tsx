import { motion } from 'framer-motion';
import { Shield, Zap, ArrowRight, Brain, Globe } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const Features = () => {
    return (
        <section className="py-20 bg-black relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Intelligence, <br />
                        <span className="text-slate-500">Built for you.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Large Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 h-full"
                    >
                        <TiltCard className="h-full rounded-[2rem] bg-gradient-to-br from-slate-900 to-black border border-white/10 p-10 relative overflow-hidden group">
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                                        <Brain className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white mb-2">Neural Processing</h3>
                                    <p className="text-slate-400 max-w-md">Our specialized diagnostic engine analyzes symptoms against 50 million medical records in real-time.</p>
                                </div>
                                <div className="flex items-center gap-2 text-blue-400 font-medium cursor-pointer group-hover:gap-4 transition-all">
                                    Learn about the tech <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="absolute right-0 bottom-0 w-2/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent" />
                        </TiltCard>
                    </motion.div>

                    {/* Tall Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:row-span-2 h-full"
                    >
                        <TiltCard className="h-full rounded-[2rem] bg-slate-950 border border-white/10 p-10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="w-12 h-12 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6">
                                    <Shield className="w-6 h-6 text-teal-400" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-4">Private by Default</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    Your health data never leaves your device unencrypted. We use AES-256 encryption standards used by top financial institutions.
                                </p>
                                <div className="mt-auto">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <span className="text-sm text-slate-300">HIPAA Compliant</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <span className="text-sm text-slate-300">GDPR Ready</span>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Small Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="h-full"
                    >
                        <TiltCard className="h-full rounded-[2rem] bg-slate-900/50 border border-white/10 p-8 flex flex-col justify-center gap-4 hover:bg-slate-900 transition-colors">
                            <Zap className="w-8 h-8 text-yellow-400" />
                            <div>
                                <h3 className="text-xl font-semibold text-white">Instant</h3>
                                <p className="text-slate-500">Results in milliseconds.</p>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Small Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="h-full"
                    >
                        <TiltCard className="h-full rounded-[2rem] bg-slate-900/50 border border-white/10 p-8 flex flex-col justify-center gap-4 hover:bg-slate-900 transition-colors">
                            <Globe className="w-8 h-8 text-purple-400" />
                            <div>
                                <h3 className="text-xl font-semibold text-white">Global</h3>
                                <p className="text-slate-500">24/7 Availability worldwide.</p>
                            </div>
                        </TiltCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
