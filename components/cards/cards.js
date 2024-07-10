export const loadCards = async () => {

    // Fetch the card template and insert into the document body
    document.body.insertAdjacentHTML('beforeend', await (await fetch('components/cards/cards.html')).text());

    // Fetch the projects data from projects.json
    const projects = await (await fetch('assets/projects/projects.json')).json();

    // Get the card template from the inserted template
    const callout = document.getElementById("card-callout");

    // Get the three lists where the cards will be appended
    const active = document.getElementById("active-projects");
    const ideas = document.getElementById("project-ideas");
    const previous = document.getElementById("previous-projects");

    // Iterate over each project and append it to the correct list based on its status
    projects.forEach(project => {

        // Clone the card template (true = entire subtree)
        const card = document.importNode(callout.content, true);

        // Set the title and description for the card
        card.querySelector('.title').textContent = project.title;
        card.querySelector('.title').style.color = project.primary;
        
        card.querySelector('.description').textContent = project.description;

        // Create an anchor element and set its href attribute
        const link = document.createElement('a');
        link.href = project.link;
        link.target = "_blank"; // Open link in a new tab
        link.appendChild(card);

        // Append the card to the appropriate list based on the project's status
        if (project.status === "Active") {
            active.appendChild(link);
        } else if (project.status === "Idea") {
            ideas.appendChild(link);
        } else if (project.status === "Previous") {
            previous.appendChild(link);
        }
    });
};