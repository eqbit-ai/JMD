import heroBg from "./assets/hero.jpg";
import profileImg from "./assets/rightcard.jpg";


function Hero() {
    return (
        <section
            className="
        relative
        min-h-screen
        flex items-center
        pt-32
        pb-24
        px-6
      "
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}

        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#F2E6D8]/80"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-center md:pl-12">


                {/* LEFT CONTENT */}
                <div className="text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                        Find a life partner,
                        <br className="hidden sm:block" />
                        not just a match
                    </h1>

                    <p className="mt-6 text-[#5b4f47] text-base sm:text-lg max-w-xl mx-auto md:mx-0">
                        A trusted matrimonial platform where meaningful connections
                        lead to lifelong companionship.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="px-8 py-3 rounded-full bg-[#b85c5c] text-white hover:bg-[#a24f4f] transition">
                            Create Your Profile
                        </button>

                        <button className="px-8 py-3 rounded-full border border-[#b85c5c] text-[#b85c5c] hover:bg-[#b85c5c]/10 transition">
                            How It Works
                        </button>
                    </div>
                </div>

                {/* RIGHT PROFILE CARD */}
                <div className="flex justify-center">
                    <div
                        className="
      relative
      w-full max-w-md
      bg-white/10
      backdrop-blur-lg
      border border-[#e2d5c4]
      rounded-3xl
      p-8
      shadow-[0_25px_60px_rgba(0,0,0,0.12)]
    "
                    >
                        {/* Highlight Badge */}
                        <span
                            className="
        absolute -top-3 -right-3
        bg-[#b85c5c]
        text-white text-xs
        px-3 py-1
        rounded-full
        shadow-md
      "
                        >
                            Verified Profile
                        </span>

                        {/* Profile Image */}
                        <div className="flex justify-center">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="
          w-32 h-32
          rounded-full
          object-cover
          border-4 border-[#F2E6D8]
          shadow-md
          bg-white
        "
                            />
                        </div>

                        {/* Profile Info */}
                        <div className="mt-6 text-center">
                            <h3 className="text-xl font-semibold text-[#3a2f2a]">
                                Rahul Sharma, 29
                            </h3>

                            <p className="text-sm text-[#6b5f56] mt-1">
                                Software Engineer • Delhi
                            </p>

                            <p className="mt-3 text-sm text-[#2f8f5b] font-medium">
                                ✔ Phone & ID Verified
                            </p>

                            <p className="mt-4 text-sm text-[#4b4038] leading-relaxed">
                                Looking for a meaningful life partner with shared family values
                                and long-term commitment.
                            </p>
                        </div>
                    </div>
                </div>





            </div>
        </section>
    );
}

export default Hero;
