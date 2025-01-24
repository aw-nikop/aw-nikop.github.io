import Handlebars from "handlebars";
function getLastUrlPart(url) {
    const parts = url.split('/');
    return parts.pop() || parts.pop();  // handle potential trailing slash
}

const data = {
    "tech-support": {
        "p1": "Tech Support",
        "features": [{
            "image": "bi-cpu",
            "title": "BI Integration",
            "content": "Integrate with your BI tools to get the most out of your data."
        }, 
        {
            "image": "bi-cpu",
            "title": "BI Integration",
            "content": "Integrate with your BI tools to get the most out of your data."
        },
        {
            "image": "bi-cpu",
            "title": "BI Integration",
            "content": "Integrate with your BI tools to get the most out of your data."
        }
        ]
    }
}

const t = `
<p>
    {{p1}}
</p>

<div class="row">
    {{#each features}}
    <div class="col">
        <div class="card">
            <div class="">
                <i class="bi {{image}}"></i>
            </div>
            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <p class="card-text">{{content}}</p>
            </div>
        </div>
    </div>
    {{/each}}
</div>`;


const url = window.location.href;
const lastPart = getLastUrlPart(url);
console.log(lastPart);
console.log(data[lastPart]);
const template = Handlebars.compile(t);
const html = template(data[lastPart]);
document.getElementById('body').innerHTML = html;