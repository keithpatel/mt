// Simple component loader
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(content => {
            document.getElementById(id).innerHTML = content;
        });
}

// Load header and footer on every page
loadComponent('header', 'header.html');
loadComponent('footer', 'footer.html');