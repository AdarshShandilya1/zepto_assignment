import SearchBox from "@/components/SearchBox";
import Image from "next/image";
import data from "@/database/data.json";

export default function Home() {
  const skillsArray = data.skills;
  return (
    <div className="flex items-center justify-center h-screen  bg-cover bg-no-repeat bg-center bg-[url(https://images.pexels.com/photos/414659/pexels-photo-414659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]">
      <SearchBox skillsArray={skillsArray} />
    </div>
  );
}
