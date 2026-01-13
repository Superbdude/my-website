"use client";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
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
        }
    };
    return (
       <div className="flex flex-col items-center py-10 bg-[white] px-4 sm:px-8">
        {/* Confirmation Modal */}
        {submitted && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 animate-fade-in">
                    <div className="flex justify-center mb-4">
                        <div className="bg-green-100 rounded-full p-3">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-center text-black mb-2">Message Sent!</h2>
                    <p className="text-center text-gray-600 mb-6">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="w-full bg-[#5541e2] text-white py-2 rounded-lg font-semibold hover:bg-[#4735d7] transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        )}

        {/* Error Modal */}
        {error && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 animate-fade-in">
                    <div className="flex justify-center mb-4">
                        <div className="bg-red-100 rounded-full p-3">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-center text-black mb-2">Error</h2>
                    <p className="text-center text-gray-600 mb-6">{error}</p>
                    <button
                        onClick={() => setError("")}
                        className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        )}
        <div className="mb-12 animate-fade-in text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-black">
            Get In <span className="text-gradient bg-linear-to-r from-[#5246e4] to-[#672bdb] bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl text-[#71717a] mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
            Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
        </div>

       <div className="flex flex-col md:flex-col lg:flex-row items-start gap-10 w-full justify-center">
        <div className="w-full flex flex-col items-start max-w-xl border p-5 rounded-xl">
            <h1 className="text-xl sm:text-2xl font-bold mb-2 text-black">Send a Message</h1>
            <p className="text-base sm:text-sm text-muted-foreground max-w-2xl text-[#71717a]">
            Fill out the form below and I&apos;ll respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full mt-5">
            <h1 className="font-bold text-black">Name:</h1>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-black placeholder:text-[#d1d1d4] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5541e2] w-full"
            />

            <h1 className="font-bold text-black">Email:</h1>
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-black placeholder:text-[#d1d1d4] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5541e2] w-full"
            />

            <h1 className="font-bold text-black">Message:</h1>
            <textarea
                placeholder="Tell me about your project"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="text-black placeholder:text-[#d1d1d4] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5541e2] w-full resize-y"
            ></textarea>

            <button
                type="submit"
                className="bg-[#5541e2] text-white py-2 rounded-lg font-semibold hover:bg-[#4735d7] transition w-full sm:w-auto"
            >
                Send Message
            </button>
            </form>
        </div>

        <div className="flex flex-col gap-10 w-full lg:w-auto">
            <div className="flex items-start gap-4 border px-8 sm:px-14 py-6 sm:py-8 whitespace-nowrap rounded-xl shadow-lg w-full">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#ededfd] text-[#5751e6] shrink-0">
                <Phone size={20} />
            </div>
            <div>
                <h3 className="font-semibold mb-1 text-black">Phone</h3>
                <p className="text-sm text-muted-foreground text-[#86868d]">+234 (909) 241-3942</p>
                <p className="text-sm text-muted-foreground text-[#86868d]">+234 (707) 052-0868</p>
            </div>
            </div>

            <div className="flex items-start gap-4 border px-8 sm:px-14 py-6 sm:py-8 whitespace-nowrap rounded-xl shadow-lg w-full">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#ededfd] text-[#5751e6] shrink-0">
                <Mail size={20} />
            </div>
            <div>
                <h3 className="font-semibold mb-1 text-black">Email</h3>
                <p className="text-sm text-muted-foreground text-[#86868d]">oguntaderasaq30@gmail.com</p>
            </div>
            </div>

            <div className="flex items-start gap-4 border px-8 sm:px-14 py-6 sm:py-8 whitespace-nowrap rounded-xl shadow-lg w-full">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#ededfd] text-[#5751e6] shrink-0">
                <MapPin size={20} />
            </div>
            <div>
                <h3 className="font-semibold mb-1 text-black">Location</h3>
                <p className="text-sm text-muted-foreground text-[#86868d]">Magodo, Lagos State</p>
            </div>
            </div>
        </div>
</div>

</div>


    )
}
