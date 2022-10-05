import React from "react";
import {
  useForm,
  useFieldArray,
  SubmitHandler,
  Control,
} from "react-hook-form";

import { Heading } from "../../../Typography";
import { ButtonSubmit } from "../../../components/Button";
import Preview from "../../Preview";
import BasicInfo from "./BasicInfo";
import Social from "./Social";
import AdvanceOption from "../../Universal/AdvanceOption";

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

  let { fields, append, remove, swap } = useFieldArray({
    name: "socialMedia",
    control,
  });

  const onSubmit: SubmitHandler<FormSosmedProps> = (data) => console.log(data);

  return (
    <>
      <div className="basis-3/5">
        <Heading type="h1">Social Media QR Code</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BasicInfo register={register} errors={errors} />

          <hr className="mt-3 border border-slate-300" />

          <Social
            fields={fields}
            register={register}
            append={append}
            remove={remove}
            swap={swap}
          />

          <hr className="mt-3 border border-slate-300" />

          <AdvanceOption register={register} />
          <ButtonSubmit text="Generate QR Code" />
        </form>
      </div>
      <Preview />
    </>
  );
};
