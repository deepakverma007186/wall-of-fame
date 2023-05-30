import { useState, useEffect } from "react";
import FounderCard from "../components/FounderCard";
import LogoParticle from "../components/LogoParticle";
import AddPlusUpdate from "../components/AddPlusUpdate";
import MemberCard from "../components/MemberCard";
import foundersData from "../helper/foundersData";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import useDisclose from "../hooks/useDisclose";
import { AiFillPlusCircle } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoMembers from "../components/NoMembers";

const Home = () => {
  // modal hook with open and close funtionality
  const { isOpen, onOpen, onClose } = useDisclose();

  // Fetch contacts from Firebase
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const getMembers = async () => {
      try {
        const membersRef = collection(db, "members");
        onSnapshot(membersRef, (snapshot) => {
          const memberLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setMembers(memberLists);
          return memberLists;
        });
      } catch (error) {
        console.log("Error: " + error);
      }
    };
    getMembers();
  }, []);

  // search contacts
  const filterMembers = (e) => {
    const value = e.target.value;
    const membersRef = collection(db, "members");
    onSnapshot(membersRef, (snapshot) => {
      const memberLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredMembers = memberLists.filter((member) =>
        member.name.toLowerCase().includes(value.toLowerCase())
      );
      setMembers(filteredMembers);
      return filteredMembers;
    });
  };

  return (
    <>
      <div className="mt-20"></div>
      {/* Hero Image Starts */}
      <section className="md:w-[80%] md:h-[80vh] h-[20vh] mx-auto">
        <LogoParticle />
      </section>
      {/* Hero Image Ends */}
      {/* Founders Section */}
      <div className="mt-20"></div>
      <section className="flex flex-col md:flex-row md:justify-evenly w-full mx-auto">
        {foundersData.map((founder) => (
          <FounderCard
            key={founder.id}
            name={founder.name}
            profile={founder.profile}
            pic={founder.pic}
          />
        ))}
      </section>
      {/* Founders Section */}
      {/* #hashtag Starts */}
      <div className="my-20">
        <h1 className="text-center font-extrabold text-transparent text-[6rem] bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          #UL Family
        </h1>
      </div>
      {/* #hashtag Ends */}
      {/* Search Bar Starts */}
      <div className="mx-auto flex w-[80%] items-center justify-evenly gap-3">
        <div className="relative flex items-center">
          <FcSearch className="absolute pl-2 text-4xl text-primary" />
          <input
            type="text"
            onChange={filterMembers}
            placeholder="Search by name..."
            className="border-1 w-[60%] flex-grow rounded-md border bg-dark p-2 pl-10 text-xl text-primary outline-none"
          />
        </div>
        <div className="flex  justify-center">
          <AiFillPlusCircle
            onClick={onOpen}
            className="cursor-pointer  text-5xl text-secondary"
          />
        </div>
      </div>
      {/* Search Bar Ends */}

      {/* Family Section Starts */}
      <div className="mt-12"></div>
      {members.length <= 0 ? (
        <>
          <section className="grid place-content-center w-[80%] mx-auto">
            <NoMembers />
          </section>
        </>
      ) : (
        <section className="grid gap-6 md:gap-8 md:grid-cols-3 grid-cols-1 w-[80%] mx-auto">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </section>
      )}
      {/* Family Section Ends */}
      <div className="mt-20"></div>

      {/* Modal Form Section Starts */}
      <section className="relative">
        <AddPlusUpdate isOpen={isOpen} onClose={onClose} />
      </section>
      {/* Modal Form Section Ends */}

      {/* Toast Message Starts */}
      <ToastContainer position="bottom-center" />
      {/* Toast Message Ends */}
    </>
  );
};

export default Home;
