import { useEffect, useState } from "react";
import "./iteminfo.css";
import { useNavigate, useParams } from "react-router-dom";
import { deleteItem, getDataPhone } from "../../api/product";

const ItemInfo = () => {
  const { id } = useParams();
  const navigate=useNavigate()

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const getDetail = async () => {
      const { success, data } = await getDataPhone(id);
      if (success) {
        setDetail(data);
        console.log(data);
      }
    };

    getDetail();
  }, [id]);

  return (
    <div className="itemInfo">
      <div className="block_img">
        <img
          src={detail.img}
          alt=""
        />
      </div>
      <div className="block_infoText">
        <h1>{detail?.namePhone}</h1>
        <p>Lizards are a widespread group</p>
        <span>{detail?.price}</span>
        <div>
          <button className="btn_update" onClick={()=>navigate(`/update/${id}`)}>Update</button>
          <button className="btn_delete" onClick={() => deleteItem(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
