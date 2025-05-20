import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: FaGithub, path: "https://github.com/JuniorSillo" },
  { icon: FaLinkedin, path: "https://www.linkedin.com/in/moeketsi-junior-sillo-726073244/" },
  { icon: FaYoutube, path: "https://www.youtube.com/" },
  { icon: FaTwitter, path: "https://twitter.com/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {<item.icon />}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
