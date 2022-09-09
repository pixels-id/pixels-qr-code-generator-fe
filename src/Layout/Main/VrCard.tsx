import React, { useState } from "react";
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  const [isChecked, setIsChecked] = useState(true);

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

  const onSubmit = (data: IFormInputs) => console.log(data);

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
        <h1 className="font-bold text-2xl text-green-900">vrCard QR Code</h1>
        <h2 className="font-semibold my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 inline -mt-1 mr-1 text-slate-600"
          >
            <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
            <path
              fillRule="evenodd"
              d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
              clipRule="evenodd"
            />
          </svg>
          Contact Information
        </h2>
        <p>
          Enter your contact details. Users can save your info to their
          smartphone address book after scanning or contact you right away.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full rounded-lg p-5 border border-green-800/50 mt-2">
            <div className="flex justify-between">
              <div className="order-first">Contact Picture</div>
              <label
                htmlFor="small-toggle"
                className="order-last mt-1 relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  onChange={() => setIsChecked(!isChecked)}
                  id="small-toggle"
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-900"></div>
              </label>
            </div>
            {isChecked ? (
              ""
            ) : (
              <>
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-green-800 file:text-white
                hover:file:bg-green-900 mt-2"
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                />
                <input
                  {...register("image")}
                  className=""
                  type="text"
                  value={baseImage}
                />
              </>
            )}
            {baseImage
              ? isChecked || (
                  <img
                    src={baseImage}
                    width={200}
                    height={200}
                    alt="qr code"
                    className="mx-auto my-2 rounded-lg"
                  />
                )
              : ""}
          </div>
          <label className="block mt-4">
            <span className="text-gray-700">Full Name</span>
            <input
              {...register("fullName")}
              placeholder="Please Type Your Full name"
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
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
