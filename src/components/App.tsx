import React, { useEffect, useState, useCallback } from "react";

import Header from "./header";
import Nav from "./nav";
import Input from "./input";
import Select from "./select";
import Pagination from "./pagination";
import Footer from "./footer";

import ProductList from "../organisms/productsList";
import HeaderList from "../organisms/headerList";

import { fetchApi, OrderByEnum, ApiParamsType } from "../api";

const sortOptions = [
  {
    value: OrderByEnum.ASC,
    text: "Preço - Mais baixo ao mais alto"
  },
  {
    value: OrderByEnum.DESC,
    text: "Preço - Mais alto ao mais baixo"
  }
];

const App: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, settotalPages] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [orderBy, setOrderBy] = useState<OrderByEnum>(OrderByEnum.ASC);

  const getProducts = useCallback(
    async ({ currentPage = 1, orderBy, inputValue }: ApiParamsType) => {
      const response = await fetchApi({
        currentPage,
        inputValue,
        orderBy
      });

      setProducts(response.products);
      settotalPages(response.pages);
      setCurrentPage(response.currentPage);
    },
    []
  );

  useEffect(() => {
    getProducts({ currentPage });
  }, [currentPage, getProducts]);

  useEffect(() => {
    getProducts({ currentPage: 1, orderBy, inputValue });
  }, [orderBy, inputValue, getProducts]);

  return (
    <div>
      <Header />
      <Nav />
      <main className="u-container">
        <HeaderList />
        <section className="searchContainer">
          <Input
            placeholder="Buscar produtos"
            onchange={value => setInputValue(value)}
          />
          <Select options={sortOptions} onchange={setOrderBy} />
        </section>
        <ProductList products={products} />
        <div className="u-flexRow">
          <Pagination
            length={totalPages}
            currentPage={currentPage}
            onclick={setCurrentPage}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
