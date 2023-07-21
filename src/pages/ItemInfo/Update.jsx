import { useEffect, useState } from "react";
import { getDataPhone, updateItem } from "../../api/product";
import "./iteminfo.css";
import { useParams } from "react-router-dom";

const Update = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const getDoc = async () => {
      const { success, data } = await getDataPhone(id);
      if (success) {
        setData(data);
        console.log(data);
      }
    };
    getDoc();
  }, [id]);

  return (
    <div className="block_update">
      <div className="update_content">
        <input
          type="text"
          placeholder="Name-Phone"
          value={data.namePhone}
          onChange={handleChange}
          id="namePhone"
          name="namePhone"
        />
        <input
          type="text"
          placeholder="Phone-price"
          value={data.price}
          onChange={handleChange}
          id="price"
          name="price"
        />
        <div>
          <button onClick={() => updateItem({id: id, data: data})}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Update;
