import { Variants } from 'framer-motion';

// Check if user prefers reduced motion
const prefersReducedMotion = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Fade In Animation
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

// Slide Up Animation (from bottom)
export const slideUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
        },
    },
};

// Slide In from Left
export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

// Slide In from Right
export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

// Scale Animation
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

// Stagger Container - for animating children sequentially
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

// Stagger Item - for use with staggerContainer
export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

// Hover Scale Effect
export const hoverScale = {
    scale: 1.05,
    transition: {
        duration: 0.3,
        ease: 'easeInOut',
    },
};

// Tap Scale Effect (for buttons)
export const tapScale = {
    scale: 0.95,
};

// Default viewport settings for scroll animations
export const defaultViewport = {
    once: true, // Only animate once when scrolling into view
    margin: '-100px', // Start animation 100px before element is in view
    amount: 0.3, // Trigger when 30% of element is visible
};

// Animation settings that respect user preferences
export const getAnimationProps = (variants: Variants) => {
    if (prefersReducedMotion()) {
        return {
            initial: false,
            animate: 'visible',
            variants: {
                hidden: {},
                visible: {},
            },
        };
    }
    return {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: defaultViewport,
        variants,
    };
};

// Export individual animation presets
export const animations = {
    fadeIn,
    slideUp,
    slideInLeft,
    slideInRight,
    scaleIn,
    staggerContainer,
    staggerItem,
};
