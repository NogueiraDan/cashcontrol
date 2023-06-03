import React from "react";
import GridItem from "../GridItem";
import * as S from "./style";
import { jsPDF } from "jspdf";

const Grid = ({ itens }) => {

  const generatePDF=()=>{
    const content = document.querySelector('#tableAmounts')
    const doc = new jsPDF('1', 'px', [1366, 678]);
    // doc.html(content)
    // doc.save('relatorio.pdf')
    doc.html(content, {
      callback: function(doc) {
        doc.save("relatorio.pdf");
      }
    });
    
    
              
  }
  return (
    <>
      <S.Table id="tableAmounts">
        <S.Thead>
          <S.Tr>
            <S.Th width={40}>Descrição</S.Th>
            <S.Th width={25}>Valor</S.Th>
            <S.Th width={10} alignCenter>
              Tipo
            </S.Th>
            <S.Th width={20} alignCenter>
              Data
            </S.Th>
            <S.Th width={5}></S.Th>
          </S.Tr>
        </S.Thead>
        <S.Tbody>
          {itens?.map((item, index) => (
            <GridItem key={index} item={item} />
          ))}
        </S.Tbody>
      </S.Table>
      <S.PDF>
      <S.PDFButton onClick={generatePDF}>GERAR PDF</S.PDFButton>
      </S.PDF>
    </>
  );
};

export default Grid;
