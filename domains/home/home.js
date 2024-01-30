function loadMenu() {
    // Use the Fetch API to load HTML content from the specified file
    fetch('domains/home/menu/menu.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('menu').innerHTML = html;
        });
}

function closeMenu() {
    const menu = document.getElementById("menu-head");
    menu.style.transform = "translateX(-100%)";
}