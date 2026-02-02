import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { Features } from '../components/Features';
import { Mission } from '../components/Mission';
import { LiveVitals } from '../components/LiveVitals';

export const Home = () => {
    return (
        <div className="min-h-screen bg-black selection:bg-blue-500 selection:text-white flex flex-col">
            <Navbar />
            <Hero />

            <div className="-mt-32 relative z-20">
                <Features />
            </div>

            <LiveVitals />

            <Mission />
            <Footer />
        </div>
    );
};
