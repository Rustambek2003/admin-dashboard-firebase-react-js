// import CustomerReview from "../CustomerReview/CustomerReview"
import Update from "../Update/Update"
import "./RightSide.css"
const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3 style={{marginLeft:"15px"}}>Updates</h3>
          <Update/>
      </div>      
      <div >
         <h3 style={{marginLeft:"15px"}}>Customer Review</h3>
         {/* <CustomerReview/> */}
      </div>
    </div>
  )
}

export default RightSide
