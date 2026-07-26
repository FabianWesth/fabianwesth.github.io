export default {
    title: "AI Engineering Assistant for Airframe Stress Analysis",
    field: "llm-agentic",
    type: ["commercial"],
    status: "prototype",
    image: { src: "data/projects/images/airframe.png", alt: "AI Engineering Assistant for Airframe Stress Analysis" },
    description: `An AI-powered multi-modal engineering assistant that autonomously answers complex structural analysis questions by reasoning over technical reference literature. The system deeply ingests textbooks using vision language models, building a searchable knowledge base of theory, equations, charts, and diagrams. When given an engineering question, the agent searches for relevant material, visually inspects charts and figures using custom image interpretation tools, reads precise data points from graphs, and performs calculations, mirroring the human engineering process. All answers are grounded and referenced in source material for full traceability.`,
    tags: [
        "Pydantic AI", "Multimodal RAG", "Vision Language Models", "Agentic Workflows",
        "Graph Data Extraction", "FastAPI", "ChromaDB", "Streamlit"
    ]
};
