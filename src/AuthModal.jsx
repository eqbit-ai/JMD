import { useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "./AuthContext";
import Auth from "./Auth";

function AuthModal({ open, onClose }) {
    const { user } = useContext(AuthContext);

    // 🔥 AUTO CLOSE MODAL AFTER LOGIN
    useEffect(() => {
        if (user && open) {
            onClose();
        }
    }, [user, open, onClose]);

    if (!open) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-gray-500 text-xl"
                    >
                        ✕
                    </button>

                    <Auth />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default AuthModal;
