import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-blue-400 dark:bg-green-800 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">School of Code</h2>
          <p className="text-sm mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <p href="#courses" className="hover:text-white text-yellow-400 ">Courses</p>
          <p href="#team" className="hover:text-white text-yellow-400">Team</p>
          <p href="#faq" className="hover:text-white text-yellow-400">FAQ</p>
          <p href="#contact" className="hover:text-white text-blue-400 text-yellow-400">Contact</p>
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

