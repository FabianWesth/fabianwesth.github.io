export default {
    title: "AI-Powered Document Redaction for Clinical Trial Submissions",
    field: "llm-agentic",
    type: ["commercial"],
    status: "prototype",
    description: `Document redaction system for pharmaceutical clinical trial submissions that identifies and redacts personally identifiable information (PII) and commercially confidential information (CCI) from regulatory documents ahead of publication. The system ingests the sponsor's internal redaction guidelines and regulatory requirements to make context-aware decisions that vary by jurisdiction, study phase, and document type. PII detection uses established named-entity recognition services, while CCI detection relies on LLM-based analysis grounded in domain-specific rules and historical redaction precedents. Detection is deliberately optimized for recall, flagging borderline or potentially sensitive content rather than risking that it slips through. The system proposes the redactions, which regulatory professionals always review and approve through a dedicated review interface before they are applied. Redaction quality is safeguarded through backtesting and regression testing against historical, previously redacted submissions, quantifying performance and catching regressions whenever guidelines, rules, or prompts change.`,
    tags: [
        "Azure OpenAI", "Azure AI Language", "Named-Entity Recognition",
        "Recall-Optimized Detection", "Regression Testing", "Human-in-the-Loop",
        "FastAPI", "React", "Docker"
    ]
};
