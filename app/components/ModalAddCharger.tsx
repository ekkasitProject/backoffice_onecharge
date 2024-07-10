import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

interface Brand {
  name: string;
  types: {
    name: string;
    powers: string[];
  }[];
}

const brands: Brand[] = [
  {
    name: "Tesla",

    types: [
      {
        name: "Type 1",

        powers: ["9.6 kW", "10 kW", "11 kW"],
      },
      {
        name: "Type 2",
        powers: ["12 kW", "22 kW"],
      },
    ],
  },
  {
    name: "ChargePoint",
    types: [
      {
        name: "Type 1",
        powers: ["9.6 kW", "10 kW"],
      },
      {
        name: "Type 2",
        powers: ["11 kW", "12 kW"],
      },
    ],
  },
  {
    name: "JuiceBox",
    types: [
      {
        name: "Type 1",
        powers: ["9.6 kW", "22 kW"],
      },
      {
        name: "Type 2",
        powers: ["10 kW", "12 kW"],
      },
    ],
  },
  {
    name: "Bosch",
    types: [
      {
        name: "Type 1",
        powers: ["9.6 kW", "10 kW"],
      },
      {
        name: "Type 2",
        powers: ["11 kW", "22 kW"],
      },
    ],
  },
  {
    name: "Siemens",
    types: [
      {
        name: "Type 1",
        powers: ["9.6 kW", "12 kW"],
      },
      {
        name: "Type 2",
        powers: ["10 kW", "22 kW"],
      },
    ],
  },
];

const team = [
  { id: 1, name: "OneCharge Solution" },
  { id: 2, name: "EV Coffeehouse" },
  { id: 3, name: "EV Salaya" },
  { id: 4, name: "EV FastWave" },
  { id: 5, name: "Eleni Valencia" },
];
interface ModalAddChargerProps {
  onClose: () => void;
}

const ModalAddCharger: React.FC<ModalAddChargerProps> = ({ onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    team: false,
    brand: false,
    type: false,
    power: false,
    chargerAccess: false,
  });
  const [step, setStep] = useState(1);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Select brand & model");
  const [selectedType, setSelectedType] = useState("Select type");
  const [selectedPower, setSelectedPower] = useState("Select power");
  const [types, setTypes] = useState<{ name: string; powers: string[] }[]>([]);
  const [powers, setPowers] = useState<string[]>([]);
  const [chargerName, setChargerName] = useState("");
  const [selectedChargerAccess, setSelectedChargerAccess] = useState(
    "Please select assessibility"
  );
  const [serialNumber, setSerialNumber] = useState("");
  const [ocppDomain, setOcppDomain] = useState("ws://ocpp.onecharge.co.th");

  const handleDropdownClick = (dropdown: keyof typeof isDropdownOpen) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const handleTeamSelect = (team: string) => {
    setSelectedTeam(team);
    setIsDropdownOpen({
      team: true,
      brand: false,
      type: false,
      power: false,
      chargerAccess: false,
    });
  };

  const filterTeams = (query: string) => {
    return team.filter((team) =>
      team.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleBrandSelect = (brand: Brand) => {
    setSelectedBrand(brand.name);
    setTypes(brand.types);
    setSelectedType("Select type");
    setSelectedPower("Select power");
    setIsDropdownOpen({
      team: false,
      brand: true,
      type: false,
      power: false,
      chargerAccess: false,
    });
  };

  const handleTypeSelect = (type: { name: string; powers: string[] }) => {
    setSelectedType(type.name);
    setPowers(type.powers);
    setSelectedPower("Select power");
    setIsDropdownOpen({
      team: false,
      brand: false,
      type: true,
      power: false,
      chargerAccess: false,
    });
  };

  const handlePowerSelect = (power: string) => {
    setSelectedPower(power);
    setIsDropdownOpen({
      team: false,
      brand: false,
      type: false,
      power: true,
      chargerAccess: false,
    });
  };

  const handleChargerAccessSelect = (chargerAccess: string) => {
    setSelectedChargerAccess(chargerAccess);
    setIsDropdownOpen({
      team: false,
      brand: false,
      type: false,
      power: false,
      chargerAccess: true,
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(ocppDomain)
      .then(() => {
        alert("Copied!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-md shadow-lg w-[400px] h-auto">
        {step < 4 && (
          <div className="flex justify-between items-center shadow-sm shadow-[#0000001A] p-4 rounded-md">
            <h2 className="text-[14px] text-[#2B3674] font-semibold">
              Add Charger
            </h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900"
              aria-label="Close modal"
            >
              <IoCloseOutline />
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="h-[430px] px-4 py-2 ">
            <div className="">
              <p className="text-[12px] font-normal">Select Team</p>
              <div className="w-full mt-2 flex items-center bg-[#F2F2F2] p-4 rounded-md">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setSelectedTeam(e.target.value)}
                  value={selectedTeam}
                  className="w-full   text-[10px] bg-transparent focus:outline-none placeholder:font-light placeholder:text-[#CACACA]"
                />
                <BiSearchAlt className="text-[#CACACA]" />
              </div>
            </div>

            <div className="mt-4">
              <div className="w-full h-[220px]  overflow-y-scroll   bg-[#F2F2F2] px-2 py-3 rounded-md">
                {filterTeams(selectedTeam).map((team) => (
                  <button
                    key={team.id}
                    className="w-full p-3 cursor-pointer text-[10px] text-left hover:bg-gray-200"
                    onClick={() => handleTeamSelect(team.name)}
                  >
                    {team.name}
                  </button>
                ))}
              
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="relative h-[330px] px-4 py-2">
            <div className="">
              <p className="text-[12px] my-2 font-normal">Brand & model</p>
              <div
                className="relative mt-1 w-full flex justify-between z-30 items-center border-[0.5px] border-[#808080] p-2 rounded-md"
                onClick={() => handleDropdownClick("brand")}
              >
                <div className="w-[90%] h-full">
                  <p className="text-[10px] font-normal">{selectedBrand}</p>
                </div>
                <IoIosArrowDown className="text-[#CACACA] text-[10px]" />
                {isDropdownOpen.brand && (
                  <div className="absolute top-10 left-0 right-0 w-full max-h-[150px] overflow-y-auto bg-white border-[1px] border-[#D9D8DF] rounded-md">
                    {brands.map((brand) => (
                      <button
                        key={brand.name}
                        className="w-full p-2 cursor-pointer text-[10px] text-left hover:bg-gray-100"
                        onClick={() => handleBrandSelect(brand)}
                      >
                        {brand.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="my-4">
              <p className="text-[12px] my-2 font-normal">Type</p>
              <div
                className="relative mt-1 w-full flex justify-between z-20 items-center border-[0.5px] border-[#808080] p-2 rounded-md"
                onClick={() => handleDropdownClick("type")}
              >
                <div className="w-[90%] h-full">
                  <p className="text-[10px] font-normal">{selectedType}</p>
                </div>
                <IoIosArrowDown className="text-[#CACACA] text-[10px]" />
                {isDropdownOpen.type && types.length > 0 && (
                  <div className="absolute top-10 left-0 right-0 w-full max-h-[150px] overflow-y-auto bg-white border-[1px] border-[#D9D8DF] rounded-md">
                    {types.map((type) => (
                      <button
                        key={type.name}
                        className="w-full p-2 cursor-pointer text-[10px] text-left hover:bg-gray-100"
                        onClick={() => handleTypeSelect(type)}
                      >
                        {type.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="my-4">
              <p className="text-[12px] my-2 font-normal">Power</p>
              <div
                className="relative mt-1 w-full flex justify-between z-10 items-center border-[0.5px] border-[#808080] p-2 rounded-md"
                onClick={() => handleDropdownClick("power")}
              >
                <div className="w-[90%] h-full">
                  <p className="text-[10px] font-normal">{selectedPower}</p>
                </div>
                <IoIosArrowDown className="text-[#CACACA] text-[10px]" />
                {isDropdownOpen.power &&  powers.length > 0 && (
                  <div className="absolute top-10 left-0 right-0 w-full max-h-[150px] overflow-y-auto bg-white border-[1px] border-[#D9D8DF] rounded-md">
                    {powers.map((power) => (
                      <button
                        key={power}
                        className="w-full p-2 cursor-pointer text-[10px] text-left hover:bg-gray-100"
                        onClick={() => handlePowerSelect(power)}
                      >
                        {power}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>
        )}
        {step === 3 && (
          <div className="relative h-[330px] p-4">
            <div className="">
              <p className="text-[12px] font-normal">Charger Name</p>
              <div className="w-full mt-2 flex items-center bg-[#F2F2F2] p-4 rounded-md">
                <input
                  type="text"
                  placeholder="Add a charger name"
                  onChange={(e) => setChargerName(e.target.value)}
                  value={chargerName}
                  className="w-full   text-[10px] bg-transparent focus:outline-none placeholder:font-light placeholder:text-[#CACACA]"
                />
              </div>
            </div>

            <div className="my-4">
              <p className="text-[12px] my-2 font-normal">Charger Access</p>
              <div
                className="relative mt-1 w-full flex justify-between z-20 items-center border-[0.5px] border-[#808080] p-2 rounded-md"
                onClick={() => handleDropdownClick("chargerAccess")}
              >
                <div className="w-[90%] h-full">
                  <p className="text-[10px] font-normal">
                    {selectedChargerAccess}
                  </p>
                </div>
                <IoIosArrowDown className="text-[#CACACA] text-[10px]" />
                {isDropdownOpen.chargerAccess && (
                  <div className="absolute top-10 left-0 right-0 w-full max-h-[150px] overflow-y-auto bg-white border-[1px] border-[#D9D8DF] rounded-md">
                    <button
                      className="w-full p-2 cursor-pointer text-[10px] text-left hover:bg-gray-100"
                      onClick={() => handleChargerAccessSelect("Public")}
                    >
                      Public
                    </button>
                    <button
                      className="w-full p-2 cursor-pointer text-[10px] text-left hover:bg-gray-100"
                      onClick={() => handleChargerAccessSelect("Private")}
                    >
                      Private
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-[70px]" />
          </div>
        )}
        {step === 4 && (
          <div className="relative  p-4">
            <div className="w-full flex justify-center ">
              <img src="/images/icon_success.png" alt="" className="w-[60px]" />
            </div>
            <div className="w-full flex flex-col mt-2 justify-center">
              <p className="text-[14px] text-[#767676] text-center my-1 font-normal">
                Charger added
              </p>
              <p className="text-[12px] text-center my-1 font-extralight px-3">
                ‘Connecting’ pairs your charger hardware with out software. This
                is a critical step before you can start charging. If your charge
                point is installed, connect it now or do this later whenever
                your charger is installed
              </p>
            </div>
            <div className="my-4 w-full flex flex-col items-center">
              <div
                className="w-[80%] p-2 my-2 cursor-pointer text-[10px] bg-[#355FF5] text-left hover:bg-[#3f35f5] rounded-full"
                onClick={() => setStep(5)}
              >
                <p className="text-white text-center ">Connect</p>
              </div>
              <div
                className="w-[80%] p-2 my-2 cursor-pointer text-[10px] bg-white text-left hover:bg-gray-100 rounded-full border border-[#6E82A5] shadow-sm shadow-[#6e82a566]"
                onClick={() => onClose()}
              >
                <p className="text-[#6E82A5] text-center">Not now (later)</p>
              </div>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="relative mt-3 p-4">
            <div className="w-full flex justify-center ">
              <img
                src="/images/icon_onecharge.png"
                alt=""
                className="w-[60px]"
              />
            </div>
            <div className="w-full flex flex-col mt-2 justify-center">
              <p className="text-[14px] text-[#767676] text-center my-1 font-normal">
                OCPP Integration
              </p>
              <p className="text-[12px]  my-1 font-extralight px-3">
                Charger identifier
              </p>
              <p className="text-[12px]  my-1 font-extralight px-3">
                To establish a connection between your charger and OneCharge, we
                need the identification number of your charger. The
                identification number is usually the charger’s serial number
              </p>
            </div>
            <div className="w-full flex flex-col mt-2 justify-center">
              <p className="text-[12px]  my-1 font-extralight px-3">
                Serial Numbers
              </p>
              <input
                type="number"
                name=""
                id=""
                placeholder="Example: ‘123456789123456789’"
                onChange={(e) => setSerialNumber(e.target.value)}
                className="mx-2 mt-1 bg-[#F2F2F2] px-2 py-3 rounded-md  text-[10px] focus:outline-none placeholder:font-light placeholder:text-[#CACACA]"
              />
            </div>
            <div className=" my-4 w-full flex flex-col items-center">
              <div
                className="w-[80%] p-2 my-2 cursor-pointer text-[10px] bg-[#355FF5] text-left hover:bg-[#3f35f5] rounded-full"
                onClick={() => setStep(6)}
              >
                <p className="text-white text-center ">Continue</p>
              </div>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="relative mt-3 p-4">
            <div className="w-full flex justify-center ">
              <img
                src="/images/icon_onecharge.png"
                alt=""
                className="w-[60px]"
              />
            </div>
            <div className="w-full flex flex-col mt-2 justify-center">
              <p className="text-[14px] text-[#767676] text-center my-1 font-normal">
                OCPP Url Configuration
              </p>
              <p className="text-[11px] text-[#1F1F1F] my-1 font-extralight px-3">
                In order to establish a connection between your charger and
                OneCharge’s server, your charger needs to have it’s OCPP URL
                configured with the one shown below.{" "}
              </p>
              <p className="text-[11px] text-[#1F1F1F] my-1 font-extralight px-3">
                If you are unsure about where to set the OCPP URL, you have to
                consult with the charger’s manufacturer.
              </p>
            </div>
            <div className="w-full flex flex-col mt-2 justify-center">
              <p className="text-[8px]  my-1 text-[#6E82A5] font-normal px-3">
                *Not all chargers support setting an OCPP URL. If this is the
                case with your charger, them skip this step.
              </p>
            </div>
            <div className="w-full flex  mt-2  justify-between">
              <input
                type="text"
                name=""
                id=""
                disabled
                className="w-full bg-[#F2F2F2] px-2 py-3 rounded-s-md  text-[10px] focus:outline-none placeholder:font-light placeholder:text-[#CACACA]"
                value={`${ocppDomain}/${serialNumber}`}
              />
              <div
                className="bg-[#355FF5]  flex justify-center items-center pl-1 rounded-e-md "
                onClick={handleCopyLink}
              >
                <img src="/images/icon_copy.png" alt="" className="w-[20px]" />
              </div>
            </div>
            <div className=" my-4 w-full flex flex-col items-center">
              <div
                className="w-[80%] p-2 my-2 cursor-pointer text-[10px] bg-[#355FF5] text-left hover:bg-[#3f35f5] rounded-full"
                onClick={() => onClose()}
              >
                <p className="text-white text-center ">Pair Charger</p>
              </div>
            </div>
          </div>
        )}

        {step < 4 && (
          <div
            className="absolute bottom-0 left-0 right-0 px-4 flex justify-between items-center"
          >
            <div
              className="w-[48%] flex justify-center items-center py-4 my-2 bg-white cursor-pointer hover:bg-[#eff0f7] outline outline-1 outline-[#6576FF] rounded-md"
              onClick={
                step === 1
                  ? () => onClose()
                  : step === 2
                  ? () => setStep(1)
                  : step === 3
                  ? () => setStep(2)
                  : () => {}
              }
            >
              <p className="text-[10px] text-[#6576FF] font-normal">
                {step === 1 ? "Cancel" : "Back"}
              </p>
            </div>
            <div
              className="w-[48%] flex justify-center items-center py-4 my-2 bg-[#6576FF] cursor-pointer hover:bg-[#586bfa] rounded-md"
              onClick={
                step === 1
                  ? () => setStep(2)
                  : step === 2
                  ? () => setStep(3)
                  : step === 3
                  ? () => setStep(4)
                  : () => {}
              }
            >
              <p className="text-[10px] text-white font-normal">
                {step === 1
                  ? "Next"
                  : step === 2
                  ? "Next"
                  : step === 3
                  ? "Next"
                  : ""}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalAddCharger;
