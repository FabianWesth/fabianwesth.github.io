export default {
    title: "AI-Powered Document Redaction for Clinical Trial Submissions",
    field: "llm-agentic",
    type: ["commercial"],
    status: "prototype",
    description: `Document redaction system for pharmaceutical clinical trial submissions that identifies and redacts commercially confidential information (CCI) from regulatory documents ahead of publication. It ingests the sponsor's internal redaction guidelines and regulatory requirements to make context-aware decisions across jurisdiction, study phase, and document type. CCI detection relies on LLM-based analysis grounded in domain-specific rules and historical redaction precedents, and is deliberately optimized for recall so that borderline or potentially sensitive content is flagged rather than missed. The system proposes the redactions, which regulatory professionals always review and approve through a dedicated review interface before they are applied. Quality is safeguarded through backtesting and regression testing against historical redacted submissions, quantifying performance and catching regressions whenever guidelines, rules, or prompts change.`,
    tags: [
        "Azure OpenAI", "Recall-Optimized Detection", "Regression Testing",
        "Human-in-the-Loop", "FastAPI", "React", "Docker"
    ]
};
