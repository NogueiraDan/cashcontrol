import { React, useState } from "react";
import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../config/database.config";


export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e)=>{
    e.preventDefault();
    if (name !== ""  && email !== "" && password !== "") {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/admin", { replace: true });
        })
        .catch((err) => {
          if (err.code == "auth/email-already-in-use") {
            alert("Email já cadastrado! ");
          }
          if (err.code == "auth/weak-password") {
            alert("Senha fraca. Deve ter pelo menos 6 caracteres");
          }
        });
    } else {
      alert('Os campos não podem estar vazios');
    }
    
   
  }

  return (
    <>
      <S.CadastroContainer>
        <h1>Cadastre-se</h1>
        <p>Crie sua conta e comece a organizar seus gastos do mês!</p>
        <S.CadastroForm>
          <label>Nome</label>
          <S.Input
            type={"text"}
            placeholder={"Digite seu nome"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></S.Input>
          <label>Email</label>
          <S.Input
            type={"email"}
            placeholder={"Digite seu email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></S.Input>
          <label>Senha</label>
          <S.Input
            type={"password"}
            placeholder={"Digite sua senha"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></S.Input>
          <S.Button onClick={handleRegister}>Cadastro</S.Button>
          <Link to={"/"}>Já possui conta? Faça Login!</Link>
        </S.CadastroForm>
      </S.CadastroContainer>
    </>
  );
}
