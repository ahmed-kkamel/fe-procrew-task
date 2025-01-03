import React from "react";
import Image from "next/image";
import Link from "next/link";

const ChatLinks = ({ src, alt, width, height, link, linkText, onClick }) => {
  return (
    <>
      <hr className="text-gray-400 text-lg" />
      <div className="flex justify-center gap-2 items-center">
        <Image src={src} alt={alt} width={width} height={height} />
        {link ? (
          <Link
            className="text-xs font-semibold text-blue-400 focus:outline-none"
            href={link}
            target={link.startsWith("http") ? "_blank" : "_self"}
            rel={link.startsWith("http") ? "noopener noreferrer" : ""}
          >
            {linkText}
          </Link>
        ) : (
          <button
            className="text-xs font-semibold text-blue-400 focus:outline-none"
            onClick={onClick}
          >
            {linkText}
          </button>
        )}
      </div>
    </>
  );
};

export default ChatLinks;
