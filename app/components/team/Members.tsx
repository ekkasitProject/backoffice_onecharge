"use client";
import React, { useState, ChangeEvent } from "react";
import { FaPlus } from "react-icons/fa6";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import Image from "next/image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import MemeberGroups from "./MemeberGroups";

const data = [
  {
    id: 1,
    name: "Soravit Kreankawo",
    memberType: "owner",
    memberGroup: "C-Level Group",
    priceGroupName: "VIP Group",
    accessToCharger: "All",
    status: "Accepted",
    joined: "12/01/2023",
    createdTime: "11 : 23 : 38",
  },
  {
    id: 2,
    name: "Korakit Areonuo",
    memberType: "User",
    memberGroup: "Sales Group",
    priceGroupName: "VIP Group",
    accessToCharger: "Selected",
    status: "Invite",
    joined: "12/01/2023",
    createdTime: "11 : 23 : 38",
  },
  {
    id: 3,
    name: "Porait Hreonup",
    memberType: "User",
    memberGroup: "No member group",
    priceGroupName: "VIP Group",
    accessToCharger: "Selected",
    status: "Invite",
    joined: "12/01/2023",
    createdTime: "11 : 23 : 38",
  },
];

const Page = () => {
  const [selectMembers, setSelectMembers] = useState("Members");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<number[]>([]);
  const [allChecked, setAllChecked] = useState(false);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset page when search term changes
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / selectedValue);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectValue = (value: number) => {
    setSelectedValue(value);
    setIsOpen(false);
    setCurrentPage(1); // Reset page when selected value changes
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSelectAll = () => {
    if (allChecked) {
      setSelectedCheckboxes([]);
    } else {
      setSelectedCheckboxes(filteredData.map((item) => item.id));
    }
    setAllChecked(!allChecked);
  };

  const handleCheckboxChange = (id: number) => {
    if (selectedCheckboxes.includes(id)) {
      setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== id));
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, id]);
    }
  };

  // Calculate paginatedData based on filteredData, selectedValue, and currentPage
  const paginatedData = filteredData.slice(
    (currentPage - 1) * selectedValue,
    currentPage * selectedValue
  );

  return (
    <div className="mt-4 h-[400px] bg-white p-4 rounded-md">
      <div className="w-full flex justify-between items-center">
        <div className="w-[200px] flex ">
          <button
            className={`${selectMembers === "Members" ? "text-[#364A63] font-medium " : "text-[#A1B1D1]"} text-[12px] font-normal`}
            onClick={() => setSelectMembers("Members")}
          >
            Members
          </button>
          <div className="w-[1px] h-[18px] mx-2  bg-[#E0E0E0] " />
          <button
            className={`${selectMembers === "MemeberGroups" ? "text-[#364A63] font-medium" : "text-[#A1B1D1]"} text-[12px] font-normal `}
            onClick={() => setSelectMembers("MemeberGroups")}
          >
            Member Groups
          </button>
        </div>
        <button
          className={`${selectMembers === "Members" ? "w-[60px]" : "w-[140px]"} flex justify-between items-center bg-[#355FF5] px-3 py-[6px] rounded-md`}
          onClick={() => setShowModal(true)}
        >
          <FaPlus className="text-white text-[10px]" />
          <p className="text-white text-[10px] font-medium uppercase">{ selectMembers === "Members" ? "Invite" : "ADD MEMBER GROUP" }</p>
        </button>
      </div>
      <div className="w-full h-[1px] bg-[#E0E0E0] my-2" />

      {selectMembers === "Members" && (
        <div>
          <div className="w-[250px] flex justify-between my-1">
            <div className="w-[130px] flex justify-between items-center bg-[#ECF2F8] px-2 py-2 border-[1px] border-[#D9D8DF] rounded-md">
              <input
                type="text"
                className="bg-transparent text-[7px] font-extralight text-[#A1B1D1] focus:outline-none"
                placeholder="Search by Members"
                onChange={handleSearchChange}
                value={searchTerm}
              />
              <Image
                src={"/images/icon_search.png"}
                width={10}
                height={10}
                alt="search"
              />
            </div>
          </div>
          <div className="w-full h-[260px]">
            <table className="w-full table-auto border-separate border-spacing-y-3">
              <thead className="bg-[#355FF5] text-white">
                <tr className="text-center">
                  <th className="w-[5%]  py-2 rounded-tl-lg text-[7px] font-normal uppercase">
                    <input
                      type="checkbox"
                      className="accent-[#0D8A72]"
                      onChange={handleSelectAll}
                      checked={allChecked}
                    />
                  </th>
                  <th className="w-[20%] py-2 text-[7px] font-normal uppercase">
                    Members
                  </th>
                  <th className="w-[12.5%] py-2 text-[7px] font-normal uppercase">
                    Member Group
                  </th>
                  <th className="w-[12.5%] py-2 text-[7px] font-normal uppercase">
                    Price Group
                  </th>
                  <th className="w-[12.5%] py-2 text-[7px] font-normal uppercase">
                    Access to chargers
                  </th>
                  <th className="w-[12.5%] py-2 text-[7px] font-normal uppercase">
                    Status
                  </th>
                  <th className="w-[12.5%] py-2 text-[7px] font-normal uppercase">
                    Joined
                  </th>
                  <th className="w-[12.5%] py-2 rounded-tr-lg text-[7px] font-normal uppercase">
                    Action
                  </th>
                </tr>
              </thead>
            </table>
            <div className="h-[220px] overflow-y-auto">
              <table className="w-full table-fixed border-separate border-spacing-y-1">
                <tbody className="w-full">
                  {paginatedData.map((member) => (
                    <tr
                      key={member.id}
                      className="text-center my-2 bg-white hover:bg-[#e1e0e045] cursor-pointer"
                      style={{
                        boxShadow: "2px 2px 7px 4px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <td className="w-[5%] py-1">
                        <input
                          type="checkbox"
                          className="accent-[#0D8A72]"
                          checked={selectedCheckboxes.includes(member.id)}
                          onChange={() => handleCheckboxChange(member.id)}
                        />
                      </td>
                      <td className="w-[20%] py-1">
                        <div className="flex justify-center items-center">
                          <div className="w-[30px] h-[30px]">
                            <Image
                              src={"/images/member.png"}
                              alt="Station"
                              width={30}
                              height={30}
                            />
                          </div>
                          <div className="w-[80px] flex flex-col justify-center items-start ml-2">
                            <p className="text-[#6E82A5] text-[7px] font-medium">
                              {member.name}
                            </p>
                            <p className="text-[#6E82A5] text-[6px] font-extraexfont-extralight">
                              {member.memberType}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="w-[12.5%] py-1 text-[#6E82A5] text-[7px]">
                        {member.memberGroup}
                      </td>

                      <td className="w-[12.5%] py-1 text-[#6E82A5] text-[7px]">
                        {member.priceGroupName}
                      </td>
                      <td className="w-[12.5%] py-1 text-[#6E82A5] text-[7px]">
                        {member.accessToCharger}
                      </td>

                      <td className="w-[12.5%] py-1">
                        <div
                          className={`mx-4 py-2 rounded-md ${
                            member.status === "Accepted"
                              ? "bg-[#DFF8F3]"
                              : "bg-[#D1E9FF]"
                          }`}
                        >
                          <p
                            className={`text-[6px] font-normal ${
                              member.status === "Accepted"
                                ? "text-[#0D8A72]"
                                : "text-[#40A3FF]"
                            }`}
                          >
                            {member.status}
                          </p>
                        </div>
                      </td>
                      <td className="w-[12.5%] py-1">
                        <div className="flex flex-col justify-center items-center">
                          <p className="text-[#6E82A5] text-[7px] font-extralight">
                            {member.joined}
                          </p>
                          <p className="text-[#6E82A5] text-[7px] font-extralight">
                            {member.createdTime}
                          </p>
                        </div>
                      </td>
                      <td className="w-[12.5%] py-1">
                        <div className="flex justify-center">
                          <HiOutlineDotsHorizontal className="text-[#6E82A5] " />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full flex justify-between items-center mt-3">
            <div className="flex items-center">
              <p className="text-[#A1B1D1] text-[10px] font-extralight">
                Row per page :
              </p>
              <div className="relative">
                <button
                  className="w-[40px] flex justify-center items-center px-1 py-1 border-[1px] border-[#D9D8DF] rounded-md"
                  onClick={handleToggleDropdown}
                >
                  <p className="text-[#A1B1D1] text-[10px] font-extralight">
                    {selectedValue}
                  </p>
                  {isOpen ? (
                    <IoIosArrowUp className="text-[#A1B1D1] text-[10px]" />
                  ) : (
                    <IoIosArrowDown className="text-[#A1B1D1] text-[10px]" />
                  )}
                </button>
                {isOpen && (
                  <div className="absolute w-[40px] bg-white shadow-md">
                    <button
                      className="w-full px-2 py-1 text-[10px] text-[#A1B1D1] hover:bg-[#ECF2F8]"
                      onClick={() => handleSelectValue(5)}
                    >
                      5
                    </button>
                    <button
                      className="w-full px-2 py-1 text-[10px] text-[#A1B1D1] hover:bg-[#ECF2F8]"
                      onClick={() => handleSelectValue(10)}
                    >
                      10
                    </button>
                    <button
                      className="w-full px-2 py-1 text-[10px] text-[#A1B1D1] hover:bg-[#ECF2F8]"
                      onClick={() => handleSelectValue(15)}
                    >
                      15
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#A1B1D1] text-[10px] font-extralight">
                {`Showing ${(currentPage - 1) * selectedValue + 1}-${Math.min(
                  currentPage * selectedValue,
                  filteredData.length
                )} of ${filteredData.length}`}
              </p>
              <div className="flex justify-center items-center">
                <button
                  className="mx-1 disabled:opacity-50"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <IoIosArrowBack className="text-[#A1B1D1]" />
                </button>
                <p className="text-[#A1B1D1] text-[10px] font-extralight">
                  {currentPage}
                </p>
                <button
                  className="mx-1 disabled:opacity-50"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <IoIosArrowForward className="text-[#A1B1D1]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectMembers === "MemeberGroups" && <MemeberGroups />}
    </div>
  );
};

export default Page;
