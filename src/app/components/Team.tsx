
import Bounded from "@/app/components/Bounded";

const ExecPictures = [
  { src: "/joseph-team.jpeg", title: "President" },
  { src: "/joseph-team.jpeg", title: "Vice-President" },
  { src: "/joseph-team.jpeg", title: "Secretary" },
  { src: "/joseph-team.jpeg", title: "Treasurer" },
]

const GeneralPictures = [
  { src: "/joseph-team.jpeg", title: "Social" },
  { src: "/joseph-team.jpeg", title: "Social" },
  { src: "/joseph-team.jpeg", title: "Public Relations" },
  { src: "/joseph-team.jpeg", title: "Public Relations" },
  { src: "/joseph-team.jpeg", title: "Cultural" },
  { src: "/joseph-team.jpeg", title: "Cultural" },
  { src: "/joseph-team.jpeg", title: "Sports" },
  { src: "/joseph-team.jpeg", title: "Sports" },
  { src: "/joseph-team.jpeg", title: "Communications" },
  { src: "/joseph-team.jpeg", title: "Communications" }
]

export default function Team() {
  const ExecSublist = ExecPictures.slice(1,4)

  return (
    <div className="relative bg-white" id="team">
      <Bounded>
        <div className="text-umsaBlue pb-16">
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
                <div className="relative col-span-3 row-span-3 text-center">
                  <div className="h-full ">
                    <img className="object-cover h-full rounded-md transparent-y-gradient-sm" src={ExecPictures[0].src}></img>
                    <p className="absolute bottom-0 right-1/2 translate-x-1/2 text-3xl whitespace-nowrap">{ExecPictures[0].title}</p>
                  </div>
                </div>
                {ExecSublist.map((item) => (
                  <div className="relative col-span-2">
                    <div className="h-full">
                      <img className="object-cover h-full w-full rounded-md transparent-y-gradient-sm" src={item.src}></img>
                      <p className="absolute bottom-0 right-1/2 translate-x-1/2 whitespace-nowrap">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="py-4">
                <span className="text-4xl font-semibold"> 
                  general.
                </span>
              </div>

              <div className="grid grid-cols-5 gap-x-5 gap-y-16 py-4">
                {GeneralPictures.map((item) => (
                  <div className="relative text-center">
                    <div className="h-full">
                      <img className="object-cover h-full rounded-md transparent-y-gradient-sm" src={item.src}></img>
                      <p className="absolute bottom-0 right-1/2 translate-x-1/2 whitespace-nowrap">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>
      </Bounded>
    </div>
  );
};
