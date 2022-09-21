import Link from "next/link";
import React from "react";
import ButtonNav from "../../components/Button/Nav";

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
      <Link href="/qr-code-for-socialmedia">
        <a>
          <ButtonNav text="Social Media" />
        </a>
      </Link>
    </div>
  );
};

export default ListButton;
