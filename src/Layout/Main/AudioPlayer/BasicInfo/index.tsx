import React from "react";
import { FormInput, FormTextArea } from "../../../../components/Form";
import { Heading } from "../../../../Typography";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const BasicInfo = ({ register, errors }) => {
  return (
    <div>
      <div>
        <Heading type="h2">
          <HiOutlineExclamationCircle className="w-6 h-6 inline -mt-1 mr-1 text-slate-600" />
          Basic Information
        </Heading>
        <span>
          Provide more information about your MP3, such as a title and artist.
          Add an optional button to a website of your choice.
        </span>
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
          <span className="text-gray-700">More Info</span>
          <FormInput
            register={register}
            name="moreInfo"
            placeholder="e.g. Name of Artist and album"
          />
          {/* {errors.nameQR && (
            <p className="text-red-500 text-sm">Title is required!</p>
          )} */}
        </label>
        <label className="block mt-4">
          <span className="text-gray-700">Website</span>
          <FormInput
            register={register}
            name="website"
            placeholder="www.yourwebsite.com"
          />
          {/* {errors.nameQR && (
            <p className="text-red-500 text-sm">Title is required!</p>
          )} */}
        </label>
      </div>
    </div>
  );
};

export default BasicInfo;
