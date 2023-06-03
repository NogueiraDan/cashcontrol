import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;

export const PDF = styled.div`
margin: 20px 0 0 0;
display: flex;
justify-content: center;


`;
export const PDFButton = styled.button`
height: 40px;
width: 10%;
background: #049181;
border: none;
border-radius: 5px;
color: #fff;
font-size; 16px;
cursor: pointer;
transition: all 0.3s ease; 
&:hover {
  scale: 1.1;
}

@media (min-width: 200px) and (max-width: 768px){
  width: 50%;
}


`;