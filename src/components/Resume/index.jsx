import * as S from "./styles"
import ResumeItem from "../ResumeItem";

export default function Resume({ income, expense, total }) {
  return (
    <>
      <S.Container>
        <ResumeItem title="Entradas" value={income} />
        <ResumeItem title="Saidas" value={expense} />
        <ResumeItem title="Saldo" value={total} />
      </S.Container>
    </>
  )
}
