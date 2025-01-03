import Image from "next/image";

const ChatActions = () => {
  return (
    <footer className="bg-gray-200 h-[10%] py-2 shadow-sm flex flex-col gap-2">
      <div className="h-2/3 flex px-3 gap-4">
        <Image
          src="/assets/plus.svg"
          alt="Add attachment"
          width={14}
          height={14}
        />
        <form className="flex-grow flex gap-2 bg-white border-gray-100 border-[.5px] rounded-full justify-end px-2 py-1">
          <Image
            src="/assets/sticker.svg"
            alt="Add attachment"
            width={14}
            height={14}
          />
        </form>
        <Image
          src="/assets/camera.svg"
          alt="Add attachment"
          width={14}
          height={14}
        />
        <Image
          src="/assets/mic.svg"
          alt="Add attachment"
          width={10}
          height={10}
        />
      </div>
      <span className="text-xs bg-black m-auto w-[30%] h-[20%] rounded-full" />
    </footer>
  );
};

export default ChatActions;
