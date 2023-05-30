import { Link } from "react-router-dom";
import AddPlusUpdate from "./AddPlusUpdate";
import useDisclose from "../hooks/useDisclose";

const MemberCard = ({ member }) => {
  // modal hook with open and close funtionality
  const { isOpen, onClose } = useDisclose();
  return (
    <>
      <Link to={`/member/${member.id}`}>
        <div className="w-auto bg-gray-200 opacity-80 p-4 rounded-md shadow-slate-400 shadow-md hover:bg-secondary transition duration-150 md:hover:scale-110">
          <h2 className="font-semibold text-lg md:text-2xl py-2 hover:text-white text-secondary ">
            {member.name}
          </h2>
          <p className="text-primary hover:text-white">
            Team : {member.teamName}
          </p>
        </div>
      </Link>
    </>
  );
};

export default MemberCard;
