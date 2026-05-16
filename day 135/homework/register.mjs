import authorization from "./Auth.js";
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    authorization();
});