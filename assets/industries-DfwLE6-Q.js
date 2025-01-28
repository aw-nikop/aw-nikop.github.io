import{H as n}from"./handlebars-oU-ZQY5K.js";function l(o){const t=o.split("/");return t.pop()||t.pop()}fetch("/industries.json").then(o=>o.json()).then(o=>{const t=window.location.href.split("#")[0],e=l(t);console.log(o[e]);const s=n.compile(r)(o[e]);console.log(s),document.getElementById("industries-body").innerHTML=s}).catch(o=>{console.error("Error:",o)});const r=`

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
