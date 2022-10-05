import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInput } from "../../../components/Form";
import Line from "../../../components/Line";
import { Heading } from "../../../Typography";
import AdvanceOption from "../../Universal/AdvanceOption";
import AddButton from "./AddButton";
import BasicInfo from "./BasicInfo";

interface FormAudioProps {
  nameQR: string;
  spotify: string;
  title: string;
  moreInfo: string;
  nameButton: string;
  website: string;
  linkRedirect: string;
  share: boolean;
}

const AudioPlay = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormAudioProps>();

  const onSubmit: SubmitHandler<FormAudioProps> = (data) => console.log(data);
  return (
    <>
      <div className="basis-3/5">
        <Heading type="h1">Audio Player QR Code </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block mt-4">
            <span className="text-gray-700">Name your QR Code</span>

            <FormInput
              register={register}
              name="nameQR"
              placeholder="MP3 Description"
            />

            {errors.nameQR && (
              <p className="text-red-500 text-sm">QR name is required!</p>
            )}
          </label>

          <label className="block mt-4">
            <span className="text-gray-700">Your Link Spotify</span>

            <FormInput
              register={register}
              name="spotify"
              placeholder="https://open.spotify.com/track/5AkV53fo1u01mi8r22JNeF?si=600042151a9447cb"
            />

            {errors.nameQR && (
              <p className="text-red-500 text-sm">QR name is required!</p>
            )}
          </label>
          <Line />
          <BasicInfo register={register} errors={errors} />
          <AddButton register={register} />
          <Line />
          <AdvanceOption register={register} />
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

export default AudioPlay;
