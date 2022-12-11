import React from 'react'
import styled from 'styled-components';
import CategoryItem from './CategoryItem';

const categories = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "SHIRT STYLE!",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "LOUNGEWEAR LOVE",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "LIGHT JACKETS",
    },
  ];

  const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
  `
export default function Categories() {
  return (
    <Container>
        {categories.map((item) => (
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}
