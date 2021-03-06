import Link from "next/link";
import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import Slider from '../../Slider/index';

const index = ({ propertyDetails, setPricePerMonth, setShowMakeAnOffer, showMakeAnOffer }) => {

  //calculates the payment for a loan based on constant payments
  function PMT(ir, np, pv, fv, type) {
    /*
    * ir   - interest rate per month
    * np   - number of periods (months)
    * pv   - present value
    * fv   - future value
    * type - when the payments are due:
    *        0: end of the period, e.g. end of month (default)
    *        1: beginning of period
    */
    let pmt, pvif;

    fv || (fv = 0);
    type || (type = 0);

    if (ir === 0)
      return -(pv + fv) / np;

    pvif = Math.pow(1 + ir, np);
    pmt = - ir * (pv * pvif + fv) / (pvif - 1);

    if (type === 1)
      pmt /= (1 + ir);

    return pmt;
  }
  const average = (array) => array.reduce((a, b) => a + b) / array.length;
  const loggedInUser = useSelector((state) => state.auth?.userData);
  const auth = useSelector((state) => state.auth);
  const [downPay, setDownPay] = React.useState(3);
  const [minMaxMonth, setMinMaxMonth] = React.useState(36);
  const price = propertyDetails?.price;
  //calculation price
  const purchasePrice = price + price * 0.05 * (minMaxMonth / 36);
  const landTaxPay = purchasePrice * -0.02
  const discountRateApplied = 0.25;
  const monthlyRentAddition = Math.max(downPay - 3, 0) * price / 100;
  const addIncreRentPerPeriod = Math.round(PMT(discountRateApplied / 12, minMaxMonth, monthlyRentAddition, 0, 0) / 10) * 10
  const increRentPerPeriod = Math.round(PMT(discountRateApplied / 12, minMaxMonth, landTaxPay, 0, 0) / 10) * 10
  const pricePerMonth = Math.round(
    price * (average([9.6, 11.4]) * 1 / 100) * 0.9 / 12 + addIncreRentPerPeriod + increRentPerPeriod
  ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  useEffect(() => {
    setPricePerMonth(pricePerMonth);
  }, [pricePerMonth]);
  return (
    <div className="border border-primary shadow-md border-t-8 rounded-lg p-5">
      <div className="flex justify-between">
        <h1 className="text-2xl font-medium">Price</h1>
        <div>
          <h1 className="text-2xl font-medium">$ {price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
        </div>
      </div>
      {
        (auth?.userData?.type === "BUYER" ? (
          <>
            <Link
              href={{
                pathname: "/messaging",
                query: { sellerid: propertyDetails?.User.id },
              }}
            >
              <a className={"text-xs lg:text-sm py-2  block"}>
                <div className="bg-primary mt-5 hover:bg-green-500 h-10 rounded flex items-center justify-center cursor-pointer">
                  <p className="text-md font-bold text-white">Message Seller</p>
                </div>
              </a>
            </Link>
            <button
              onClick={() => setShowMakeAnOffer(!showMakeAnOffer)}
              className="w-full h-10 mt-5 rounded hover:bg-gray-100 border border-primary flex items-center justify-center cursor-pointer">
              <p className="text-md font-bold">Apply to Rent-To-Own</p>
            </button>
          </>
        ) : null)
      }

      <div className="mt-5 grid justify-items-center">
        <p className="text-md text-gray-700">QUESTIONS? CALL US TODAY</p>
        <p className="text-xl font-semibold mt-3 text-gray-700">
          (+1261 5645 4565)
        </p>
      </div>
      <p className="text-md mt-5 font-medium text-center text-gray-700">
        Booking breakdown
      </p>
      <div className="mt-5 flex justify-between">
        <p className="text-xs text-gray-800 font-medium">
          Property fair market value today
        </p>
        <p className="text-xs text-gray-800 font-medium">${price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>
      <p className="text-xs text-gray-300">
        Mimimun of $200,000; maximum $50,000
      </p>
      <div className="mt-5 flex justify-between">
        <div className="flex flex-row relative">
          <p className="text-xs text-gray-800 font-medium">
            Rent-to-own application down payment
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-300 ">
        Mimimun of $200,000; maximum $50,000
      </p>

      <div className="pt-4"></div>
      <Slider
        sliderValue={downPay}
        setSliderValue={setDownPay}
        min={3}
        max={10}
      />

      {/* 2nd */}
      <div className="mt-5 flex justify-between">
        <div className="flex flex-row relative">
          <p className="text-xs text-gray-800 font-medium">Rent-to-own-term</p>
        </div>
      </div>
      <p className="text-xs text-gray-300 ">
        Minimum of 12 months; maximum of 36 months
      </p>

      <div className="pt-4"></div>
      <Slider
        sliderValue={minMaxMonth}
        setSliderValue={setMinMaxMonth}
        min={12}
        max={36}
        month
      />

      <hr className="mt-5"></hr>
      <div className="mt-5 flex justify-between">
        <p className="text-xs text-gray-800 font-medium">
          Rent-to-own monthly payments
        </p>
        <p className="text-sm font-medium text-gray-800">${pricePerMonth}</p>
      </div>
    </div>
  );
};

export default index;