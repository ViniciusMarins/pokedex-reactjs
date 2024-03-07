import { FaHeart, FaWeightHanging } from "react-icons/fa";
import styles from "./CardPokemon.module.css";
import { RiSwordFill } from "react-icons/ri";
import { FaShield } from "react-icons/fa6";
import { GiSteeltoeBoots } from "react-icons/gi";
import { icons } from "../../icons/Icons";
import { GiSpinningSword } from "react-icons/gi";
import { GiBoltShield } from "react-icons/gi";

export default function CardPokemon({
  nome,
  peso,
  vida,
  ataque,
  imagem,
  defesa,
  velocidade,
  tipos,
  specialAttack,
  specialDefense,
}) {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.headerContainer}>
          {tipos.map((tipo, key) => {
            return <span key={key}>{icons[tipo.type.name]}</span>;
          })}
        </div>
        <h1>{nome}</h1>

        {imagem ? (
          <img src={imagem} alt="Foto do Pokemon" />
        ) : (
          <p>Não foi possível encontrar uma imagem =[ </p>
        )}
        <div className={styles.infoContainer}>
          <p>
            <FaWeightHanging size={20} color="gray" /> Weight : {peso}
          </p>
          <p>
            <FaHeart size={20} color="red" /> Hp : {vida}
          </p>
          <p>
            <RiSwordFill size={20} color="orange" /> Attack : {ataque}
          </p>
          <p>
            <FaShield size={20} color="green" /> Defense : {defesa}
          </p>
          <p>
            <GiSteeltoeBoots size={20} color="blue" /> Speed : {velocidade}
          </p>
          <p>
            <GiSpinningSword size={20} color="darkorange" /> Special-Attack :{" "}
            {specialAttack}
          </p>
          <p>
            <GiBoltShield size={20} color="darkgreen" /> Special-Defense :{" "}
            {specialDefense}
          </p>
        </div>
      </div>
    </>
  );
}
