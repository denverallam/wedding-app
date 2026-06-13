'use client'
import { motion } from "framer-motion";
import { fadeInVariant } from "../page";

export const RSVP = () => {
    return (
        <section className="py-24 bg-amber-50/50 text-center px-6" id='rsvp'>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant} className="max-w-md mx-auto space-y-8">
                <div>
                    <h2 className="text-4xl font-light tracking-wide text-amber-800">Kindly Reply</h2>
                    <p className="font-sans text-xs uppercase tracking-widest text-gray-500 mt-2">Please RSVP by August 1, 2026</p>
                </div>
                <form className="space-y-4 font-sans text-left bg-white p-8 rounded-xl shadow-sm border border-amber-100" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Attendance</label>
                        <select className="w-full p-2 border border-gray-200 rounded bg-white focus:outline-amber-400">
                            <option>Joyfully Accept</option>
                            <option>Regretfully Decline</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Number of Guests</label>
                        <input type="number" min="1" className="w-full p-2 border border-gray-200 rounded focus:outline-amber-400" placeholder="e.g., 1, 2" />
                    </div>
                    <button type="submit" className="w-full bg-amber-800 text-white py-3 tracking-widest uppercase text-xs rounded hover:bg-amber-900 transition-colors pt-4">
                        Submit Response
                    </button>
                </form>
            </motion.div>
        </section>
    );
};