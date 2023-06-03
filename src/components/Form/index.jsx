import { useState } from "react";
import * as S from "./styles";
import Grid from "../Grid"

export default function Form({ handleAdd, transactionsList, uid }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);
  const generateID = () => Math.round(Math.random() * 10000);

  const handleSave = () => {
    if (!description || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      uid: uid,
      description: description,
      amount: amount,
      expense: isExpense,
      date: new Date().toLocaleString()
    };

    handleAdd(transaction);

    setDescription("");
    setAmount("");
  };
  

  return (
    <>
       <S.Container>
        <S.InputContent>
          <S.Label>Descrição</S.Label>
          <S.Input value={description} onChange={(e) => setDescription(e.target.value)} />
        </S.InputContent>
        <S.InputContent>
          <S.Label>Valor</S.Label>
          <S.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </S.InputContent>
        <S.RadioGroup>
          <S.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <S.Label htmlFor="rIncome">Entrada</S.Label>
          <S.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <S.Label htmlFor="rExpenses">Saída</S.Label>
        </S.RadioGroup>
        <S.Button onClick={handleSave}>ADICIONAR</S.Button>
      </S.Container>
      <Grid itens={transactionsList} />
    </>
  );
  }