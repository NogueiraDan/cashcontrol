import * as S from "./styles"

export default function ResumeItem({ title, value }) {
  return (

    <S.Container>

      <S.Header>
        <S.HeaderTitle>{title}</S.HeaderTitle>
      </S.Header>

      <S.Total>{value}</S.Total>
    </S.Container>
  )
}
