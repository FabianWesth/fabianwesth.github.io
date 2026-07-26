export default {
    title: "Personal Health Agent: AI-Powered Health Data Analysis & Coaching",
    field: "llm-agentic",
    type: ["personal"],
    status: "prototype",
    image: { src: "data/projects/images/health-agent.jpg", alt: "Man with a backpack outdoors" },
    description: `A full-stack AI health assistant that connects to wearable device data, calendar, and biomedical literature to provide personalized, evidence-based health insights. The system features an agentic LLM backend that autonomously retrieves and cross-references Garmin health metrics, Google Calendar schedules, and scientific research via Model Context Protocol (MCP) servers. Health data is persistently stored for longitudinal trend analysis, and a day evaluation engine combines deterministic quantitative scoring with LLM-generated qualitative assessments tailored to individual health goals.<br><small style="color: var(--text-tertiary); font-size: 0.8em;">Photo by <a href="https://unsplash.com/@zanlazarevic" target="_blank" rel="noopener noreferrer">Zan Lazarevic</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a></small>`,
    tags: [
        "Pydantic AI", "MCP", "FastAPI", "React", "TypeScript", "Azure OpenAI",
        "Tailwind CSS", "Agentic Workflows"
    ]
};
