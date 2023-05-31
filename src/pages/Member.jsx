import AddPlusUpdate from "../components/AddPlusUpdate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useDisclose from "../hooks/useDisclose";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../config/firebase";

const Member = () => {
  // modal hook with open and close funtionality
  const { isOpen, onOpen, onClose } = useDisclose();
  const { id } = useParams();
  const [member, setMember] = useState({});
  const theMember = async (id) => {
    try {
      const memberRef = doc(db, "members", id);
      const memberSnap = await getDoc(memberRef);
      if (memberSnap.exists()) {
        setMember(memberSnap.data());
      }
    } catch (error) {
      console.log(error);
    }
  };
  theMember(id);

  // after deletion navigate to home page
  const navigate = useNavigate();

  const deleteMember = async (id) => {
    try {
      alert("Please confirm to remove from UL.");
      await deleteDoc(doc(db, "members", id));
      toast.success("Member Deleted");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const str = member.description;
  function trancateDesc(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      {/* main section */}
      <section className="w-full h-auto mt-20">
        {/* container */}
        <div className="md:mx-24 flex max-md:flex-col justify-center items-center max-md:py-10 m-4 rounded-xl shadow-xl">
          {/* image section */}
          <div className="flex-1 max-md:flex w-full justify-center items-center ">
            {/* <img
              src="https://rare-gallery.com/uploads/posts/1208374-Spider-Man-Miles-Morales-artwork-movies-Spider-Man-Into-the-Spider-Verse.jpg"
              alt="miles"
              className="w-[320px] md:w-[600px] md:h-[600px] object-cover max-md:rounded-3xl md:rounded-l-xl shadow-2xl"
            /> */}
            <div className="flex justify-center items-center min-h-[60vh] w-full bg-gradient-to-l from-purple-500 to-secondary md:rounded-r-full rounded-[6rem]">
              <div className="text-center">
                <h2 className="text-5xl font-bold text-white md:p-2">
                  {member.nickName}
                </h2>
              </div>
            </div>
          </div>
          {/* description section */}
          <div className="md:relative flex-1 max-md:pt-10 md:ml-10 space-y-4 md:h-[80vh] w-full items-center">
            {/* member name */}
            <h2 className="md:absolute md:top-4 md:right-0 md:w-[80%] bg-secondary text-white font-bold text-center text-2xl leading-0 p-4 rounded-2xl md:rounded-l-2xl">
              {member.name}
            </h2>
            {/* member designation */}
            <h3 className="md:absolute md:top-20 md:right-0 md:w-[70%] bg-primary p-2 text-center text-white font-semibold rounded-2xl md:rounded-l-2xl">
              {member.teamName}
            </h3>
            {/* member description */}
            <p className="bg-clip-text bg-gradient-to-t from-purple-400 to-white text-slate-700 text-lg text-justify md:p-4 p-2 md:absolute md:top-32 my-4 max-md:p-6 min-h-[50vh] md:w-full">
              {trancateDesc(str, 800)}
              {/* {member.description} */}
            </p>
            {/* edit button */}
            <button
              onClick={onOpen}
              className="md:absolute md:top-[32rem] md:right-4 md:py-2 md:px-3 bg-secondary hover:bg-primary transition-all text-white font-bold px-2 py-1 rounded-md max-md:ml-6"
            >
              Edit Details
            </button>
            <button
              // onClick={deleteMember}
              className="md:absolute md:top-[37rem] md:right-4 md:py-1 md:px-3 hover:bg-red-400 transition-all text-white font-bold px-2 py-1 rounded-md max-md:ml-6"
            >
              Remove
            </button>
          </div>
        </div>
      </section>
      {/* Modal Form Section Starts */}
      <section className="relative">
        <AddPlusUpdate
          isUpdate
          member={member}
          isOpen={isOpen}
          onClose={onClose}
        />
      </section>
      {/* Modal Form Section Ends */}

      {/* Toast Message Starts */}
      <ToastContainer position="bottom-center" />
      {/* Toast Message Ends */}
    </>
  );
};

export default Member;
