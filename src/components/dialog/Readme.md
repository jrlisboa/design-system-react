
# Dialog

Prop Types do componente:
* **title**: Exibido no Header do Dialog - `(string?)`.
* **isOpen**: Informa o estado de exibição do Dialog - `(boolean)`.
* **onClose**: Callback acionado quando o Dialog é fechado - `(function)`.
* **closeOnOverlayClick**: Controla a possibilidade de fechar o Dialog com um click no overlay - `(function)`.
* **children**: Conteúdo exibido no interior do Dialog - `(React.ReactNode?)`.

```javascript
Dialog.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    closeOnOverlayClick: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.object,
    ]),
}
```

### Como utilizar

Incluir `Dialog(props)` na árvore de componentes que serão renderizados, passando corretamente as propriedades especificadas.

```javascript
<div>
    <ExampleButtonStyle
        onClick={() => setIsDialogOpen(true)}>
        Open React Dialog
    </ExampleButtonStyle>
    <Dialog
        title="Title"
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        closeOnOverlayClick>
        <p>Content.</p>
    </Dialog>
</div>
```