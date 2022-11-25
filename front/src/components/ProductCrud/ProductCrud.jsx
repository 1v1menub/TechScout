import MaterialTable from 'material-table';
import { useState, useEffect } from 'react';
import getProducts from '../../api/products.js/getProducts';
const ProductCrud = () => {
  const [products, setProducts] = useState(undefined);
  useEffect(async () => {
    try {
      // const response = await getProducts();
      // setProducts(response.data);
    } catch (e) {
      console.log(e);
      setProducts([]);
      alert('Error while getting products');
    }
  }, []);

  return (
    <div className="testcont3">
      {products ?? (
        <MaterialTable
          title="Simple Action Preview"
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
              title: 'Birth Place',
              field: 'birthCity',
              lookup: { 34: 'İstanbul', 63: 'asa' }
            }
          ]}
          data={products}
          actions={[
            {
              icon: 'save',
              tooltip: 'Save User',
              onClick: (event, rowData) => alert('You saved ' + rowData.name)
            }
          ]}
        />
      )}
    </div>
  );
};

export default ProductCrud;
