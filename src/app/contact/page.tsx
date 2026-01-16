"use client";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Sparkles, Clock } from "lucide-react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                setSubmitted(true);
                setName('');
                setEmail('');
                setMessage('');
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                setError('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setError('An error occurred while sending your message.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative bg-white overflow-hidden">
            {/* Premium background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#5246e4]/15 to-transparent rounded-full blur-3xl opacity-50 -translate-y-1/2 -translate-x-1/2 animate-float"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#672bdb]/15 to-transparent rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#5246e4]/5 to-[#672bdb]/5 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="flex flex-col items-center py-20 px-4 sm:px-8 relative z-10">
                {/* Success Modal */}
                {submitted && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
                        <div className="premium-card p-8 max-w-md w-full scale-in">
                            <div className="flex justify-center mb-6">
                                <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-full p-4 ring-1 ring-green-200/50">
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-center text-black mb-2">Message Sent! 🎉</h2>
                            <p className="text-center text-[#71717a] mb-6 leading-relaxed">
                                Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="w-full bg-gradient-to-r from-[#5246e4] to-[#672bdb] text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#5246e4]/25 transition-all duration-300 active:scale-95"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

                {/* Error Modal */}
                {error && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
                        <div className="premium-card p-8 max-w-md w-full scale-in">
                            <div className="flex justify-center mb-6">
                                <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-full p-4 ring-1 ring-red-200/50">
                                    <AlertCircle className="w-8 h-8 text-red-600" />
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-center text-black mb-2">Error</h2>
                            <p className="text-center text-[#71717a] mb-6 leading-relaxed">{error}</p>
                            <button
                                onClick={() => setError("")}
                                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-red-600/25 transition-all duration-300 active:scale-95"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

                {/* Header Section */}
                <div className="mb-20 fade-in text-center max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#5541e2]/10 to-[#5246e4]/10 text-[#5246e4] text-sm font-semibold mb-8 border border-[#5246e4]/20 hover:border-[#5246e4]/50 transition-all duration-300 cursor-default">
                        <Sparkles size={16} className="animate-icon-spin-fast" />
                        <span>Let&apos;s Create Something</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black leading-tight">
                        Get In <span className="bg-gradient-to-r from-[#5246e4] via-[#672bdb] to-[#5246e4] bg-clip-text text-transparent bg-size-200 animate-gradient">Touch</span>
                    </h1>
                    <p className="text-lg text-[#71717a] leading-relaxed max-w-xl mx-auto">
                        Have a project in mind or want to collaborate? I&apos;d love to hear from you. Let&apos;s create something amazing together.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl">
                    {/* Contact Form */}
                    <div className="flex-1 scale-in fade-in" style={{ animationDelay: "0.1s" }}>
                        <div className="premium-card p-8 sm:p-10">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5246e4] to-[#672bdb] flex items-center justify-center">
                                    <Send className="text-white animate-icon-spin-fast" size={20} />
                                </div>
                                <h2 className="text-2xl font-bold text-black">Send a Message</h2>
                            </div>
                            <p className="text-[#71717a] mb-8 leading-relaxed ml-13">
                                Fill out the form and I&apos;ll respond within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                {/* Name Input */}
                                <div className="group">
                                    <label className="block font-semibold text-black mb-3 text-sm tracking-wide">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="text-black placeholder:text-[#a1a1a6] px-5 py-3.5 border border-[#5246e4]/15 rounded-xl focus:outline-none focus:border-[#5246e4]/50 focus:bg-[#5246e4]/5 focus:ring-2 focus:ring-[#5246e4]/10 w-full transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="group">
                                    <label className="block font-semibold text-black mb-3 text-sm tracking-wide">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="text-black placeholder:text-[#a1a1a6] px-5 py-3.5 border border-[#5246e4]/15 rounded-xl focus:outline-none focus:border-[#5246e4]/50 focus:bg-[#5246e4]/5 focus:ring-2 focus:ring-[#5246e4]/10 w-full transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                    />
                                </div>

                                {/* Message Textarea */}
                                <div className="group">
                                    <label className="block font-semibold text-black mb-3 text-sm tracking-wide">Your Message</label>
                                    <textarea
                                        placeholder="Tell me about your project, ideas, or anything you'd like to discuss..."
                                        rows={6}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        className="text-black placeholder:text-[#a1a1a6] px-5 py-3.5 border border-[#5246e4]/15 rounded-xl focus:outline-none focus:border-[#5246e4]/50 focus:bg-[#5246e4]/5 focus:ring-2 focus:ring-[#5246e4]/10 w-full resize-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-2 bg-gradient-to-r from-[#5246e4] to-[#672bdb] text-white py-3.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#5246e4]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 active:scale-95 group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></div>
                                    {loading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span className="relative">Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} className="relative" />
                                            <span className="relative">Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="flex flex-col gap-6 w-full lg:w-80 scale-in fade-in" style={{ animationDelay: "0.2s" }}>
                        {/* Phone Card */}
                        <div className="premium-card p-6 hover-lift group cursor-default">
                            <div className="flex items-start gap-4">
                                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ring-1 ring-blue-200/50">
                                    <Phone size={24} className="animate-icon-spin" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-black mb-3 text-sm tracking-wide">PHONE</h3>
                                    <div className="space-y-2">
                                        <p className="text-sm text-[#71717a] leading-relaxed hover:text-[#5246e4] transition-colors duration-200">
                                            +234 (909) 241-3942
                                        </p>
                                        <p className="text-sm text-[#71717a] leading-relaxed hover:text-[#5246e4] transition-colors duration-200">
                                            +234 (707) 052-0868
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="premium-card p-6 hover-lift group cursor-default">
                            <div className="flex items-start gap-4">
                                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 text-amber-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ring-1 ring-amber-200/50">
                                    <Mail size={24} className="animate-icon-spin" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-black mb-3 text-sm tracking-wide">EMAIL</h3>
                                    <a 
                                        href="mailto:oguntaderasaq30@gmail.com" 
                                        className="text-sm text-[#71717a] leading-relaxed hover:text-[#5246e4] transition-colors duration-200 inline-block"
                                    >
                                        oguntaderasaq30@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="premium-card p-6 hover-lift group cursor-default">
                            <div className="flex items-start gap-4">
                                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-red-100 to-red-50 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ring-1 ring-red-200/50">
                                    <MapPin size={24} className="animate-icon-spin" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-black mb-3 text-sm tracking-wide">LOCATION</h3>
                                    <p className="text-sm text-[#71717a] leading-relaxed">
                                        Magodo, Lagos State<br />
                                        <span className="text-xs text-[#a1a1a6]">Nigeria</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Availability Card */}
                        <div className="premium-card p-6 bg-gradient-to-br from-[#5246e4]/8 to-[#672bdb]/8 border border-[#5246e4]/20 hover-lift group">
                            <div className="flex items-start gap-3">
                                <div className="mt-1">
                                    <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-black text-sm tracking-wide mb-1">AVAILABILITY</h3>
                                    <p className="text-sm text-[#71717a] leading-relaxed">
                                        Available for freelance projects and collaborations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
