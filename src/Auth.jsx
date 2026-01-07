import { useState } from "react";
import { supabase } from "./supabaseClient";

function Auth() {
    const [mode, setMode] = useState("login"); // login | signup
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAuth = async () => {
        setMessage("");
        setLoading(true);

        if (mode === "signup") {
            const { error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                setMessage(error.message);
            } else {
                setMessage("Signup successful! You are now logged in.");
            }
        } else {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                setMessage(error.message);
            } else {
                setMessage("Login successful!");
            }
        }

        setLoading(false);
    };

    return (
        <div className="w-full">
            {/* TABS */}
            <div className="flex mb-6">
                <button
                    className={`w-1/2 py-2 text-sm ${mode === "login"
                        ? "font-semibold border-b-2 border-[#b85c5c]"
                        : "text-gray-500"
                        }`}
                    onClick={() => setMode("login")}
                >
                    Login
                </button>

                <button
                    className={`w-1/2 py-2 text-sm ${mode === "signup"
                        ? "font-semibold border-b-2 border-[#b85c5c]"
                        : "text-gray-500"
                        }`}
                    onClick={() => setMode("signup")}
                >
                    Sign Up
                </button>
            </div>

            {/* EMAIL */}
            <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 border rounded mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            {/* PASSWORD */}
            <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {/* MAIN BUTTON */}
            <button
                onClick={handleAuth}
                disabled={loading}
                className="w-full bg-[#b85c5c] text-white py-2 rounded transition hover:bg-[#a14f4f]"
            >
                {loading
                    ? "Please wait..."
                    : mode === "signup"
                        ? "Create Account"
                        : "Login"}
            </button>

            {/* DIVIDER */}
            <div className="my-6 flex items-center">
                <div className="flex-grow border-t" />
                <span className="px-4 text-sm text-gray-500">OR</span>
                <div className="flex-grow border-t" />
            </div>

            {/* GOOGLE LOGIN */}
            <button
                onClick={() =>
                    supabase.auth.signInWithOAuth({ provider: "google" })
                }
                className="w-full py-2 border rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition"
            >
                <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="w-5 h-5"
                />
                Continue with Google
            </button>

            {/* MESSAGE */}
            {message && (
                <p className="text-sm text-center mt-4 text-gray-600">
                    {message}
                </p>
            )}
        </div>
    );
}

export default Auth;
