"use client";
import React, { useState, ChangeEvent } from "react";
import { FaPlus } from "react-icons/fa6";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import ModalAddChargingStation from "../components/ModalAddChargingStation";
import { useRouter } from "next/navigation";

const data = [
  {
    idTeam: "user-678-18907",
    teamName: "OneCharge Solution1",
    package: "basic",
    member: 5,
    chargingStations: 1,
    charger: 3,
    balance: 0.0,
  },
  {
    idTeam: "user-678-18907",
    teamName: "OneCharge Solution2",
    package: "professional",
    member: 5,
    chargingStations: 1,
    charger: 3,
    balance: 0.0,
  },
];

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTeam, setSearchTeam] = useState("");
  const [selectedValue, setSelectedValue] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
 const router = useRouter()
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTeam(event.target.value);
    setCurrentPage(1); // Reset page when search term changes
  };

  const filteredData = data.filter((team) =>
    team.teamName.toLowerCase().includes(searchTeam.toLowerCase())
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

  const paginatedData = filteredData.slice(
    (currentPage - 1) * selectedValue,
    currentPage * selectedValue
  );


  const handleClick = () => router.push("/team/dashboard-team")

  return (
    <div className="mx-4 bg-white h-[400px] p-4 rounded-md">
      <div className="w-full flex justify-between items-center">
        <p className="text-[#364A63] text-[12px] font-medium">
          Charging Stations
        </p>
        <button
          className="w-[60px] flex justify-between items-center bg-[#355FF5] px-3 py-[2px] rounded-md"
          onClick={() => setShowModal(true)}
        >
          <FaPlus className="text-white text-[10px]" />
          <p className="text-white text-[10px] font-medium">ADD</p>
        </button>
      </div>
      <div className="w-full h-[1px] bg-[#E0E0E0] my-2" />
      <div className=" w-[250px] flex justify-between my-1">
        <div className="w-[130px] flex justify-between items-center bg-[#ECF2F8] px-2 py-2 border-[1px] border-[#D9D8DF] rounded-md">
          <input
            type="text"
            className="bg-transparent text-[7px] font-light text-[#A1B1D1] focus:outline-none"
            placeholder="Search by Charging Stations"
            onChange={handleSearchChange}
            value={searchTeam}
          />
          <img
            src="images/icon_search.png"
            alt="Search"
            className="w-[10px] h-[10px] ml-2"
          />
        </div>
      </div>
      <div className="w-full h-[260px]">
        <table className="w-full table-auto border-separate border-spacing-y-3">
          <thead className="bg-[#355FF5] text-white">
            <tr className="text-center">
              <th className="w-[20%] px-4 py-2 rounded-tl-lg text-[7px] font-normal uppercase">
                Team Name
              </th>
              <th className="w-[13.3%] px-4 py-2 text-[7px] font-normal uppercase">
                Package
              </th>
              <th className="w-[13.3%] px-4 py-2 text-[7px] font-normal uppercase">
                Member
              </th>
              <th className="w-[13.3%] px-4 py-2 text-[7px] font-normal uppercase">
                Charging Stations
              </th>
              <th className="w-[13.3%] px-4 py-2 text-[7px] font-normal uppercase">
                Charger
              </th>
              <th className="w-[13.3%] px-4 py-2 text-[7px] font-normal uppercase">
                Balance
              </th>
              <th className="w-[13.3%] px-4 py-2 rounded-tr-lg text-[7px] font-normal uppercase">
                Action
              </th>
            </tr>
          </thead>
        </table>
        <div className="h-[220px] overflow-y-auto">
          <table className="w-full table-fixed border-separate border-spacing-y-1">
            <tbody className="w-full">
              {paginatedData.map((team, index) => (
                <tr
                 onClick={handleClick}
                  key={index}
                  className="text-center my-2 bg-white hover:bg-[#e1e0e045] cursor-pointer"
                  style={{ boxShadow: "2px 2px 7px 4px rgba(0, 0, 0, 0.05)" }}
                >
                  <td className="w-[20%] py-1">
                    <div className="flex justify-center items-center">
                      <div className="w-[30px] h-[30px]">
                        <img
                          src="images/station.png"
                          alt="Station"
                          className="p-1"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-start ml-2">
                        <p className="text-[#364A63] text-[7px] font-medium">
                          {team.teamName}
                        </p>
                        <p className="text-[#364A63] text-[7px] font-extralight">
                          {team.idTeam
                            ? team.idTeam.length > 20
                              ? team.idTeam.substring(0, 20) + "..."
                              : team.idTeam
                            : "N/A"}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[13.3%] py-1 text-[#364A63] text-[7px]">
                    {team.package.charAt(0).toUpperCase() +
                      team.package.slice(1)}
                  </td>
                  <td className="w-[13.3%] py-1 text-[#364A63] text-[7px]">
                    {team.member}
                  </td>
                  <td className="w-[13.3%] py-1 text-[#364A63] text-[7px]">
                    {team.chargingStations} Charging Stations
                  </td>
                  <td className="w-[13.3%] py-1 text-[#364A63] text-[7px]">
                    {team.charger} Chargers
                  </td>
                  <td className="w-[13.3%] py-1 text-[#364A63] text-[7px]">
                    {team.balance.toFixed(2)} THB
                  </td>
                  <td className="w-[13.3%] py-1">
                    <div className="flex justify-center">
                      <img
                        src="images/icon_edit.png"
                        alt="Edit icon"
                        className="w-[20px]"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full h-[50px] flex justify-between items-center my-2">
        <div className="w-[200px] flex justify-between items-center">
          <p className="text-[#364A63] text-[7px] font-light">
            Showing {(currentPage - 1) * selectedValue + 1} to{" "}
            {Math.min(currentPage * selectedValue, filteredData.length)} of{" "}
            {filteredData.length} Results
          </p>
          <div className="relative">
            <div
              className="w-[70px] flex justify-between items-center cursor-pointer text-[#364A63] text-[7px] font-light bg-white border border-gray-300 px-3 py-1"
              onClick={handleToggleDropdown}
            >
              {selectedValue}{" "}
              {isOpen ? (
                <IoIosArrowUp className="ml-1 text-[#C0C4CC]" />
              ) : (
                <IoIosArrowDown className="ml-1 text-[#C0C4CC]" />
              )}
            </div>
            {isOpen && (
              <div className="w-[80px] absolute bottom-8 bg-white border border-[#D9D8DF] mt-1">
                {[5, 10, 15].map((value) => (
                  <div
                    key={value}
                    className="cursor-pointer text-[#6E82A5] text-[7px] font-light p-1"
                    onClick={() => handleSelectValue(value)}
                  >
                    {value}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="">
          <ul className="flex justify-between items-center">
            <li
              className={`px-2 py-[3px] text-[#364A63] text-[7px] font-light ${
                currentPage === 1
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <IoIosArrowBack />
            </li>
            {[...Array(totalPages)].map((_, i) => (
              <li
                key={i}
                className={`px-2 py-[3px] ${
                  currentPage === i + 1
                    ? "text-[#0026FF] bg-[#D0DAFF] font-semibold rounded-md"
                    : "text-[#364A63] font-light"
                } text-[7px] cursor-pointer`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </li>
            ))}
            <li
              className={`px-2 py-[3px] text-[#364A63] text-[7px] font-light ${
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <IoIosArrowForward />
            </li>
          </ul>
        </div>
      </div>
      {showModal && (
        <ModalAddChargingStation onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Page;
