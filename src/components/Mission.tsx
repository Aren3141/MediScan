import { motion } from 'framer-motion';

export const Mission = () => {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Subtle Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-900/10 blur-[120px] rounded-[100%]" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-8">
                        Diagnose with confidence.
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
                        We believe everyone deserves access to world-class diagnostics, regardless of where they live. MediScan isn't just an app, it's a doctor in your pocket.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-12 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors"
                    >
                        Read our Manifesto
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};
