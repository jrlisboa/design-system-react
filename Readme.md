
# Design System [React]

Este projeto é a estrutura simplificada do que poderia se tornar uma biblioteca
de componentes e tokens reutilizáveis.

- Requisito: `Node.js`

### Como rodar
Você pode utilizar o script auxiliar do projeto, ou tambémos os scripts
listados no `package.json`.

#### Script auxiliar

```bash
+--------+-------------------+--------------------------------------------------------+
|                     🟢 Bem-vindo ao Lemon Design System (React) 🟢                  |
|                       --Explore os componentes e contribua --                       |
+--------+-------------------+--------------------------------------------------------+
| Numero | Comando           | Descrição                                              |
+--------+-------------------+--------------------------------------------------------+
| 1      | run               | Abre uma página de exemplo para os componentes         |
| 2      | tests             | Roda os testes do projeto                              |
+--------+-------------------+--------------------------------------------------------+

🤖 [Jr bot] Só me falar o número, e eu preparo tudo pra você.
```

Para iniciar, basta executar o script `./start` localizado na raíz do projeto:
```bash
  ./start.sh
```

#### Npm scripts

Por convenção, os scripts start, build e test estão disponíveis no projeto e também
podem ser utilizados. Antes disso é necessário fazer a instalação.

Instalação manual
```bash
  npm install
  npm start
```

Rodar testes e verificar cobertura
```bash
  npm test -- --coverage
```

### Como utilizar
Inclua a biblioteca nas dependências do seu projeto:
* Apontamento local: `npm install -S ./design-system-react` [(Mais detalhes)](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#local-paths).
* Instalação via github: `npm i -S jrlisboa/design-system`.

Importe os componentes necessários:

~~~javascript
import {
  Dialog,
  Theme,
  GlobalStyle,
} from 'design-system-react';
~~~

*Obs: Sempre verifique os PropTypes de cada componente.*

#### Documentação dos componentes

* [Dialog](./src/components/dialog/Readme.md)
* [GlobalStyle e Theme](./src/components/Readme.md)

*Importante: Utilizar um ThemeProvider é essencial para o bom funcionamento dos componentes*

### Build

O artefato de build é utilizado como porta de entrada para os projetos que
importam o design-system-react como dependência.

Para gerar um novo artefato, basta executar:

~~~bash
npm run build
~~~

### Sobre o projeto

#### Estrutura de pastas
A estrutura de pastas é simples para que o foco seja a criação de novos elementos de UI,
dessa forma, o projeto que utilizar esta biblioteca poderá importar e utilizar qualquer
um dos componentes disponíveis.


~~~
├── __tests__ 
│   ├── components    -> Testes para os componentes de UI
│   ├── helpers   -> Testes para eventuais helpers
|   │
├── assets                          
├── src
│   ├── components    -> Elementos de UI que serão exportados
│   │   ├── dialog    -> Arquivos do componente
|   │   │   ├── index.jsx   -> Exporta o componente
|   │   │   ├── index.style.jsx   -> Exporta os estilos com styled components
|   │   │   │
|   │   ├── global.style.jsx   -> Exporta valores de estilo globais
│   │   ├── theme.style.jsx   -> Exporta os tokens do projeto
|   │   │ 
│   ├── example
│   │   ├── index.js   -> Renderiza os componentes na página exemplo
│   │   ├── index.style.jsx   -> Exporta os estilos da página exemplo
│   │   ├── index.html    -> HTML da página exemplo
|   │   │ 
│   ├── helpers
│   │   ├── dom_helper.jsx   -> Auxilia a manipulação de elementos do DOM
|   │   │
│   ├── index.js   -> Exporta todos os componentes
~~~

#### Build tool [Parcel]

O [parcel](https://parceljs.org/) permite que o projeto seja configurado e executado de forma
rápida e suportando customizações nos pressets do babel.

#### Test tool [Jest]

Além do Jest, algumas outras ferramentas de teste foram utilizadas para garantir a 
cobertura do componente em seus **side effects**, aparência e comportamentos.
- @testing-library/react (Comparar atributos e simular interações)
- jest-styled-components (Permite utilizar snapshots com styled components)
- react-test-renderer (Cria e testa snapshots dos componentes)
