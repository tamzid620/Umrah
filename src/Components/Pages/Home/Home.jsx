import HomeBanner from "../../Shared/HomeSection/HomeBanner/HomeBanner";
import HomeSupport from "../../Shared/HomeSupport/HomeSupport";
import HomeVIsitOffice from "../../Shared/HomeSection/HomeVIsitOffice/HomeVIsitOffice";
import HomeUmrahPackages from "../../Shared/HomeUmrahPackages/HomeUmrahPackages";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeSupport />
      <HomeUmrahPackages />
      <HomeVIsitOffice/>
    </div>
  );
};

export default Home;
