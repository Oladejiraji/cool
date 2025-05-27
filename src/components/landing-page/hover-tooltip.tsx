import { motion } from "framer-motion";
import { useState } from "react";
import { splitStringUsingRegex } from "../../utils/helper";

const HoverTooltip = () => {
  const [isHovered, setIsHovered] = useState(false);
  const text1Array = splitStringUsingRegex("I'm a tooltip");
  const text2Array = splitStringUsingRegex(
    "wave your wand across this image here"
  );
  return (
    <motion.div
      className="absolute top-[20%] right-[-50%] translate-x-[50%]"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="bg-[#F5F5F5] rounded-[9px] flex items-center gap-1 p-1 border border-[#EBEBEB] cursor-pointer h-7"
        animate={{ width: isHovered ? 265 : 95 }}
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
            <motion.p className="text-[#828282] text-[13px] geist-medium relative ">
              {text1Array.map((char, i) => (
                <>
                  {char === " " ? (
                    <span> </span>
                  ) : (
                    <motion.span
                      className="text-[#828282] text-[13px] geist-medium relative inline-block"
                      key={i}
                      initial={{ opacity: 0, y: 2, filter: "blur(2px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ delay: i * 0.01 }}
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
                      className="text-[#828282] text-[13px] geist-medium relative inline-block"
                      key={i}
                      initial={{ opacity: 0, y: 2, filter: "blur(2px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ delay: i * 0.01 }}
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
