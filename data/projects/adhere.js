// No image yet: export the slide visual to data/projects/images/adhere.png and add
//   image: { src: "data/projects/images/adhere.png", alt: "AI Patient-Adherence Coach with Built-in Pharmacovigilance" },
export default {
    title: "AI Patient-Adherence Coach with Built-in Pharmacovigilance",
    field: "llm-agentic",
    type: ["commercial"],
    status: "mature",
    description: `Designed and built a comprehensive agentic AI application for personalized patient medication-adherence coaching, with a built-in pharmacovigilance safety layer. A large share of patients on long-term medication do not take it as prescribed, driving poor outcomes and avoidable cost, while generic coaching does not adapt to why each individual struggles. The AI agent addresses this by running evidence-based Motivational Interviewing, adapting its tone and technique to each patient's psychology through behavioural profiling. It runs on a provider-agnostic, open-weight LLM stack served via vLLM and Ollama, self-hostable in Germany or the wider EU to keep patient data within GDPR, and combines user-specific memory, retrieval tooling for additional context, and voice capabilities. Safety is built in by design: defence-in-depth guardrails, golden-dataset regression testing for prompt tuning and drift detection, Petri-based adversarial red-teaming, and full observability keep the agent safe and on-message as it evolves. Patient-facing conversations also create a pharmacovigilance duty, since adverse events a patient mentions must be detected and reported and manual transcript review does not scale. To handle this, an SOP-grounded detector screens finished conversations and flags reportable safety events into a human-in-the-loop review queue with a full audit trail, turning a hidden compliance liability into a managed, auditable process. The whole stack is containerized and runs on a Kubernetes cluster, with the open-weight models served on GPU-backed nodes.`,
    tags: [
        "PydanticAI", "Open-Weight LLMs", "vLLM", "Ollama", "RAG", "Agent Memory",
        "LLM-as-a-Judge", "Golden Datasets", "Adversarial Red-Teaming", "Guardrails",
        "Pharmacovigilance", "Observability", "Kubernetes", "GPU Deployment"
    ]
};
