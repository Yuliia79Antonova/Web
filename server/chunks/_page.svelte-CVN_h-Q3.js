import { p as push, F as ensure_array_like, L as attr_class, N as attr, G as escape_html, n as pop } from './exports-kMKi5_jl.js';
import './client-JT3TvoFH.js';

function _page($$payload, $$props) {
  push();
  let filteredArtworks;
  let filter = "all";
  const artworks = [
    {
      src: "/images/art1.jpg",
      title: "It is rain in Ireland",
      year: 2021,
      size: "40x60 sм",
      medium: "acrylic"
    },
    {
      src: "/images/art2.jpg",
      title: "Cat",
      year: 2022,
      size: "30x40 sм",
      medium: "acrylic"
    },
    {
      src: "/images/art3.jpg",
      title: "Dog",
      year: 2023,
      size: "15x10 sm",
      medium: "pencil"
    },
    {
      src: "/images/art4.jpg",
      title: "A little house near the sea",
      year: 2020,
      size: "17x12 sm",
      medium: "acrylic"
    },
    {
      src: "/images/art5.jpg",
      title: "Poppies",
      year: 2023,
      size: "40x60 sм",
      medium: "acrylic"
    },
    {
      src: "/images/art6.jpg",
      title: "Peacock",
      year: 2023,
      size: "40x60 sм",
      medium: "acrylic"
    },
    {
      src: "/images/art7.jpg",
      title: "Apple",
      year: 2024,
      size: "15x12 sм",
      medium: "pencil"
    },
    {
      src: "/images/art8.jpg",
      title: "Inside",
      year: 2022,
      size: "352x396",
      medium: "digital"
    },
    {
      src: "/images/art9.jpg",
      title: "Seashell",
      year: 2022,
      size: "394x545",
      medium: "digital"
    },
    {
      src: "/images/art10.jpg",
      title: "Waterfall",
      year: 2022,
      size: "591x1280",
      medium: "photo"
    },
    {
      src: "/images/art13.jpg",
      title: "Circle",
      year: 2022,
      size: "591x1280",
      medium: "photo"
    }
  ];
  filteredArtworks = artworks;
  const each_array = ensure_array_like(filteredArtworks);
  $$payload.out += `<section class="svelte-9cji9"><h2 class="svelte-9cji9">Pictures Photos Stamps Baners</h2> <p class="svelte-9cji9">Here are some of my paintings and illustrations. Grab a cup of tea — it's a colorful ride.</p> <div class="filter-buttons svelte-9cji9"><button${attr_class(filter === "all", "svelte-9cji9")}>All</button> <button${attr_class(filter === "acrylic", "svelte-9cji9")}>Acrylic</button> <button${attr_class(filter === "pencil", "svelte-9cji9")}>Pencil</button> <button${attr_class(filter === "digital", "svelte-9cji9")}>Digital</button> <button${attr_class(filter === "photo", "svelte-9cji9")}>Photo</button></div> <div class="gallery svelte-9cji9"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let art = each_array[$$index];
    $$payload.out += `<div class="card svelte-9cji9"><img${attr("src", art.src)}${attr("alt", art.title)} class="art-image svelte-9cji9"> <div class="info svelte-9cji9"><h3 class="svelte-9cji9">${escape_html(art.title)}</h3> <p class="svelte-9cji9"><strong>Size:</strong> ${escape_html(art.size)}</p> <p class="svelte-9cji9"><strong>Material:</strong> ${escape_html(art.medium)}</p> <p class="svelte-9cji9"><strong>Year:</strong> ${escape_html(art.year)}</p></div></div>`;
  }
  $$payload.out += `<!--]--></div> <button class="svelte-9cji9">← Back to Works</button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></section>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CVN_h-Q3.js.map
