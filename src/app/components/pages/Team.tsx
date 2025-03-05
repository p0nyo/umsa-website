
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
  { src: "/comm-pics/comms-1.jpg", name: "Caitlyn Liu", role: "Comms"},
  { src: "/comm-pics/comms-2.jpg", name: "Issy Castillo", role: "Comms"}
]

export default function Team() {
  const ExecSublist = ExecPictures.slice(1,4)

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
                <div className="sm:col-span-3 sm:row-span-3 text-center group">
                  <div className="relative w-full">
                    <img className="object-cover w-full rounded-md group-hover:opacity-65 border-umsaBlue border-2 transition-opacity duration-300" draggable="false" src={ExecPictures[0].src}></img>
                    <p className="absolute bottom-0 right-1/2 translate-x-1/2 text-white text-5xl font-extrabold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">{ExecPictures[0].role}</p>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-0 top-0">
                        <div className="flex group gap-x-2 items-center p-1">
                          <a href="https://www.facebook.com/media/set/?set=a.978074094344282&type=3" target="_blank">
                            <img className="h-12 bg-white p-2 rounded-md scale-hover" src="/blue-arrow.svg"></img>
                          </a>
                        </div>
                      </div>
                  </div>
                  <p className="text-xl font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{ExecPictures[0].name}</p>
                </div>
                {ExecSublist.map((item) => (
                  <div className="sm:col-span-2 text-center group">
                    <div className="relative w-full">
                      <img className="object-cover w-full rounded-md group-hover:opacity-65 border-umsaBlue border-2 transition-opacity duration-300" draggable="false" src={item.src}></img>
                      <p className="absolute bottom-0 right-1/2 translate-x-1/2 text-white text-2xl font-extrabold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.role}</p>
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-0 top-0">
                        <div className="flex group gap-x-2 items-center p-1">
                          <a href="https://www.facebook.com/media/set/?set=a.978074094344282&type=3" target="_blank">
                            <img className="h-10 bg-white p-2 rounded-md scale-hover" src="/blue-arrow.svg"></img>
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
                {GeneralPictures.map((item) => (
                  <div className="text-center group">
                    <div className="relative w-full">
                      <img className="object-cover w-full rounded-md group-hover:opacity-65 border-umsaBlue border-2 transition-opacity duration-300" draggable="false" src={item.src}></img>
                      <p className="absolute bottom-0 right-1/2 translate-x-1/2 text-white text-xl font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.role}</p>
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-0 top-0">
                        <div className="flex gap-x-2 items-center p-1">
                          <a href="https://www.facebook.com/media/set/?set=a.978074094344282&type=3" target="_blank">
                            <img className="h-8 bg-white p-2 rounded-md scale-hover" src="/blue-arrow.svg"></img>
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
