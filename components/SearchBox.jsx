"use client";

import { useState } from "react";

export default function SearchBox(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [skills, setSkills] = useState(props.skillsArray);
  const [searchSkills, setSearchSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [input, setInput] = useState("");

  const moveToSelected = (skill) => {
    setSelectedSkills((prev) => [...prev, skill]);
    const arr = skills.filter((s) => s != skill);
    setSkills(arr);
    // console.log(selectedSkills);
  };
const removeSelected = (skill) => {
    setSkills((prev) => [...prev, skill])
    const arr = selectedSkills.filter((s) => s != skill)
    setSelectedSkills(arr);
}
  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    console.log(input);
  };

  const openDropdown = () => {
    setIsVisible(true);
  };
  const closeDropdown = () => {
    setIsVisible(false);
  };
  return (
    <div className=" overflow-hidden p-4 h-[500px] w-8/12 [box-shadow:rgba(100,_100,_111,_0.2)_0px_7px_29px_0px] bg-opacity-90 rounded-2xlbackdrop-filter backdrop-blur-[13px] backdrop-saturate-[157%] bg-[rgba(255,_255,_255,_0.31)] rounded-[12px] border-[1px] border-[solid] border-[rgba(209,213,219,0.3)]">
      <label htmlFor="" className=" text-lg ">
        Choose your skills
      </label>
      <div className="flex mt-4 rounded-md p-2 border-2 border-black">
        <div className=" flex gap-2 w-fit overflow-scroll">
          {selectedSkills.map((skill) => {
            return (
              <div  className="bg-blue-800 w-fit text-white px-4 py-2 flex gap-1 justify-between items-center rounded-full cursor-pointer">
                <p className=" text-nowrap">{skill}</p>
                <svg
                    onClick={() => {removeSelected(skill)}}
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
        </div>
        <input
          onChange={handleInputChange}
          value={input}
          onFocus={openDropdown}
          // onBlur={closeDropdown}
          className="border-none outline-none rounded-md w-full p-2  "
          type="text"
        ></input>
      </div>
      <div
        className={
          isVisible
            ? "mt-4 h-[350px] overflow-y-scroll block"
            : " hidden mt-4 h-[350px] overflow-y-scroll"
        }
      >
        {skills.map((skill) => {
          return (
            <p
              onClick={() => {
                moveToSelected(skill);
              }}
              className="bg-black w-fit text-white px-4 py-2 rounded-full mt-4 cursor-pointer"
            >
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
}
