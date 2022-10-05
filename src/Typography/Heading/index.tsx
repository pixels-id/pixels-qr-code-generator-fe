import React from "react";

const Heading = ({ type, children, ...props }) => {
  switch (type) {
    case "h1":
      return (
        <h1 className="font-bold text-2xl text-green-900" {...props}>
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2 className="font-semibold my-4" {...props}>
          {children}
        </h2>
      );

    default:
      return (
        <h1 className="font-bold text-2xl text-green-900" {...props}>
          {children}
        </h1>
      );
  }
};

export default Heading;
