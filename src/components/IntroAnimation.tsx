"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import madhubaniImg from "../../phtos/Screenshot 2026-03-06 233235.png";
import warliImg from "../../phtos/Screenshot 2026-03-06 233209.png";
import gondImg from "../../phtos/Screenshot 2026-03-06 233220.png";
import pattachitraImg from "../../phtos/Screenshot 2026-03-06 233243.png";
import finalImg from "../../phtos/final.png";

const INDIA_PATH = "M205.5,41.9c-1.1,0.5-2.2,0.9-3.3,1.3c-1.1,0.4-2.1,0.8-3,1.3c-0.9,0.5-1.7,1.1-2.4,1.8 c-0.7,0.7-1.3,1.5-1.8,2.4c-0.5,0.9-0.9,1.9-1.3,3c-0.4,1.1-0.7,2.2-0.9,3.3c-0.2,1.1-0.3,2.3-0.3,3.4c0,1.1,0.1,2.2,0.3,3.3 c0.2,1.1,0.5,2.2,0.9,3.3c0.4,1.1,0.8,2.1,1.3,3c0.5,0.9,1.1,1.7,1.8,2.4c0.7,0.7,1.5,1.3,2.4,1.8c0.9,0.5,1.9,0.9,3,1.3 c1.1,0.4,2.2,0.7,3.3,0.9c1.1,0.2,2.3,0.3,3.4,0.3c1.1,0,2.2-0.1,3.3-0.3c1.1-0.2,2.2-0.5,3.3-0.9c1.1-0.4,2.1-0.8,3-1.3 c0.9-0.5,1.7-1.1,2.4-1.8c0.7-0.7,1.3-1.5,1.8-2.4c0.5-0.9,0.9-1.9,1.3-3c0.4-1.1,0.7-2.2,0.9-3.3c0.2-1.1,0.3-2.3,0.3-3.4 c0-1.1-0.1-2.2-0.3-3.3c-0.2-1.1-0.5-2.2-0.9-3.3c-0.4-1.1-0.8-2.1-1.3-3c-0.5-0.9-1.1-1.7-1.8-2.4c-0.7-0.7-1.5-1.3-2.4-1.8 c-0.9-0.5-1.9-0.9-3-1.3c-1.1-0.4-2.2-0.7-3.3-0.9C207.8,42,206.6,41.9,205.5,41.9z"; // Simplified placeholder path

const motifsData = [
    { id: "madhubani", src: madhubaniImg.src, delay: 2.2, x: "-25%", y: "-20%", scale: 0.6, pMult: 0.03 },
    { id: "warli", src: warliImg.src, delay: 2.6, x: "25%", y: "-15%", scale: 0.5, pMult: 0.05 },
    { id: "gond", src: gondImg.src, delay: 3.0, x: "-20%", y: "25%", scale: 0.7, pMult: 0.02 },
    { id: "pattachitra", src: pattachitraImg.src, delay: 3.4, x: "20%", y: "20%", scale: 0.6, pMult: 0.06 }
];

export default function IntroAnimation() {
    const [isVisible, setIsVisible] = useState(true);
    const [hasRun, setHasRun] = useState(false);

    // Parallax values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const bgX = useTransform(springX, (val) => val * 0.02);
    const bgY = useTransform(springY, (val) => val * 0.02);

    const m0x = useTransform(springX, (val) => val * motifsData[0].pMult);
    const m0y = useTransform(springY, (val) => val * motifsData[0].pMult);
    const m1x = useTransform(springX, (val) => val * motifsData[1].pMult);
    const m1y = useTransform(springY, (val) => val * motifsData[1].pMult);
    const m2x = useTransform(springX, (val) => val * motifsData[2].pMult);
    const m2y = useTransform(springY, (val) => val * motifsData[2].pMult);
    const m3x = useTransform(springX, (val) => val * motifsData[3].pMult);
    const m3y = useTransform(springY, (val) => val * motifsData[3].pMult);

    const motifTransforms = [
        { translateX: m0x, translateY: m0y },
        { translateX: m1x, translateY: m1y },
        { translateX: m2x, translateY: m2y },
        { translateX: m3x, translateY: m3y },
    ];

    useEffect(() => {
        const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
        if (hasSeenIntro) {
            setIsVisible(false);
            setHasRun(true);
        } else {
            const timer = setTimeout(() => {
                setIsVisible(false);
                sessionStorage.setItem("hasSeenIntro", "true");
            }, 6000); // Wait for full animation + pause
            return () => clearTimeout(timer);
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - window.innerWidth / 2);
            mouseY.set(e.clientY - window.innerHeight / 2);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Apply conditionally only AFTER all hooks are called
    if (hasRun && !isVisible) {
        return (
            <div className="fixed inset-0 -z-10 opacity-5 pointer-events-none" style={{ backgroundImage: `url('${finalImg.src}')`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }} />
        );
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-off-white"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    {/* Layer 1: Paper Texture */}
                    <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]" />

                    <motion.div
                        className="relative w-full h-full flex items-center justify-center"
                        style={{ x: bgX, y: bgY }}
                    >
                        {/* Layer 2: India Outline */}
                        <svg viewBox="0 0 400 500" className="w-[80%] h-[80%] max-w-2xl opacity-20 text-earth fill-none">
                            <motion.path
                                d={INDIA_PATH}
                                stroke="currentColor"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                            />
                        </svg>

                        {/* Layer 3: Regional Motifs */}
                        {motifsData.map((motif, index) => (
                            <motion.div
                                key={motif.id}
                                className="absolute pointer-events-none"
                                style={{
                                    left: "50%",
                                    top: "50%",
                                    x: `calc(-50% + ${motif.x})`,
                                    y: `calc(-50% + ${motif.y})`,
                                    translateX: motifTransforms[index].translateX,
                                    translateY: motifTransforms[index].translateY
                                }}
                                initial={{ opacity: 0, scale: 0.4 }}
                                animate={{ opacity: 1, scale: motif.scale }}
                                transition={{ delay: motif.delay, duration: 0.8, ease: "easeOut" }}
                            >
                                <img src={motif.src} alt={motif.id} className="max-w-[200px] h-auto" />
                            </motion.div>
                        ))}

                        {/* Layer 4: Full Painting Reveal */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center p-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4.0, duration: 1.0 }}
                        >
                            <img src={finalImg.src} alt="Complete Art" className="max-w-[90%] max-h-[90%] object-contain shadow-2xl rounded-sm" />
                        </motion.div>
                    </motion.div>

                    {/* Low opacity background texture for during the intro */}
                    <div className="absolute inset-0 -z-20 opacity-10 blur-sm pointer-events-none" style={{ backgroundImage: `url('${finalImg.src}')`, backgroundSize: 'cover' }} />
                </motion.div>
            )}

            {/* Transition to persistent background texture */}
            {!isVisible && (
                <motion.div
                    className="fixed inset-0 -z-10 opacity-5 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2.0 }}
                    style={{ backgroundImage: `url('${finalImg.src}')`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
                />
            )}
        </AnimatePresence>
    );
}

