import MaterialTable from "material-table";
import { useState, useEffect } from "react";
import { forwardRef } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import AddBox from "@mui/icons-material/AddBox";
import getProducts from "../../api/products.js/getProducts";
import postGeneralProduct from "../../api/products.js/postGeneralProduct";
import postStoreProduct from "../../api/products.js/postStoreProduct";
import getStoreIds from "../../api/getStoreIds";

const ProductCrud = () => {
  const [products, setProducts] = useState(undefined);
  const [columns, setColumns] = useState(undefined);
  const [storeIds, setStoreIds] = useState(undefined);

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

    const getStoreIdsAsync = async () => {
      try {
        const response = await getStoreIds();
        const storeIdsApi = response.data.map((store) => store.store_id);
        setStoreIds(storeIdsApi);
      } catch (e) {
        console.log(e);
        alert("Error while getting store ids");
      }
    };

    getProductsAsync();
    getStoreIdsAsync();
  }, []);

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const onDelete = async (rowData) => {
    const newProducts = products.filter((product) => {
      return product.product_id !== rowData.product_id;
    });
    console.log("newProducts", newProducts);
    setProducts(newProducts);
  };

  const onAdd = async (newData) => {
    if (!storeIds.includes(+newData.store_id)) {
      alert("Store id does not exist");
      return;
    }

    try {
      const response = await postGeneralProduct(newData);
      console.log("response", response);
      // const responseStore = await postStoreProduct(newData);
      setProducts([...products, newData]);
    } catch (e) {
      console.log(e);
      alert("Error while adding product");
    }
  };

  return (
    <div className="testcont3">
      {products ? (
        <>
          <MaterialTable
            title="Multiple Actions Preview"
            columns={columns}
            data={products}
            icons={tableIcons}
            onPageChange={() => {}}
            options={{
              exportButton: true,
            }}
            editable={{
              onRowAdd: (newData) => onAdd(newData),
              onRowUpdate: (newData, oldData) => {},
              onRowDelete: (oldData) => onDelete(oldData),
            }}
          />
        </>
      ) : undefined}
    </div>
  );
};

export default ProductCrud;
