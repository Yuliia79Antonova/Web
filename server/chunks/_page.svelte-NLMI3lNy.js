import { p as push, F as ensure_array_like, L as attr_class, M as clsx, N as attr, G as escape_html, n as pop } from './exports-kMKi5_jl.js';
import './client-JT3TvoFH.js';

function _page($$payload, $$props) {
  push();
  let filteredLogos;
  const logos = [
    {
      src: "/images/logo1.png",
      title: "TwoU",
      year: 2022,
      note: "Logo for company",
      type: "label"
    },
    {
      src: "/images/logo2.png",
      title: "Fluffy Head",
      year: 2023,
      note: "Logo for salon",
      type: "logo"
    },
    {
      src: "/images/logo3.png",
      title: "Microbian",
      year: 2021,
      note: "Hero",
      type: "game"
    },
    {
      src: "/images/logo4.png",
      title: "SuperMariia",
      year: 2024,
      note: "Hero",
      type: "cartoon"
    }
  ];
  filteredLogos = logos;
  const each_array = ensure_array_like(filteredLogos);
  $$payload.out += `<section class="svelte-qgc58d"><h2 class="svelte-qgc58d">Logos Heroes</h2> <p class="svelte-qgc58d">This is a gallery of logos I have designed. Clean, bold, and full of character.</p> <div class="filter-buttons svelte-qgc58d"><button${attr_class(clsx("selected"), "svelte-qgc58d")}>All</button> <button${attr_class(clsx(""), "svelte-qgc58d")}>Label</button> <button${attr_class(clsx(""), "svelte-qgc58d")}>Game</button> <button${attr_class(clsx(""), "svelte-qgc58d")}>Logo</button> <button${attr_class(clsx(""), "svelte-qgc58d")}>Cartoon</button></div> <div class="gallery svelte-qgc58d"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let logo = each_array[$$index];
    $$payload.out += `<div class="card svelte-qgc58d"><img${attr("src", logo.src)}${attr("alt", logo.title)} class="logo-image svelte-qgc58d"> <div class="info svelte-qgc58d"><h3 class="svelte-qgc58d">${escape_html(logo.title)}</h3> <p class="svelte-qgc58d"><strong>Год:</strong> ${escape_html(logo.year)}</p> <p class="svelte-qgc58d">${escape_html(logo.note)}</p></div></div>`;
  }
  $$payload.out += `<!--]--></div> <button class="svelte-qgc58d">← Back to Works</button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></section>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-NLMI3lNy.js.map
