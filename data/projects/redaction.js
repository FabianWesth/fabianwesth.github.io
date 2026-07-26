export default {
    title: "AI-Powered Document Redaction for Clinical Trials",
    field: "llm-agentic",
    type: ["commercial"],
    status: "prototype",
    image: { src: "data/projects/images/redaction.jpg", alt: "Gloved hands handling a cable in a medical setting" },
    description: `Document redaction system for pharmaceutical clinical trials that identifies and redacts commercially confidential information (CCI) across the full range of document types held in a trial's Trial Master File (TMF), before they are shared or disclosed. It ingests the sponsor's internal redaction guidelines and regulatory requirements to make context-aware decisions across jurisdiction, study phase, and document type. CCI detection relies on LLM-based analysis grounded in domain-specific rules and historical redaction precedents, and is deliberately optimized for recall so that borderline or potentially sensitive content is flagged rather than missed. The system only proposes redactions; a reviewer approves each one through a dedicated interface before it is applied. Quality is safeguarded through backtesting and regression testing against historical redacted documents, quantifying performance and catching regressions whenever guidelines, rules, or prompts change.<br><small style="color: var(--text-tertiary); font-size: 0.8em;">Photo by <a href="https://unsplash.com/@towfiqu999999" target="_blank" rel="noopener noreferrer">Towfiqu barbhuiya</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a></small>`,
    tags: [
        "Azure OpenAI", "Recall-Optimized Detection", "Regression Testing",
        "Human-in-the-Loop", "FastAPI", "React", "Docker"
    ]
};
