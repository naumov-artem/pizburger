import { useRouter } from "next/router";
import { menu } from "../../menu";
import { useBasketContext } from "../../src/BasketContext";
import { BackButton } from "../../src/components/BackButton/ButtonBack";
import { BlackWhiteButton } from "../../src/components/BlackWhiteButton/BlackWhiteButton";

const DishPage = () => {
  const router = useRouter();
  const product = menu.find((item) => item.id === Number(router.query.id));
  const { addProduct } = useBasketContext();

  if (product) {
    return (
      <>
        <BackButton />
        <div style={{ color: "black", marginTop: 20 }}>
          <img
            src={product.image}
            alt="product image"
            width="100%"
            height={300}
            style={{
              objectFit: "cover",
            }}
          />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Состав: {product.compound.join(", ")}</p>
          <ul style={{ padding: "0 0 0 15px" }}>
            {product.other.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{product.price} руб.</p>
          <BlackWhiteButton onClick={() => addProduct(product)}>
            Добавить в корзину
          </BlackWhiteButton>
        </div>
      </>
    );
  } else {
    return <div style={{ color: "white" }}>Product not found</div>;
  }
};

export default DishPage;
