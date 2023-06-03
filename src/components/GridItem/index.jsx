import React from "react";
import * as S from "./style";


const GridItem = ({ item }) => {
  
  return (
    <S.Tr>
      <S.Td>{item.description}</S.Td>
      <S.Td>{item.amount}</S.Td>
      <S.Td alignCenter>
        {item.expense ? (
         <i class="fa-solid fa-circle-arrow-down" style={{color: "red"}}></i>
        ) : (
            <i class="fa-solid fa-circle-arrow-up" style={{color: "green"}}></i>
        )}
      </S.Td>
      <S.Td>{item.date.toLocaleString()}</S.Td>
     
    </S.Tr>
  );
};

export default GridItem;