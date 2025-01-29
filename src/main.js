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

        setTimeout(() => {
            m.show();
            ls.set("form_shown", true, { ttl: 60 * 60 * 24 * 7 });
        }, 1000 * 20 * 1);
    }

    var canvas = document.getElementById("offcanvasNav");
    var bscanvas = new bootstrap.Offcanvas(canvas);
    document.querySelectorAll('.accordion-body a').forEach((el) => {
        el.addEventListener('click', () => {
            bscanvas.hide();
        });
    });
});

