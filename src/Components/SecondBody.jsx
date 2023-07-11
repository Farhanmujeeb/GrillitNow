import React from "react";
const SecondBody = () => {
  const Shop = [
    {
      image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/111d6147-b116-f51c-bd9d-dddfd923ba97/original/Todays_Deal_1.png",
      head: "Today's Deals",
    },
    {
      image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d654ce6f-3b1a-efb1-ce66-64b3a4afb655/original/Chicken_(1)_(1).png",
      head: "Chicken",
    },
    {
      image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/52ed9676-ec28-711e-dd8a-55d4ea17c324/original/Fish_(1)_(1)_(1).png",
      head: "Fish & Seafood",
    },
    {
      image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2119874c-38a6-df8c-22f1-5cd8a2eb4d80/original/Mutton_(1)_(1).png",
      head: "Mutton",
    },
    {
      image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cbcb49fd-0d91-0eaf-a23a-d78202b5c9db/original/All-Cat-Icon-Images_(1).png",
      head: "Ready to Cook",
    },
    {
      image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/82b8b842-3d62-955f-6076-c57ca8fdb4c5/original/Prawns.png",
      head: "Prawns",
    },
  ];

  const Deal = [
    {
      image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/544bddc9-5775-cd44-511c-8e7e78f75a10/original/Eggs.png",
      head: "Eggs",
    },

    {
      image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2ecb2ebd-114c-7a9b-25eb-ece9dec68d2c/original/Coldcuts.png",
      head: "Cold Cuts",
    },

    {
      image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c36cb4a6-1751-bcff-81e6-1e2b5a0d0520/original/Kebabs_(1).png",
      head: "Kebab & Biryani",
    },
    {
      image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/94f02fac-266b-f1e6-b6af-4ba19dade1c9/original/spreads-transparent_(5).png",
      head: "Spreads",
    },

    {
      image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/da303776-1989-e6a8-2113-74cf19d314d8/original/Uncrave.png",
      head: "Plant Based Meat",
    },
    {
      image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4ad0a144-8830-a4b5-90ee-216753328bbd/original/Masala_1.png",
      head: "Meat Masala",
    },
  ];
  return (
    <div className="itemdivmain">
      <div className="itemheading">
        <h4>Shop by Categories  </h4>
        <p>Freshest meats and much more!</p>
      </div>
      <div className="itemdiv">
        {Shop.map((item) => {
          return (
            <div className="itemdiv1">
              <img width={130} src={item.image} alt="" />
              <h7>{item.head}</h7>
            </div>
          );
        })}
      </div>
      <div className="shishdiv">
        {Deal.map((shish) => {
          return (
            <div className="shishdiv1">
              <img width={130} src={shish.image} alt="" />
              <h7>{shish.head}</h7>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondBody;
