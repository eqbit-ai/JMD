import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { supabase } from "./supabaseClient";

function Navbar({ onLoginClick }) {
    const { user } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.reload();
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#FAF5EE]/80 backdrop-blur border-b border-[#e2d5c4]">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <div className="text-2xl font-semibold text-[#b85c5c]">
                    Matrimony
                </div>

                {/* ACTIONS */}
                {!user ? (
                    <div className="flex gap-4">
                        <button onClick={onLoginClick}>Login</button>
                        <button
                            onClick={onLoginClick}
                            className="px-4 py-2 rounded-full bg-[#b85c5c] text-white"
                        >
                            Sign Up
                        </button>
                    </div>
                ) : (
                    <div className="relative">
                        {/* AVATAR */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="w-10 h-10 rounded-full bg-[#b85c5c] text-white flex items-center justify-center font-semibold"
                        >
                            {user.email[0].toUpperCase()}
                        </button>

                        {/* DROPDOWN */}
                        {open && (
                            <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border">
                                <button
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                    onClick={() => alert("View Profile (next step)")}
                                >
                                    View Profile
                                </button>

                                <button
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                    onClick={() => alert("Edit Profile (next step)")}
                                >
                                    Edit Profile
                                </button>

                                <button
                                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
