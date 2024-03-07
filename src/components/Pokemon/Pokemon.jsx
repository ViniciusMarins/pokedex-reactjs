import axios from "axios";
import { useEffect, useState } from "react";
import CardPokemon from "../CardPokemon/CardPokemon";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Pokemon.module.css";
import Paginator from "../Paginator/Paginator";
import { icons } from "../../icons/Icons";

export const qtdPokemons = 400;

const tipos = Object.keys(icons);

function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  const [originalPokemons, setOriginalPokemons] = useState([]);

  const [valorInicial, setValorInicial] = useState(0);
  const [valorFinal, setValorFinal] = useState(20);

  const [totalPokemons, setTotalPokemons] = useState(qtdPokemons);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedTypes, setSelectedTypes] = useState([]);

  var selectedPokemons = [];

  const fetchData = () => {
    const endpoints = [];
    for (let i = 1; i <= totalPokemons; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {
      // a resposta retorna diversas coisas, porém só o [data] me interessa que são os dados dos pokemons
      setPokemons(res.map((r) => r.data));
      setOriginalPokemons(res.map((r) => r.data));

      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // independente da página que estiver se eu dar check/uncheck em um tipo o refresh funciona normalmente
  useEffect(() => {
    setTotalPokemons(selectedPokemons.length);

    setValorInicial(0);
    setValorFinal(20);
  }, [selectedTypes]);

  // filtra a lista de pokemons para somente os tipos que estão selecionados
  function fillSelectedPokemons() {
    selectedPokemons = pokemons.filter((pokemon) => {
      if (selectedTypes.length === 0) {
        return true; // se nenhum tipo for selecionado, exibir todos os pokemons
      }

      return pokemon.types.some((type) =>
        selectedTypes.includes(type.type.name)
      );
    });
  }

  fillSelectedPokemons();

  useEffect(() => {
    fillSelectedPokemons();

    setTotalPokemons(selectedPokemons.length);
  }, [pokemons]);

  if (isLoading) {
    return <h1> Loading...</h1>;
  }

  return (
    <>
      <SearchBar
        pokemons={pokemons}
        originalPokemons={originalPokemons}
        setPokemons={setPokemons}
        selectedTypes={selectedTypes}
        selectedPokemons={selectedPokemons}
        setTotalPokemons={setTotalPokemons}
        setValorInicial={setValorInicial}
        setValorFinal={setValorFinal}
        tipos={tipos}
        setSelectedTypes={setSelectedTypes}
      />

      <Paginator
        valorInicial={valorInicial}
        setValorInicial={setValorInicial}
        valorFinal={valorFinal}
        setValorFinal={setValorFinal}
        totalPokemons={totalPokemons}
      />

      <div className={styles.containerPokemons}>
        {selectedPokemons.length ? (
          selectedPokemons
            .slice(valorInicial, valorFinal)
            .map((pokemon, key) => (
              <CardPokemon
                key={key}
                nome={pokemon.name}
                peso={pokemon.weight}
                vida={pokemon.stats[0].base_stat}
                ataque={pokemon.stats[1].base_stat}
                defesa={pokemon.stats[2].base_stat}
                specialAttack={pokemon.stats[3].base_stat}
                specialDefense={pokemon.stats[4].base_stat}
                velocidade={pokemon.stats[5].base_stat}
                tipos={pokemon.types}
                imagem={
                  pokemon.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                }
              />
            ))
        ) : (
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "64px 24px 0px 24px",
            }}
          >
            Não foi possível encontrar nenhum pokemon =[
          </h2>
        )}
      </div>
    </>
  );
}

export default Pokemon;
