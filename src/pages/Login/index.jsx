import { React, useState } from "react";
import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/database.config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/admin", { replace: true });
        })
        .catch((err) => {
          if (err.code == "auth/wrong-password") {
            alert("Senha incorreta");
          }
          if (err.code == "auth/user-not-found") {
            alert("Usuário não encontrado");
          }
          if (err.code == "auth/too-many-requests") {
            alert(
              "O acesso a esta conta foi temporariamente desativado devido a muitas tentativas de login malsucedidas. Por favor espere um momento, e tente novamente mais tarde."
            );
          }
          console.log(err);
        });
    } else {
    }
  };
  return (
    <>
      <S.LoginContainer>
        <h1>Login</h1>
        <p>Faça login e acesse seu dashboard financeiro</p>
        <S.LoginForm>
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
          <S.Button onClick={handleLogin}>Login</S.Button>
          <Link to={"/cadastro"}>Não possui conta? Cadastre-se</Link>
        </S.LoginForm>
      </S.LoginContainer>
    </>
  );
}
