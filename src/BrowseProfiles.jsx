import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function BrowseProfiles() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProfiles();
    }, []);

    const fetchProfiles = async () => {
        const {
            data: { user },
        } = await supabase.auth.getUser();

        if (!user) return;

        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .neq("id", user.id);

        if (!error) {
            setProfiles(data);
        }

        setLoading(false);
    };

    if (loading) return <p className="p-6">Loading profiles...</p>;
    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.reload();
    };

    return (

        <div className="p-6 bg-[#FAF5EE] min-h-screen">
            <h2 className="text-2xl font-semibold mb-6">
                Browse Profiles
            </h2>
            <button
                onClick={handleLogout}
                className="px-4 py-2 bg-[#b85c5c] text-white rounded-lg"
            >
                Logout
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {profiles.map((p) => (
                    <div
                        key={p.id}
                        className="bg-white p-4 rounded-xl shadow"
                    >
                        <h3 className="font-semibold text-lg">
                            {p.full_name}
                        </h3>
                        <p className="text-sm">{p.age} years</p>
                        <p className="text-sm">{p.city}</p>
                        <p className="text-sm">{p.profession}</p>
                        <p className="text-sm mt-2 text-gray-600">
                            {p.bio}
                        </p>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default BrowseProfiles;
