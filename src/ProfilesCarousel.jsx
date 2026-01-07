import { motion } from "framer-motion";

import p1 from "./assets/profiles/p1.jpg";
import p2 from "./assets/profiles/p2.jpg";
import p3 from "./assets/profiles/p3.jpg";
import p4 from "./assets/profiles/p4.jpg";
import p5 from "./assets/profiles/p5.jpg";

const profiles = [
    { name: "Amit, 30", profession: "Business Owner", img: p1 },
    { name: "Neha, 28", profession: "UX Designer", img: p2 },
    { name: "Rahul, 32", profession: "Software Engineer", img: p3 },
    { name: "Pooja, 27", profession: "Chartered Accountant", img: p4 },
    { name: "Vikram, 34", profession: "Architect", img: p5 },
];

function ProfilesCarousel() {
    return (
        <section data-lenis-prevent className="py-28 bg-[#FAF5EE] overflow-hidden">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center px-6">
                <h2 className="text-3xl sm:text-4xl font-semibold">
                    Thousands of Verified Profiles
                </h2>
                <p className="mt-4 text-[#5b4f47] text-lg">
                    Explore genuine profiles from across India, all verified and serious
                    about marriage.
                </p>
            </div>

            {/* Carousel */}
            <div className="mt-20 relative">
                <motion.div
                    className="flex gap-10"
                    animate={{ x: [0, -1200] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }}
                >
                    {[...profiles, ...profiles].map((profile, index) => (
                        <div
                            key={index}
                            className="
                min-w-[260px]
                bg-white
                rounded-3xl
                p-6
                shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                flex flex-col items-center
              "
                        >
                            <img
                                src={profile.img}
                                alt={profile.name}
                                className="
                  w-24 h-24
                  rounded-full
                  object-cover
                  shadow-md
                "
                            />

                            <h4 className="mt-4 font-semibold">
                                {profile.name}
                            </h4>

                            <p className="text-sm text-[#7a6d63] mt-1">
                                {profile.profession}
                            </p>

                            <p className="mt-3 text-sm text-[#2f8f5b] font-medium">
                                ✔ Verified
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default ProfilesCarousel;
