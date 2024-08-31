import { BsGithub } from "react-icons/bs";
import { RiLiveFill } from "react-icons/ri";

export default function Item({ item }) {
  return (
    <div
      key={item.id}
      className="bg-white relative group shadow hover:shadow-lg overflow-hidden rounded-lg"
    >
      <img
        src={item.img}
        className="rounded-t-lg hover:scale-110 transition-all duration-300"
      />
      <div className="p-4 grid gap-2">
        <div>
          <h2 className="font-secondary text-xl capitalize tracking-wide">
            {item.title}
          </h2>
          <div className="h-1 ml-0.5 bg-main rounded-xl w-8" />
        </div>
        <p>{item.description}</p>
        <div className="group-hover:flex bg-[#000000ae] ease-in-out inset-0 items-center justify-center rounded-lg absolute transition-all duration-300 hidden gap-2 ml-auto">
          <button className="bg-[#2dc5d0] rounded-full p-3 hover:bg-opacity-85">
            <BsGithub />
          </button>
          <button className="bg-main text-white rounded-full p-3 hover:bg-opacity-85">
            <RiLiveFill />
          </button>
        </div>
      </div>
    </div>
  );
}
