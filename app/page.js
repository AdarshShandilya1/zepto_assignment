import SearchBox from '@/components/SearchBox'
import Image from 'next/image'
import data from "@/database/data.json"

export default function Home() {
  const skillsArray = data.skills
  return (
    <div className='flex h-screen justify-center items-center'>
      <SearchBox
        skillsArray = {skillsArray}
      />
    </div>
  )
}
