import MobileLayout from "../component/layouts/MobileLayout";
import TabletLayout from "../component/layouts/TabletLayout";
import useMediaSize from "../hooks/useMediaSize";

const Home = () => {
  const { Mobile, Tablet } = useMediaSize();

  return Mobile ? (
    <MobileLayout />
  ) : Tablet ? (
    <TabletLayout />
  ) : (
    <div>PC 버전입니다.</div>
  );
};

export default Home;
