import { motion } from "framer-motion";

import c1 from "./assets/couples/c1.jpg";
import c2 from "./assets/couples/c2.jpg";
import c3 from "./assets/couples/c3.jpg";
import c4 from "./assets/couples/c4.jpg";
import c5 from "./assets/couples/c5.jpg";
import c6 from "./assets/couples/c6.jpg";

const stories = [
    { name: "Amit & Neha", date: "Married on 12 Jan 2024", img: c1 },
    { name: "Rahul & Pooja", date: "Married on 3 Feb 2024", img: c2 },
    { name: "Vikram & Anjali", date: "Married on 19 Nov 2023", img: c3 },
    { name: "Rohit & Sneha", date: "Married on 7 Dec 2023", img: c4 },
    { name: "Karan & Riya", date: "Married on 21 Oct 2023", img: c5 },
    { name: "Arjun & Kavya", date: "Married on 5 Sep 2023", img: c6 },
];

// duplicate for seamless loop
const loopStories = [...stories, ...stories];

function SuccessStories() {
    return (
        <section data-lenis-prevent className="py-32 px-6 bg-[#FAF5EE]">
            
            {/* Box Container */}
            <div className="max-w-7xl mx-auto bg-[#F2E6D8] rounded-3xl p-10 md:p-16 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-semibold">
                        Successful Marriages
                    </h2>
                    <p className="mt-4 text-lg text-[#5b4f47]">
                        Real stories that began with a simple profile
                    </p>
                </div>

                {/* Carousel */}
                <div className="overflow-hidden">
                    <motion.div
                        className="flex gap-10"
                        animate={{ x: [0, -1200] }}
                        transition={{
                            ease: "linear",
                            duration: 35,
                            repeat: Infinity,
                        }}
                    >
                        {loopStories.map((item, index) => (
                            <div
                                key={index}
                                className="
                  min-w-[300px]
                  bg-[#FAF5EE]
                  rounded-2xl
                  overflow-hidden
                  shadow-[0_15px_40px_rgba(0,0,0,0.10)]
                "
                            >
                                {/* Image */}
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="
  will-change-transform
  transform-gpu
  w-full h-64 object-cover
"
                                />

                                {/* Text */}
                                <div className="p-5 text-center">
                                    <h4 className="text-lg font-semibold tracking-wide">
                                        {item.name}
                                    </h4>
                                    <p className="mt-2 text-sm text-[#7a6d63] italic">
                                        {item.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

export default SuccessStories;
