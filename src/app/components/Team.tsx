
import Bounded from "@/app/components/Bounded";

export default function Team() {
  return (
    <div className="relative" id="team">
      <Bounded>
        <div className="text-white min-h-screen">
              <p className="text-9xl transparent-y-gradient"> 
                  <span className="font-light opacity-60">
                      team
                  </span> 
                  <span className="font-bold opacity-90">
                      &nbsp;umsa. 
                  </span>
              </p>

              <span className="text-7xl text-white font-light transparent-y-gradient"> 
                executives.
              </span>

              <div className="grid grid-cols-4 my-8 gap-x-5 items-start min-h-screen">
                <div className="h-2/3">
                  <div className="h-full ">
                    <img className="object-cover h-full rounded-md transparent-y-gradient-sm" src="/joseph-team.jpeg"></img>
                  </div>
                </div>
                <div className="h-1/3">
                  <div className="h-full">
                    <img className="object-cover h-full w-full rounded-md transparent-y-gradient-sm" src="/joseph-team.jpeg"></img>
                  </div>
                </div>
                <div className="h-1/3">
                  <div className="h-full">
                    <img className="object-cover h-full w-full rounded-md transparent-y-gradient-sm" src="/joseph-team.jpeg"></img>
                  </div>
                </div>
                <div className="h-1/3">
                  <div className="h-full">
                    <img className="object-cover h-full w-full rounded-md transparent-y-gradient-sm" src="/joseph-team.jpeg"></img>
                  </div>
                </div>
              </div>
          </div>
      </Bounded>
    </div>
  );
};
