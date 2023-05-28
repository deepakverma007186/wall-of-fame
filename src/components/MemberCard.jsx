import { Link } from "react-router-dom";

const MemberCard = ({ member }) => {
  return (
    <>
      <Link to={`/member/asdfdsf`}>
        <div className="w-auto bg-gray-200 opacity-80 p-4 rounded-md shadow-slate-400 shadow-md hover:bg-secondary transition duration-150 md:hover:scale-110">
          <h2 className="font-semibold text-lg md:text-3xl py-2 hover:text-white text-secondary ">
            Peter Parker
          </h2>
          <p className="text-primary hover:text-white">Team : Avengers</p>
        </div>
      </Link>
    </>
  );
};

export default MemberCard;
