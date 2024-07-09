import { loadHeader } from '../components/header/header.js';
import { loadFooter } from '../components/footer/footer.js';
import { loadCards } from '../components/cards/cards.js';

document.addEventListener("DOMContentLoaded", async () => {

    const config = await getConfig();

    // Load HTML components
    loadHeader(config);
    await loadCards(config);
    loadFooter(config);

    // Update domain elements
    updateHeader(config);
    // updateStyles(config);
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
    // document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').content = config.colors.background;
    document.querySelector('meta[name="theme-color"]').content = config.colors.background;

}

function updateStyles(config) {

    // Update body styles
    document.body.style.backgroundColor = config.colors.background; // Background color
    document.body.style.color = config.colors.primary; // Text color

    document.querySelectorAll('.callout').forEach(callout => {
        // callout.style.borderColor = config.colors.borders;
        callout.style.borderColor = config.colors.borders;
        console.log(`Updated callout element: ${callout}, border color: ${config.colors.borders}`);
    });

    // Update .container class
    document.querySelectorAll('.container').forEach(container => {
        container.style.backgroundColor = config.colors.containers;
        console.log(`Updated container element: ${container}, background color: ${config.colors.containers}`);
    });

    document.querySelectorAll('.callout').forEach(callout => {
        callout.style.borderColor = config.colors.borders;
    });

}