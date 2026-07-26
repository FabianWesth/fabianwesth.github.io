export default {
    title: "DeePSC: Automated Diagnosis of Primary Sclerosing Cholangitis",
    field: "biomed-dl",
    type: ["research"],
    status: "mature",
    image: {
        src: "data/projects/images/deepsc.png",
        alt: "DeePSC: Automated Diagnosis of Primary Sclerosing Cholangitis"
    },
    description: `Developed attention-based multi-view CNN model DeePSC for automated diagnosis of Primary Sclerosing Cholangitis (PSC) from 2D MR cholangiopancreatography images. DeePSC achieves SOTA accuracy on multiple unseen datasets and generalizes to different imaging devices outside of its training distribution. It was further benchmarked on two unseen datasets against four highly trained radiologists and outperformed them in both cases. GradCAM visualizations allow for interpretability of the model's decisions. Published in Radiology: Artificial Intelligence. Awarded with the DGVS "Innovation Award for Digital Gastroenterology".`,
    tags: [
        "PyTorch", "MONAI", "GradCAM", "Domain Adaptation", "Medical Imaging",
        "Deep Learning", "Computer Vision"
    ],
    links: [
        { label: "View Publication", url: "https://doi.org/10.1148/ryai.220160" },
        { label: "Learn More", url: "https://www.dgvs.de/aus-dem-fach/forschung-studien/ki-in-der-gastroenterologie/deepsc-ki-gestuetzte-diagnostik-der-primaer-sklerosierenden-cholangitis-anhand-der-2dmagnetresonanz-cholangiopankreatikographie-mrcp/" }
    ]
};
