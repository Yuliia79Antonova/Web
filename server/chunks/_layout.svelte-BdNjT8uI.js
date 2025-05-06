import { p as push, E as fallback, F as ensure_array_like, G as escape_html, I as slot, J as bind_props, n as pop } from './exports-kMKi5_jl.js';
import './client-JT3TvoFH.js';

function _layout($$payload, $$props) {
  push();
  let title = fallback($$props["title"], "");
  $$payload.out += `<main class="svelte-1ra6djl"><div class="home-icon svelte-1ra6djl"><svg viewBox="0 0 24 24" class="svelte-1ra6djl"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" class="svelte-1ra6djl"></path></svg></div> `;
  if (title) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(title.split(""));
    $$payload.out += `<h1 class="svelte-1ra6djl"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let letter = each_array[$$index];
      $$payload.out += `<span class="svelte-1ra6djl">${escape_html(letter)}</span>`;
    }
    $$payload.out += `<!--]--></h1>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main>`;
  bind_props($$props, { title });
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-BdNjT8uI.js.map
