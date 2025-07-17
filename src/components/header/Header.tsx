import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "@/constants/index";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const location = useLocation();

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="/images/logo.png"
                  alt="Logo Corporación SPI"
                  className="h-10 object-contain"
                />
              </Link>
            </motion.div>

            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center space-x-2 bg-gray-100/50 border border-gray-200/50 rounded-full p-1">
                {navItems.map((item) => (
                  <Link to={item.path} key={item.path}>
                    <motion.div
                      className={`px-4 py-2 rounded-full transition-colors text-sm font-medium relative ${
                        location.pathname === item.path
                          ? "text-black"
                          : "text-gray-500 hover:text-black"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {location.pathname === item.path && (
                        <motion.div
                          layoutId="active-nav-item"
                          className="absolute inset-0 bg-black/10 border border-black/20 rounded-full"
                          style={{ borderRadius: 9999 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10 flex items-center">
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.label}
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </nav>

              <div className="md:hidden">
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}
