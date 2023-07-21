import "./item.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/product";
import { useNavigate } from "react-router-dom";

const Item = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      const { success, data } = await getProducts();
      if (success) {
        setProduct(data);
      } else {
        console.log("error:", data);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="Item">
      {product?.map((item, id) => {
        return (
          <Card
            sx={{
              maxWidth: 250,
              height: 260,
              marginLeft: "60px",
              marginTop: "60px",
            }}
            key={id}
          >
            <CardMedia
              sx={{ height: 100 }}
              image={item.img}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.namePhone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group
              </Typography>
            </CardContent>
            <CardActions>
              <h4
                style={{ color: "red", marginRight: "20px", cursor: "pointer" }}
              >
                {item.price}
              </h4>
              <Button
                size="small"
                onClick={() => navigate(`/item-info/${item.id}`)}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default Item;
