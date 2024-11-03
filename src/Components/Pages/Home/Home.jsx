import HomeBanner from "../../Shared/HomeSection/HomeBanner/HomeBanner";
import HomeSupport from "../../Shared/HomeSection/HomeSupport/HomeSupport";
import HomeVIsitOffice from "../../Shared/HomeSection/HomeVIsitOffice/HomeVIsitOffice";
import HomeUmrahPackages from "../../Shared/HomeSection/HomeUmrahPackages/HomeUmrahPackages";
import HomeFAQ from "../../Shared/HomeSection/HomeFAQ/HomeFAQ";
import HomeContact from "../../Shared/HomeSection/HomeContact/HomeContact";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeSupport />
      <HomeUmrahPackages />
      <HomeFAQ/>
      <HomeVIsitOffice/>
      <HomeContact/>
    </div>
  );
};

export default Home;
