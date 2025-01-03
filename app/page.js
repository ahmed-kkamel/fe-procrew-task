import LeftButtons from "./_components/LeftButtons";
import Header from "./_components/Header";
import ChatContent from "./_components/ChatContent";
import ChatActions from "./_components/ChatActions";
import RightButton from "./_components/RightButton";

export default function page() {
  const time = new Date()
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(/\s?[APM]{2}$/i, "");
  return (
    <main className="flex items-center justify-center lg:justify-end w-full p-8">
      <section className="max-w-80 w-full max-h-screen flex items-center aspect-[1/1.9]">
        <LeftButtons />
        <div className="h-full w-full rounded-[48px] outline-2 border-2 border-gray-400 outline-black outline bg-black p-2">
          <div className="h-full rounded-[40px] overflow-hidden flex flex-col">
            <Header time={time} />
            <ChatContent time={time} />
            <ChatActions />
          </div>
        </div>
        <RightButton />
      </section>
         
    </main>
  );
}
