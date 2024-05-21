import { nanoid } from "nanoid";
import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductType } from "../menu";

interface BasketProduct extends ProductType {
  basketId: string;
}

interface BasketContextType {
  productList: Array<BasketProduct>;
  addProduct: (product: ProductType) => void;
  removeById: (productId: BasketProduct["basketId"]) => void;
  removeAll: () => void;
}

const basketContext = createContext<BasketContextType>({
  productList: [],
  addProduct: () => {},
  removeById: () => {},
  removeAll: () => {},
});

export const BasketContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [productList, setProductList] = useState<
    BasketContextType["productList"]
  >([]);

  const updateState = useCallback(
    (newState: BasketContextType["productList"]) => {
      console.log("set", newState);

      localStorage.setItem("basket", JSON.stringify(newState));

      return newState;
    },
    [productList]
  );

  useEffect(() => {
    const data = localStorage.getItem("basket");
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setProductList(parsedData);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const addProduct = useCallback(
    (product: ProductType) => {
      setProductList((state) =>
        updateState([{ ...product, basketId: nanoid() }, ...state])
      );
    },
    [productList]
  );

  const removeById = useCallback(
    (basketId: BasketProduct["basketId"]) => {
      setProductList((state) =>
        updateState(state.filter((item) => item.basketId !== basketId))
      );
    },
    [productList]
  );

  const removeAll = useCallback(() => {
    setProductList(() => updateState([]));
  }, [productList]);

  return (
    <basketContext.Provider
      value={{ productList, addProduct, removeById, removeAll }}
    >
      {children}
    </basketContext.Provider>
  );
};

export const useBasketContext = () => useContext(basketContext);
