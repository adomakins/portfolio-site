import { loadHeader } from '../components/header/header.js';
import { loadFooter } from '../components/footer/footer.js';
import { loadCards } from '../components/cards/cards.js';

document.addEventListener("DOMContentLoaded", async () => {

    const config = await getConfig();

    // Load HTML components
    await loadHeader(config);
    await loadCards(config);
    await loadFooter(config);

    // Update dynamic elements
    updateHeader(config);
    updateStyles(config);

});

async function getConfig() {

    const domainsTXT = await fetch('assets/configuration/domains.json');
    const domainsJSON = await domainsTXT.json();
    const domain = window.location.hostname;

    return domainsJSON[domain];

}

function updateHeader(config) {

    document.title = config.header.headline;
    document.querySelector('link[rel="icon"]').href = config.header.images + "favicon.png";
    document.querySelector('meta[name="theme-color"]').content = config.colors.background;

}

function updateStyles(config) {

    // Update body styles
    document.body.style.backgroundColor = config.colors.background; // Background color
    document.body.style.color = config.colors.primary; // Text color


    // Update .callout class border color
    document.querySelectorAll('.callout').forEach(callout => {
        callout.style.borderColor = config.colors.borders;
    });

    // Update .container class background color
    document.querySelectorAll('.container').forEach(container => {
        container.style.backgroundColor = config.colors.containers;
    });

    // Update callout titles to primary color
    document.querySelectorAll('.callout .title').forEach(icon => {
        icon.style.color = config.colors.primary;
    });

    // Update paragraphs and icons to secondary color
    document.querySelectorAll('.material-icons, p').forEach(item => {
        item.style.color = config.colors.secondary;
    });

}