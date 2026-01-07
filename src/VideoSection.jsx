import weddingVideo from "./assets/video/wedding.mp4";

function VideoSection() {
    return (
        <section className="relative py-32 px-6 bg-[#FAF5EE]">
            <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-center">

                {/* TEXT CONTENT */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                        Because every journey leads <br className="hidden sm:block" />
                        to a lifelong promise
                    </h2>

                    <p className="mt-6 text-lg text-[#5b4f47] max-w-xl mx-auto md:mx-0">
                        We believe meaningful connections should lead to marriage,
                        not endless conversations. Our platform is designed for
                        individuals and families seeking a true life partner.
                    </p>
                </div>

                {/* VIDEO */}
                <div className="relative">
                    <div className="overflow-hidden rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
                        <video
                            src={weddingVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default VideoSection;
