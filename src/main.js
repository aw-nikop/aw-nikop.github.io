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


    document.getElementById("form").addEventListener('submit', (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        var j_data = {}
        for (var pair of data.entries()) {
            j_data[pair[0]] = pair[1]
        }
        e.target.innerHTML = "<div class='spinner-border' role='status'>  <span class='visually-hidden'>Loading...</span> </div>";
        fetch("https://prod-127.westus.logic.azure.com:443/workflows/e8dbf58121424e3296c49cfd09c73723/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=LRBM3KKA0hhd3p6K-42GPUfXxnkee-XRhM1Zj5UOUzU", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(j_data)
        }).then((res) => {
            if (res.ok) {
                document.getElementById("form").innerHTML = "<h2>Message Sent!</h2>";
            } else {
                document.getElementById("form").innerHTML = "<h2>Something went wrong. <a href='mailto:support@altonworks.com'>Click Here</a> to send an email manually.</h2>";
            }
        });
    });
});

