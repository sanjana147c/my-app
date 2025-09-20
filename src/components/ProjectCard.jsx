import { motion } from "framer-motion";

function ProjectCard({ children, i }) {
  return (
    <motion.div
      className="min-w-[660px] max-w-[660px] flex-shrink-0 snap-center" // match card width
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        rotate: 1,
      }}
    >
      {children}
    </motion.div>
  );
}

export default ProjectCard;
