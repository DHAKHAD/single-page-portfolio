import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="/" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>{" "}
        {/* Link to 'About' section */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="nav-item text-gray-400 hover:bg-white/70 hover:text-gray-900"
        >
          Resume
        </a>
        <a
          href="#Contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact Me
        </a>
      </nav>
    </div>
  );
};
