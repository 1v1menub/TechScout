import MaterialTable from "material-table";
import { useState, useEffect } from "react";
import { forwardRef } from "react";

import AddBox from "@mui/icons-material/AddBox";
import getProducts from "../../api/products.js/getProducts";
const ProductCrud = () => {
  const [products, setProducts] = useState(undefined);
  const [columns, setColumns] = useState(undefined);
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  };
  useEffect(() => {
    const getProductsAsync = async () => {
      try {
        const response = await getProducts();
        const productsApi = response.data;
        const columnsApi = Object.keys(productsApi[0]).map((key) => {
          const val = { title: key, field: key };
          return val;
        });
        setColumns(columnsApi);
        setProducts(productsApi);
      } catch (e) {
        console.log(e);
        setProducts([]);
        alert("Error while getting products");
      }
    };
    getProductsAsync();
  }, []);

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="testcont3">
      {products ? (
        <>
          {/* <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl> */}
          <MaterialTable
            title="Multiple Actions Preview"
            columns={columns}
            data={products}
            icons={tableIcons}
            actions={[
              {
                icon: "save",
                tooltip: "Save User",
                onClick: (event, rowData) => alert("You saved " + rowData.name),
              },
              {
                icon: "delete",
                tooltip: "Delete User",
                onClick: (event, rowData) =>
                  alert("You want to delete " + rowData.name),
              },
              {
                icon: "add",
                tooltip: "Add User",
                isFreeAction: true,
                onClick: (event) => alert("You want to add a new row"),
              },
            ]}
          />
        </>
      ) : undefined}
    </div>
  );
};

export default ProductCrud;
