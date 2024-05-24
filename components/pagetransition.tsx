"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = usePathname();
  console.log(router)
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {},
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
