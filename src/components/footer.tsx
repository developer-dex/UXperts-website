import React from 'react';


interface SocialLinkProps {
  name: string;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ name, href }) => {
  return (
    <a
      href={href}
      className="px-1 py-2.5 text-xs no-underline uppercase text-neutral-400"
    >
      {name}
    </a>
  );
};

const StatusIndicator: React.FC = () => {
  return (
    <div className="relative w-3.5 h-3.5">
      <div>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="status-icon"
          style={{ width: "14px", height: "14px" }}
        >
          <mask
            id="mask0_17_2337"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="15"
            height="15"
          >
            <path
              d="M14.5066 0.694336H0.506592V14.6943H14.5066V0.694336Z"
              fill="white"
            ></path>
          </mask>
          <g mask="url(#mask0_17_2337)">
            <g opacity="0.130134">
              <path
                d="M7.5065 2.16064C10.5834 2.16064 13.0817 4.65889 13.0817 7.73584C13.0817 10.8128 10.5834 13.311 7.5065 13.311C4.42955 13.311 1.9313 10.8128 1.9313 7.73584C1.9313 4.65889 4.42955 2.16064 7.5065 2.16064Z"
                fill="#00BE3F"
              ></path>
            </g>
            <path
              d="M7.50659 4.59082C9.2322 4.59082 10.6333 5.99188 10.6333 7.71749C10.6333 9.44309 9.2322 10.8442 7.50659 10.8442C5.78098 10.8442 4.37992 9.44309 4.37992 7.71749C4.37992 5.99188 5.78098 4.59082 7.50659 4.59082Z"
              fill="#00BE3F"
            ></path>
          </g>
        </svg>
      </div>
      <div className="absolute left-px top-0.5 w-2.5 h-2.5 bg-orange-500 rounded-[40px]" />
    </div>
  );
};

const Footer = () => {

  const links = [
    { name: "Dribbble", href: "#" },
    { name: "X", href: "#" },
    { name: "Linkedin", href: "#" },
    { name: "Cal.com", href: "#" },
  ];

  return (
    <footer className="flex flex-col w-full bg-[#121212] overflow-hidden">
      <div className="relative h-[52px]">
        <div className="border-t border-t-zinc-800 h-[52px]" />
        <div className="flex absolute top-0 justify-center items-center size-full">
          <div className="h-[52px] w-[420px] max-md:hidden">
            <div className="border-r border-r-zinc-800 h-[52px]" />
          </div>
          <div className="flex justify-between items-center p-4 h-[52px] w-[1080px] max-md:px-2.5 max-md:py-4 max-md:w-full max-sm:flex-col max-sm:gap-2.5 max-sm:items-center">
            <div className="flex items-center text-xs leading-3 text-neutral-400 max-sm:justify-center border-r pr-16 border-dashed border-r-zinc-800 h-[52px]">
              <div className="uppercase">Gdansk |</div>
              <div>8:02:40 AM GMT+1</div>
            </div>
            <div className="flex gap-2.5 items-center">
              <StatusIndicator />
              <div className="text-xs font-medium tracking-normal text-neutral-400">
                BOOKING FOR 2025
              </div>
            </div>
            <div className="flex items-center text-xs leading-3 text-neutral-400 max-sm:justify-center border-l pl-16 border-dashed border-l-zinc-800 h-[52px]">
              <div className="uppercase">NYC |</div>{""}
              <div>2:02:40 AM EST</div>
            </div>
          </div>
          <div className="h-[52px] w-[420px] max-md:hidden">
            <div className="border-l border-l-zinc-800 h-[52px]" />
          </div>
        </div>
      </div>
      <section className="relative h-20 backdrop-blur-[7.5px] bg-[#121212] bg-opacity-20">
        <div className="flex justify-between items-center px-5 py-6 mx-auto my-0 max-w-[1240px] max-sm:flex-col max-sm:gap-5 max-sm:items-center max-sm:text-center">
          <p className="text-xs uppercase text-neutral-400">
            © Designme 2025. All rights reserved.
          </p>
          <div className="-rotate-90">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/158a3d4c9cd6ce0d5108474fb260aaa342b6e664"
              className="w-8 h-8"
              alt="Logo"
            />
          </div>
          <nav className="flex gap-6 max-md:gap-4 max-sm:flex-wrap max-sm:justify-center">
            {links.map((link) => (
              <SocialLink key={link.name} name={link.name} href={link.href} />
            ))}
          </nav>
        </div>
        <div className="absolute top-0 w-full border-t border-solid border-t-zinc-800" />
      </section>
    </footer>
  )
}

export default Footer;
