import React from "react";
import { FormInput, FormTextArea } from "../../../../components/Form";
import { Heading } from "../../../../Typography";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const BasicInfo = ({ register, errors }) => {
  return (
    <div>
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
    </div>
  );
};

export default BasicInfo;
