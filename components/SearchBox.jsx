"use client";

import { useState } from "react";

export default function SearchBox(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [skills, setSkills] = useState(props.skillsArray);
  const [searchSkills, setSearchSkills] = useState(props.skillsArray);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [input, setInput] = useState("");

  const moveToSelected = (skill) => {
    setSelectedSkills((prev) => [...prev, skill]);
    const arr = skills.filter((s) => s != skill);
    const arr1 = searchSkills.filter((s) => s != skill);
    setSearchSkills(arr1);
    setSkills(arr);
    // console.log(selectedSkills);
  };
  const removeSelected = (skill) => {
    setSkills((prev) => [...prev, skill]);
    const arr = selectedSkills.filter((s) => s != skill);
    setSearchSkills((prev) => [...prev, skill]);
    setSelectedSkills(arr);
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    const arr = skills.filter((skill) =>
      skill.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchSkills(arr);
  };

  const openDropdown = () => {
    setIsVisible(true);
  };
  const closeDropdown = () => {
    setIsVisible(false);
  };
  return (
    <div className=" overflow-hidden p-6 h-[500px] w-6/12 shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px] bg-opacity-90 rounded-2xlbackdrop-filter backdrop-blur-[8px] backdrop-saturate-[157%] bg-[rgba(255,_255,_255,_0.31)] rounded-[12px] border-[1px] border-[solid] border-[rgba(209,213,219,0.3)]">
      <label htmlFor="" className="text-[14px] text-[#565656]">
        Choose your skills
      </label>
      <div className="flex flex-wrap gap-2 p-2 border-2 border-[#6e6e6e] rounded-md">
        {/* <div className="flex gap-2 overflow-x-scroll w-fit hide"> */}
        {selectedSkills.map((skill) => {
          return (
            <div className="flex items-center justify-between gap-1 px-4 py-2 text-white bg-[#565656] rounded-full cursor-pointer bg- w-fit">
              <p className=" text-nowrap">{skill}</p>
              <svg
                onClick={() => {
                  removeSelected(skill);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          );
        })}
        {/* </div> */}
        <input
          onChange={handleInputChange}
          value={input}
          onFocus={openDropdown}
          // onBlur={closeDropdown}
          className="p-2 bg-transparent border-none rounded-md outline-none"
          type="text"
        ></input>
      </div>
      <div
        className={
          isVisible
            ? "max-h-[350px] overflow-y-scroll flex flex-wrap  gap-x-4 gap-y-2"
            : " hidden mt-4 h-[350px] overflow-y-scroll"
        }
      >
        { 
          searchSkills.sort().map((skill) => {
          return (
            <p
              onClick={() => {
                moveToSelected(skill);
              }}
              className="px-4 py-2 mt-4 text-[white] font-semibold bg-[#5e5e5e50] opacity-100 border-[3px] border-[white] border-opacity-100 rounded-full cursor-pointer  w-fit h-fit"
            >
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
}
