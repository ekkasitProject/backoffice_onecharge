import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function MemeberGroups() {
  return (
    <div className="w-full flex justify-between">
      <div className="w-[185px] h-[250px] border border-[#808080] rounded-md mt-4 p-3  hover:bg-[#ECF2F8]">
        <div className="w-full flex justify-between items-cente">
          <p className="text-[#364A63] text-[10px]">Group CEO</p>
          <HiOutlineDotsHorizontal className="text-[#6E82A5] " />
        </div>
        <div className="w-full">
          <p className="text-[#818894] text-[8px] font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="w-[185px] h-[250px] border border-[#808080] rounded-md mt-4 p-3 hover:bg-[#ECF2F8]">
        <div className="w-full flex justify-between items-cente">
          <p className="text-[#364A63] text-[10px]">Group Sales</p>
          <HiOutlineDotsHorizontal className="text-[#6E82A5] " />
        </div>
        <div className="w-full">
          <p className="text-[#818894] text-[8px] font-light">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident.
          </p>
        </div>
      </div>
      <div className="w-[185px] h-[250px] border border-[#808080] rounded-md mt-4 p-3 hover:bg-[#ECF2F8]">
        <div className="w-full flex justify-between items-cente">
          <p className="text-[#364A63] text-[10px]">Group Marketing</p>
          <HiOutlineDotsHorizontal className="text-[#6E82A5] " />
        </div>
        <div className="w-full">
          <p className="text-[#818894] text-[8px] font-light">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..",
          </p>
        </div>
      </div>
      <div className="w-[185px] h-[250px] border border-[#808080] rounded-md mt-4 p-3 hover:bg-[#ECF2F8] ">
        <div className="w-full flex justify-between items-cente">
          <p className="text-[#364A63] text-[10px]">Group HR</p>
          <HiOutlineDotsHorizontal className="text-[#6E82A5] " />
        </div>
        <div className="w-full">
          <p className="text-[#818894] text-[8px] font-light">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MemeberGroups;
