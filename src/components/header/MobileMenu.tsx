import { navItems } from "@/constants/index";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileMenuProps) {
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
  };

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-white z-50 p-4 flex flex-col"
        >
          <div className="flex justify-between items-center mb-8">
            <img
              src="/images/logo.png"
              alt="Logo Corporación SPI"
              className="h-10 object-contain"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                to={item.path}
                key={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div
                  className={`flex items-center p-3 rounded-lg text-lg font-medium ${
                    location.pathname === item.path
                      ? "bg-gray-100 text-black"
                      : "text-gray-600"
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
