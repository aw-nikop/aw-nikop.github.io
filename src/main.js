if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', async () => {

        const canvas = document.getElementById('offcanvasNav');
        if (canvas) {
            const bscanvas = new bootstrap.Offcanvas(canvas);
            document.querySelectorAll('.accordion-body a').forEach((el) => {
                el.addEventListener('click', () => {
                    bscanvas.hide();
                });
            });
        }

        const form = document.getElementById('form');
        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                const data = new FormData(e.target);
                const j_data = {};
                for (const pair of data.entries()) {
                    j_data[pair[0]] = pair[1];
                }
                e.target.innerHTML = "<div class='spinner-border' role='status'><span class='visually-hidden'>Loading...</span></div>";
                await fetch('https://default5ad19e668ed94ac9b54c6b903650c7.94.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/e8dbf58121424e3296c49cfd09c73723/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=JOv1Fw2Xui3RYEJVl09oudjU6WPEbDaaEXYewg65Ubw', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(j_data)
                });
                form.innerHTML = '<h2>Message Sent!</h2>';
            });
        }

        const data = ['Small Business', 'Law Firm', 'Non-profit', 'Construction', 'Aerospace', 'Healthcare', 'Finance', 'Engineering'];
        let counter = 1;
        setInterval(() => {
            const tw = document.getElementById('type-writer');
            if (!tw) return;
            tw.innerHTML = data[counter];
            tw.classList.add('fade-in');
            setTimeout(() => {
                tw.classList.remove('fade-in');
            }, 1000);
            counter = counter === data.length - 1 ? 0 : counter + 1;
        }, 2000);
    });
}
