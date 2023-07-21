import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css"
import { useEffect, useState } from "react";
import { getOrders } from "../../api/product";
import { useNavigate } from "react-router-dom";





const makeStyles=(status)=>{
 
  if(status === 'Approved'){
        return{
            background:'rgb(145 254 159 / 47%)',
            color:'green'
        }  
    }
    else if(status === 'Pending')
    {
        return{
          background:'#ffadad8f',
          color:'red'
        }
      }
      else {
        return{
          background:'#59bfff', 
          color:'white'
        }
      }
      
    }
    export default function BasicTable() {
       
      const [order,setOrder]=useState([])
      const navigate = useNavigate()


      useEffect(()=>{
        const fetchOrder= async()=>{
          const {success,data}=await getOrders()
          if(success){
            setOrder(data)
          }else{
            console.log("error:",data)
          }
          
        }
        fetchOrder()
        
      },[])

        const FunNavigate=()=>{
          navigate('/item')
        }
      return (
        <div className="Table">
    
      <TableContainer component={Paper}
      style={{boxShadow:'0px 13px 20px 0px #80808029'}}
      >

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking Id</TableCell>
              <TableCell align="left" 
            >Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                    <span className="status" style={makeStyles(row.status)}>{row.status}</span>
                </TableCell>
                <TableCell align="left" className="Details" onClick={FunNavigate}>Detail</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
