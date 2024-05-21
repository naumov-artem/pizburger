import { ProductType } from "../../../menu";
import { Product } from "../Product/Product";
import { productListStyle } from "./ProductList.css";

export const ProductList = ({
  productList,
}: {
  productList: Array<ProductType>;
}) => {
  return (
    <div className={productListStyle}>
      {productList.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
};
