"use client";
import Image from "next/image";
import useLocalTime from "../_hooks/useLocalTime";
import ChatLinks from "./ChatLinks";

const ChatContent = ({ utcTime }) => {
  const localTime = useLocalTime(utcTime);

  const handleDoneClick = () => {
    alert("Hello, Procrow");
  };

  return (
    <section className="h-full relative">
      <Image
        src="/assets/whatsapp-default-background.png"
        layout="fill"
        alt="background"
        className="absolute"
      />
      <article className="relative p-4 flex flex-col gap-3">
        <p className="text-black text-xs font-semibold justify-center items-center flex bg-white rounded-full p-1  px-4 m-auto shadow-md">
          Today
        </p>
        <div className="flex flex-col gap-2 bg-white shadow-sm rounded-lg p-3 w-[85%]">
          <Image
            src="/assets/whatsapp-message.jpg"
            alt="WhatsApp"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-4">
            <p className="text-xs md:text-sm font-medium">
              Hello, Ahmed
              <br />
              How are you doing?
            </p>
            <footer className="flex flex-col gap-2 text-gray-400">
              <p className="text-xs md:text-sm">Thank you for your time.</p>
              <time className="self-end text-xs font-medium">{localTime}</time>
              <ChatLinks
                src="/assets/visit-us.svg"
                alt="Voice Message"
                width={16}
                height={16}
                link="https://www.procrew.pro/"
                linkText="Visit Our Website"
              />
              <ChatLinks
                src="/assets/phone.svg"
                alt="Phone"
                width={14}
                height={14}
                link="tel:#"
                linkText="Call Us"
              />
              <ChatLinks
                src="/assets/share.svg"
                alt="Share"
                width={16}
                height={16}
                linkText="Done"
                onClick={handleDoneClick}
              />
            </footer>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ChatContent;
