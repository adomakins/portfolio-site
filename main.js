import { loadHeader } from '../components/header/header.js';
import { loadFooter } from '../components/footer/footer.js';
import { loadCards } from '../components/cards/cards.js';\

const config = await getConfig();

document.addEventListener("DOMContentLoaded", async () => {

    await loadHeader(config);
    await loadCards(config);
    await loadFooter(config);

    console.log(config);

});

async function getConfig() {

    const domainsTXT = await fetch('assets/configuration/domains.json');
    const domainsJSON = await domainsTXT.json();
    const domain = window.location.hostname;
    return domainsJSON[domain];

}