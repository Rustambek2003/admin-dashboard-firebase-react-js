import Card from "../Cards/Cards"
import BasicTable from "../Table/Table"
import "./MainDash.css"

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Card/>
      <h2>Recent Orders</h2>
      <BasicTable/>
      
    </div>
  )
}

export default MainDash
