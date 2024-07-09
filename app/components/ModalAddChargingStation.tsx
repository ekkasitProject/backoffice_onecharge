import React, { useState } from "react";
import { IoIosArrowDown, IoMdCloseCircleOutline } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

interface ModalAddChargingStationProps {
  onClose: () => void;
}

const ModalAddChargingStation: React.FC<ModalAddChargingStationProps> = ({
  onClose,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Select your station type"
  );
  const [step, setStep] = useState(1);
  const [images, setImages] = useState<File[]>([]);
  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleStep = (control: string) => {
    if (control === null) {
      onClose();
    }
    if (control === "prev") {
      setStep(1);
    }
  };

  const handleDropdownOptionClick = (option: string) => {
    setSelectedCategory(option);
    setIsDropdownOpen(false);
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files);
      setImages([...images, ...newImages]);
    }
  };
  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-md shadow-lg w-[400px] h-[500px]">
        <div className="flex justify-between items-center shadow-sm shadow-[#0000001A] p-4 rounded-md">
          <h2 className="text-[14px] text-[#2B3674] font-semibold">
            Add Charging Station
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
            aria-label="Close modal"
          >
            <IoCloseOutline />
          </button>
        </div>
        {step === 1 && (
          <div className="relative h-[430px] overflow-auto ">
            <div className="p-4">
              <div className="w-full">
                <span className="text-[12px] font-normal">
                  Station category (required)
                </span>
                <span className="text-red-500">*</span>
                <div className="relative mt-1 w-full flex justify-between items-center border-[0.5px] border-[#808080] px-2 py-1 rounded-md">
                  <div className="w-[90%] h-full" onClick={handleDropdownClick}>
                    <p className="text-[10px]  font-normal">
                      {selectedCategory}
                    </p>
                  </div>
                  <IoIosArrowDown className="text-[#CACACA] text-[10px]" />
                  {isDropdownOpen && (
                    <div className="absolute top-10 left-0 right-0 w-full max-h-[150px] overflow-y-auto bg-white border-[1px] border-[#D9D8DF] rounded-md">
                      <button
                        className="w-full p-2 cursor-pointer text-[10px] text-left hover:bg-gray-100"
                        onClick={() => handleDropdownOptionClick("Condominium")}
                      >
                        Condominium
                      </button>
                      <button
                        className="w-full p-2 cursor-pointer text-[10px] text-left hover:bg-gray-100"
                        onClick={() => handleDropdownOptionClick("House")}
                      >
                        House
                      </button>
                      <button
                        className="w-full p-2 cursor-pointer text-[10px] text-left hover:bg-gray-100"
                        onClick={() => handleDropdownOptionClick("Office")}
                      >
                        Office
                      </button>
                      <button
                        className="w-full p-2 cursor-pointer text-[10px] text-left hover:bg-gray-100"
                        onClick={() => handleDropdownOptionClick("Warehouse")}
                      >
                        Warehouse
                      </button>
                      <button
                        className="w-full p-2 cursor-pointer text-[10px] text-left hover:bg-gray-100"
                        onClick={() => handleDropdownOptionClick("Factory")}
                      >
                        Factory
                      </button>
                      <button
                        className="w-full p-2 cursor-pointer text-[10px] text-left hover:bg-gray-100"
                        onClick={() => handleDropdownOptionClick("Other")}
                      >
                        Other
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-4 ">
              <span className="text-[12px] font-normal">
                Station name (required)
              </span>
              <span className="text-red-500">*</span>
              <input
                type="text"
                className="w-full mt-1 bg-[#F2F2F2] px-2 py-3 rounded-md  text-[10px] focus:outline-none placeholder:font-light placeholder:text-[#CACACA]"
                placeholder="Add Charging Station name "
              />
            </div>
            <div className="p-4 ">
              <span className="text-[12px] font-normal">Description</span>
              <textarea
                name=""
                id=""
                className="w-full h-[100px] mt-1 bg-[#F2F2F2] px-2 py-3 rounded-md  text-[10px] resize-none focus:outline-none placeholder:font-light placeholder:text-[#CACACA]"
                placeholder="Add Charging Station Description"
              ></textarea>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="relative h-[430px] overflow-auto ">
            <div className="px-4 py-2 ">
              <div className="w-full">
                <span className="text-[12px] font-normal">
                  Address (required)
                </span>
                <span className="text-red-500">*</span>
                <input
                  type="text"
                  className="w-full mt-1 bg-[#F2F2F2] px-2 py-3 rounded-md  text-[10px] focus:outline-none placeholder:font-light placeholder:text-[#CACACA]"
                  placeholder="Add Charging Station address "
                />
              </div>
            </div>
            <div className="px-4 py-2 ">
              <img src="/images/map.png" alt="" />
            </div>
            <div className="px-4 py-2 ">
              <span className="text-[12px] font-normal">Latitude</span>
              <input
                type="text"
                className="w-full mt-1 bg-[#F2F2F2] px-2 py-3 rounded-md  text-[10px] focus:outline-none placeholder:font-light placeholder:text-[#CACACA]"
                placeholder="Add Latitude"
              />
            </div>
            <div className="px-4 py-2 ">
              <span className="text-[12px] font-normal">Longitude</span>
              <input
                type="text"
                className="w-full mt-1 bg-[#F2F2F2] px-2 py-3 rounded-md  text-[10px] focus:outline-none placeholder:font-light placeholder:text-[#CACACA]"
                placeholder="Add Longitude"
              />
            </div>
            <div className="px-4 py-2 ">
              <span className="text-[12px] font-normal">Hours</span>
              <input
                type="text"
                className="w-full mt-1 bg-[#F2F2F2] px-2 py-3 rounded-md  text-[10px] focus:outline-none placeholder:font-light placeholder:text-[#CACACA]"
                placeholder="Hours"
              />
            </div>
            <div className="px-4 py-2 ">
              <span className="text-[12px] font-normal">Contact</span>
              <input
                type="text"
                className="w-full mt-1 bg-[#F2F2F2] px-2 py-3 rounded-md  text-[10px] focus:outline-none placeholder:font-light placeholder:text-[#CACACA]"
                placeholder="Phone Number"
              />
            </div>
            <div className="px-4 py-2 ">
              <p className="text-[12px] font-normal">Place Photo</p>
              <span className="text-[10px] font-light text-[#6A6A6A]">
                Add Helpful photos like storefronts, notices, or signs
                (optional)
              </span>
              <span className="text-[10px] text-red-500"> Limit 4 images</span>

              {/* Render if no file selected */}
              {images.length === 0 && (
                <button className="w-[100px] flex justify-between items-center p-2 mt-2  bg-white rounded-full border">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer w-full flex justify-center items-center"
                  >
                    <img
                      src="/images/image_upload.png"
                      alt=""
                      className="w-[25px] h-[25px]"
                    />
                    <p className="text-[10px] text-[#355FF5] ml-1">
                      Add Photos
                    </p>
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      onChange={handleFileChange}
                      multiple // Allow multiple file selection
                    />
                  </label>
                </button>
              )}

              {/* Render if images are selected */}
              {images.length > 0 && (
                <div className="flex mt-2">
                  {/* File Upload Button */}
                 {images.length <4 &&  <button className="w-[85px] h-[70px] flex justify-between items-center mr-2 p-2 bg-white rounded-xl border">
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer w-full flex justify-center items-center"
                    >
                      <img
                        src="/images/image_upload.png"
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        onChange={handleFileChange}
                        multiple // Allow multiple file selection
                      />
                    </label>
                  </button>}

                  {/* File Previews */}
                  <div className="flex  space-x-2 flex-wrap">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="relative"
                        style={{ maxWidth: "85px" }}
                      >
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Preview ${index}`}
                          className="rounded-md w-[85px] h-[70px]"
                          style={{
                            maxWidth: "85px",
                            maxHeight: "70px",
                            objectFit: "cover",
                          }}
                        />
                        <button
                          className="absolute top-1 right-1 p-[1px] bg-[#191a1a7b] rounded-full text-white"
                          onClick={() => handleRemoveImage(index)}
                        >
                          <IoMdCloseCircleOutline />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <p className="mt-2 text-[10px] font-light text-[#6A6A6A]">
                If you add photos, they will appear publicly with your profile
                name and picture. They will appear on Google services across the
                web, like Maps and Search, and on third-party sites and apps
                that use Google services. Google may also use them to update
                other information about this place. Claim this business
              </p>
            </div>
            <div className="mb-[70px]" />
          </div>
        )}
        <div
          className={`absolute bottom-0 left-0 right-0 px-4  flex justify-between items-center  bg-white ${
            step === 2 ? "border-t-2" : ""
          } `}
        >
          <div
            className="w-[48%] flex justify-center items-center py-4 my-2 bg-white cursor-pointer hover:bg-[#eff0f7] outline outline-1 outline-[#6576FF] rounded-md"
            onClick={step === 1 ? () => onClose() : () => setStep(1)}
          >
            <p className="text-[10px] text-[#6576FF] font-normal">
              {step === 1 ? "Cancel" : "Back"}
            </p>
          </div>
          <div
            className="w-[48%] flex justify-center items-center py-4 my-2 bg-[#6576FF] cursor-pointer hover:bg-[#586bfa] rounded-md"
            onClick={step === 1 ? () => setStep(2) : () => onClose()}
          >
            <p className="text-[10px] text-white font-normal">
              {step === 1 ? "Next" : "Submit"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddChargingStation;
