import Handlebars from "handlebars";

function getLastUrlPart(url) {
    const parts = url.split("/");
    return parts.pop() || parts.pop(); // handle potential trailing slash
}
fetch("/industries.json")
    .then((response) => response.json())
    .then((data) => {
        const url = window.location.href.split("#")[0];
        const lastPart = getLastUrlPart(url);
        console.log(data[lastPart]);
        const template = Handlebars.compile(t);
        const html = template(data[lastPart]);
        console.log(html)
        document.getElementById("industries-body").innerHTML = html;
    })
    .catch((error) => {
        console.error("Error:", error);
    });

const t = `

<div id="hero">
    <h1> {{title}} </h1>
    <span class="orange-border"></span>
</div>
<section>

    <p>
        {{p1}}
    </p>
    <hr>
    <div class="row flex-column flex-sm-row">
    <h3>Our Services Include:</h3>
    <ul>
        {{#each bp}}
        <div class="col">
            <li><span class='fw-bold'>{{title}}</span><br> {{content}}</li>
        </div>
        {{/each}}
    </ul>
    </div>
    <p>
        {{p2}}
    </p>
</section>
`;
