# Pokedex

Pokedex desenvolvida em React.js

**[>> Link para a aplicação <<](https://reactpokemonapi.netlify.app/)**

## Deploy

Para fazer o deploy da aplicação

```bash
 -npm install
 -npm run dev
```

## Documentação da API

[Site para a documentação oficial](https://pokeapi.co/)

#### Retornar um Pokemon

```http
  GET https://pokeapi.co/api/v2/pokemon/${id}
```

ou

```http
  GET https://pokeapi.co/api/v2/pokemon/${nome}
```

| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :------------------------------ |
| `id`      | `number` | O ID do pokemon que você quer   |
| `nome`    | `string` | O nome do pokemon que você quer |

## Stack utilizada

**Front-end:** React.js, HTML e CSS.

**Back-end:** Nodejs.

### Bibliotecas

- [axios](https://axios-http.com/ptbr/docs/intro)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-scroll](https://www.npmjs.com/package/react-scroll)
