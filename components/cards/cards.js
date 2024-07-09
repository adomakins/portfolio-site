export const loadCards = async () => {
    // Fetch the card template from cards.html
    const templateResponse = await fetch('components/cards/cards.html');
    if (!templateResponse.ok) {
        console.error('Failed to load cards.html');
        return;
    }
    const templateText = await templateResponse.text();
    // Insert the template into the body of the document so it can be used
    document.body.insertAdjacentHTML('beforeend', templateText);

    // Fetch the projects data from projects.json
    const response = await fetch('assets/projects/projects.json');
    if (!response.ok) {
        console.error('Failed to load projects.json');
        return;
    }

    const projects = await response.json();

    // Get the card template from the inserted template
    const cardTemplate = document.getElementById("card-callout");

    // Get the three lists where the cards will be appended
    const activeProjectsList = document.getElementById("active-projects");
    const projectIdeasList = document.getElementById("project-ideas");
    const previousProjectsList = document.getElementById("previous-projects");

    // Iterate over each project and append it to the correct list based on its status
    projects.forEach(project => {
        // Clone the card template
        const cardItem = document.importNode(cardTemplate.content, true);
        // Set the title and description for the card
        cardItem.querySelector('.title').textContent = project.title;
        cardItem.querySelector('.description').textContent = project.description;

        // Append the card to the appropriate list based on the project's status
        if (project.status === "Active") {
            activeProjectsList.appendChild(cardItem);
        } else if (project.status === "Idea") {
            projectIdeasList.appendChild(cardItem);
        } else if (project.status === "Previous") {
            previousProjectsList.appendChild(cardItem);
        } else {
            console.warn(`Unknown project status: ${project.status}`);
        }
    });
};