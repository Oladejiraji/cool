import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/island")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div className="flex items-start justify-center w-screen h-screen mt-12">
        <div style={{ filter: 'url("#goo")' }}>
          {/* Bar */}
          <div className="w-[200px] bg-black rounded-[30px]  py-6" />
          {/* Drops */}
          <motion.div
            className="w-[16px] bg-black rounded-[30px]  py-[8px] absolute top-0 left-[80%]"
            animate={{ y: [0, 50, 1000] }}
            transition={{ duration: 3, repeat: Infinity, delay: 10 }}
          />
          <motion.div
            className="w-[20px] bg-black rounded-[30px]  py-[10px] absolute top-0 left-[20%]"
            animate={{ y: [0, 50, 1000] }}
            transition={{ duration: 2, repeat: Infinity, delay: 10 }}
          />
          <motion.div
            className="w-[28px] bg-black rounded-[30px] py-[14px] absolute top-0 left-[50%]"
            animate={{ y: [0, 50, 1000] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: 10 }}
          />
        </div>
      </div>
    </>
  );
}
