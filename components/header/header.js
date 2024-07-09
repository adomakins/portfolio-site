export const loadHeader = async (config) => {

    const response = await fetch('components/header/header.html');
    const text = await response.text();
    const container = document.getElementById('header');
    container.innerHTML = text;

    container.querySelector('#headline').textContent = config.headline;
    container.querySelector('#description').textContent = config.description;

};