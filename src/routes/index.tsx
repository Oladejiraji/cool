import { createFileRoute } from "@tanstack/react-router";
import CanvasScene from "../components/landing-page/canvas-scene";
import HoverTooltip from "../components/landing-page/hover-tooltip";
import { motion } from "framer-motion";
import { splitStringUsingRegex } from "../utils/helper";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="h-screen pt-6 pb-20">
      <div className="flex flex-col items-center justify-between h-full">
        <div>
          <nav className="flex items-center justify-between w-[376px] mx-auto  shadow p-[8px] rounded-[15px]">
            <h1 className="text-base geist-medium">foggy</h1>
            <div className="flex items-center gap-3 text-sm geist-medium">
              <p>Docs</p>
              <p>Products</p>
              <p>Pricing</p>
              <button className="bg-[#000000] text-white rounded-[11px] py-[6px] px-[10px]">
                <p>Free Trial</p>
              </button>
            </div>
          </nav>

          <div className="bg-[#F5F5F5] rounded-[20px] w-[266px] mx-auto mt-5 geist-medium text-[13px] flex items-center gap-1 px-2 py-1">
            <p className="text-[#828282] ">
              {splitStringUsingRegex("Foggy is currently raising.").map(
                (char, i) => (
                  <>
                    {char === " " ? (
                      <span> </span>
                    ) : (
                      <motion.span
                        className="relative inline-block "
                        key={i}
                        initial={{ opacity: 0, y: 2.5, filter: "blur(3px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ delay: i * 0.02 }}
                      >
                        {char}
                      </motion.span>
                    )}
                  </>
                )
              )}
            </p>
            <div className="flex items-center gap-1">
              <p className="text-[#282828] underline">
                {splitStringUsingRegex("learn more").map((char, i) => (
                  <>
                    {char === " " ? (
                      <span> </span>
                    ) : (
                      <motion.span
                        className="relative inline-block underline"
                        key={i}
                        initial={{ opacity: 0, y: 2.5, filter: "blur(3px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ delay: 0.52 + i * 0.02 }}
                      >
                        {char}
                      </motion.span>
                    )}
                  </>
                ))}
              </p>
              <img src="/assets/right.png" alt="" className="w-2 h-auto" />
            </div>
          </div>
        </div>

        <div>
          <div className="relative ">
            <div className="absolute ">
              <img
                src="/assets/paint2.png"
                alt=""
                className="w-[432px] h-[432px] "
              />
            </div>

            <HoverTooltip />

            <CanvasScene />
          </div>
        </div>

        <div className="flex items-center w-[891px] justify-center">
          <div className="geist-normal w-[507px]">
            <motion.h1 className="pb-1 text-[36px] geist-semibold text-center">
              {splitStringUsingRegex("AI Restoration at its Peak.").map(
                (char, i) => (
                  <>
                    {char === " " ? (
                      <span> </span>
                    ) : (
                      <motion.span
                        className="relative inline-block "
                        key={i}
                        initial={{
                          opacity: 0,
                          y: 2.5,
                          filter: "blur(3px)",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                          color: [
                            "#000",
                            "#845EC2",
                            "#ff0000",
                            "#000",
                            "#845EC2",
                            "#ff0000",
                            "#000",
                          ],
                        }}
                        transition={{
                          color: {
                            delay: 0.52 + 0.2 + i * 0.02,
                            repeatType: "loop",
                            repeat: 1,
                            repeatDelay: 1,
                          },
                          delay: 0.52 + 0.2 + i * 0.02,
                        }}
                      >
                        {char}
                      </motion.span>
                    )}
                  </>
                )
              )}
            </motion.h1>
            <p className="text-[16px] leading-none text-[#8C8C8C] pb-4 text-center geist-medium tracking-[-0.028em]">
              {/* {splitStringUsingRegex(
                "Foggy makes restoration of pixelated and blurry photos as easy as waving a wand. No really, wave your cursor a few times and watch foggy work its magic."
              ).map((char, i) => (
                <>
                  {char === " " ? (
                    <span> </span>
                  ) : (
                    <motion.span
                      className="relative inline-block "
                      key={i}
                      initial={{ opacity: 0, y: 2.5, filter: "blur(3px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ delay: 0.52 + 0.2 + 0.54 + i * 0.02 }}
                    >
                      {char}
                    </motion.span>
                  )}
                </>
              ))} */}
              <div style={{ overflow: "hidden", height: "content-fit" }}>
                <motion.span
                  style={{ display: "block" }}
                  initial={{ y: 22 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0,
                    //   ease: [0.785, 0.135, 0.15, 0.86],
                    ease: [0.5, 0, 0, 1],
                  }}
                >
                  Foggy makes restoration of pixelated and blurry photos as
                </motion.span>
              </div>
              <div style={{ overflow: "hidden", height: "content-fit" }}>
                <motion.span
                  style={{ display: "block" }}
                  initial={{ y: 22 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0,
                    //   ease: [0.785, 0.135, 0.15, 0.86],
                    ease: [0.5, 0, 0, 1],
                  }}
                >
                  easy as waving a wand. No really, wave your cursor a few times
                  and
                </motion.span>
              </div>
              <div style={{ overflow: "hidden", height: "content-fit" }}>
                <motion.span
                  style={{ display: "block" }}
                  initial={{ y: 22 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0,
                    //   ease: [0.785, 0.135, 0.15, 0.86],
                    ease: [0.5, 0, 0, 1],
                  }}
                >
                  watch foggy work its magic.
                </motion.span>
              </div>
            </p>
            <div className="flex items-center justify-center hidden gap-2">
              <p className="text-[#E27625] text-[13px] p-1 bg-[#F5D6BE] rounded-[5px]">
                Image clean up
              </p>
              <p className="text-[#5CFE9D] text-[13px] p-1 bg-[#E7FBEF] rounded-[5px]">
                Generative fill
              </p>
              <p className="text-[#828282] text-[13px] p-1 bg-[#F5F5F5] rounded-[5px]">
                Generative fill
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
