"use client"
import React from 'react'
import { motion, useScroll } from "framer-motion";

const PageProgress = () => {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <style>
                {`
                .progress-bar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 8px;
                    transform-origin: 0%;
                  }
            `}
            </style>

            <motion.div
                className="progress-bar bg-red-700"
                style={{ scaleX: scrollYProgress }}
            />
        </>
    )
}

export default PageProgress
