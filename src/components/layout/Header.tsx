import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Studio
        </Link>
        <div className="space-x-8">
          <Link href="/projects" className="hover:text-gray-600 transition-colors">
            Projects
          </Link>
          <Link href="/about" className="hover:text-gray-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-600 transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
