import { FaFacebook } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";
import { FaTiktok, FaGithub } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
interface IProps {
  // youtube: string;
  // tiktok: string;
  // udemy: string;
  facebook: string;
  github: string;
}
const SocialMedia = (props: IProps) => {
  const { facebook, github } = props;

  return (
    <div className="my-4 d-flex items-center gap-3">
      {/* <a
        href={youtube}
        target="_blank"
        className="highlight"
        title="Youtube Hỏi Dân IT"
      >
        <SiYoutubeshorts size={30} />
      </a>
      <a
        href={tiktok}
        target="_blank"
        className="highlight"
        title="Tiktok Hỏi Dân IT"
      >
        <FaTiktok size={30} />
      </a> */}
      <a
        href={github}
        target="_blank"
        className="highlight"
        title="Git Alex-Khang"
      >
        <FaGithub size={30} />
      </a>
      <a
        href={facebook}
        target="_blank"
        className="highlight"
        title="Facebook Lê Hoàng Khang"
      >
        <FaFacebook size={30} />
      </a>
    </div>
  );
};

export default SocialMedia;
