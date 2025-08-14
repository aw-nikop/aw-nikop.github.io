// Import our custom CSS
import './styles.scss'

if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', async (event) => {
        const bootstrap = await import('bootstrap');

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
                document.getElementById("form").innerHTML = "<h2>Message Sent!</h2>";

            });
        });


        var data = ['Small Business', 'Law Firm', 'Non-profit', 'Construction', 'Aerospace', 'Healthcare', 'Finance', 'Engineering'];
        var counter = 1;
        var curr_timer = null;
        setInterval(() => {
            const tw = document.getElementById("type-writer");
            tw.innerHTML = data[counter];
            tw.classList.add("fade-in");
            setTimeout(() => {
                tw.classList.remove("fade-in");
            }, 1000);
            if (counter == data.length - 1) {
                counter = 0;
            }
            else
                counter++;
        }, 2000);
    // function typeWriter() {
    //     var i = 0;
    //     var txt = data[counter];
    //     counter++;
    //     if (counter >= data.length) {
    //         counter = 0;
    //     }
    //     var speed = 100; // The speed/duration of the effect in milliseconds
    //     var element = document.getElementById("type-writer");
    //     element.innerHTML = "";

    //     function type() {
    //         if (i < txt.length) {
    //             if (document.visibilityState === 'hidden') {
    //                 clearTimeout(curr_timer);
    //                 return;
    //             }
    //             element.innerHTML += txt.charAt(i);
    //             i++;
    //             setTimeout(type, speed);
    //         }
    //     }

    //     if (document.visibilityState === 'visible') {
    //         type();

    //     }

    //     curr_timer = setTimeout(typeWriter, 5000);



    // }
    // typeWriter();
        // document.addEventListener('visibilitychange', function() {
        //     if (document.visibilityState === 'hidden') {
        //         clearTimeout(curr_timer);
        //     } else {
        //         typeWriter();
        //     }
        // });
    });
}




