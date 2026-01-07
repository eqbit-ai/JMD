import { motion } from "framer-motion";

function Plans() {
    return (
        <section className="py-36 px-6 bg-[#FAF5EE]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl sm:text-4xl font-semibold">
                        Choose Your Plan
                    </h2>
                    <p className="mt-4 text-lg text-[#5b4f47]">
                        Begin for free. Upgrade when you’re ready to connect seriously.
                    </p>
                </motion.div>

                {/* Plans */}
                <div className="mt-24 grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">

                    {/* BASIC PLAN */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6 }}
                        className="
              rounded-3xl
              bg-[#F2E6D8]
              p-10
              border border-[#e2d5c4]
              transition
            "
                    >
                        <h3 className="text-xl font-semibold">
                            Basic
                        </h3>

                        <p className="mt-2 text-[#7a6d63]">
                            Ideal for exploring
                        </p>

                        <div className="mt-8">
                            <span className="text-4xl font-semibold">
                                Free
                            </span>
                        </div>

                        <ul className="mt-8 space-y-4 text-[#4b4038]">
                            <li>• Create profile</li>
                            <li>• Browse profiles</li>
                            <li>• Limited profile views</li>
                            <li>• Basic search filters</li>
                        </ul>

                        <button
                            className="
                mt-10 w-full
                py-3 rounded-full
                border border-[#b85c5c]
                text-[#b85c5c]
                hover:bg-[#b85c5c]/10
                transition
              "
                        >
                            Get Started Free
                        </button>
                    </motion.div>

                    {/* PREMIUM PLAN */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="
              relative
              rounded-3xl
              bg-white
              p-10
              shadow-[0_30px_80px_rgba(0,0,0,0.15)]
              border border-[#b85c5c]
              transition
            "
                    >
                        {/* Badge */}
                        <div className="
              absolute -top-4 left-1/2 -translate-x-1/2
              bg-[#b85c5c]
              text-white
              text-sm
              px-4 py-1
              rounded-full
            ">
                            Recommended
                        </div>

                        <h3 className="text-xl font-semibold">
                            Premium
                        </h3>

                        <p className="mt-2 text-[#7a6d63]">
                            For serious matchmaking
                        </p>

                        <div className="mt-8">
                            <span className="text-4xl font-semibold">
                                ₹1299
                            </span>
                            <span className="ml-2 text-[#7a6d63]">
                                / month
                            </span>
                        </div>

                        <ul className="mt-8 space-y-4 text-[#4b4038]">
                            <li>• Everything in Basic</li>
                            <li>• Send & receive interests</li>
                            <li>• View contact details</li>
                            <li>• Unlimited profile views</li>
                            <li>• Advanced search filters</li>
                            <li>• Priority support</li>
                        </ul>

                        <button
                            className="
                mt-10 w-full
                py-3 rounded-full
                bg-[#b85c5c]
                text-white
                hover:bg-[#a24f4f]
                transition
              "
                        >
                            Upgrade to Premium
                        </button>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default Plans;
