function Trust() {
    return (
        <section className="py-28 px-6 bg-[#FAF5EE]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-widest text-[#7a6d63]">
                        Trusted for meaningful marriages
                    </p>

                    <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
                        Bringing People <span className="text-[#b85c5c]">Together</span>
                    </h2>
                </div>

                {/* Trust Items */}
                <div className="mt-20 grid gap-16 md:grid-cols-3">

                    {/* Item 1 */}
                    <div>
                        <div className="mb-4 w-12 h-12 rounded-full bg-[#F2E6D8] flex items-center justify-center">
                            <span className="text-xl">👥</span>
                        </div>

                        <h3 className="text-lg font-semibold">
                            100% Verified Profiles
                        </h3>

                        <div className="mt-2 h-[2px] w-8 bg-[#b85c5c]" />

                        <p className="mt-4 text-[#5b4f47] leading-relaxed">
                            Search by location, community, profession and more from
                            carefully screened active profiles.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div>
                        <div className="mb-4 w-12 h-12 rounded-full bg-[#F2E6D8] flex items-center justify-center">
                            <span className="text-xl">🛡️</span>
                        </div>

                        <h3 className="text-lg font-semibold">
                            Personal Verification
                        </h3>

                        <div className="mt-2 h-[2px] w-8 bg-[#b85c5c]" />

                        <p className="mt-4 text-[#5b4f47] leading-relaxed">
                            Select profiles are personally verified by our team to
                            ensure authenticity and seriousness.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div>
                        <div className="mb-4 w-12 h-12 rounded-full bg-[#F2E6D8] flex items-center justify-center">
                            <span className="text-xl">🔒</span>
                        </div>

                        <h3 className="text-lg font-semibold">
                            Complete Privacy Control
                        </h3>

                        <div className="mt-2 h-[2px] w-8 bg-[#b85c5c]" />

                        <p className="mt-4 text-[#5b4f47] leading-relaxed">
                            Control who can view your photos, contact details and
                            personal information at all times.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Trust;
