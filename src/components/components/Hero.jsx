import { motion } from "framer-motion";

import { styles } from "../../styles";
import { ComputersCanvas } from "./canvas";

import Photo from '../../assets/Photo.jpg';
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl 
      mx-auto flex flex-row items-start gap-5`}
      >
        <motion.img
          src={Photo}
          alt="Emmanuella Ntchinou"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg border-4 border-blue-400 mr-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
            Bonjour <span className="text-[#915EFF]">Okrein</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            À la rentrée de septembre 2025, j'intégrerai la 1ʳᵉ année en Ingénierie Informatique à la Cyber Management School. <br className="sm:block hidden" />
            Je recherche une alternance pour développer mes compétences et contribuer à des projets stimulants.
          </p>
        </div>
      </div>
      <div className="absolute bottom-[30px] right-4 sm:right-10 w-1/2 sm:w-1/2 h-1/2 sm:h-1/2 z-10">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
