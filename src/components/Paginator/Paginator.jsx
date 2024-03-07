import styles from "./Paginator.module.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Paginator({
  valorInicial,
  setValorInicial,
  valorFinal,
  setValorFinal,
  totalPokemons,
}) {
  const handleAnterior = () => {
    if (valorInicial !== 0) {
      setValorInicial((prevInicial) => prevInicial - 20);
      setValorFinal((prevFinal) => prevFinal - 20);
    }
  };
  const handleProxima = () => {
    if (valorFinal < totalPokemons) {
      setValorInicial((prevInicial) => prevInicial + 20);
      setValorFinal((prevFinal) => prevFinal + 20);
    }
  };

  return (
    <div className={styles.containerPaginator}>
      <button className={styles.buttonPaginator} onClick={handleAnterior}>
        <FaArrowLeft size={20} />
      </button>
      <button className={styles.buttonPaginator} onClick={handleProxima}>
        <FaArrowRight size={20} />
      </button>
    </div>
  );
}

export default Paginator;
