import React from "react";
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { teamNames } from "../helper/teamNames";

const memberSchemaValidation = Yup.object().shape({
  name: Yup.string().min(2).max(25).required("Name is required"),
  teamName: Yup.string().required("Team Name is required"),
  description: Yup.string()
    .min(20)
    .max(800)
    .required("Description is required"),
  nickName: Yup.string().min(10).max(50).required("Required"),
  // imageUpload: Yup.mixed().required("Image is required"),
});

const AddPlusUpdate = ({ isOpen, onClose, isUpdate, member }) => {
  // add member to firebase
  const addMember = async (_member) => {
    try {
      const memberRef = collection(db, "members");
      await addDoc(memberRef, _member);
      onClose();
      toast.success("Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // update member in firebase
  const updateMember = async (_member, id) => {
    try {
      console.log(_member);
      const memberRef = doc(db, "members", id);
      await updateDoc(memberRef, _member);
      onClose();
      toast.success("Member Details Updated");
    } catch (error) {
      console.log(error + "kya hai ye?");
    }
  };

  // const handleSubmit = (value) => {
  //   console.log(value);
  // };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={memberSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: member.name,
                  teamName: member.teamName,
                  description: member.description,
                  nickName: member.nickName,
                }
              : {
                  name: "",
                  teamName: "",
                  description: "",
                  nickName: "",
                }
          }
          // onSubmit={handleSubmit}
          onSubmit={(values) => {
            isUpdate
              ? updateMember(values, member.id)
              : addMember({
                  name: values.name,
                  teamName: values.teamName,
                  description: values.description,
                  nickName: values.nickName,
                });
          }}
        >
          <Form className="flex flex-col gap-4 justify-start p-2 md:w-[500px] text-white">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white">
                Name:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="bg-gray-800 border border-white rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="teamName" className="text-white">
                Team Name:
              </label>
              <Field
                as="select"
                id="teamName"
                name="teamName"
                className="bg-gray-800 border border-white rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              >
                <option value="">Select a team</option>
                {teamNames.map((teamName) => (
                  <option key={teamName} value={teamName}>
                    {teamName}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="teamName"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="description" className="text-white">
                Description:
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                className="bg-gray-800 border border-white rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <label htmlFor="imageUpload" className="text-white">
                Image:
              </label>
              <Field
                type="file"
                id="imageUpload"
                name="imageUpload"
                className="bg-gray-800 border border-white rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
              <ErrorMessage
                name="imageUpload"
                component="div"
                className="text-red-500"
              />
            </div> */}
            <div className="flex flex-col">
              <label htmlFor="nickName" className="text-white">
                Remember As:
              </label>
              <Field
                type="text"
                id="nickName"
                name="nickName"
                className="bg-gray-800 border border-white rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
              <ErrorMessage
                name="nickName"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              className="self-end rounded-lg bg-gradient-to-r from-primary to-indigo-600 hover:opacity-90 text-white px-5 py-3 font-medium"
            >
              {isUpdate ? "Update" : "Add"} Member
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddPlusUpdate;
