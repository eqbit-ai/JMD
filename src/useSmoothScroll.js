import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useSmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1,
            smooth: true,
            smoothTouch: false,
            syncTouch: false,
            easing: (t) => t * (2 - t), // faster, lighter
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
}
