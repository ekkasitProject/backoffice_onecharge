"use client";
import React, { useState, ChangeEvent } from "react";
import { FaPlus } from "react-icons/fa6";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import ModalAddChargingStation from "../ModalAddChargingStation";
import Image from "next/image";

const data = [
    {
      id: 1,
      name: "OneCharge Solution 1",
      location: "Nonthaburi, Nonthaburi",
      chargers: 5,
      team: "OneCharge Solution",
      priceGroupName :"Price Group 1",
      accessibility: "Public",
      createdDate: "12/01/2023",
      createdTime: "11 : 23 : 38",
    },
    {
      id: 2,
      name: "OneCharge Solution 2",
      location: "Bangkok, Bangkok",
      chargers: 8,
      team: "OneCharge Solution",
      priceGroupName :"Price Group 2",
      accessibility: "Private",
      createdDate: "12/02/2023",
      createdTime: "10 : 15 : 20",
    },
    {
      id: 3,
      name: "OneCharge Solution 3",
      location: "Chiang Mai, Chiang Mai",
      chargers: 3,
      team: "OneCharge Solution",
      priceGroupName :"Price Group 3",
      accessibility: "Public",
      createdDate: "12/03/2023",  
      createdTime: "09 : 45 : 55",
    },
    {
      id: 4,
      name: "OneCharge Solution 4",
      location: "Phuket, Phuket",
      chargers: 6,
      team: "OneCharge Solution",
      priceGroupName :"Price Group 4",
      accessibility: "Private",
      createdDate: "12/04/2023",
      createdTime: "14 : 30 : 10",
    },
    {
      id: 5,
      name: "OneCharge Solution 5",
      location: "Pattaya, Chon Buri",
      chargers: 4,
      team: "OneCharge Solution",
      priceGroupName :"Price Group 5",
      accessibility: "Public",
      createdDate: "12/05/2023",
      createdTime: "11 : 23 : 38",  
    },
    {
      id: 6,
      name: "OneCharge Solution 6",
      location: "Ayutthaya, Ayutthaya",
      chargers: 2,
      team: "OneCharge Solution",
      priceGroupName :"Price Group 6",
      accessibility: "Private",
      createdDate: "12/06/2023",
      createdTime: "10 : 15 : 20",
    },
    {
      id: 7,
      name: "OneCharge Solution 7",
      location: "Chiang Mai, Chiang Mai",
      chargers: 3,
      team: "OneCharge Solution",
      priceGroupName :"Price Group 7",
      accessibility: "Public",
      createdDate: "12/07/2023",
      createdTime: "09 : 45 : 55",
    },
    {
      id: 8,
      name: "OneCharge Solution 8",
      location: "Chon Buri, Chon Buri",
      chargers: 6,
      team: "OneCharge Solution",
      priceGroupName :"Price Group 8",
      accessibility: "Private",
      createdDate: "12/08/2023",
      createdTime: "14 : 30 : 10",
    },
    {
      id: 9,
      name: "OneCharge Solution 9",
      location: "Phuket, Phuket",
      chargers: 4,
      team: "OneCharge Solution",
      priceGroupName :"Price Group 9",
      accessibility: "Public",
      createdDate: "12/09/2023",
      createdTime: "16 : 20 : 45",
    },
    {
      id: 10,
      name: "OneCharge Solution 10",
      location: "Ayutthaya, Ayutthaya",
      chargers: 2,
      team: "OneCharge Solution",
      priceGroupName :"Price Group 10",
      accessibility: "Private",
      createdDate: "12/10/2023",
      createdTime: "08 : 55 : 30",
    },
    {
      id: 11,
      name: "OneCharge Solution 11",
      location: "Nonthaburi, Nonthaburi",
      chargers: 5,
      team: "OneCharge Solution",
      priceGroupName :"Price Group 11",
      accessibility: "Public",
      createdDate: "12/11/2023",
      createdTime: "11 : 23 : 38",
    },
    {
      id: 12,
      name: "OneCharge Solution 12",
      location: "Bangkok, Bangkok",
      chargers: 8,
      team: "OneCharge Solution",
      priceGroupName :"Price Group 12",
      accessibility: "Private",
      createdDate: "12/12/2023",
      createdTime: "10 : 15 : 20",
    },
    {
      id: 13,
      name: "OneCharge Solution 13",
      location: "Chiang Mai, Chiang Mai",
      chargers: 3,
      team: "OneCharge Solution",
      priceGroupName :"Price Group 13",
      accessibility: "Public",
      createdDate: "12/13/2023",
      createdTime: "09 : 45 : 55",
    },
    {
      id: 14,
      name: "OneCharge Solution 14",
      location: "Chon Buri, Chon Buri",
      chargers: 6,
      team: "OneCharge Solution",
      priceGroupName :"Price Group 14",
      accessibility: "Private",
      createdDate: "12/14/2023",
      createdTime: "14 : 30 : 10",
      }
  ];
  
const ChargingStations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset page when search term changes
  };


  const filteredData = data
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    

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

  // Calculate paginatedData based on filteredData, selectedValue, and currentPage
  const paginatedData = filteredData.slice(
    (currentPage - 1) * selectedValue,
    currentPage * selectedValue
  );

  return (
    <div className="mt-4 h-[400px]  bg-white  p-4 rounded-md">
     <div className="w-full flex justify-between items-center">
        <p className="text-[#6E82A5] text-[12px] font-medium">
            Chargers 
        </p>
        <button
          className="w-[60px] flex justify-between items-center bg-[#355FF5] px-3 py-[6px] rounded-md"
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
              <th className="w-[20%] px-4 py-2 rounded-tl-lg text-[7px] font-normal uppercase">
                Charging Stations
              </th>
              <th className="w-[13.3%] px-4 py-2 text-[7px] font-normal uppercase">
                Chargers
              </th>
              <th className="w-[13.3%] px-4 py-2 text-[7px] font-normal uppercase">
                Team
              </th>
              <th className="w-[13.3%] px-4 py-2 text-[7px] font-normal uppercase">
                Pricing
              </th>
              <th className="w-[13.3%] px-4 py-2 text-[7px] font-normal uppercase">
                Accessibility
              </th>
              <th className="w-[13.3%] px-4 py-2 text-[7px] font-normal uppercase">
                Created
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
              {paginatedData.map((station) => (
                <tr
                  key={station.id}
                  className="text-center my-2 bg-white hover:bg-[#e1e0e045] cursor-pointer"
                  style={{ boxShadow: "2px 2px 7px 4px rgba(0, 0, 0, 0.05)" }}
                >
                  <td className="w-[20%] py-1">
                    <div className="flex justify-center items-center">
                      <div className="w-[30px] h-[30px]">
                        <Image
                          src={"/images/station.png"}
                          alt="Station"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="flex flex-col justify-center items-start ml-2">
                        <p className="text-[#6E82A5] text-[7px] font-medium">
                          {station.name}
                        </p>
                        <p className="text-[#6E82A5] text-[7px] font-extralight">
                          {station.location
                            ? station.location.length > 20
                              ? station.location.substring(0, 20) + "..."
                              : station.location
                            : "N/A"}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[13.3%] py-1 text-[#6E82A5] text-[7px]">
                    {station.chargers}
                  </td>
                  <td className="w-[13.3%] py-1">
                    <div className="bg-[#EFF2FC] px-2 py-1 rounded-md">
                      <p className="text-[#355FF5] text-[7px] font-medium">
                        {station.team}
                      </p>
                    </div>
                  </td>
                  <td className="w-[13.3%] py-1 text-[#6E82A5] text-[7px]">
                    {station.priceGroupName}
                  </td>
                  <td className="w-[13.3%] py-1 text-[#6E82A5] text-[7px]">
                    {station.accessibility}
                  </td>
                  <td className="w-[13.3%] py-1">
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-[#6E82A5] text-[7px] font-light">
                        {station.createdDate}
                      </p>
                      <p className="text-[#6E82A5] text-[7px] font-light">
                        {station.createdTime}
                      </p>
                    </div>
                  </td>
                  <td className="w-[13.3%] py-1">
                    <div className="flex justify-center">
                      <Image
                        src={"/images/icon_edit.png"}
                        alt="Delete icon"
                        width={20}
                        height={20}
                        className="w-[20px] ml-2"
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
          <p className="text-[#6E82A5] text-[7px] font-light">
            Showing {(currentPage - 1) * selectedValue + 1} to{" "}
            {Math.min(currentPage * selectedValue, data.length)} of{" "}
            {data.length} Results
          </p>
          <div className="relative">
            <div
              className="w-[70px] flex justify-between items-center cursor-pointer text-[#6E82A5] text-[7px] font-light bg-white border border-gray-300 px-3 py-1"
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
              className={`px-2 py-[3px] text-[#6E82A5] text-[7px] font-light ${
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
                    : "text-[#6E82A5] font-light"
                } text-[7px] cursor-pointer`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </li>
            ))}
            <li
              className={`px-2 py-[3px] text-[#6E82A5] text-[7px] font-light ${
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

export default ChargingStations;
