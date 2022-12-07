
# Global Style
Componente de estilo, utiliza o método `createGlobaStyle` da biblioteca `styled-components`.

### Como utilizar

Incluir `GlobalStyle` na árvore de componentes que serão renderizados, dessa forma as definições de estilo globais já serão aplicadas.

```javascript
<div>
    <GlobalStyle />
    ...
</div>
```

# Theme
Exporta todos os tokens da biblioteca, para que possam ser utilizados na implementação de componentes nos projetos que utilizam o `design-system-react` como dependência.

### Como utilizar

Passar o `Theme` como atributo em um `ThemeProvider`.

```javascript
import { ThemeProvider } from 'styled-components';

<ThemeProvider theme={Theme}>
    <ExamplePage />
</ThemeProvider>
```