import React, { useEffect, useRef, useState } from "react";
import { scroll } from "framer-motion/dom";
import styled from "@emotion/styled";
import text from "@icons/our_products.svg";
import product_1 from "@images/product_1.jpg";
import product_2 from "@images/product_2.jpg";
import product_3 from "@images/product_3.jpg";
import product_4 from "@images/product_4.jpg";
import product_5 from "@images/product_5.png";
import product_6 from "@images/product_6.jpg";
const ProductSection: React.FC = () => {
  const productsRef = useRef<HTMLTableSectionElement>();
  const [productWidth, useProductWidth] = useState<number>(0);
  const [isPositionFixed, setIsPositionFixed] = useState<boolean>(false);

  useEffect(() => {
    if (!productsRef.current) return;

    const productsWidth = productsRef.current?.clientWidth;
    useProductWidth(productsWidth);
  }, []);

  const products = [
    {
      bg_img: product_1,
      type: "Facial Serums",
      product_name: "GlowElixir Radiance Serum"
    },
    {
      bg_img: product_2,
      type: "Facial Serums",
      product_name: "GlowElixir Radiance Serum"
    },
    {
      bg_img: product_3,
      type: "Facial Serums",
      product_name: "GlowElixir Radiance Serum"
    },
    {
      bg_img: product_4,
      type: "Facial Serums",
      product_name: "GlowElixir Radiance Serum"
    },
    {
      bg_img: product_5,
      type: "Facial Serums",
      product_name: "GlowElixir Radiance Serum"
    },
    {
      bg_img: product_6,
      type: "Facial Serums",
      product_name: "GlowElixir Radiance Serum"
    }
  ];

  return (
    <div>
      <ProductSectionHeight hight={productWidth}></ProductSectionHeight>
      <ProductWrap positionFixed={isPositionFixed}>
        <TextArea>
          <img src={text} alt="our products" />
        </TextArea>
        <Products ref={productsRef}>
          {products.map(({ bg_img, type, product_name }, i) => (
            <ProductCard bgImage={bg_img} key={i}>
              <div className="img"></div>
              <div className="product_data">
                <p className="type">{type}</p>
                <p className="product_nm">{product_name}</p>
              </div>
            </ProductCard>
          ))}
        </Products>
      </ProductWrap>
    </div>
  );
};

const ProductSectionHeight = styled.div<{ hight: number }>`
  height: ${(props) => props.hight}px;
`;
const ProductWrap = styled.div<{ positionFixed: boolean }>`
  position: ${(props) => (props.positionFixed ? "fixed" : "relative")};
  overflow: hidden;
  top: 0;
  min-height: calc(100vh);
  padding: 50px 0;
  box-sizing: border-box;
  display: flex;
`;
const TextArea = styled.div`
  width: 18.4375vw;
  min-width: 18.4375vw;
  padding: 2vw 0 0 50px;
`;
const Products = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 300px;
`;
const ProductCard = styled.div<{ bgImage: string }>`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 2vw;
  height: 100%;
  padding: 30px;
  width: 50vw;
  box-sizing: border-box;
  z-index: 10;
  .img {
    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    height: 100%;
    border-radius: 2vw;
    background-image: url(${(props) => props.bgImage});
  }
  .product_data {
    padding: 20px 20px 0 20px;
  }
  .type {
    line-height: 1.6;
    margin-bottom: 5px;
  }
  .product_nm {
    font-size: 30px;
  }
`;

export default ProductSection;
