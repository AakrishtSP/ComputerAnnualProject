import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

import ProductCard from "../../components/ProductCard";
import "./styles/product.css";

function Products(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .post("https://localhost/CompProjects/api/spProduct.php", props, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props]);
  return (
    <div className="products-page">
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        columnSpacing={3}
      >
        <Grid item className="product-page-topic">
          {props.item}
        </Grid>
        <Grid item style={{ margin: "50px" }} className="product-page-card">
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={3}
          >
            {products.map((product) => (
              <ProductCard props={product} key={product.id} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Products;
