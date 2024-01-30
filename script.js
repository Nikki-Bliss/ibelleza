
// Function to load content from separate HTML files
function loadPage(pageName) {
    // Use the Fetch API to load HTML content from the specified file
    fetch(`domains/${pageName}/${pageName}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            window.location.hash = pageName;
        });
}

window.onload = function() {
    const fragment = window.location.hash.substr(1);
    if (fragment) {
        loadPage(fragment);
    } else {
        // Default to 'home' if no fragment identifier is present
        loadPage('home')
    }
}

window.onhashchange = function() {
    const fragment = window.location.hash.substr(1);
    if (fragment) {
        loadPage(fragment);
    } else {
        // Default to 'home' if no fragment identifier is present
        loadPage('home')
    }
}