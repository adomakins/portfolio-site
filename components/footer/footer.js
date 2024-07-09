export const loadFooter = async (config) => {

    const response = await fetch('components/footer/footer.html');
    const text = await response.text();
    const container = document.getElementById('footer');
    container.innerHTML = text;
    
};