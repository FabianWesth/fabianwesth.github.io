export default {
    title: "AI-Powered Document Redaction for Clinical Trial Submissions",
    field: "llm-agentic",
    type: ["commercial"],
    status: "prototype",
    image: { src: "data/projects/images/redaction.jpg", alt: "Gloved hands handling a cable in a medical setting" },
    description: `Document redaction system for pharmaceutical clinical trial submissions that identifies and redacts commercially confidential information (CCI) from documents in the Trial Master File (TMF) ahead of publication. It ingests the sponsor's internal redaction guidelines and regulatory requirements to make context-aware decisions across jurisdiction, study phase, and document type. CCI detection relies on LLM-based analysis grounded in domain-specific rules and historical redaction precedents, and is deliberately optimized for recall so that borderline or potentially sensitive content is flagged rather than missed. The system proposes the redactions, which regulatory professionals always review and approve through a dedicated review interface before they are applied. Quality is safeguarded through backtesting and regression testing against historical redacted submissions, quantifying performance and catching regressions whenever guidelines, rules, or prompts change.<br><small style="color: var(--text-tertiary); font-size: 0.8em;">Photo by <a href="https://unsplash.com/@towfiqu999999" target="_blank" rel="noopener noreferrer">Towfiqu barbhuiya</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a></small>`,
    tags: [
        "Azure OpenAI", "Recall-Optimized Detection", "Regression Testing",
        "Human-in-the-Loop", "FastAPI", "React", "Docker"
    ]
};
