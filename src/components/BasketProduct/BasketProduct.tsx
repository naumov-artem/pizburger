import { FunctionComponent } from "react";
import { ProductType } from "../../../menu";

interface BasketProductProps {
  product: ProductType;
  onClickRemove: () => void;
}

export const BasketProduct: FunctionComponent<BasketProductProps> = ({
  product,
  onClickRemove,
}) => {
  return (
    <div
      style={{
        display: "flex",
        maxHeight: 200,
        marginTop: 20,
        width: "100%",
        boxSizing: "border-box",
        boxShadow: "0px 2px 15px #cec2c2",
        borderRadius: "10px",
      }}
    >
      <img
        src={product.image}
        alt="product image"
        width={150}
        style={{
          objectFit: "cover",
          borderRadius: "10px 0 0 10px",
          flexShrink: 0,
        }}
      />
      <div style={{ marginLeft: 10 }}>
        <h2 style={{ marginTop: 10 }}>{product.title}</h2>
        <p>{product.compound.join(", ")}</p>
        <p>
          {product.price.toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
            maximumFractionDigits: 0,
          })}
        </p>
        <button
          style={{
            marginBottom: "10px",
            padding: "6px",
            color: "#ffffff",
            border: "none",
            backgroundColor: "black",
            borderRadius: "5px",
          }}
          onClick={() => onClickRemove()}
        >
          удалить
        </button>
      </div>
    </div>
  );
};
