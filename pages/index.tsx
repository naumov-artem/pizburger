import Link from "next/link";
import { useState } from "react";
import { menu } from "../menu";
import { ProductList } from "../src/components/ProductList/ProductList";
import { Search } from "../src/components/Search/Search";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: 10 }}
      >
        <Search
          onChange={(event) =>
            setSearchValue(event.currentTarget.value.toLowerCase())
          }
        />
        <Link href="basket">
          <img src={"/basket.png"} height={28} />
        </Link>
      </div>
      <ProductList
        productList={
          searchValue.length === 0
            ? menu
            : menu.filter(
                (item) =>
                  item.compound.some((item) =>
                    item.toLowerCase().includes(searchValue)
                  ) || item.title.toLowerCase().includes(searchValue)
              )
        }
      />
    </div>
  );
};

export default HomePage;
