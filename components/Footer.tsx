import moment from "moment";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="text-secondary dark:text-white flex justify-center pb-5 text-center">
      <FaRegCopyright className="mt-1.5 mr-1 text-sm" />{" "}
      {`${moment().format("YYYY")} Frisko Mayufid`}
    </div>
  );
}

export default Footer;
