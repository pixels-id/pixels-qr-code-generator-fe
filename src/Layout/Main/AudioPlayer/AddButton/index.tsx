import React, { useState } from "react";
import { FormInput, FormSelect } from "../../../../components/Form";

const AddButton = ({ register }) => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div className="w-full rounded-lg p-5 border border-green-800/50 mt-2">
      <div className="flex justify-between">
        <div className="order-first">Button</div>
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
        <div className="flex place-items-center mt-4">
          <div className="basis-1/3">
            <FormSelect register={register} name="nameButton">
              <option>Buy Now</option>
              <option>View Full Album</option>
              <option>Visit Us Online</option>
              <option>Learn More</option>
              <option>Custom</option>
            </FormSelect>
          </div>
          <div className="basis-2/3 ml-3">
            <FormInput
              register={register}
              name="linkRedirect"
              placeholder="www.yourwebsite.com"
            />
          </div>
          {/* <FormInput register={register} name="nameButton" placeholder="Please type your link title" /> */}
        </div>
      )}
    </div>
  );
};

export default AddButton;
