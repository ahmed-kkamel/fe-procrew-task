"use client";
import Image from "next/image";
import useLocalTime from "../_hooks/useLocalTime";

const Header = () => {
  const localTime = useLocalTime();

  return (
    <header className="bg-gray-50 gap-3.5 flex flex-col py-2 px-6 shadow-md">
      <div className="flex justify-between grow gap-2 items-center [&>div]:w-1/3">
        <div className="font-semibold text-xs md:text-sm">{localTime}</div>
        <div className="rounded-full bg-black h-6" />
        <div className="flex items-center justify-end gap-2">
          <Image
            src="/assets/network.svg"
            alt="Network"
            width={14}
            height={14}
          />
          <Image src="/assets/wifi.svg" alt="Wifi" width={14} height={14} />
          <Image
            src="/assets/battery.svg"
            alt="Battery"
            width={14}
            height={14}
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <figure className="rounded-full bg-white p-1.5">
          <Image
            src="/assets/communicate.svg"
            alt="Communicate"
            width={26}
            height={26}
          />
        </figure>
        <h1 className="grow font-semibold text-xs md:text-sm">communicate</h1>
      </div>
    </header>
  );
};

export default Header;
