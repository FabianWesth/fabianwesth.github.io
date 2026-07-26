# Projects data

Each project on the Projects page is one file in this folder. `projects.html`
imports them through `index.js` and renders the cards, the `Field • Type • Status`
line, and the filter bar automatically. You never write the category line by hand.

## Add a project

1. Copy an existing file (e.g. `adhere.js`) to `data/projects/my-project.js`.
2. Fill in the fields (see below).
3. In `index.js`, add `import myProject from './my-project.js';` and drop
   `myProject` into the `projects` array where you want it to appear.

## Fields

```js
export default {
    title: "Project title",            // required
    field: "generative-ai",            // required, exactly one (see slugs)
    type: ["client-engagement"],       // required, one or more (see slugs)
    status: "production",              // optional; omit to leave off the maturity axis
    image: { src: "data/Foo.png", alt: "…" }, // optional
    description: `Free text. HTML is allowed (e.g. <br>, photo-credit <small>…</small>).`,
    tags: ["Python", "FastAPI"],       // shown as chips; not filterable, so be selective
    links: [                           // optional
        { label: "View Publication", url: "https://…" }
    ]
};
```

## Allowed slugs

These drive the category line and the filter bar. Add a new one only if you also
add its label to the `LABELS`/`ORDER` maps in `projects.html`.

- **field** (pick one): `biomed-dl` (Biomedicine & Deep Learning),
  `llm-agentic` (LLMs & Agentic AI), `data-science` (Data Science & Engineering),
  `space-systems` (Space Systems)
- **type** (one or more): `research`, `commercial`, `personal`
- **status** (pick one): `mature` (finished & real — live products or completed
  research), `prototype` (working proof-of-concept)

## Ordering

The order of the `projects` array in `index.js` is the order on the page
(currently maturity: Mature first, then Prototype).
