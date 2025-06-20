import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">School of Code</h2>
          <p className="text-sm mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#courses" className="hover:text-blue-400">Courses</a>
          <a href="#team" className="hover:text-blue-400">Team</a>
          <a href="#faq" className="hover:text-blue-400">FAQ</a>
          <Link href="#contact" className="hover:text-blue-400 text-yellow-400">Contact</Link>
        </div>
      </div>
      <div className="flex space-x-6 justify-center">
        <Link className="text-red">facebook</Link>
        <Link>Instergram</Link>
        <Link>Youtube</Link>
      </div>
    </footer>
  );
}

