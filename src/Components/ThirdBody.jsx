import React from "react";

const ThirdBody = () => {
  const card = [
    {
      image:
        "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F0d6cb916-dcc3-5634-dc77-5850211c7096%2Foriginal%2Fchicken_Relevance_PDP_Chicken_Curry_Cut_Small)_470_X_320_PDP_(1).jpg%3Fformat%3Dwebp&w=1920&q=75",
      heading: "Chicken Curry Cut - Small Pieces",
      para1: "500gms",
      para2: "₹166 ",
      para3: "Today in 90 min",
    },

    {
      image:
        "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fc0a07db3-763d-a743-5ad2-ce6408b7cc4b%2Foriginal%2Fchicken_Relevance_PDP_Chicken_Breast_470_X_320_PDP_(1).jpg%3Fformat%3Dwebp&w=1920&q=75",
      heading: "Chicken Breast - Boneless",
      para1: "450gms",
      para2: "₹285 ",
      para3: "Today in 90 min",
    },
    {
      image:
        "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F0a6cc926-9ccf-3cf2-c9a4-2a3ffbceeccb%2Foriginal%2FPDP_2._Classic_Eggs_-_Pack_of_12.jpg%3Fformat%3Dwebp&w=1920&q=75",
      heading: "Classic (Farm Fresh) Eggs - Pack of 12",
      para1: "12 Pieces",
      para2: "₹146 ",
      para3: "Today in 90 min",
    },
    {
      image:
        "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Ffeedc98d-42e1-0e0a-7da0-0072fa84977c%2Foriginal%2Fp2_tile_images_6th_folder-09_(1).jpg%3Fformat%3Dwebp&w=1920&q=75",
      heading: "RohuMedium-Bengali Cut,NoHead",
      para1: "500gms",
      para2: "₹269 ",
      para3: "Today in 90 min",
    },
    {
      image:
        "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F018d4866-6252-8f4d-84c7-dee09b295691%2Foriginal%2FUCOOKED_(1).jpg%3Fformat%3Dwebp&w=1920&q=75",
      heading: "Afghani Murgh Seekh Kebab",
      para1: "4 Pieces",
      para2: "₹269 ",
      para3: "Today in 90 min",
    },
  ];
  return (
    <div>
      <div className="cardsmainheading">
        <h3>Bestsellers</h3>
        <p>Most popular products near you!</p>
      </div>
      <div className="cardsmain">
        {card.map((cards) => {
          return (
            <div>
              <img width={200} src={cards.image} alt="" />
              <h6>{cards.heading}</h6>
              <p className="para1">{cards.para1}</p>
              <p className="para2">{cards.para2}</p>
              <p className="para3">{cards.para3}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThirdBody;
