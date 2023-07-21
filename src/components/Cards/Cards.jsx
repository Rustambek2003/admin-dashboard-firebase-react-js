// import { CardsData } from "../../Data/Data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "./Card.css";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getProduct } from "../../api/product";

const Card = () => {
  const [expanded, setExpanded] = useState(false);
  const [products, setProducts] = useState([]);

  const openCard = () => {
    setExpanded(true);
  };
  const closeCard = () => {
    setExpanded(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const { success, data } = await getProduct();
      if (success) {
        setProducts(data);
      } else {
        console.error("Error: ", data);
      }
    };

    fetchProducts();
  }, []);
  /*react-apexcharts*/
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T00:30:00.000Z",
          "2018-09-19T00:30:00.000Z",
          "2018-09-19T00:30:00.000Z",
          "2018-09-19T00:30:00.000Z",
          "2018-09-19T00:30:00.000Z",
          "2018-09-19T00:30:00.000Z",
        ],
      },
    },
  };
  /*react-apexcharts*/
  return (
    <div className="Cards">
      {products?.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <div
              className="block_card"
              style={{
                background:
                  "linear-gradient(rgb(248,212,154)-146.42%,rgb(255 202 113)-46.42%)",
                boxShadow: "0px 10px 20px 0px #F9D59B",
              }}
              onClick={openCard}
            >
              <div className="radialBar">
                <CircularProgressbar
                  value={card.barValue}
                  text={`${card.barValue}%`}
                />
                <span>{card.title}</span>
              </div>
              <div className="detail">
                <span className="price">${card.value}</span>
                <span>Last 24 hours</span>
              </div>
            </div>
            {expanded && (
              <div className="staticCard">
                <AiOutlineCloseCircle onClick={closeCard} />
                <Chart
                  series={card.series}
                  type="area"
                  options={data.options}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Card;
