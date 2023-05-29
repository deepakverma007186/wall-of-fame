import React from "react";
import AddPlusUpdate from "../components/AddPlusUpdate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useDisclose from "../hooks/useDisclose";

const Member = () => {
  // modal hook with open and close funtionality
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      {/* main section */}
      <section className="w-full h-auto mt-20">
        {/* container */}
        <div className="max-lg:bg-slate-300 lg:mx-24 flex max-lg:flex-col justify-center items-center max-lg:py-10 m-4 rounded-xl shadow-xl">
          {/* image section */}
          <div className="flex-1 max-lg:flex w-full justify-center items-center">
            <img
              src="https://rare-gallery.com/uploads/posts/1208374-Spider-Man-Miles-Morales-artwork-movies-Spider-Man-Into-the-Spider-Verse.jpg"
              alt="miles"
              className="w-[320px] lg:w-[600px] lg:h-[600px] object-cover max-lg:rounded-3xl lg:rounded-l-xl shadow-2xl"
            />
          </div>
          {/* description section */}
          <div className="flex-1 max-lg:pt-10 lg:ml-10 space-y-4">
            {/* member name */}
            <h2 className="bg-secondary text-white font-bold text-center text-2xl leading-0 p-4 lg:rounded-l-2xl">
              Spider-Man
            </h2>
            {/* member designation */}
            <h3 className="bg-primary p-2 text-center text-white font-semibold lg:rounded-l-2xl">
              Super-Hero
            </h3>
            {/* member description */}
            <p className="text-lg p-2 my-4 max-lg:p-6">
              After reuniting with Gwen Stacy, Brooklyn's full-time, friendly
              neighborhood Spider-Man is catapulted across the Multiverse, where
              he encounters a team of Spider-People charged with protecting its
              very existence. However, when the heroes clash on how to handle a
              new threat, Miles finds himself pitted against the other Spiders.
              He must soon redefine what it means to be a hero so he can save
              the people he loves most.
            </p>
            {/* edit button */}
            <button
              onClick={onOpen}
              className="bg-secondary hover:bg-primary transition-all text-white font-bold px-2 py-1 rounded-md max-lg:ml-6"
            >
              Edit Details
            </button>
          </div>
        </div>
      </section>
      {/* Modal Form Section Starts */}
      <section className="relative">
        <AddPlusUpdate
          // isUpdate
          // member={member}
          isOpen={isOpen}
          onClose={onClose}
        />
      </section>
      {/* Modal Form Section Ends */}

      {/* Toast Message Starts */}
      <ToastContainer position="bottom-center" theme="dark" />
      {/* Toast Message Ends */}
    </>
  );
};

export default Member;
