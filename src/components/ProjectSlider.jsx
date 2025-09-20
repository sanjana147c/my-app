"use client";
import ScrollStack from "./ScrollStack";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function ProjectSlider() {
  const constraintsRef = useRef(null); const projects = [{ tag: "Deep Learning", title: "Optimized Segmentation of Endothelial Cell in Corneal Images", description: "Developed a Double U-Net with VGG-19, SE blocks, and ASPP for precise corneal cell segmentation, optimized for accurate ECD estimation under low-contrast and noisy imaging conditions.", tech: ["Python", "TensorFlow", "Keras", "VGG-19", "Double U-Net"], file: "/projects/corneal-segmentation.pdf", }, { tag: "Generative AI", title: "GAN + GNN Framework for Drug Discovery", description: "Built a GAN-based framework to accelerate drug discovery and repurposing. Integrated GNNs to enhance predictions by analyzing drug interactions and disease associations.", tech: ["GANs", "GNNs", "PyTorch", "Drug Repurposing"], file: "/projects/drug-discovery.pdf", }, { tag: "NLP", title: "Kannada NLP Pipeline", description: "Created a dedicated NLP framework for Kannada language with POS tagging and stemming, addressing the lack of libraries for regional languages.", tech: ["Python", "NLTK", "Custom Stemming", "POS Tagging"], file: "/projects/kannada-nlp.pdf", }, { tag: "Hackathon", title: "Code for Good - JPMorgan Chase", description: "Developed a MERN + ML based web app for The Lantana Project. Automated volunteer allocation, used CNN & YOLOv8 for hotspot tracking, and built a chatbot with e-commerce features.", tech: ["MERN", "YOLOv8", "CNN", "Node.js", "MongoDB"], file: "/projects/code-for-good.pdf", }, { tag: "Computer Vision", title: "Image Inpainting for Fashion Industry", description: "Built a GAN + Stable Diffusion model to restore missing regions in fashion images for e-commerce and creative design workflows.", tech: ["GANs", "Stable Diffusion", "PyTorch"], file: "/projects/fashion-inpainting.pdf", }, { tag: "NLP", title: "Dark Pattern Classification", description: "Designed an NLP model to classify dark patterns on websites using web scraping and ML techniques.", tech: ["Python", "BeautifulSoup", "ML", "NLP"], file: "/projects/dark-pattern.pdf", }, { tag: "Chatbot", title: "Legal Assistant - SIH 2023", description: "Developed a chatbot assistant that simplifies legal documents into plain, easy-to-understand language.", tech: ["NLP", "Chatbot", "Python", "Flask"], file: "/projects/legal-assistant.pdf", }, { tag: "Computer Vision", title: "Face Mask Recognition Model", description: "Built a CNN + Haar Cascade model in OpenCV for real-time face mask detection with 93% accuracy.", tech: ["CNN", "OpenCV", "Haar Features"], file: "/projects/mask-detection.pdf", },];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-transparent text-white">
      <motion.div
        ref={constraintsRef}
        className="overflow-x-scroll overflow-y-visible flex gap-12 px-16 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={constraintsRef}
        dragElastic={0.15}
        dragMomentum={true}
      >

        {projects.map((p, i) => (
          <ProjectCard key={i} i={i}>
            <ScrollStack
              tag={p.tag}
              title={p.title}
              description={p.description}
              file={p.file}
              tech={p.tech}
            />
          </ProjectCard>
        ))}
      </motion.div>
    </section>
  );
}
