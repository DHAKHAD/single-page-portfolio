import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
const footerLinks = [
  {
    titile: "GitHub",
    href: "https://github.com/DHAKHAD",
  },
  {
    titile: "LinkedIn",
    href: " https://www.linkedin.com/in/sunil-nagar-7775s",
  },
  {
    titile: "Instagram",
    href: "https://www.instagram.com/sunilnagar777",
  },
];
export const Footer = () => {
  return (
    <footer className="reletive -z-10 overflow-hidden">
      <div className="absolute h-[400px] w-[1600px]  left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-6">
          <div className="text-white/40">
            &copy: 2024- All rights reserved to Sunil Nagar
          </div>
          <nav className="flex flex-col  md:flex-row items-center gap-6">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.titile}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.titile}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
