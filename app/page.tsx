import { BsTwitterX } from "react-icons/bs";
import React from 'react';
import { MdHomeFilled } from "react-icons/md";
interface XSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItem: XSidebarButton[] = [
  {
    title: "Home",
    icon: <MdHomeFilled />
  }
]


export default function Home() {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="grid grid-cols-12 h-full px-0">
        <div className="col-span-2 justify-start pt-2 pl-36 pr-5 ">
          <div className="text-4xl h-fit hover:bg-gray-600 p-2 cursor-pointer transition-all rounded-3xl">
            <BsTwitterX className="text-white" />
          </div>
          <div className="mt-4">
            <ul>
            {SidebarMenuItem.map(item => <li className="flex justify-start items-center gap-2 text-white text-4xl pl-2 cursor-pointer hover:bg-gray-600 transition-all rounded-full" key={item.title}><span>{item.icon}</span></li>)}
         </ul>
         </div>

        </div>

      
        <div className="col-span-6 border-r-[0.2px] border-l-[0.2px] border-gray-400"></div>

    
        <div className="col-span-4"></div>
      </div>
    </div>
  );
}
