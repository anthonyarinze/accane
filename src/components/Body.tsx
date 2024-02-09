import collage from "../assets/collage.jpg";
import WhoWeAre from "../sections/WhoWeAre";
import { whoWeAreData } from "../data/WhoWeAre";
import { sponsorsData } from "../data/Sponsors";
import Sponsors from "../sections/Sponsors";
import Connect from "../sections/Connect";

const Body = () => {
  return (
    <section className="h-dvh">
      <img src={collage} className="hidden md:inline" />
      <WhoWeAre
        header="Who We Are"
        about="  We provide a meeting place for people of African heritage in
          Sunderland and surrounding towns, a space to discuss common issues
          within the community. We provide activities that are physically &
          mentally stimulating."
        images={whoWeAreData}
      />
      <WhoWeAre
        header="What We Do"
        about="With support from the Refugees and Asylum Seekers support Association, members of the community can take come food items to support themselves through seasons."
      />

      <Sponsors header="Our Sponsors" images={sponsorsData} />
      <Connect />
    </section>
  );
};

export default Body;
