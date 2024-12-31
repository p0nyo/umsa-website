import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

/**
 * Component for "Team" Slices.
 */
const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="team"
    >
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
  );
};

export default Team;
