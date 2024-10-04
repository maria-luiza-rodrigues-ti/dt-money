import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 6.625rem;
  }

  img {
    @media(max-width: 768px) {
      max-width: 117px;
    }
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  line-height: 1.6;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 38px;
    padding: 0 1rem;

    font-size: .875rem;
  }

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`