import { JSX } from "react";
import "../../assets/css/mobileLayout.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const MobileLayout = () => {
  return (
    <div className="mobile-wrap">
      <div className="mobile-title">홈</div>
      <div>
        <div className="mobile-top-title">최신음악</div>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default MobileLayout;
