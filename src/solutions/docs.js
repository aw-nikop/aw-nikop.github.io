import Handlebars from "handlebars";

// function getLastUrlPart(url) {
//   const parts = url.split("/");
//   return parts.pop() || parts.pop(); // handle potential trailing slash
// }

// fetch("/solutions.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const url = window.location.href.split("#")[0];
//     const lastPart = getLastUrlPart(url);
//     const template = Handlebars.compile(t);
//     const html = template(data[lastPart]);
//     document.getElementById("solutions-body").innerHTML = html;
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// const t = `

// <div id="hero">
//     <h1> {{title}} </h1>
//     <span class="orange-border"></span>
// </div>
// <section>

//     <p>
//         {{p1}}
//     </p>

//     <div class="row flex-column flex-sm-row">
//         {{#each features}}
//         <div class="col">
//             <div class="card">
//                 <div class="card-icon-container">
//                     <i class="bi {{image}}"></i>
//                 </div>
//                 <div class="card-body">
//                     <h5 class="card-title">{{title}}</h5>
//                     <p class="card-text">{{content}}</p>
//                 </div>
//             </div>
//         </div>
//         {{/each}}
//     </div>
//     <p>
//         {{p2}}
//     </p>
// </section>
// `;
