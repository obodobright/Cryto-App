import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { Ring } from "react-awesome-spinners";

const MyApi = () => {
  const [myCoins, setMyCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCoin = async () => {
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
        setMyCoins(response.data.data.coins);
        console.log(response.data.data.coins);
      })
      .catch(function (error) {
        console.error(error);
      });

    setLoading(false);
  };

  useEffect(() => {
    getCoin();
  });
  return (
    <Container>
      <Wrapper>
        <WrapperHeader>My Cryto House</WrapperHeader>
        {loading ? (
          <Ring size="100" color="red" />
        ) : (
          <CardContainer>
            {myCoins.map((coin) => {
              return (
                <Card key={coin.uuid}>
                  <Image src={coin.iconUrl} />
                  <CardContent>
                    <CoinSymb>{coin.symbol}</CoinSymb>
                    <CoinName>{coin.name}</CoinName>
                    <CoinFlex>
                      <CoinPrice>${Math.floor(coin.price)}</CoinPrice>
                      <CoinType>{coin.type}</CoinType>
                    </CoinFlex>
                    <CoinMore to={`/detail/${coin.id}`}>Read More</CoinMore>
                  </CardContent>
                </Card>
              );
            })}
          </CardContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default MyApi;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
const CoinMore = styled(Link)`
  outline: none;
  border: 0;
  font-size: 15px;
  padding: 7px 7px;
  border-radius: 10px;
  border: 1px solid lightblue;
  background: darkblue;
  color: white;
  transition: all 350ms;
  transform: scale(1);
  text-decoration: none;
  :hover {
    cursor: pointer;
    transform: scale(1.03);
    background: gold;
    color: darkblue;
  }
`;
const CoinPrice = styled.div`
  font-size: 18px;
  margin: 0 20px;
  font-weight: bold;
  font-family: cursive;
`;
const CoinType = styled.div`
  font-size: 15px;
  margin: 0 20px;
  font-weight: 500;
  font-family: cursive;
`;
const CoinFlex = styled.div`
  display: flex;
  margin: 10px 0;
`;
const CoinSymb = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const CardContent = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: darkblue;
`;
const CoinName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Image = styled.img`
  position: abolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  opacity: 0.6;
  object-fit: contain;
`;
const Card = styled.div`
  width: 150px;
  height: 170px;
  background: transparent;
  margin: 20px 20px;
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.75);
`;
const WrapperHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: arial black;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
