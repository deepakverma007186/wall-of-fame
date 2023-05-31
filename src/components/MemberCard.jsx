import { Link } from "react-router-dom";

const MemberCard = ({ member }) => {
  return (
    <>
      <Link to={`/member/${member.id}`}>
        {/* <Link to={`/member/${member.id}`}> */}
        <div className="w-auto bg-gray-200 opacity-80 p-4 rounded-md bg-gradient-to-l from-purple-500 to-secondary shadow-md md:hover:scale-110">
          <h2 className="font-semibold text-lg md:text-2xl py-2 text-white">
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
