import { motion } from "framer-motion";

const ButtonCustom2 = ({
  className = "",
  text,
  onClick,
}: {
  className?: string;
  text: string;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.08,
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
        textShadow: "0 0 8px rgba(255, 255, 255, 0.7)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`
        px-8 py-3 rounded-xl font-semibold uppercase tracking-wide
        text-white  cursor-pointer border border-gray-700
        shadow-md hover:bg-gray-900 transition-colors duration-200
        ${className}
      `}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default ButtonCustom2;
