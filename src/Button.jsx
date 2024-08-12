/* eslint-disable react/prop-types */
import { AiFillMessage } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
const Button = (props) => {
  return (
    <button className="text-black bg-orange-500 rounded-lg justify-end ">
      {props.icon == "contact" ? (
        <AiFillMessage size="16px" />
      ) : (
        <FaGithub size="16px" />
      )}

      {props.title}
    </button>
  );
};

export default Button;