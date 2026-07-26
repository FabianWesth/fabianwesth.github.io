export default {
    title: "MCP Server for Semantic Enterprise Data Access",
    field: "llm-agentic",
    type: ["commercial"],
    status: "prototype",
    description: `A Model Context Protocol (MCP) server that lets AI assistants perform semantic search and retrieval-augmented generation (RAG) over a structured business data platform. The system ingests records through the platform's APIs, converts them into vector embeddings, and stores them in Qdrant for efficient similarity search. Deployed as a containerized service behind a GCP authentication proxy, it provides secure, semantic access to enterprise business data.`,
    tags: ["MCP", "RAG", "Vector Search", "Qdrant", "Azure OpenAI", "FastAPI", "Google Cloud"]
};
