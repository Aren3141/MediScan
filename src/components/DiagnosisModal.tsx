import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, User, Send, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useDiagnosis } from '../context/DiagnosisContext';

type Message = {
    id: string;
    role: 'bot' | 'user';
    text: string;
    timestamp: Date;
};

const QUESTIONS = [
    "How long have you been experiencing these symptoms?",
    "On a scale of 1-10, how severe is the pain/discomfort?",
    "Have you had a fever in the last 24 hours?",
    "Do you have any existing medical conditions we should know about?",
];

export const DiagnosisModal = () => {
    const { isOpen, closeModal } = useDiagnosis();
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
        if (isOpen) {
            scrollToBottom();
            // Lock body scroll
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isOpen, messages, isTyping]);

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

        setTimeout(() => {
            let nextText = "";
            if (step < QUESTIONS.length) {
                nextText = QUESTIONS[step];
                setStep(prev => prev + 1);
            } else {
                nextText = "Thank you. Based on your inputs, I recommend scheduling a visit with a general practitioner for further evaluation, as these symptoms could be indicative of a viral infection.";
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

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    />

                    {/* Modal Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#0b101b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px] md:h-[700px]"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 bg-slate-900/50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-600/20 rounded-lg">
                                    <Bot className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h2 className="text-white font-semibold">Ada AI Doctor</h2>
                                    <p className="text-xs text-slate-400">Secure Session</p>
                                </div>
                            </div>
                            <button onClick={closeModal} className="p-2 hover:bg-white/5 rounded-full text-slate-400">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-grow overflow-y-auto p-6 space-y-6">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'bot' ? 'bg-blue-600/20 text-blue-400' : 'bg-teal-500/20 text-teal-300'
                                        }`}>
                                        {msg.role === 'bot' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                                    </div>
                                    <div className={`max-w-[80%] rounded-2xl p-4 ${msg.role === 'bot' ? 'bg-white/5 text-slate-200' : 'bg-blue-600 text-white'
                                        }`}>
                                        <p className="text-sm leading-relaxed">{msg.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-slate-500 ml-12">
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    <span className="text-xs">Analyzing...</span>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-white/10 bg-slate-900/50">
                            <div className="flex gap-2 relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type your symptoms..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 top-2 bottom-2 aspect-square bg-blue-600 text-white rounded-lg flex items-center justify-center"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
