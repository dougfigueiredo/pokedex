Pokédex Angular
Este projeto é uma Pokédex desenvolvida com Angular 19, que consome a API PokéAPI para exibir informações dos primeiros 151 Pokémon. A aplicação permite buscar e listar Pokémon, mostrando seus nomes, imagens, alturas e pesos.

Funcionalidades
Busca individual de Pokémon por nome.

Listagem dos primeiros 151 Pokémon com nome e imagem.

Interface de usuário estilizada para uma visualização agradável.

Tecnologias Utilizadas
Angular 19: Framework utilizado para construir a aplicação.

TypeScript: Linguagem de programação utilizada para desenvolver o projeto.

SCSS: Estilos usados para formatar a aparência da aplicação.

PokéAPI: API pública usada para obter dados dos Pokémon.

Como Executar o Projeto
Clonar o Repositório

```shell
git clone https://github.com/dougfigueiredo/pokedex-angular.git
cd pokedex-angular
```
Instalar Dependências

```shell
npm install
```
Executar a Aplicação

```shell
ng serve
```
Acessar no Navegador

Abra o navegador e acesse ```http://localhost:4200.```

Estrutura do Projeto
src/app/pokemon.service.ts: Serviço responsável por fazer requisições à PokéAPI.

src/app/pokemon/pokemon.component.ts: Componente que gerencia a exibição dos Pokémon.

src/app/pokemon/pokemon.component.html: Template HTML para exibir os dados dos Pokémon.

src/app/pokemon/pokemon.component.scss: Estilos SCSS para estilizar o componente.

Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.

Licença
Este projeto é licenciado sob a Licença MIT.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
