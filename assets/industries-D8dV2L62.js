import{H as l}from"./handlebars-Zdko14Kt.js";function s(e){const o=e.split("/");return o.pop()||o.pop()}fetch("/industries.json").then(e=>e.json()).then(e=>{const o=window.location.href.split("#")[0],t=s(o);console.log(e[t]);const n=l.compile(r)(e[t]);console.log(n),document.getElementById("industries-body").innerHTML=n,document.getElementById("hero").style.backgroundImage=`url(${e[t].image})`}).catch(e=>{console.error("Error:",e)});const r=`

<div id="hero">
    <h1> {{title}} </h1>
    <span class="orange-border"></span>
</div>
<section>

    <p>
        {{p1}}
    </p>

    <div class="row flex-column flex-sm-row">
    Our Services Include:
    <ul>
        {{#each bp}}
        <div class="col">
            <li><bold>{{title}}:</bold>{{content}}</li>
        </div>
        {{/each}}
    </ul>
    </div>
    <p>
        {{p2}}
    </p>
</section>
`;
