// Import our custom CSS
import './styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import ls from 'localstorage-slim';

window.addEventListener('DOMContentLoaded', (event) => {
    const m = new bootstrap.Modal(
        document.getElementById("signupModal"),
    );
    
    if (ls.get("form_shown") === null) {
        ls.set("form_shown", true, { ttl: 60 * 60 * 24 * 7 });
        setTimeout(() => {
            m.show();
        }, 1000 * 60 * 1);
    }
});    

console.log("Hello")
