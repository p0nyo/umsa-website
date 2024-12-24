import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

/**
 * Component for "Team" Slices.
 */
const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="team"
    >
      <div className="text-white min-h-screen my-32">
            <p className="text-9xl"> 
                <span className="font-light">
                    team
                </span> 
                <span className="font-bold">
                    &nbsp;umsa. 
                </span>
            </p>
            <div className="grid grid-cols-2 min-h-screen items-center">
                <p className="text-left">Connecting Malaysians across campus, our club celebrates Malaysian culture, fosters friendships, and creates a welcoming space for students. From cultural events to social gatherings, we bring a piece of home to university life.</p>
                <div className="content-end">
                    <div className="h-36 w-36 border-white border-4"></div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Team;
