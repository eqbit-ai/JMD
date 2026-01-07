import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function useProfileCheck(user) {
    const [hasCompletedProfile, setHasCompletedProfile] = useState(null);

    useEffect(() => {
        if (!user) {
            setHasCompletedProfile(false);
            return;
        }

        const checkProfile = async () => {
            const { data, error } = await supabase
                .from("profiles")
                .select("profile_completed")
                .eq("id", user.id)
                .single();

            if (error || !data) {
                setHasCompletedProfile(false);
            } else {
                setHasCompletedProfile(data.profile_completed === true);
            }
        };

        checkProfile();
    }, [user]);

    return hasCompletedProfile;
}
