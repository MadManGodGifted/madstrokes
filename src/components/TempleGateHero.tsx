"use client";

import { useEffect, useRef } from "react";
import "./TempleGateHero.css";

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const easeInOutCubic = (value: number) =>
    value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;

/**
 * Native-scroll hero animation. CSS owns every transform; this small browser
 * script only turns section scroll position into named CSS custom properties.
 */
export default function TempleGateHero() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let animationFrame = 0;

        const setProgress = (progress: number) => {
            const doorProgress = easeInOutCubic(clamp(progress / 0.66));
            // Let the invitation arrive while the final part of the doorway opens,
            // instead of leaving a visually empty pause at the end of the scroll.
            const contentProgress = easeInOutCubic(clamp((progress - 0.32) / 0.32));

            hero.style.setProperty("--left-door", `${-100 * doorProgress}deg`);
            hero.style.setProperty("--right-door", `${100 * doorProgress}deg`);
            hero.style.setProperty("--scene-scale", `${1 + doorProgress * 0.05}`);
            hero.style.setProperty("--cloud-wide-x", `${doorProgress * -42}px`);
            hero.style.setProperty("--cloud-wide-y", `${doorProgress * 18}px`);
            hero.style.setProperty("--cloud-large-x", `${doorProgress * 27}px`);
            hero.style.setProperty("--cloud-large-y", `${doorProgress * -26}px`);
            hero.style.setProperty("--cloud-small-x", `${doorProgress * -19}px`);
            hero.style.setProperty("--cloud-small-y", `${doorProgress * -13}px`);
            hero.style.setProperty("--cta-opacity", `${contentProgress}`);
            hero.style.setProperty("--cta-shift", `${(1 - contentProgress) * 22}px`);
        };

        const update = () => {
            animationFrame = 0;
            if (reducedMotion.matches) {
                hero.dataset.reducedMotion = "true";
                setProgress(1);
                return;
            }

            hero.dataset.reducedMotion = "false";
            const bounds = hero.getBoundingClientRect();
            const travel = hero.offsetHeight - window.innerHeight;
            const progress = travel > 0 ? clamp(-bounds.top / travel) : 0;
            setProgress(progress);
        };

        const requestUpdate = () => {
            if (!animationFrame) animationFrame = window.requestAnimationFrame(update);
        };

        const onPreferenceChange = () => requestUpdate();
        update();
        window.addEventListener("scroll", requestUpdate, { passive: true });
        window.addEventListener("resize", requestUpdate);
        reducedMotion.addEventListener("change", onPreferenceChange);

        return () => {
            window.removeEventListener("scroll", requestUpdate);
            window.removeEventListener("resize", requestUpdate);
            reducedMotion.removeEventListener("change", onPreferenceChange);
            if (animationFrame) window.cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <section ref={heroRef} className="temple-hero" aria-label="Open the doors to Indian art">
            <div className="temple-hero__stage">
                <div className="temple-hero__scene" aria-hidden="true">
                    <img className="temple-hero__background" src="/images/hero/background.png" alt="" />
                    <div className="temple-hero__midground">
                        <img className="temple-hero__deity" src="/images/hero/deity-lotus.png" alt="" />
                        <img className="temple-hero__swan" src="/images/hero/swan.png" alt="" />
                        <img className="temple-hero__waves" src="/images/hero/waves.png" alt="" />
                    </div>
                </div>

                <img className="temple-hero__frame" src="/images/hero/temple-frame.png" alt="" aria-hidden="true" />

                <div className="temple-hero__gate" aria-hidden="true">
                    <div className="temple-hero__door temple-hero__door--left">
                        <img className="temple-hero__door-art temple-hero__door-art--left" src="/images/hero/temple-doors.png" alt="" />
                    </div>
                    <div className="temple-hero__door temple-hero__door--right">
                        <img className="temple-hero__door-art temple-hero__door-art--right" src="/images/hero/temple-doors.png" alt="" />
                    </div>
                </div>

                <div className="temple-hero__foreground" aria-hidden="true">
                    <img className="temple-hero__cloud temple-hero__cloud--wide" src="/images/hero/cloud-wide.png" alt="" />
                    <img className="temple-hero__cloud temple-hero__cloud--large" src="/images/hero/cloud-large.png" alt="" />
                    <img className="temple-hero__cloud temple-hero__cloud--small" src="/images/hero/cloud-small.png" alt="" />
                </div>

                <div className="temple-hero__copy">
                    <p className="temple-hero__eyebrow">Mad Strokes presents</p>
                    <h1>Open the doors<br />to India&apos;s art.</h1>
                    <p className="temple-hero__description">A journey through living traditions, regional stories, and the hands that keep them alive.</p>
                    <a href="#discover" className="temple-hero__cta">Begin exploring <span aria-hidden="true">↓</span></a>
                </div>
            </div>
        </section>
    );
}
