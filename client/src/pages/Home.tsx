import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store"; //the context from the valtio in the store file
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { CustomButton } from "../components";
const Home = () => {
  const snap = useSnapshot(state); //using the 'context'. actually snapshot of our states
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              className="w-8 h-8 object-contain"
              src="./threejs.png"
              alt=""
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Use your imagination and create your unique t-shirt with our new
                3D customization tool.<strong>Tees to bliss</strong>
              </p>
              <CustomButton
                type="filled"
                title="customize"
                handleClick={() => {
                  state.intro = false;
                }}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm "
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
