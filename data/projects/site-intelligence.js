export default {
    title: "Site Intelligence: Structured Data Extraction from Telecom CAD Drawings",
    field: "llm-agentic",
    type: ["commercial"],
    status: "mature",
    image: {
        src: "data/projects/images/site-intelligence.jpg",
        alt: "Site Intelligence: Structured Data Extraction from Telecom CAD Drawings"
    },
    description: `Production system for automated extraction of structured site data from dense, multi-page German telecom CAD drawings in A0 format using multimodal vision LLMs. The extraction pipeline classifies each document to apply document-type-specific processing profiles and prompts, then routes pages to specialized extraction heads targeting different data domains (tables, drawings, metadata, etc.). Pages are specifically preprocessed and adaptively split into overlapping patches to preserve fine-grained detail and account for effective internal VLM resolution. Each head iteratively refines its output across patches, progressively assembling complete structured records from information scattered across pages. Tracing powered by Arize Phoenix. Consistently achieves >95% extraction accuracy across hundreds of data fields. Deploys in client-site GCP to process tens of thousands of documents at scale.<br><small style="color: var(--text-tertiary); font-size: 0.8em;">Photo by <a href="https://unsplash.com/de/@cesium235" target="_blank" rel="noopener noreferrer">Christopher</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a></small>`,
    tags: [
        "Claude API", "Multimodal LLMs", "Structured Extraction", "Arize Phoenix",
        "Evaluation Framework"
    ]
};
