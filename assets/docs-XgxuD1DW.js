import{H as c}from"./handlebars-oU-ZQY5K.js";function n(t){const e=t.split("/");return e.pop()||e.pop()}fetch("/solutions.json").then(t=>t.json()).then(t=>{const e=window.location.href.split("#")[0],s=n(e),o=c.compile(a)(t[s]);document.getElementById("solutions-body").innerHTML=o,document.getElementById("hero").style.backgroundImage=`url(${t[s].image})`}).catch(t=>{console.error("Error:",t)});const a=`

<div id="hero">
    <h1> {{title}} </h1>
    <span class="orange-border"></span>
</div>
<section>

    <p>
        {{p1}}
    </p>

    <div class="row flex-column flex-sm-row">
        {{#each features}}
        <div class="col">
            <div class="card">
                <div class="card-icon-container">
                    <i class="bi {{image}}"></i>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{title}}</h5>
                    <p class="card-text">{{content}}</p>
                </div>
            </div>
        </div>
        {{/each}}
    </div>
    <p>
        {{p2}}
    </p>
</section>
`;
