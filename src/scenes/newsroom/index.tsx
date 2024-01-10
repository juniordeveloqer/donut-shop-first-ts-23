import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Jam from "@/assets/Jam.png";

import NewsRoom2 from "@/assets/newsroom2.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const NewsRoom = ({ setSelectedPage }: Props) => {
  return (
    <section id="newsroom" className="min-h-full bg-newsroom  pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Menu)}>
        {/* JAM */}
        <div>
          <img src={Jam}></img>
        </div>
        {/* NEWSROOM */}
        <div className=" md:mt-14  md:flex ">
          <div className=" relative  flex justify-center  object-bottom  py-8 md:flex ">
            <img
              src={NewsRoom2}
              alt="2"
              className=" object-cover object-bottom md:w-[500px] "
            />
          </div>

          <div className=" relative mx-auto  my-auto pt-9 text-center md:w-2/5  ">
            <h1 className="basis-3/5 items-center justify-center  object-bottom  font-montserrat   text-4xl font-bold md:flex ">
              THIS MONTH BAKED DONUTS HAVE 10% DISCOUNT
            </h1>
            <p className="my-5 text-xl ">
              By popular demand, I’m bringing you my favorite Baked Donuts done
              UNDONUTS ways! I think you’ll like my baked donuts better than the
              usual fried ones, and I don’t think you’ll miss the extra fat and
              mess from a deep fryer. With that said, let’s get out those baking
              sheets and get to baking.
            </p>
          </div>
        </div>
        {/* NEWSROOM PARAGRAPH */}
      </motion.div>
    </section>
  );
};

export default NewsRoom;
