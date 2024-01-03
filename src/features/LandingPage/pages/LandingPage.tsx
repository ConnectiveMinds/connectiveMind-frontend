import { Navbar } from "../components/navbar";
import { Description } from "../components/Description";
import { Explore } from "../components/Explore";

export function LandingPage() {
  // console.log(typeof(exploreToSection))

  return (
    <div className="max-w-screen-xl mx-auto my-4">
      <Navbar />
      <Description />
      <Explore/>
    </div>
  );
}


