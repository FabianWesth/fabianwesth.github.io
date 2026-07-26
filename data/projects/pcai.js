// Fields: field (one), type (one or more), status (optional).
// Allowed slugs are documented in data/projects/README.md.
export default {
    title: "PCAI: Prostate Cancer Aggressiveness Index",
    field: "biomed-dl",
    type: ["research", "commercial"],
    status: "mature",
    image: { src: "data/projects/images/pcai.png", alt: "PCAI: Prostate Cancer Aggressiveness Index" },
    description: `Built a production-grade AI system for automated prostate cancer survival and risk assessment from histopathological biopsy images. PCAI is built from a multi-national dataset consisting of 83,864 images from 25,591 patients with up to 20 years of patient follow-up and is the first model to achieve a more accurate risk prediction than the current gold standard of the expert-assigned ISUP grade. The model utilizes attention-based multiple-instance learning, self-attention and domain-adversarial training to generalize to five unseen external cohorts from different imaging devices and clinics. Interpretability is provided by attention heatmaps and an additional cancer detection module. A conformal-prediction-based uncertainty estimation module calculates an additonal confidence score for each risk prediction. PCAI is officially certified by the Swedish healthcare authority (IVO) and actively used in clinical practice.`,
    tags: [
        "PyTorch Lightning", "Histopathology", "Clinical AI", "Uncertainty Estimation",
        "Interpretability", "Multiple-Instance Learning", "Medical Imaging",
        "Domain-Adversarial Training", "Self-Attention", "Conformal Prediction"
    ],
    links: [
        { label: "View Publication", url: "https://doi.org/10.1016/j.media.2025.103884" },
        { label: "Learn More", url: "https://www.spearpoint.se/en/for-lakare" }
    ]
};
