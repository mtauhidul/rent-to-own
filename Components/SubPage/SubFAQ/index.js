import React,{useState} from "react";
import style from "./style.module.css"
import BuyerFAQ from "./BuyerFAQ"
import SellerFAQ from "./SellerFAQ";
import HomeLayout from "../../../Layouts/HomeLayout";

const FAQ = () => {
  const [tab, setTab] = useState("buyer");
  return (
    <HomeLayout>
      <div
        className={`${style["settings-wrapper"]} ${
          tab === "seller" ? style["seetings-wrapper-for-account"] : null
        }`}
      >
        <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center">
          Frequently asked questions
        </p>
        <div className={style["settings-tab"]}>
          <p
            className={`text-lg ml-5 cursor-pointer font-bold py-1 px-3 ${
              tab === "buyer" ? "border-b-4 border-primary" : ""
            }`}
            onClick={() => setTab("buyer")}
          >
            Buyer
          </p>
          <p
            className={`text-lg ml-5 cursor-pointer font-bold py-1 px-3 ${
              tab === "seller" ? "border-b-4 border-primary" : ""
            }`}
            onClick={() => setTab("seller")}
          >
            Seller
          </p>
        </div>

        {tab === "buyer" ? <BuyerFAQ /> : <SellerFAQ />}
      </div>
    </HomeLayout>
  );
};

export default FAQ;
