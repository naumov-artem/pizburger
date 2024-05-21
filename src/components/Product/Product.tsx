import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { ProductType } from "../../../menu";
import { useBasketContext } from "../../BasketContext";
import { addButtonStyle, productStyle } from "./Product.css";

export const Product = (product: ProductType) => {
  const router = useRouter();
  const { addProduct } = useBasketContext();

  const redirectToProductPage = useCallback(() => {
    router.push(`/dish/${product.id}`);
  }, [router]);

  return (
    <div className={productStyle}>
      <img
        src={product.image}
        alt=""
        width="100%"
        height={200}
        style={{ objectFit: "cover", borderRadius: "10px 10px 0 0" }}
        onClick={redirectToProductPage}
      />
      <div style={{ padding: "0 10px" }}>
        <h2
          style={{ margin: "5px 0", fontSize: 18 }}
          onClick={redirectToProductPage}
        >
          {product.title}
        </h2>
        <p
          style={{ maxHeight: 40, overflow: "hidden" }}
          onClick={redirectToProductPage}
        >
          {product.compound.join(", ")}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            {product.price.toLocaleString("ru-RU", {
              style: "currency",
              currency: "RUB",
              maximumFractionDigits: 0,
            })}
          </span>
          <button
            className={addButtonStyle}
            type="button"
            onClick={() => addProduct(product)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
