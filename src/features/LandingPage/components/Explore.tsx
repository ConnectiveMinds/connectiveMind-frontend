

import Carousel from "./carousel";

// type ExploreProps = {
//   topic: string;
//   description: string;
// };

export function Explore() {
  return (
    <div className="m-4">
      <h1 className="inline-block font-bold text-[2rem] text-[rgba(119,65,170,1)]">
        Explore
      </h1>
      <Carousel />
    </div>
  );
}
