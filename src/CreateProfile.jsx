import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function CreateProfile() {
    const [user, setUser] = useState(null);
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);

    const [form, setForm] = useState({
        full_name: "",
        phone: "",
        city: "",
        caste: "",
        manglik: "",
        mother_tongue: "",
        education: "",
        profession: "",
        income_range: "",
        marital_status: "",
        height: "",
        diet: "",
        father_occupation: "",
        mother_occupation: "",
        family_type: "",
    });

    useEffect(() => {
        supabase.auth.getUser().then(({ data }) => {
            setUser(data.user);
            setLoading(false);
        });
    }, []);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const saveStep = async (nextStep) => {
        setSaving(true);
        setError("");

        const { error } = await supabase
            .from("profiles")
            .update(form)
            .eq("id", user.id);

        setSaving(false);

        if (error) setError(error.message);
        else setStep(nextStep);
    };

    const uploadPhotoAndFinish = async () => {
        if (!photo) {
            setError("Profile photo is required");
            return;
        }

        setSaving(true);
        setError("");

        const ext = photo.name.split(".").pop();
        const filePath = `${user.id}.${ext}`;

        // Upload photo
        const { error: uploadError } = await supabase.storage
            .from("profile-photos")
            .upload(filePath, photo, { upsert: true });

        if (uploadError) {
            setError(uploadError.message);
            setSaving(false);
            return;
        }

        // Get public URL
        const { data } = supabase.storage
            .from("profile-photos")
            .getPublicUrl(filePath);

        // Save final profile
        const { error: dbError } = await supabase
            .from("profiles")
            .update({
                photo_url: data.publicUrl,
                profile_completed: true,
            })
            .eq("id", user.id);

        setSaving(false);

        if (dbError) setError(dbError.message);
        else window.location.href = "/";
    };

    if (loading) {
        return <div className="p-10 text-center">Loading…</div>;
    }

    return (
        <div className="min-h-screen bg-[#FAF5EE] flex justify-center pt-20">
            <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg p-8">

                <h2 className="text-2xl font-semibold mb-1">Create Profile</h2>
                <p className="text-sm text-gray-500 mb-6">
                    Step {step} of 6
                </p>

                {/* STEP 1 — BASIC */}
                {step === 1 && (
                    <>
                        <Input label="Full Name" name="full_name" onChange={handleChange} />
                        <Input label="Phone" name="phone" onChange={handleChange} />
                        <Input label="City" name="city" onChange={handleChange} />
                        <PrimaryButton onClick={() => saveStep(2)}>Next</PrimaryButton>
                    </>
                )}

                {/* STEP 2 — RELIGION */}
                {step === 2 && (
                    <>
                        <Input label="Caste" name="caste" onChange={handleChange} />
                        <Select
                            label="Manglik"
                            name="manglik"
                            options={["Yes", "No"]}
                            onChange={handleChange}
                        />
                        <Input
                            label="Mother Tongue"
                            name="mother_tongue"
                            onChange={handleChange}
                        />
                        <NavButtons back={() => setStep(1)} next={() => saveStep(3)} />
                    </>
                )}

                {/* STEP 3 — EDUCATION */}
                {step === 3 && (
                    <>
                        <Input
                            label="Education"
                            name="education"
                            onChange={handleChange}
                        />
                        <Input
                            label="Profession"
                            name="profession"
                            onChange={handleChange}
                        />
                        <Select
                            label="Income Range"
                            name="income_range"
                            options={["₹3–5 LPA", "₹5–10 LPA", "₹10+ LPA"]}
                            onChange={handleChange}
                        />
                        <NavButtons back={() => setStep(2)} next={() => saveStep(4)} />
                    </>
                )}

                {/* STEP 4 — PERSONAL */}
                {step === 4 && (
                    <>
                        <Select
                            label="Marital Status"
                            name="marital_status"
                            options={["Never Married", "Divorced"]}
                            onChange={handleChange}
                        />
                        <Input label="Height" name="height" onChange={handleChange} />
                        <Select
                            label="Diet"
                            name="diet"
                            options={["Veg", "Non-Veg"]}
                            onChange={handleChange}
                        />
                        <NavButtons back={() => setStep(3)} next={() => saveStep(5)} />
                    </>
                )}

                {/* STEP 5 — FAMILY */}
                {step === 5 && (
                    <>
                        <Input
                            label="Father Occupation"
                            name="father_occupation"
                            onChange={handleChange}
                        />
                        <Input
                            label="Mother Occupation"
                            name="mother_occupation"
                            onChange={handleChange}
                        />
                        <Select
                            label="Family Type"
                            name="family_type"
                            options={["Joint", "Nuclear"]}
                            onChange={handleChange}
                        />
                        <NavButtons back={() => setStep(4)} next={() => setStep(6)} />
                    </>
                )}

                {/* STEP 6 — PHOTO */}
                {step === 6 && (
                    <>
                        {photoPreview && (
                            <img
                                src={photoPreview}
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                        )}

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                setPhoto(e.target.files[0]);
                                setPhotoPreview(URL.createObjectURL(e.target.files[0]));
                            }}
                        />

                        <NavButtons
                            back={() => setStep(5)}
                            next={uploadPhotoAndFinish}
                            final
                        />
                    </>
                )}

                {error && (
                    <p className="text-red-600 text-sm mt-4">{error}</p>
                )}
            </div>
        </div>
    );
}

/* ---------- UI HELPERS ---------- */

function Input({ label, ...props }) {
    return (
        <input
            {...props}
            placeholder={label}
            className="w-full mb-4 p-3 border rounded-lg"
        />
    );
}

function Select({ label, options, ...props }) {
    return (
        <select {...props} className="w-full mb-4 p-3 border rounded-lg">
            <option value="">{label}</option>
            {options.map((o) => (
                <option key={o}>{o}</option>
            ))}
        </select>
    );
}

function PrimaryButton({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full bg-[#7A2E2E] text-white py-3 rounded-lg"
        >
            {children}
        </button>
    );
}

function NavButtons({ back, next, final }) {
    return (
        <div className="flex justify-between mt-6">
            <button onClick={back} className="text-gray-600">
                Back
            </button>
            <button
                onClick={next}
                className="px-6 py-3 rounded-lg bg-[#7A2E2E] text-white"
            >
                {final ? "Finish Profile" : "Next"}
            </button>
        </div>
    );
}
