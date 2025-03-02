
import Bounded from "@/app/components/Bounded";

const ExecPictures = [
  { src: "/comm-pics/president.jpg", name: "Janelle Yap", role: "President" },
  { src: "/comm-pics/vice-president.jpg", name: "Hayley Chin", role: "Vice-President" },
  { src: "/comm-pics/secretary.jpg", name: "Eunice Chan", role: "Secretary" },
  { src: "/comm-pics/treasurer.jpg", name: "Francine Morais", role: "Treasurer" },
]

const GeneralPictures = [
  { src: "/comm-pics/social-1.jpg", name: "Amelia Loh", role: "Social"},
  { src: "/comm-pics/social-2.jpg", name: "Felix Wen", role: "Social"},
  { src: "/comm-pics/cultural-1.jpg", name: "Yutaka Oishi", role: "Cultural"},
  { src: "/comm-pics/cultural-2.jpg", name: "Hao Xiang Chooi", role: "Cultural"},
  { src: "/comm-pics/sports-1.jpg", name: "Sean Ng", role: "Sports" },
  { src: "/comm-pics/sports-2.jpg", name: "Nicholas Tee", role: "Sports"},
  { src: "/comm-pics/public-relations-1.jpg", name: "Joie Ting", role: "Public Relations"},
  { src: "/comm-pics/public-relations-2.jpg", name: "Natania Ling", role: "Public Relations"},
  { src: "/comm-pics/comms-1.jpg", name: "Caitlyn Liu", role: "Communications"},
  { src: "/comm-pics/comms-2.jpg", name: "Isabella Castillo", role: "Communications"}
]

export default function Team() {
  const ExecSublist = ExecPictures.slice(1,4)

  return (
    <div className="relative bg-white" id="team">
      <Bounded>
        <div className="pb-16">
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
                <div className="relative col-span-3 row-span-3 text-center group">
                  <div className="h-full">
                    <img className="object-cover h-full rounded-md group-hover:opacity-65 transition-opacity duration-300" draggable="false" src={ExecPictures[0].src}></img>
                    <p className="absolute bottom-0 right-1/2 translate-x-1/2 text-white text-3xl font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">{ExecPictures[0].role}</p>
                  </div>
                  <p className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">{ExecPictures[0].name}</p>
                </div>
                {ExecSublist.map((item) => (
                  <div className="relative col-span-2 text-center group">
                    <div className="h-full">
                      <img className="object-cover h-full w-full rounded-md group-hover:opacity-65 transition-opacity duration-300" draggable="false" src={item.src}></img>
                      <p className="absolute bottom-0 right-1/2 translate-x-1/2 text-white text-xl font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.role}</p>
                    </div>
                    <p className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.name}</p>
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
                  <div className="relative text-center group">
                    <div className="h-full">
                      <img className="object-cover h-full rounded-md group-hover:opacity-65 transition-opacity duration-300" draggable="false" src={item.src}></img>
                      <p className="absolute bottom-0 right-1/2 translate-x-1/2 text-white text-xl font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.role}</p>
                    </div>
                    <p className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.name}</p>
                  </div>
                ))}
              </div>
          </div>
      </Bounded>
    </div>
  );
};
