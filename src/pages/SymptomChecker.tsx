import { useState, useRef, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2, RefreshCw } from 'lucide-react';

type Message = {
    id: string;
    role: 'bot' | 'user';
    text: string;
    timestamp: Date;
};

// Simple state machine for the conversation
const QUESTIONS = [
    "How long have you been experiencing these symptoms?",
    "On a scale of 1-10, how severe is the pain/discomfort?",
    "Have you had a fever in the last 24 hours?",
    "Do you have any existing medical conditions we should know about?",
];

export const SymptomChecker = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'bot',
            text: "Hello. I'm MediScan AI. I can help analyze your symptoms using my database of over 50 million medical records. How are you feeling today?",
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [step, setStep] = useState(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            text: input,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate AI delay and logic
        setTimeout(() => {
            let nextText = "";

            if (step < QUESTIONS.length) {
                nextText = QUESTIONS[step];
                setStep(prev => prev + 1);
            } else {
                nextText = "Thank you. Based on your inputs, I recommend scheduling a visit with a general practitioner for further evaluation, as these symptoms could be indicative of a viral infection. Would you like to locate the nearest clinic?";
            }

            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                role: 'bot',
                text: nextText,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1200);
    };

    const resetChat = () => {
        setMessages([messages[0]]);
        setStep(0);
    }

    return (
        <div className="min-h-screen bg-black flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-12 px-4 md:px-6 flex flex-col items-center">
                <div className="w-full max-w-4xl bg-[#0b101b] border border-white/5 rounded-2xl overflow-hidden flex flex-col shadow-2xl h-[80vh]">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-white/5 bg-slate-900/50 backdrop-blur-sm flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-600/20 rounded-lg">
                                <Bot className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h2 className="text-white font-semibold flex items-center gap-2">
                                    Ada <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300">AI Doctor</span>
                                </h2>
                                <p className="text-xs text-slate-400">Online | Encrypted</p>
                            </div>
                        </div>
                        <button onClick={resetChat} className="p-2 hover:bg-white/5 rounded-full text-slate-400 transition-colors">
                            <RefreshCw className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-grow overflow-y-auto p-4 md:p-6 space-y-6 scrollbar-thin">
                        <AnimatePresence>
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'bot'
                                            ? 'bg-blue-600/20 text-blue-400'
                                            : 'bg-teal-500/20 text-teal-300'
                                        }`}>
                                        {msg.role === 'bot' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                                    </div>

                                    <div className={`max-w-[80%] rounded-2xl p-4 ${msg.role === 'bot'
                                            ? 'bg-white/5 text-slate-200 border border-white/5 rounded-tl-none'
                                            : 'bg-blue-600 text-white rounded-tr-none'
                                        }`}>
                                        <p className="text-sm md:text-base leading-relaxed">{msg.text}</p>
                                        <span className="text-[10px] opacity-50 mt-2 block">
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {isTyping && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-slate-500 ml-12">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span className="text-xs">Analyzing...</span>
                            </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-white/5 bg-slate-900/50 backdrop-blur-sm">
                        <div className="flex gap-2 relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Type your response..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim()}
                                className="absolute right-2 top-2 bottom-2 aspect-square bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-colors"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-center text-[10px] text-slate-600 mt-2">
                            MediScan can make mistakes. Consider checking important information.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
