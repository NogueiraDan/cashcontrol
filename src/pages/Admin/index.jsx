import { useEffect, useState } from "react";
import Header from "../../components/Header/index";
import Resume from "../../components/Resume/index";
import Form from "../../components/Form/index";
import * as S from "./styles";
import { auth, db } from "../../config/database.config";
import { signOut } from "firebase/auth";
import { addDoc, collection, query, orderBy, where, onSnapshot } from "firebase/firestore";

export default function Admin() {
  const [transactionsList, setTransactionsList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const [uid, setUid] = useState();

  useEffect(() => {
    async function fetchTransactions () {
      const userDetails = JSON.parse(localStorage.getItem("@detailUser"));
      const uid = userDetails?.uid;
      console.log(uid);
      setUid(uid);
      const transactionRef = collection(db, "transactions");
      const q = query(
        transactionRef,
        orderBy("date", "asc"),
        where("uid", "==", uid)
      );

      const unsub = onSnapshot(q, (snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            amount: doc.data().amount,
            date: doc.data().date,
            description: doc.data().description,
            expense: doc.data().expense,
            id: doc.data().id,
            uid: doc.data().uid,
          });
        });
        console.log(lista)
        setTransactionsList(lista)
      });
    }

    fetchTransactions();
  }, []);

  async function handleLogout() {
    await signOut(auth);
  }

  // useEffect para monitorar entradas e saidas
  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
    console.log(transactionsList);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    console.log(transaction);
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
    addDoc(collection(db, "transactions"), transaction)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Erro " + err);
      });
  };

  return (
    <>
      <div className="App">
        <Header />
        <Resume income={income} expense={expense} total={total} />
        <Form
          handleAdd={handleAdd}
          transactionsList={transactionsList}
          setTransactionsList={setTransactionsList}
          uid={uid}
        />
        <S.ButtonLogout onClick={handleLogout}>Logout</S.ButtonLogout>
      </div>
    </>
  );
}
