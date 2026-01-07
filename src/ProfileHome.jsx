import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function ProfileHome() {
    const [myProfile, setMyProfile] = useState(null);
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadHome();
    }, []);

    const loadHome = async () => {
        const { data: auth } = await supabase.auth.getUser();
        if (!auth?.user) {
            setLoading(false);
            return;
        }

        const { data: profile } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", auth.user.id)
            .single();

        const { data: suggestions } = await supabase
            .from("profiles")
            .select("*")
            .neq("id", auth.user.id)
            .limit(4);

        setMyProfile(profile);
        setMatches(suggestions || []);
        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.href = "/";
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#FAF5EE] flex items-center justify-center text-[#8B7F76]">
                Preparing your personalised dashboard…
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FAF5EE] pt-24 px-6 text-[#3A2F2A]">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* ================= HEADER BAR ================= */}
                <div className="flex justify-end">
                    <button
                        onClick={handleLogout}
                        className="text-sm text-[#7A2E2E] underline"
                    >
                        Logout
                    </button>
                </div>

                {/* ================= MY PROFILE ================= */}
                <section className="bg-white border border-[#E4D8C8] rounded-3xl p-8 flex items-center gap-8 shadow-sm">
                    <img
                        src={myProfile?.photo_url || "/avatar-placeholder.png"}
                        onError={(e) => (e.currentTarget.src = "/avatar-placeholder.png")}
                        className="w-36 h-36 rounded-full object-cover border border-[#E4D8C8]"
                    />

                    <div className="flex-1">
                        <p className="text-sm text-[#8B7F76]">Welcome</p>
                        <h1 className="text-3xl font-semibold font-[Playfair Display]">
                            {myProfile?.full_name || "Member"}
                        </h1>
                        <p className="mt-2 text-[#8B7F76]">
                            {myProfile?.city || "—"} • {myProfile?.profession || "—"}
                        </p>
                    </div>

                    <span className="text-sm text-[#7A2E2E] underline cursor-pointer">
                        Edit Profile
                    </span>
                </section>

                {/* ================= RECOMMENDED ================= */}
                <section>
                    <p className="text-xs tracking-widest text-[#8B7F76] mb-3">
                        RECOMMENDED ALLIANCE
                    </p>

                    {matches.length > 0 ? (
                        <div className="bg-white border border-[#E4D8C8] rounded-3xl p-6 flex gap-6 shadow-md">
                            <img
                                src={matches[0].photo_url || "/avatar-placeholder.png"}
                                className="w-56 h-64 rounded-2xl object-cover"
                            />

                            <div className="flex flex-col justify-center">
                                <h2 className="text-2xl font-[Playfair Display]">
                                    {matches[0].full_name}
                                </h2>

                                <p className="mt-2 text-[#8B7F76]">
                                    {matches[0].city} • {matches[0].profession}
                                </p>

                                <p className="mt-6 text-sm leading-relaxed max-w-md">
                                    This profile is carefully curated based on family values
                                    and compatibility.
                                </p>

                                <button className="mt-6 w-fit px-6 py-3 rounded-full bg-[#7A2E2E] text-white text-sm">
                                    View Full Profile
                                </button>
                            </div>
                        </div>
                    ) : (
                        <EmptyState />
                    )}
                </section>

                {/* ================= OTHER MATCHES ================= */}
                <section>
                    <p className="text-xs tracking-widest text-[#8B7F76] mb-6">
                        OTHER SUGGESTED ALLIANCES
                    </p>

                    {matches.length > 1 ? (
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {matches.slice(1, 4).map((m, i) => (
                                <div
                                    key={m.id}
                                    className="bg-white border border-[#E4D8C8] rounded-2xl p-4 relative"
                                >
                                    <img
                                        src={m.photo_url || "/avatar-placeholder.png"}
                                        className={`w-full h-48 object-cover rounded-xl ${i === 2 ? "blur-sm" : ""
                                            }`}
                                    />

                                    <h3 className="mt-3 font-[Playfair Display] text-lg">
                                        {m.full_name}
                                    </h3>
                                    <p className="text-sm text-[#8B7F76]">{m.city}</p>

                                    {i === 2 && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-white/70">
                                            <span className="text-sm text-[#7A2E2E]">
                                                Premium alliances
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-[#8B7F76]">
                            Additional alliances will appear soon.
                        </p>
                    )}
                </section>

                {/* ================= TRUST FOOTER ================= */}
                <section className="flex justify-center gap-10 text-sm text-[#8B7F76] pt-10 border-t border-[#E4D8C8]">
                    <span>✔ Verified Profiles</span>
                    <span>🔒 Privacy Protected</span>
                    <span>🪔 Family-First Matchmaking</span>
                </section>
            </div>
        </div>
    );
}

function EmptyState() {
    return (
        <div className="bg-white border border-[#E4D8C8] rounded-3xl p-10 text-center">
            <p className="text-sm text-[#8B7F76]">
                Suitable alliances are being curated for you.
            </p>
            <p className="mt-2 text-xs text-[#8B7F76]">
                Please check back shortly.
            </p>
        </div>
    );
}
