"use client";

import { motion } from "framer-motion";

interface UTCCLoadingIconProps {
  size?: number;
  duration?: number;
}

export default function UTCCLoadingIcon({
  size = 64,
  duration = 1.5,
}: UTCCLoadingIconProps = {}) {
  const colors = {
    primary: "#003366", // UTCC's primary blue color
    secondary: "#FFD700", // Gold color for accent
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      initial="hidden"
      animate="visible"
      role="status"
      aria-label="Loading"
    >
      {/* Outer circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        stroke={colors.primary}
        strokeWidth="6"
        fill="none"
        variants={circleVariants}
        transition={{ duration: duration * 0.5, ease: "easeInOut" }}
      />

      {/* Inner circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        stroke={colors.secondary}
        strokeWidth="4"
        fill="none"
        variants={circleVariants}
        transition={{
          duration: duration * 0.5,
          delay: duration * 0.2,
          ease: "easeInOut",
        }}
      />

      {/* UTCC-inspired lines */}
      <motion.path
        d="M 50 5 V 35"
        stroke={colors.primary}
        strokeWidth="4"
        strokeLinecap="round"
        variants={lineVariants}
        transition={{ duration: duration, ease: "easeInOut" }}
      />
      <motion.path
        d="M 50 65 V 95"
        stroke={colors.primary}
        strokeWidth="4"
        strokeLinecap="round"
        variants={lineVariants}
        transition={{
          duration: duration,
          delay: duration * 0.2,
          ease: "easeInOut",
        }}
      />
      <motion.path
        d="M 5 50 H 35"
        stroke={colors.secondary}
        strokeWidth="4"
        strokeLinecap="round"
        variants={lineVariants}
        transition={{
          duration: duration,
          delay: duration * 0.4,
          ease: "easeInOut",
        }}
      />
      <motion.path
        d="M 65 50 H 95"
        stroke={colors.secondary}
        strokeWidth="4"
        strokeLinecap="round"
        variants={lineVariants}
        transition={{
          duration: duration,
          delay: duration * 0.6,
          ease: "easeInOut",
        }}
      />

      {/* Rotating arc */}
      <motion.path
        d="M 50 20 A 30 30 0 0 1 80 50"
        stroke={colors.primary}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: duration * 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.svg>
  );
}
