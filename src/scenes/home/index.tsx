import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import Undonats from "@/assets/Undonats.png";
import DonutBanner from "@/assets/DonutBanner.png";

import pinkdonuts from "@/assets/pinkdonuts.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1280px)");
  return (
    <section id="home" className="bg-gray-20 gap-16  py-10 sm:h-2/6 xl:h-full">
      {/* IMAGE AND MAIN HEADER */}

      <motion.div
        className="mx-auto w-5/6 items-center justify-center sm:h-full md:flex xl:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className=" xl:flex xl:items-center xl:justify-between ">
          {/* MAIN HEADER */}
          <div className="mt-24  ">
            {/* HEADINGS */}
            <motion.div
              className="md:-mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="relative">
                <div>
                  <div className=" xl:w-[44vh]">
                    <img alt="home-page-text" src={Undonats} />
                  </div>
                </div>
              </div>

              <p className="mt-8   text-[2vh]">NOW DELIVERING TO YOUR HOOD!</p>
            </motion.div>
            {/* ACTIONS */}
            <motion.div
              className="mt-8 flex items-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Order Now
              </ActionButton>
            </motion.div>
          </div>

          {/* IMAGE */}
          <div className="  relative z-[1] hidden w-1/2 xl:flex">
            <img alt="homepagegraphic" src={pinkdonuts}></img>
          </div>
        </div>
      </motion.div>
      {/* EMOJIS */}
      {isAboveMediumScreens && (
        <div className="  w-full ">
          <div className="mx-auto ">
            <div className="mt-6 flex items-center justify-between ">
              <img alt="a1" className=" z-20 " src={DonutBanner}></img>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
