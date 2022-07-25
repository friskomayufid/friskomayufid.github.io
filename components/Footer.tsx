import moment from "moment";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="text-secondary flex justify-center pb-5">
      <FaRegCopyright className="mt-1.5 mr-1 text-sm" />{" "}
      {`${moment().format("YYYY")} Frisko Mayufid. All Rights Reserved.`}
    </div>
  );
}

export default Footer;
