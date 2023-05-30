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

  return (
    <>
      {/* main section */}
      <section className="w-full h-auto mt-20">
        {/* container */}
        <div className=" max-md:bg-slate-300 md:mx-24 flex max-md:flex-col justify-center items-center max-md:py-10 m-4 rounded-xl shadow-xl">
          {/* image section */}
          <div className="flex-1 max-md:flex w-full justify-center items-center">
            <img
              src="https://rare-gallery.com/uploads/posts/1208374-Spider-Man-Miles-Morales-artwork-movies-Spider-Man-Into-the-Spider-Verse.jpg"
              alt="miles"
              className="w-[320px] md:w-[600px] md:h-[600px] object-cover max-md:rounded-3xl md:rounded-l-xl shadow-2xl"
            />
          </div>
          {/* description section */}
          <div className="md:relative flex-1 max-md:pt-10 md:ml-10 space-y-4 md:h-[80vh] w-full items-center">
            {/* <div className=""> */}
            {/* member name */}
            <h2 className="md:absolute md:top-10 md:right-0 md:w-[80%] bg-secondary text-white font-bold text-center text-2xl leading-0 p-4 md:rounded-l-2xl">
              {member.name}
            </h2>
            {/* member designation */}
            <h3 className="md:absolute md:top-24 md:right-0 md:w-[70%] bg-primary p-2 text-center text-white font-semibold md:rounded-l-2xl">
              {member.teamName}
            </h3>
            {/* </div> */}
            {/* member description */}
            <p className="text-lg text-justify md:p-4 p-2 md:absolute md:top-40 my-4 max-md:p-6 md:h-[45vh] md:w-full">
              {/* After reuniting with Gwen Stacy, Brooklyn's full-time, friendly
              neighborhood Spider-Man is catapulted across the Multiverse, where
              he encounters a team of Spider-People charged with protecting its
              very existence. However, when the heroes clash on how to handle a
              new threat, Miles finds himself pitted against the other Spiders.
              He must soon redefine what it means to be a hero so he can save
              the people he loves most. */}
              {member.description}
            </p>
            {/* edit button */}
            <button
              onClick={onOpen}
              className="md:absolute md:top-[32rem] md:right-4 md:py-2 md:px-3 bg-secondary hover:bg-primary transition-all text-white font-bold px-2 py-1 rounded-md max-md:ml-6"
            >
              Edit Details
            </button>
            <button
              onClick={deleteMember}
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
