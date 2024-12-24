import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ArrowDown01Icon } from "hugeicons-react" 
import Bounded from "@/app/components/Bounded";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="about"
      className="text-white"

    >
    <div className="text-white min-h-screen flex flex-col">
      <p className="text-9xl">
        <span className="font-light opacity-60">we are</span>
        <span className="font-bold opacity-90">&nbsp;umsa.</span>
      </p>
      <div className="grid grid-cols-[0.5fr,auto] h-full flex-1">
        <div className="flex items-center">
          <p className="text-left text-2xl font-light leading-loose">
            {slice.primary.about_description}
          </p>
          
        </div>
        <div className="flex justify-center items-center">
          <div className="h-36 w-36 border-white border-4"></div>
        </div>
      </div>
      {/* <ArrowDown01Icon /> */}
    </div>
    </Bounded>
  );
};

export default About;
