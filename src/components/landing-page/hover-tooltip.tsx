import { motion } from "framer-motion";
import { useState } from "react";
import { splitStringUsingRegex } from "../../utils/helper";

const HoverTooltip = () => {
  const [isHovered, setIsHovered] = useState(false);
  const text1Array = splitStringUsingRegex("I'm a tooltip");
  const text2Array = splitStringUsingRegex("wave your wand");
  return (
    <motion.div
      className="absolute top-[20%] right-[-18%] translate-x-[50%]"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="bg-[transparent] rounded-[9px] flex items-center gap-1 p-1 border-0 border-[#EBEBEB] cursor-pointer h-7"
        // className="bg-[#F5F5F5] rounded-[9px] flex items-center gap-1 p-1 border border-[#EBEBEB] cursor-pointer h-7"
        // animate={{ width: isHovered ? 265 : 95 }}
        animate={{ width: isHovered ? 145 : 95 }}
        transition={{ duration: 0.2 }}
      >
        <motion.img
          src="/assets/send.png"
          className="w-2 h-auto"
          style={{ transformOrigin: "center" }}
          animate={{
            rotate: isHovered ? -60 : 0,
            y: isHovered ? -1.6 : 0,
          }}
          alt=""
        />
        <div className="relative h-full overflow-y-hidden">
          {!isHovered ? (
            <motion.p className="text-[#828282] text-[13px] geist-semibold relative ">
              {text1Array.map((char, i) => (
                <>
                  {char === " " ? (
                    <span> </span>
                  ) : (
                    <motion.span
                      className="text-[#828282] text-[13px] geist-semibold relative inline-block"
                      key={i}
                      initial={{ opacity: 0, y: 2.5, filter: "blur(3px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ delay: i * 0.02 }}
                    >
                      {char}
                    </motion.span>
                  )}
                </>
              ))}
            </motion.p>
          ) : null}
          {isHovered ? (
            <motion.p className="text-[#828282] text-[13px] geist-medium relative ">
              {text2Array.map((char, i) => (
                <>
                  {char === " " ? (
                    <span> </span>
                  ) : (
                    <motion.span
                      className="text-[#828282] text-[13px] geist-semibold relative inline-block"
                      key={i}
                      initial={{ opacity: 0, y: 2.5, filter: "blur(3px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ delay: i * 0.02 }}
                    >
                      {char}
                    </motion.span>
                  )}
                </>
              ))}
            </motion.p>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HoverTooltip;
