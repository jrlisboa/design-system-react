export function createNewPortalRoot(id, type = 'div') {
    if (!id) throw new Error('Invalid ID');
    const element = document.createElement(type);
    element.setAttribute('id', id);

    document.body.appendChild(element);
    return element;
}