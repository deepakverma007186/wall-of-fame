import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const memberSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name Required"),
  email: Yup.string().email("Invalid Email").required("Email Required"),
});

const AddPlusUpdate = ({ isOpen, onClose, isUpdate, member }) => {
  // add member to firebase
  const addmember = async (_member) => {
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
  const updatemember = async (_member, id) => {
    try {
      const memberRef = doc(db, "members", id);
      await updateDoc(memberRef, _member);
      onClose();
      toast.success("member Updated");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={memberSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: member.name,
                  email: member.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            isUpdate
              ? updatemember(values, member.id)
              : addmember({ name: values.name, email: values.email });
          }}
        >
          <Form className="flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                className="h-10 rounded-md border bg-base p-2 text-primary outline-none"
              />
              <div className="text-xs text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className="h-10 rounded-md border bg-base p-2 text-primary outline-none"
              />
              <div className="text-xs text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button
              type="submit"
              className="self-end rounded-lg bg-dark px-3 py-2 text-primary"
            >
              {isUpdate ? "Update" : "Add"} member
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddPlusUpdate;
