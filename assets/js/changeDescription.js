function hoverChangeDescription(nameCard, text) {
    const changeDescription = document.querySelector('.changeDescription');

    document.querySelector(nameCard).addEventListener('mouseover', () => {
        changeDescription.innerHTML = text;
    })

    document.querySelector(nameCard).addEventListener('mouseout', () => {
        changeDescription.innerHTML = "*Hover your mouse cursor over the card to read*";
    })
}

hoverChangeDescription(
    '.html',
    "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir.");

hoverChangeDescription(
    '.css',
    "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas.");

hoverChangeDescription(
    '.js',
    "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web.");

hoverChangeDescription(
    '.git',
    "O Git é um sistema de controle de versão distribuído.");