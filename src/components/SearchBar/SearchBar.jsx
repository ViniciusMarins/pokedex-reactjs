import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";
import { useEffect, useState } from "react";
import { qtdPokemons } from "../Pokemon/Pokemon";
import SelectedFilter from "../SelectedFilter/SelectedFilter";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

const SearchBar = ({
  originalPokemons,
  setPokemons,
  setTotalPokemons,
  setValorInicial,
  setValorFinal,
  selectedTypes,
  selectedPokemons,
  tipos,
  setSelectedTypes,
}) => {
  const [search, setSearch] = useState("");

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    var filteredPokemons = [];

    if (search.length === 0) {
      if (selectedTypes.length > 0) {
        setTotalPokemons(selectedPokemons.length);
      } else {
        setTotalPokemons(qtdPokemons);
      }

      setPokemons(originalPokemons);
    } else {
      const searchTerm = search.toLowerCase();

      if (selectedTypes.length > 1) {
        filteredPokemons = originalPokemons.filter(
          (pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm) &&
            pokemon.types.some((type) => selectedTypes.includes(type.type.name))
        );
      } else {
        filteredPokemons = originalPokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm)
        );
      }

      setPokemons(filteredPokemons);
      setTotalPokemons(filteredPokemons.length);

      setValorInicial(0);
      setValorFinal(20);
    }
  }, [search, selectedTypes]);

  function createComponent(Component) {
    return (
      <Component
        size={40}
        onClick={() => {
          setIsVisible((prev) => !prev);
        }}
      />
    );
  }

  return (
    <>
      <div className={styles.containerSearchBar}>
        <FaSearch size={30} />
        <input
          className={styles.inputSearch}
          placeholder="Search for a pokemon..."
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <button className={styles.toggleSelectedFilter}>
          {isVisible
            ? createComponent(IoIosArrowDropdownCircle)
            : createComponent(IoIosArrowDropupCircle)}
        </button>
      </div>

      {isVisible && (
        <SelectedFilter
          selectedTypes={selectedTypes}
          tipos={tipos}
          setSelectedTypes={setSelectedTypes}
        />
      )}
    </>
  );
};

export default SearchBar;
