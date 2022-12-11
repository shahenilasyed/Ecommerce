import React from 'react';
import Carousel from 'react-material-ui-carousel'
import styled from 'styled-components';

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  overflow: hidden;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;


function MainCorousel(props)
{
    const sliderItems = [
        {
          id: 1,
          img: "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          title: "SUMMER SALE",
          desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
          bg: "f5edf2",
        },
        {
          id: 2,
          img: "https://i.ibb.co/DG69bQ4/2.png",
          title: "AUTUMN COLLECTION",
          desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
          bg: "fcf1ed",
        },
        {
          id: 3,
          img: "https://i.ibb.co/cXFnLLV/3.png",
          title: "LOUNGEWEAR LOVE",
          desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
          bg: "fbf0f4",
        },
      ];

    return (
        <Carousel indicators={false} animation="slide" navButtonsAlwaysInvisible={false}>
            {
                sliderItems.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
       
          <Slide bg={props.item.bg} key={props.item.id}>
            <ImgContainer>
              <Image src={props.item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{props.item.title}</Title>
              <Desc>{props.item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
      
    )
}

 export default MainCorousel;