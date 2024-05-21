import { useCallback, useState } from "react";
import { useBasketContext } from "../../src/BasketContext";
import { BackButton } from "../../src/components/BackButton/ButtonBack";
import { BasketProduct } from "../../src/components/BasketProduct/BasketProduct";
import { BlackWhiteButton } from "../../src/components/BlackWhiteButton/BlackWhiteButton";

const BasketPage = () => {
  const { productList, removeById, removeAll } = useBasketContext();
  const [success, setSuccess] = useState<boolean>();

  const orderIsAccepted = useCallback(() => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, [success]);

  if (success) {
    return (
      <>
        <BackButton />
        <p color="black">Заказ принят!</p>
      </>
    );
  }

  if (productList.length === 0) {
    return (
      <>
        <BackButton />
        <p style={{ color: "black" }}>Корзина пуста</p>
      </>
    );
  }

  return (
    <>
      <BackButton />
      <div style={{ color: "black", marginBottom: "40px" }}>
        {productList.map((item) => (
          <BasketProduct
            key={item.basketId}
            product={item}
            onClickRemove={() => removeById(item.basketId)}
          />
        ))}
      </div>
      <BlackWhiteButton
        disabled={success}
        onClick={() => {
          orderIsAccepted();
          removeAll();
        }}
      >
        Заказать | {productList.reduce((acc, item) => item.price + acc, 0)} руб.
      </BlackWhiteButton>
    </>
  );
};
export default BasketPage;
