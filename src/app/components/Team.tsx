
import Bounded from "@/app/components/Bounded";

const ExecPictures = [
  "/joseph-team.jpeg",
  "/joseph-team.jpeg",
  "/joseph-team.jpeg",
  "/joseph-team.jpeg"
]

const GeneralPictures = [
  "/joseph-team.jpeg",
  "/joseph-team.jpeg",
  "/joseph-team.jpeg",
  "/joseph-team.jpeg",
  "/joseph-team.jpeg",
  "/joseph-team.jpeg",
  "/joseph-team.jpeg",
  "/joseph-team.jpeg",
  "/joseph-team.jpeg",
  "/joseph-team.jpeg"
]

export default function Team() {
  const ExecSublist = ExecPictures.slice(1,4)

  return (
    <div className="relative bg-white" id="team">
      <Bounded>
        <div className="text-umsaBlue min-h-screen">
              <p className="text-8xl pb-12"> 
                  <span className="font-light">
                      team
                  </span> 
                  <span className="font-bold">
                      &nbsp;umsa. 
                  </span>
              </p>
              
              <div className="pb-4">
                <span className="text-4xl font-semibold"> 
                  executives.
                </span>
              </div>

              <div className="grid grid-cols-9 gap-4 py-4">
                <div className="col-span-3 row-span-3 text-center">
                  <div className="h-full ">
                    <img className="object-cover h-full rounded-md transparent-y-gradient-sm" src={ExecPictures[0]}></img>
                  </div>
                </div>
                {ExecSublist.map((src) => (
                  <div className="col-span-2">
                    <div className="h-full">
                      <img className="object-cover h-full w-full rounded-md transparent-y-gradient-sm" src={src}></img>
                    </div>
                  </div>
                ))}
              </div>

              <div className="py-4">
                <span className="text-4xl font-semibold"> 
                  general.
                </span>
              </div>

              <div className="grid grid-cols-5 gap-6 py-4">
                {GeneralPictures.map((src) => (
                  <div className="text-center">
                    <div className="h-full">
                      <img className="object-cover h-full rounded-md transparent-y-gradient-sm" src={src}></img>
                    </div>
                  </div>
                ))}
              </div>
          </div>
      </Bounded>
    </div>
  );
};
