import { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";

import "./Updates.css";
import { getPersonData } from "../../api/product";

const Update = () => {
  const [dataPerson, setDataPerson] = useState([]);
  const time1 = Date.now()
  // const time2 = Date.parse("04-09-2023 8:30 PM")


  useEffect(() => {
    const fetchProducts = async () => {
      const { success, data } = await getPersonData();
      if (success) {
        setDataPerson(data);
      } else {
        console.log("Error:", data);
      }
    };
    fetchProducts();
  }, []);


  return (
    <div className="Update" style={{ marginLeft: "15px" }}>
      {dataPerson?.map((update) => {
        return (
          <div className="update" key={""}>
            <img src={update.img} alt="" />
            <div className="noti">
              <div style={{ margin: "0.5rem" }}>
                <span>{update.userName}</span>
                <br />
                <span>{update.noti}</span>
              </div>

              <div>
                <p>
                <ReactTimeAgo date={time1}locale="en-US"/>
                {/* <ReactTimeAgo date={time2}locale="en-US"/> */}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Update;
