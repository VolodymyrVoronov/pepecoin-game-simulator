import React from "react";
import { motion } from "framer-motion";

import { StartContainer, StartTextContainer, StartText } from "./Start.styled";

const Start = () => {
  return (
    <StartContainer>
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 1 }}
      >
        <StartTextContainer>
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "linear", delay: 1, duration: 1 }}
          >
            <StartText>
              В этой игре-симуляции у игрока есть возможность зарабатывать
              пепекоины посредством майнинга их на компьютере.
            </StartText>
          </motion.div>

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "linear", delay: 1, duration: 1.5 }}
          >
            <StartText>
              Для большего заработка придётся накопить на более мощную
              видеокарту.
            </StartText>
          </motion.div>

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "linear", delay: 1, duration: 2 }}
          >
            <StartText>
              Курс пепекоина не всегда будет расти, он может и сильно падать. По
              этой причине нужно будет запастись терпением, чтобы накопить на
              новую видеокарту.
            </StartText>
          </motion.div>
        </StartTextContainer>
      </motion.div>
    </StartContainer>
  );
};

export default Start;
