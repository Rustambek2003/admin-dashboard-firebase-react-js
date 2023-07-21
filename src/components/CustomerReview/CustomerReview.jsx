import { CardsData } from "../../Data/Data";
import "./Customer.css";
import Chart from "react-apexcharts"


const CustomerReview = () => {
    const data ={
        options:{
          chart :{
            type:'area',
            height:'auto',
    
          },
          dropShow :{
            enabled:false,
            enabledOnSeries:undefined,
            top:0,
            left:0,
            blur:3,
            color:"#000",
            opacity:0.35,
    
    
          },
          fill:{
            colors:['#fff'],
            type:"gradient",
    
          },
          dataLabels:{
            enabled:false,
    
          },
          stroke:{
            curve:"smooth",
            colors:['white'],
    
    
          },
          tooltip:{
            x:{
              format:'dd/MM/yy HH:mm',
    
            },
    
          },
          grid:{
            show:true,
    
          },
          xaxis:{
            type:'datetime',
            categories:[
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T00:30:00.000Z",
              "2018-09-19T00:30:00.000Z",
              "2018-09-19T00:30:00.000Z",
              "2018-09-19T00:30:00.000Z",
              "2018-09-19T00:30:00.000Z",
              "2018-09-19T00:30:00.000Z",
            ]
    
          }
    
        }
      }

  return (
    <div className="CustomerReview" style={{marginLeft:"15px"}}>
        {CardsData.map((card)=>{
            return(
                <div key={''}>
                
                    <Chart series ={card.series}type="area" options={data.options} />
                </div>
            )
        })}
    </div>
  )
}

export default CustomerReview
