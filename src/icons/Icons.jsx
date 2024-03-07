import { FaDrumSteelpan } from "react-icons/fa6";
import {
  GiHighGrass,
  GiFairyWings,
  GiBoxingGloveSurprise,
  GiPoisonBottle,
  GiStoneTablet,
  GiPsychicWaves,
  GiIceBolt,
  GiFairyWand,
  GiGroundSprout,
} from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { MdDarkMode, MdElectricBolt } from "react-icons/md";
import {
  FaBug,
  FaGhost,
  FaDragon,
  FaDotCircle,
  FaFireAlt,
} from "react-icons/fa";

export const icons = {
  normal: <FaDotCircle size={20} color="#a8a878" />,
  fire: <FaFireAlt size={20} color="#f05030" />,
  water: <IoIosWater size={20} color="#6890f0" />,
  grass: <GiHighGrass size={20} color="#78c850" />,
  electric: <MdElectricBolt size={20} color="#f8d030" />,
  psychic: <GiPsychicWaves size={20} color="#f85888" />,
  ice: <GiIceBolt size={20} color="blue" />,
  flying: <GiFairyWings size={20} color="#a890f0" />,
  fighting: <GiBoxingGloveSurprise size={20} color="#903028" />,
  poison: <GiPoisonBottle size={20} color="#a040a0" />,
  rock: <GiStoneTablet size={20} color="#b8a038" />,
  ground: <GiGroundSprout size={20} color="brown" />,
  steel: <FaDrumSteelpan size={20} color="#b8b8d0" />,
  bug: <FaBug size={20} color="darkgreen" />,
  ghost: <FaGhost size={20} color="#705898" />,
  dragon: <FaDragon size={20} color="#7038f8" />,
  dark: <MdDarkMode size={20} color="#705848" />,
  fairy: <GiFairyWand size={20} color="#f81088" />,
};
