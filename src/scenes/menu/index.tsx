import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Menu1 from "@/assets/menu1.png";
import Menu2 from "@/assets/menu2.png";
import Menu3 from "@/assets/menu3.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Menu = ({ setSelectedPage }: Props) => {
  return (
    <section id="menu" className="min-h-full bg-menu py-10  ">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Menu)}>
        {/* HEADINGS */}
        <motion.div
          className=" flex justify-center
            md:z-10  md:justify-items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {" "}
          <div className="    ">
            <HText>OUR MENU</HText>
          </div>
        </motion.div>
        {/* MENU */}

        <motion.div
          className=" mx-auto  w-4/6 items-center justify-center gap-8   md:mt-24 md:flex md:h-5/6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {" "}
          <div className="py-8">
            <img
              className="rounded-3xl  object-cover object-bottom    "
              src={Menu1}
              alt="1"
            />
          </div>
          <div className="py-8">
            <img
              className="rounded-3xl   object-cover object-bottom   "
              src={Menu2}
              alt="2"
            />
          </div>
          <div className="py-8">
            <img
              className=" rounded-3xl object-cover object-bottom  "
              src={Menu3}
              alt="3"
            />
          </div>
        </motion.div>

        <motion.div
          className=" mx-auto  w-4/6 items-center justify-center gap-8  md:mb-24 md:flex md:h-5/6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="py-8">
            <img
              className="rounded-3xl  object-cover object-bottom    "
              src={Menu1}
              alt="1"
            />
          </div>
          <div className="py-8">
            <img
              className="rounded-3xl   object-cover object-bottom   "
              src={Menu2}
              alt="2"
            />
          </div>
          <div className="py-8">
            <img
              className=" rounded-3xl object-cover object-bottom  "
              src={Menu3}
              alt="3"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Menu;
