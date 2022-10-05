import React, { useState } from "react";
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PreviewCard from "./PreviewCard";
import { ButtonSubmit } from "components/Button";
import { MdOutlineAdd, MdPhoneIphone } from "react-icons/md";
import { Heading } from "Typography";
import { FormInput } from "components/Form";
import UploudImage from "./UploudImage";

interface IFormInputs {
  image: string;
  fullName: string;
  email: string;
  phone: number;
  addons: {
    label: string;
    content: string;
  }[];
}

const schema = yup
  .object({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
  })
  .required();

export const VrCard = () => {
  const [baseImage, setBaseImage] = useState<string>("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {},
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "addons",
    control,
  });

  const onSubmit = (data: IFormInputs) => {
    fetch(
      "https://pixels-qr-code-generator-api-production.up.railway.app/user",
      {
        method: "POST",
        body: JSON.stringify({
          data: JSON.stringify(data),
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success", data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64: any = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      <div className="basis-3/5">
        <Heading type={"h1"}>vrCard QR Code</Heading>
        <Heading type={"h2"}>
          <MdPhoneIphone className="w-6 h-6 inline -mt-1 mr-1 text-slate-600" />
          Contact Information
        </Heading>
        <p>
          Enter your contact details. Users can save your info to their
          smartphone address book after scanning or contact you right away.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <UploudImage
            register={register}
            baseImage={baseImage}
            uploadImage={uploadImage}
          />
          <label className="block mt-4">
            <span className="text-gray-700">Full Name</span>
            <FormInput
              register={register}
              name={"fullName"}
              placeholder={"Please Type Your Full name"}
            />
            <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
          </label>

          <label className="block mt-4">
            <span className="text-gray-700">Email</span>
            <input
              {...register("email")}
              placeholder="Please Type Your Email"
              type={"email"}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </label>

          <label className="block mt-4">
            <span className="text-gray-700">Phone</span>
            <input
              {...register("phone")}
              placeholder="Please Type Your Phone Number"
              type={"number"}
              className="mt-1 appearance-none	block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <p className="text-red-500 text-sm">{errors.phone?.message}</p>
          </label>
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
            className="mt-2 bg-green-800 hover:bg-green-900 rounded-full p-0.5"
            onClick={() =>
              append({
                label: "",
                content: "",
              })
            }
          >
            <MdOutlineAdd className="w-7 h-7 text-center text-white " />
          </button>
          <ButtonSubmit>Generate QR Code</ButtonSubmit>
        </form>
      </div>
      <div className="basis-2/5">
        <PreviewCard />
      </div>
    </>
  );
};
