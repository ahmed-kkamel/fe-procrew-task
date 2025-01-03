import Image from "next/image";
import Link from "next/link";

const ChatContent = ({ time }) => {
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
            <footer className="flex flex-col gap-2 text-gray-400 ">
              <p className="text-xs md:text-sm ">Thank you for your time.</p>
              <time className="self-end text-xs font-medium">{time}</time>
              <hr className="text-gray-400 text-lg" />
              <div className="flex justify-center gap-2 items-center">
                <Image
                  src="/assets/visit-us.svg"
                  alt="Voice Message"
                  width={16}
                  height={16}
                />
                <Link
                  className="text-xs font-semibold text-blue-400 focus:outline-none"
                  href="https://www.procrew.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Our Website
                </Link>
              </div>
              <hr className="text-gray-400 text-lg" />
              <div className="flex justify-center gap-2 items-center">
                <Image
                  src="/assets/phone.svg"
                  alt="Phone"
                  width={14}
                  height={14}
                />
                <Link
                  className="text-xs font-semibold text-blue-400 focus:outline-none"
                  href="tel:#"
                >
                  Call Us
                </Link>
              </div>
              <hr className="text-gray-400 text-lg" />
              <div className="flex justify-center  gap-2 items-center">
                <Image
                  src="/assets/share.svg"
                  alt="Share"
                  width={16}
                  height={16}
                />
                <button className="text-xs font-semibold text-blue-400 focus:outline-none">
                  Done
                </button>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ChatContent;
