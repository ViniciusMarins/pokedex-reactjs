import styles from "./SlideTop.module.css";
import { FaCircleArrowUp } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";

function SlideTop() {
  return (
    <ScrollLink to="top" smooth={true} duration={500}>
      <span className={styles.containerSlide}>
        <FaCircleArrowUp cursor="pointer" size={48} />
      </span>
    </ScrollLink>
  );
}

export default SlideTop;
