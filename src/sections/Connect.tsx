import React from "react";
import { connectData } from "../data/ConnectData";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const iconStyle = {
  fontSize: "2.5rem",
  cursor: "pointer",
};

const Connect = () => {
  return (
    <section className="pb-5">
      <div className="h-44 w-4/6 mx-auto flex items-center font-semibold flex-col justify-evenly text-center">
        <h2 className="font-bold md:text-3xl italic">Connect With Us</h2>
      </div>
      <div className=" w-5/6 h-auto ml-4">
        {connectData.map((data, index) => (
          <p key={index} className="flex mb-3 flex-col space-y-2 font-semibold">
            <span>{data.address}</span>
            <span>
              For any enquiries, please contact us at{" "}
              <a className="underline" href={`mailto:${data.email}`}>
                {data.email}
              </a>{" "}
              or call us on{" "}
              <a className="underline" href={`tel:${data.phone}`}>
                {data.phone}
              </a>
            </span>
            <span>{data.extras}</span>
          </p>
        ))}

        <div className="flex space-x-4 items-center justify-start">
          <a
            target="_blank"
            href="https://www.instagram.com/accane_creations?igsh=aDB4N2o1dGMxNnJ1"
            rel="noopener noreferrer"
          >
            <FaInstagram style={iconStyle} />
          </a>
          <a
            target="_blank"
            href="https://x.com/AfricanCaribbe2?t=0DDgyu2jvLMKJDzVIeGZQQ&s=09"
            rel="noopener noreferrer"
          >
            <FaXTwitter style={{ fontSize: "2.2rem" }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connect;
