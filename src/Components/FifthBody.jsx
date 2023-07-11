import React from "react";
import SixthBody from "./SixthBody";

const FifthBody = () => {
  const combo = [
    {
      image:
        "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F8b51398b-b07f-1a84-cce2-0c3ec19b153e%2Foriginal%2FGoat---Mince.jpg%3Fformat%3Dwebp&w=1920&q=75",
      para1: "Goat Mince - Combo",
      para2: "900gms",
      para3: "₹966",
      para4: "Today in 90 min",
    },
    {
      image:
        "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FProductMerchantdising%2F60f91ea4-e9c9-9ac0-9825-3ce4cb507515%2Foriginal%2F1598881046.5939--2020-08-3119_07_26--472.jpeg%3Fformat%3Dwebp&w=1920&q=75",
      para1: "Chicken Curry Cut",
      para2: "500gms",
      para3: "₹315",
      para4: "Today in 90 min",
    },
    {
      image:
        "https://www.licious.in/_next/image?url=https%3A%2F%2Fd2407na1z3fc0t.cloudfront.net%2FprodDev%2Fpr_15ckn5pzo5x%2F1%2Fprod_display_image%2F1634616842.1144--2021-10-1909%3A44%3A02--1818&w=1920&q=75",
      para1: "Assorted Kebab Platter |",
      para2: "720gms",
      para3: "₹939",
      para4: "Today in 90 min",
    },
    {
      image:
        "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F467fc795-de40-e455-e8b2-2270b039dd5c%2Foriginal%2Fcombo.jpg%3Fformat%3Dwebp&w=1920&q=75",
      para1: "Chicken Kebab & Biryani Combo",
      para2: "5 Pieces",
      para3: "₹412",
      para4: "Today in 90 min",
    },
    {
      image:
        "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FProductMerchantdising%2F1ebe21bf-dd69-7194-a13d-ab0e85704d1b%2Foriginal%2F1598524707.9636--2020-08-2716_08_27--472.jpeg%3Fformat%3Dwebp&w=1920&q=75",
      para1: "Chicken Curry Cut",
      para2: "500gms",
      para3: "₹441",
      para4: "Today in 90 min",
    },
    {
      image:
        "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F0d6cb916-dcc3-5634-dc77-5850211c7096%2Foriginal%2Fchicken_Relevance_PDP_Chicken_Curry_Cut_Small)_470_X_320_PDP_(1).jpg&w=1920&q=75",
      para1: "Chicken Curry Cut - Small Pieces",
      para2: "500gms",
      para3: "₹165",
      para4: "Today in 90 min",
    },
    {
      image:
        "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F0a6cc926-9ccf-3cf2-c9a4-2a3ffbceeccb%2Foriginal%2FPDP_2._Classic_Eggs_-_Pack_of_12.jpg&w=1920&q=75",
      para1: "Classic (Farm Fresh) Eggs - Pack of 12",
      para2: "12 Pieces",
      para3: "₹145 ",
      para4: "",
    },
    {
      image:
        "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F40bf830a-93b1-1e2e-7679-d80785cc1059%2Foriginal%2Fchicken_Relevance_PDP_Chicken_Curry_Cut_Large_470_X_320_PDP_(1).jpg&w=1920&q=75",
      para1: "Chicken Curry Cut - Large Pieces",
      para2: "500gms",
      para3: "₹165",
      para4: "Today in 90 min",
    },
    {
      image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F9b41ff57-e7b0-476d-7f50-29fc2d27fb41%2Foriginal%2FPDP_1._Classic_Eggs_-_Pack_of_6.jpg&w=1920&q=75",
      para1: "Classic (Farm Fresh) Eggs - Pack of 6",
      para2: "6 Pieces",
      para3: "₹75",
      para4: "Today in 90 min",
    },
    {
      image:
        "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F62524818-1102-db74-c230-2a3f95e32d97%2Foriginal%2FPDP_5._Country_Eggs_-_Pack_of_6.jpg&w=1920&q=75",
      para1: "Country Eggs - Pack Of 6",
      para2: "6 Pieces",
      para3: "₹105",
      para4: "Today in 90 min",
    },
  ];

  return (
    <div className="comboparent" >
      <div className="comboheading" >
        <h4>Combos for you</h4>
        <p>Savour the savings!</p>
      </div>
      <div className="combodiv">
        {combo.map((comb) => {
          return (
            <div className="combodiv1">
              <img width={200} src={comb.image} alt="" />
              <h6>{comb.para1}</h6>
              <p className="para1">{comb.para2}</p>
              <p className="para2"> {comb.para3}</p>
              <p className="para3">{comb.para4}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FifthBody;
