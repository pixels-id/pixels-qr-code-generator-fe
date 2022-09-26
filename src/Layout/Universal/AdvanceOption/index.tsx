import React from "react";
import { FaCog } from "react-icons/fa";
import { Heading } from "../../../Typography";

const AdvanceOption = ({ register }) => {
  return (
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
          <span className="ml-2 text-sm ">Add a share button to the page</span>
        </label>
      </div>
    </div>
  );
};

export default AdvanceOption;
