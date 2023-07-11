import React from "react";

const FourthBody = () => {
  const Fresh = [
    {
      image:
        "https://dao54xqhg9jfa.cloudfront.net/oms/9ddaf61c-4596-eaa1-4ea8-f580b65ad2d5/original/Meaty_Bites_copy.jpeg",
    },
    {
      image:
        "https://dao54xqhg9jfa.cloudfront.net/oms/21c18bb7-9960-1d85-2083-8d651c62557c/original/Perfect_Match.jpeg",
    },
  ];

  return (
    <div>
      <div className="freshdivheading">
        <h4>Fresh at Licious!</h4>
        <p>Handpicked assortment just for you</p>
      </div>
      <div className="freshdiv">
        {Fresh.map((fres) => {
          return (
            <div>
              <img width={200} src={fres.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FourthBody;
