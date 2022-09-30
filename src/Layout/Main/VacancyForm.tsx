import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RichText, from "../../components/Wysiwig/Richtect";
// import { Editor } from "react-draft-wysiwyg";


import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'

// react-draft-wysiwyg library
import dynamic from 'next/dynamic';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
  )
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// import { DefaultEditor } from "react-simple-wysiwyg";

interface VFormInputs {
  companyName: string;
  jobTitle: string;
  jobSummary: string;
  appLink: string;
  jobDescription: string;
  companyAddress: string;
  companyAbout: string;
  companyInfo: string;
  companyPic: string;
  companyEmail: string;
  companyPhone: number;
  companyWebsite: string;
  editor: string;
  addons: {
    label: string;
    content: string;
  }[];
}

const schema = yup
  .object({
    companyName: yup.string().required("Company name is required"),
    jobTitle: yup.string().required("Job title is required"),
    companyPic: yup.string().required("Company contact person is required"),
    companyEmail: yup.string().required("Company email is required"),
  })
  .required();

const config = {
  button: ["bold", "italic"],
};

export const VacancyForm = () => {
  const ringBlock = "ring-2 ring-green-700/[.15]  p-5  pt-3 mt-4 rounded-md";
  const [rtf, setRtf] = useState("Test");


  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<VFormInputs>({
    defaultValues: {},
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "addons",
    control,
  });

  const onSubmit = (data: VFormInputs) => {
    data.jobDescription = rtf;
    console.log(data);
    console.log(rtf);
  };



  return (
    <>
      <div className="basis-3/5">
        <h1 className="font-bold text-2xl text-green-900">Vacancy QR Code</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={`${ringBlock}`}>
            {/* Company Information field */}
            <h2 className="font-semibold mb-2">Company Information</h2>
            <p>
              Add some context to your Vacancy page by providing your company
              name, a job title and and job summary.
            </p>
            <label className="block mt-4">
              <span className="text-gray-700">Company / Product Name</span>
              <span className="text-red-500">*</span>
              <input
                {...register("companyName")}
                placeholder="Company name, or product name"
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <p className="text-red-500 text-sm">
                {errors.companyName?.message}
              </p>
            </label>

            {/* Job title field */}
            <label className="block mt-4">
              <span className="text-gray-700">Job title</span>
              <span className="text-red-500">*</span>
              <input
                {...register("jobTitle")}
                placeholder="Please add job title"
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <p className="text-red-500 text-sm">{errors.jobTitle?.message}</p>
            </label>

            {/* Job summary field */}
            <label className="block mt-4">
              <span className="text-gray-700">Job summary</span>
              <textarea
                {...register("jobSummary", {})}
                placeholder="Ex: We are looking for ..."
                className="mt-1 appearance-none	block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </label>

            {/* External application url field */}
            <label className="block mt-4">
              <span className="text-gray-700">
                Redirect to external application / website
              </span>
              <input
                {...register("appLink")}
                placeholder="https://apply-here.com"
                type="url"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </label>
          </div>

          {/* Job description field */}
          <div className={`${ringBlock}`}>
            <h2 className="font-semibold mb-4">Job description</h2>
            <span className="text-gray-700">
              Job requirements / description
            </span>
            {/* <RTextEditor /> */}
            {/* <div className="no-tailwindcss-base bg-white mt-2">
              <DefaultEditor
                // {...register("jobDescription", {})}
                value={editor}
                onChange={(e) => {
                  setEditor(e.target.value);
                }}
              />
            </div> */}

            {/* <TextEditor Slate js/> */}
            <div className="rich-text mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
              <RichText
                // value={rtf}
                // onChange={(e) => {
                //   setRtf(e.target.value);
                //   console.log(value);
                // }}
              />
            </div>

            {/* <TextEditor Slate js langsung/> */}
            {/* <Slate editor={editor} value={initialValue}>
                <Editable 
                onChange={(e) => {
                  setRtf(e.target.value);
                  console.log(value);
                }}
                />
            </Slate> */}

            {/* react-draft-wysiwyg */}
            {/* <div className="rich-text mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
              <Editor 
               
                />
            </div> */}

            {/* Editor debug : */}
            {/* <p className="mt-4">HTML code :</p>
            <p className="mt-2">{value}</p> */}
          </div>

          {/* Address / location field */}
          <div className={`${ringBlock}`}>
            <h2 className="font-semibold mb-2">Company address and location</h2>
            <label className="block mt-4">
              <span className="text-gray-700">Address</span>

              <input
                {...register("companyAddress")}
                placeholder="Bandung, Indonesia"
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </label>
          </div>

          <div className={`${ringBlock}`}>
            <h2 className="font-semibold mb-2">About and contact info</h2>

            {/* About company */}
            <label className="block mt-4">
              <span className="text-gray-700">About company</span>
              <textarea
                {...register("companyAbout", {})}
                placeholder="Introduce your company, products or services"
                className="mt-1 appearance-none	block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </label>

            {/* Company contact name */}
            <label className="block mt-4">
              <span className="text-gray-700">Full name</span>
              <span className="text-red-500">*</span>
              <input
                {...register("companyPic")}
                placeholder="Please add company contact name"
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <p className="text-red-500 text-sm">
                {errors.companyPic?.message}
              </p>
            </label>

            <div className="flex justify-between flex-col md:flex-row mt-4">
              {/* Company email field */}
              <label className="mt-4 w-3/5 mr-6">
                <span className="text-gray-700">Company email</span>
                <span className="text-red-500">*</span>
                <input
                  {...register("companyEmail")}
                  placeholder="Please add your email / company email"
                  type={"email"}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
                <p className="text-red-500 text-sm">
                  {errors.companyEmail?.message}
                </p>
              </label>

              {/* Company phone field */}
              <label className="mt-4 w-2/5">
                <span className="text-gray-700">Company phone</span>
                <input
                  {...register("companyPhone")}
                  placeholder="+62000-0000-0000"
                  type={"number"}
                  className="mt-1 appearance-none	block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>
            </div>

            {/* Company website */}
            <label className="block mt-4">
              <span className="text-gray-700">Company website</span>
              <input
                {...register("companyWebsite")}
                placeholder="https://our-company.com"
                type="url"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </label>
          </div>

          {fields.map((field, index) => {
            return (
              <div className="mt-2" key={field.id}>
                <section className={"section"} key={field.id}>
                  <label>
                    <input
                      placeholder="label"
                      {...register(`addons.${index}.label` as const, {
                        required: true,
                      })}
                      className={
                        errors?.addons?.[index]?.label
                          ? "error"
                          : "bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
                      }
                    />
                    <button
                      className="float-right"
                      type="button"
                      onClick={() => remove(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="inline w-6 h-6 text-center text-green-800 hover:text-green-900"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </label>
                  <input
                    placeholder="Please Type Your Content"
                    type="text"
                    {...register(`addons.${index}.content` as const, {
                      required: true,
                    })}
                    className={
                      errors?.addons?.[index]?.content
                        ? "error"
                        : "mt-1 appearance-none	block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    }
                  />
                </section>
              </div>
            );
          })}

          <button
            type="button"
            className="mt-2"
            onClick={() =>
              append({
                label: "",
                content: "",
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-8 text-center text-green-800 hover:text-green-900"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            type="submit"
            className="w-full bg-green-800 text-white p-2 rounded-lg mt-2 hover:bg-green-900"
          >
            Generate QR Code
          </button>
        </form>
      </div>
      <div className="basis-2/5">
        <div className="bg-white md:mt-0 md:w-90 md:ml-10 rounded-lg p-5 mt-10">
          <h2 className="font-semibold my-2">QR Code</h2>
          <p className="text-center mt-2 text-green-800 font-semibold">Test</p>
          <button className="w-full bg-green-800 text-white cursor-pointer p-2 rounded-lg mt-2 hover:bg-green-900">
            Save QR Code
          </button>
        </div>
      </div>
    </>
  );
};
