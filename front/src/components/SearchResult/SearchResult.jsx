import SearchItem from '../SearchItem/SearchItem';
import ProductCard from '../ProductCard/ProductCard';
import ProductCardSearch from '../ProductCard/ProductCardSearch';

import './SearchResult.css';

const data = [
  {
    category: 'mock category1',
    product_id: 1,
    product_name: 'Laptop Gamer Lenovo IdeaPad Gaming 3i 15.6 Full HD Intel Core i5 8GB 256GB SSD',
    subcategory: 'mock subcategory1'
  },
  {
    category: 'mock category1',
    product_id: 1,
    product_name: 'mock product1',
    subcategory: 'mock subcategory1'
  },
  {
    category: 'mock category1',
    product_id: 1,
    product_name: 'mock product1',
    subcategory: 'mock subcategory1'
  },
  {
    category: 'mock category1',
    product_id: 1,
    product_name: 'mock product1',
    subcategory: 'mock subcategory1'
  },
  {
    category: 'mock category1',
    product_id: 1,
    product_name: 'mock product1',
    subcategory: 'mock subcategory1'
  },
  {
    category: 'mock category1',
    product_id: 1,
    product_name: 'mock product1',
    subcategory: 'mock subcategory1'
  },
  {
    category: 'mock category1',
    product_id: 1,
    product_name: 'mock product1',
    subcategory: 'mock subcategory1'
  },
  {
    category: 'mock category1',
    product_id: 1,
    product_name: 'mock product1',
    subcategory: 'mock subcategory1'
  },

  {
    category: 'mock category2',
    product_id: 2,
    product_name: 'mock product2',
    subcategory: 'mock subcategory2'
  }
];

// div className="testcont2">
//                   <ProductCard
//                     image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80"
//                     name="Asus Gamer-Beast 4545 18''"
//                     rating={4.6}
//                     tags={['Asus', 'Gaming', 'Nvidia', 'SSD']}
//                     dtime="2-3"
//                   />
//                   <ProductCard
//                     image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80"
//                     name="Asus Gamer-Beast 4545 18''"
//                     rating={4.6}
//                     tags={['Asus', 'Gaming', 'Nvidia', 'SSD']}
//                     dtime="2-3"
//                   />

function SearchResult({ search }) {
  const searchResults = search.map((item, index) => (
  // const searchResults = data.map((item, index) => (
    <ProductCardSearch
      // image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80"
      image={item.webpage_view}
      name={item.product_name}
      rating={4.6}
      tags={[item.subcategory]}
      price={item.base_price}
      // shopname="a"
      description={item.category}
    />
    // <div >{item.category},{item.product_id},{item.product_name},{item.subcategory}</div>
  ));
  return (
    <div className="main-screen">
      {/* <div>busqueda:</div> */}

      <div className="result-grid">{searchResults}</div>
    </div>
  );
}

export default SearchResult;
