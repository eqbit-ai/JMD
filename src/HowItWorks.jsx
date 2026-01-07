import { motion } from "framer-motion";

import createProfile from "./assets/illustrations/createprofile.png";
import browseProfiles from "./assets/illustrations/browseprofile.png";
import sendInterest from "./assets/illustrations/connect.png";

function Step({ img, title, desc }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="flex flex-col items-center text-center px-6"
        >
            {/* Illustration */}
            <motion.img
                src={img}
                alt={title}
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="
          w-44 h-44
          object-contain
          mb-6
        "
            />

            <h3 className="text-xl font-semibold">
                {title}
            </h3>

            <p className="mt-3 text-[#5b4f47] leading-relaxed max-w-xs">
                {desc}
            </p>
        </motion.div>
    );
}

function HowItWorks() {
    return (
        <section className="py-36 px-6 bg-[#FAF5EE]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-semibold">
                        How It Works
                    </h2>
                    <p className="mt-4 text-lg text-[#5b4f47]">
                        Three simple steps to find a meaningful life partner.
                    </p>
                </div>

                {/* Steps */}
                <div className="mt-24 grid gap-20 md:grid-cols-3">
                    <Step
                        img={createProfile}
                        title="Create Your Profile"
                        desc="Sign up, add your details, and verify your profile to begin your journey."
                    />

                    <Step
                        img={browseProfiles}
                        title="Browse Profiles"
                        desc="Explore verified profiles that match your preferences and values."
                    />

                    <Step
                        img={sendInterest}
                        title="Connect & Send Interest"
                        desc="Express interest, connect securely, and take the next step toward marriage."
                    />
                </div>

            </div>
        </section>
    );
}

export default HowItWorks;
