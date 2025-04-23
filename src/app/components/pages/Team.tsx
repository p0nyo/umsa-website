'use client'
import Bounded from "@/app/components/Bounded";
import { useEffect, useState } from "react";


type TeamRequestType = {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: string;
}

export default function Team() {
  const [team, setTeam] = useState<TeamRequestType[]>([]);
  const [execSubList, setExecSubList] = useState<TeamRequestType[]>([]);
  const [genSubList, setGenSubList] = useState<TeamRequestType[]>([]);

  const getTeam = async () => {
    const response = await fetch('/api/get-team');
    const data = await response.json();
    setTeam(data || []);
    setExecSubList(data.slice(1,4) || []);
    setGenSubList(data.slice(4,14) || []);
  }

  useEffect(() => {
    getTeam();
  }, [])

  return (
    <div className="relative text-umsaBlue bg-white" id="team">
      <Bounded>
        <div className="pb-16">
              <p className="text-6xl sm:text-8xl pb-12"> 
                  <span className="font-light">
                      team
                  </span> 
                  <span className="font-bold">
                      &nbsp;umsa. 
                  </span>
              </p>

              <div className="pb-4">
                <span className="text-3xl sm:text-4xl font-semibold"> 
                  executives.
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-9 gap-4">
                  {team.length > 0 ? (
                    <div className="sm:col-span-3 sm:row-span-3 text-center group">
                      <div className="relative w-full">
                        <img className="object-cover w-full rounded-md group-hover:opacity-65 border-umsaBlue border-2 transition-opacity duration-300" draggable="false" src={team[0].image} alt=""></img>
                        <p className="absolute bottom-0 right-1/2 translate-x-1/2 text-white text-2xl sm:text-5xl font-extrabold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">{team[0].role}</p>
                        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-0 top-0">
                            <div className="flex group gap-x-2 items-center p-1">
                                <div>
                                  <a href={team[0].socials} target="_blank">
                                    <img className="h-10 sm:h-12 bg-white p-2 rounded-md scale-hover" src="/blue-arrow.svg" alt=""></img>
                                  </a>
                                </div>
                            </div>
                          </div>
                      </div>
                      <p className="text-xl font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{team[0].name}</p>
                    </div>
                  ) : (
                    <div className="relative w-full">
                    </div>
                  )}
                {execSubList.map((item, index) => (
                  <div key={index} className="sm:col-span-2 text-center group">
                    <div className="relative w-full">
                      <img className="object-cover w-full rounded-md group-hover:opacity-65 border-umsaBlue border-2 transition-opacity duration-300" draggable="false" src={item.image} alt=""></img>
                      <p className="absolute bottom-0 right-1/2 translate-x-1/2 text-white text-2xl font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.role}</p>
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-0 top-0">
                        <div className="flex group gap-x-2 items-center p-1">
                          <a href={item.socials} target="_blank">
                            <img className="h-10 bg-white p-2 rounded-md scale-hover" src="/blue-arrow.svg" alt=""></img>
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="text-xl font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.name}</p>
                  </div>
                ))}
              </div>

              <div className="py-4">
                <span className="text-3xl sm:text-4xl font-semibold"> 
                  general.
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-5 gap-y-5">
                {genSubList.map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="relative w-full">
                      <img className="object-cover w-full rounded-md group-hover:opacity-65 border-umsaBlue border-2 transition-opacity duration-300" draggable="false" src={item.image} alt=""></img>
                      <p className="absolute bottom-0 right-1/2 translate-x-1/2 text-white text-xl font-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.role}</p>
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-0 top-0">
                        <div className="flex gap-x-2 items-center p-1">
                          <a href={item.socials} target="_blank">
                            <img className="h-8 bg-white p-2 rounded-md scale-hover" src="/blue-arrow.svg" alt=""></img>
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="text-xl font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.name}</p>
                  </div>
                ))}
              </div>
          </div>
      </Bounded>
    </div>
  );
};
