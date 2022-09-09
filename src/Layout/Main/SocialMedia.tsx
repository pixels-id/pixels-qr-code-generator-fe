import React from "react";
import {
  useForm,
  useFieldArray,
  SubmitHandler,
  Control,
} from "react-hook-form";
import {
  FaGlobe,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaShareAlt,
  FaEllipsisV,
  FaCog,
} from "react-icons/fa";

import {
  HiOutlineExclamationCircle,
  HiOutlinePresentationChartLine,
} from "react-icons/hi";
import { FormInput, FormTextArea } from "../../components/Form";
import { Heading } from "../../Typography";
import { ButtonIcon, ButtonSubmit } from "../../components/Button";
import Preview from "../Preview";

interface FormSosmedProps {
  nameQR: string;
  title: string;
  aboutUs: string;
  shareButton: boolean;
  socialMedia: {
    type: string;
    link: string;
    text: string;
  }[];
}

export const SocialMedia = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormSosmedProps>();

  const { fields, append, remove } = useFieldArray({
    name: "socialMedia",
    control,
  });

  const onSubmit: SubmitHandler<FormSosmedProps> = (data) => console.log(data);

  return (
    <>
      <div className="basis-3/5">
        <Heading type="h1">Social Media QR Code</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block mt-4">
            <span className="text-gray-700">Name your QR Code</span>

            <FormInput
              register={register}
              name="nameQR"
              placeholder="e.g. Our social profile"
            />

            {errors.nameQR && (
              <p className="text-red-500 text-sm">QR name is required!</p>
            )}
          </label>
          <hr className="mt-3 border border-slate-300" />
          <div>
            <Heading type="h2">
              <HiOutlineExclamationCircle className="w-6 h-6 inline -mt-1 mr-1 text-slate-600" />
              Basic Information
            </Heading>
            <span>Fields marked with a * are required information.</span>
            <label className="block mt-4">
              <span className="text-gray-700">Title*</span>
              <FormInput
                register={register}
                name="title"
                placeholder="e.g. Connect with us in social media"
              />
              {errors.nameQR && (
                <p className="text-red-500 text-sm">Title is required!</p>
              )}
            </label>

            <label className="block mt-4">
              <span className="text-gray-700">About Us</span>
              <FormTextArea
                register={register}
                name="aboutUs"
                placeholder="Follow us on social media to get the latest news and updates"
                require={false}
              />
              {errors.nameQR && (
                <p className="text-red-500 text-sm">Max Length 100 Words!</p>
              )}
            </label>
          </div>

          <hr className="mt-3 border border-slate-300" />

          <div>
            <Heading type="h2">
              <HiOutlinePresentationChartLine className="w-6 h-6 inline -mt-1 mr-1 text-slate-600" />
              Social Media
            </Heading>
            {fields.map((field, index) => {
              return (
                <div
                  className="mt-2 flex place-items-center -ml-3"
                  key={field.id}
                >
                  <div className="flex-none">
                    <FaEllipsisV className="text-green-900" />
                  </div>
                  <section
                    className="bg-green-800/20 p-2 rounded-lg flex-auto"
                    key={field.id}
                  >
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
                    <label>
                      <span className="text-sm font-semibold">
                        {field.type === "Website" ? (
                          <FaGlobe className="inline mb-1 mr-1 text-green-900" />
                        ) : field.type === "Facebook" ? (
                          <FaFacebook className="inline mb-1 mr-1 text-green-900" />
                        ) : field.type === "Instagram" ? (
                          <FaInstagram className="inline mb-1 mr-1 text-green-900" />
                        ) : field.type === "Twitter" ? (
                          <FaTwitter className="inline mb-1 mr-1 text-green-900" />
                        ) : field.type === "Youtube" ? (
                          <FaYoutube className="inline mb-1 mr-1 text-green-900" />
                        ) : field.type === "Linkedin" ? (
                          <FaLinkedin className="inline mb-1 mr-1 text-green-900" />
                        ) : field.type === "Email" ? (
                          <FaEnvelope className="inline mb-1 mr-1 text-green-900" />
                        ) : field.type === "Github" ? (
                          <FaGithub className="inline mb-1 mr-1 text-green-900" />
                        ) : (
                          ""
                        )}
                        {field.type}
                      </span>
                      <input
                        placeholder="https://www.remoter.id"
                        {...register(`socialMedia.${index}.link` as const, {
                          required: true,
                        })}
                        className="border-b-4 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      />
                    </label>
                    <label>
                      <input
                        placeholder="Enter Your Text"
                        type="text"
                        {...register(`socialMedia.${index}.text` as const, {
                          required: true,
                        })}
                        className="border-b-4 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      />
                    </label>
                  </section>
                </div>
              );
            })}
            <div className="text-center mt-1">
              <h3 className="font-semibold">Add more</h3>
              <span className="text-sm font-normal">
                Click on the icon to add a social media profile.
              </span>
              <div className="mt-1">
                <ButtonIcon func={append} type="Website">
                  <FaGlobe />
                </ButtonIcon>
                <ButtonIcon func={append} type="Email">
                  <FaEnvelope />
                </ButtonIcon>
                <ButtonIcon func={append} type="Instagram">
                  <FaInstagram />
                </ButtonIcon>
                <ButtonIcon func={append} type="Facebook">
                  <FaFacebook />
                </ButtonIcon>
                <ButtonIcon func={append} type="Twitter">
                  <FaTwitter />
                </ButtonIcon>
                <ButtonIcon func={append} type="Youtube">
                  <FaYoutube />
                </ButtonIcon>
                <ButtonIcon func={append} type="Github">
                  <FaGithub />
                </ButtonIcon>
                <ButtonIcon func={append} type="Linkedin">
                  <FaLinkedin />
                </ButtonIcon>
              </div>
            </div>
          </div>

          <hr className="mt-3 border border-slate-300" />

          <div>
            <Heading type="h2">
              <FaCog className="w-5 h-5 inline -mt-1 mr-1 text-slate-600" />
              Advanced Options
            </Heading>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  {...register("shareButton")}
                  className="appearance-none h-5 w-5 bg-slate-200/[0.9] rounded-md checked:bg-green-900 border border-green-800"
                />
                <span className="ml-2 text-sm ">
                  Add a share button to the page
                </span>
              </label>
            </div>
          </div>
          <ButtonSubmit text="Generate QR Code" />
        </form>
      </div>
      <Preview />
    </>
  );
};
