export const loadHeader = async (config) => {

    const response = await fetch('components/header/header.html');
    const text = await response.text();
    const container = document.getElementById('header');
    container.innerHTML = text;

    container.querySelector('#cover').src = config.header.images + 'cover.webp';
    container.querySelector('#cover').alt = config.header.headline;
    container.querySelector('#headline').textContent = config.header.headline;
    container.querySelector('#description').textContent = config.header.description;

};