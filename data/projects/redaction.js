export default {
    title: "AI-Powered Document Redaction for Clinical Trial Submissions",
    field: "llm-agentic",
    type: ["commercial"],
    status: "prototype",
    image: { src: "data/projects/images/redaction.jpg", alt: "Gloved hands handling a cable in a medical setting" },
    description: `Document redaction system for pharmaceutical clinical trial submissions that redacts personally identifiable information (PII) and commercially confidential information (CCI) from Trial Master File (TMF) documents ahead of publication. It ingests the sponsor's internal redaction guidelines and regulatory requirements to make context-aware decisions across jurisdiction, study phase, and document type. PII and CCI detection relies on LLM-based analysis grounded in domain-specific rules and historical redaction precedents, and is deliberately optimized for recall, flagging borderline or potentially sensitive content rather than missing it. The system proposes redactions that regulatory professionals review and approve in a dedicated interface before they are applied. Quality is safeguarded through backtesting and regression testing against historical redacted submissions, quantifying performance and catching regressions whenever guidelines, rules, or prompts change.<br><small style="color: var(--text-tertiary); font-size: 0.8em;">Photo by <a href="https://unsplash.com/@towfiqu999999" target="_blank" rel="noopener noreferrer">Towfiqu barbhuiya</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a></small>`,
    tags: [
        "Azure OpenAI", "Recall-Optimized Detection", "Regression Testing",
        "Human-in-the-Loop", "FastAPI", "React", "Docker"
    ]
};
