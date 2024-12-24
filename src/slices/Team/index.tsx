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
            <p className="text-9xl"> 
                <span className="font-light opacity-60">
                    team
                </span> 
                <span className="font-bold opacity-90">
                    &nbsp;umsa. 
                </span>
            </p>
            <div className="grid grid-cols-2 items-center">
                <p className="text-left">Connecting Malaysians across campus, our club celebrates Malaysian culture, fosters friendships, and creates a welcoming space for students. From cultural events to social gatherings, we bring a piece of home to university life.</p>
                <div className="content-end">
                    <div className="h-36 w-36 border-white border-4"></div>
                </div>
            </div>
        </div>
    </Bounded>
  );
};

export default Team;
