function Footer() {
    return (
        <footer className="bg-[#F7F7F7] text-[#3a2f2a] pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">

                {/* BRAND + DESCRIPTION */}
                <div className="max-w-5xl">
                    <h3 className="text-3xl font-semibold text-[#b85c5c]">
                        YourBrand
                    </h3>

                    <p className="mt-6 text-sm leading-relaxed text-[#4b4038]">
                        YourBrand is a trusted matrimonial platform designed for individuals
                        and families seeking meaningful and lasting relationships.
                        Built with a focus on privacy, verification, and cultural values,
                        we provide a secure and respectful environment to help people
                        find their life partners with confidence.
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-[#4b4038]">
                        Note: This platform is intended strictly for users with a genuine
                        intent of marriage. Misuse of the platform or posting inappropriate
                        content may lead to permanent account suspension.
                    </p>
                </div>

                {/* LINKS + SIDE BLOCKS */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-6 gap-12">

                    {/* Explore */}
                    <div>
                        <h4 className="font-semibold mb-4">Explore</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Home</li>
                            <li>Advanced Search</li>
                            <li>Success Stories</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Membership Plans</li>
                            <li>Careers</li>
                            <li>Exclusive Services</li>
                            <li>Premium Assistance</li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h4 className="font-semibold mb-4">Help</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Contact Us</li>
                            <li>FAQs</li>
                            <li>Support Center</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li>About Us</li>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                            <li>Grievances</li>
                        </ul>
                    </div>

                    {/* FEATURES */}
                    <div>
                        <h4 className="font-semibold mb-4">Features</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Verified Profiles</li>
                            <li>Privacy Controls</li>
                            <li>Advanced Filters</li>
                            <li>Refund Policy</li>
                        </ul>
                    </div>

                    {/* RIGHT SIDE BOX */}
                    <div className="space-y-6">

                        {/* APP DOWNLOAD */}
                        <div className="bg-white rounded-2xl p-5 shadow-sm">
                            <p className="text-sm font-medium mb-3">
                                Browse profiles on the go
                            </p>
                            <div className="flex gap-3">
                                <img
                                    src="/google-play.png"
                                    alt="Google Play"
                                    className="h-10"
                                />
                                <img
                                    src="/app-store.png"
                                    alt="App Store"
                                    className="h-10"
                                />
                            </div>
                        </div>

                        {/* SOCIAL */}
                        <div className="bg-white rounded-2xl p-5 shadow-sm">
                            <p className="text-sm font-medium mb-3">
                                Connect with us
                            </p>
                            <div className="flex gap-4 text-xl">
                                <span>📸</span>
                                <span>▶️</span>
                                <span>✖️</span>
                                <span>💼</span>
                                <span>📘</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-16 border-t pt-6 text-sm text-[#7a6d63] text-center">
                    © {new Date().getFullYear()} YourBrand. All rights reserved.
                </div>

            </div>
        </footer>
    );
}

export default Footer;
