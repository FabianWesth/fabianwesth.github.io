export default {
    title: "Kidney Glomeruli Classification",
    field: "biomed-dl",
    type: ["research"],
    status: "mature",
    image: { src: "data/projects/images/glomeruli.png", alt: "Kidney Glomeruli Classification" },
    description: `Developed deep learning pipeline for automated classification of glomeruli from multichannel fluorescence microscopy images to distinguish healthy vs. diseased kidney tissue and wild-type vs. knockout mouse genotypes. The system combines computer vision-based feature extraction with convolutional neural networks for downstream analysis. Integrates Cellpose segmentations and GradCAM visualizations for model interpretability.`,
    tags: ["PyTorch", "Computer Vision", "Deep Learning", "Cellpose", "GradCAM"]
};
