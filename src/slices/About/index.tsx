import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ArrowDown01Icon } from "hugeicons-react" 

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="about"
    >
      <div className="text-white min-h-screen my-32">
            <p className="text-8xl"> 
                <span className="font-light">
                    we are
                </span> 
                <span className="font-bold">
                    &nbsp;umsa. 
                </span>
            </p>
            <div className="grid grid-cols-2 min-h-screen items-center">
                <p className="text-left">Connecting Malaysians across campus, our club celebrates Malaysian culture, fosters friendships, and creates a welcoming space for students. From cultural events to social gatherings, we bring a piece of home to university life.</p>
                <div className="">
                    <div className="h-36 w-36 border-white border-4"></div>
                </div>
            </div>
            <ArrowDown01Icon />
        </div>
    </section>
  );
};

export default About;
