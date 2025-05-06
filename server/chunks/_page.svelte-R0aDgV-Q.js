import { p as push, F as ensure_array_like, L as attr_class, M as clsx, N as attr, G as escape_html, n as pop } from './exports-kMKi5_jl.js';
import './client-JT3TvoFH.js';

function _page($$payload, $$props) {
  push();
  let filteredPrograms;
  const programs = [
    {
      src: "/images/program1.png",
      title: "Flower Topia",
      year: 2023,
      type: "game",
      note: "mini-game"
    },
    {
      src: "/images/program2.png",
      title: "To Do App",
      year: 2022,
      type: "app",
      note: "easy-to-use application"
    },
    {
      src: "/images/program3.png",
      title: "Pixel Warrior",
      year: 2024,
      type: "game",
      note: "mini-game"
    },
    {
      src: "/images/program4.png",
      title: "Budget Buddy",
      year: 2021,
      type: "app",
      note: "financial friend"
    }
  ];
  filteredPrograms = programs;
  const each_array = ensure_array_like(filteredPrograms);
  $$payload.out += `<section class="svelte-19516yk"><h2 class="svelte-19516yk">Programs</h2> <p class="svelte-19516yk">Here you’ll find some of the applications and tools I’ve created — useful, fun, or just experimental!</p> <div class="filter-buttons svelte-19516yk"><button${attr_class(clsx("selected"), "svelte-19516yk")}>All</button> <button${attr_class(clsx(""), "svelte-19516yk")}>Game</button> <button${attr_class(clsx(""), "svelte-19516yk")}>App</button></div> <div class="gallery svelte-19516yk"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let program = each_array[$$index];
    $$payload.out += `<div class="program-tile svelte-19516yk"><img${attr("src", program.src)}${attr("alt", program.title)} class="program-image svelte-19516yk"> <div class="program-card svelte-19516yk"><div class="program-title svelte-19516yk">${escape_html(program.title)}</div> <div class="program-meta svelte-19516yk"><strong>${escape_html(program.year)}</strong> • ${escape_html(program.type)}</div> <p class="program-note svelte-19516yk">${escape_html(program.note)}</p></div></div>`;
  }
  $$payload.out += `<!--]--></div> <button class="svelte-19516yk">← Back to Works</button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></section>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-R0aDgV-Q.js.map
