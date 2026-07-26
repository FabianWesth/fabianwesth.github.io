export default {
    title: "DESTINY⁺ Dust Analyser Data Simulator",
    field: "space-systems",
    type: ["research"],
    status: "mature",
    image: {
        src: "data/projects/images/destiny.jpg",
        alt: "DESTINY⁺ Dust Analyser Data Simulator - Image credit: JAXA"
    },
    description: `My Master's thesis on developing an FPGA-based simulator for the DESTINY⁺ Dust Analyser sensor data. Built in VHDL on Xilinx Zynq-7020 SoC with custom trigger logic for detecting interstellar dust particle impacts. Enables testing of space mission instrumentation without requiring complex dust accelerator setups. DESTINY⁺ is a JAXA technology demonstration mission to asteroid Phaethon, exploring cosmic dust and demonstrating low-cost deep space exploration technologies.<br><small style="color: var(--text-tertiary); font-size: 0.8em;">Image credit: JAXA</small>`,
    tags: ["FPGA", "Xilinx Zynq", "VHDL", "Embedded Linux", "C++"],
    links: [
        { label: "Learn More", url: "https://www.isas.jaxa.jp/en/missions/spacecraft/developing/destiny_plus.html" }
    ]
};
