import Link from "next/link";
import React from "react";
import ButtonNav from "../Molecules/ButtonNav";

const ListButton = () => {
  return (
    <div className="mb-3">
      <Link href="/">
        <a>
          <ButtonNav text="URL" />
        </a>
      </Link>
      <Link href="/qr-code-for-vrCard">
        <a>
          <ButtonNav text="vrCard" />
        </a>
      </Link>
    </div>
  );
};

export default ListButton;
