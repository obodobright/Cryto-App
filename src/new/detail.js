import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import axios from "axios";
import { Circle } from "react-awesome-spinners";

const Detail = () => {
  const { id } = useParams();
  const [coinDetail, setCoinDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  const getCoinDetail = async () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "2bc6cab011mshe44f0bb9232ba84p1e6cd3jsnc94be036490b",
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        setCoinDetail(response.data.data.coins[3 - 1]);
        console.log(response.data.data.coins[2]);
      })
      .catch(function (error) {
        console.error(error);
      });
    setLoading(false);
  };
  useEffect(() => {
    getCoinDetail();
  }, []);
  if (loading) {
    return <Circle />;
  }
  if (Error) {
    return (
      <div>
        <h1 style={{ fontSize: "50px" }}>404 Error</h1>
        <h1>Page Not Found</h1>
      </div>
    );
  }
  // console.log(coinDetail.links);
  console.log(id);

  return (
    <Container>
      <Wrapper>
        <Wrapper>{coinDetail.name}</Wrapper>
        <Wrapper>{coinDetail.description}</Wrapper>
        <Wrapper>{coinDetail.websiteUrl}</Wrapper>
        {coinDetail.links.map((link, i) => (
          <Wrapper key={i}>{link.name}</Wrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Detail;
const Wrapper = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
