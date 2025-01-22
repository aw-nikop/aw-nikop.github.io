// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const myModal = new bootstrap.Modal(
    document.getElementById("signUpForm"),
);
myModal.show();