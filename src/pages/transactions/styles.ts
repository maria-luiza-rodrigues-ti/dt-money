import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    margin: 1.5rem auto 2rem;
  }
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  tr {

    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto;

      margin-bottom: .75rem;
      padding: 1,5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    @media (max-width: 768px) {
      
      line-height: 1.6;

      display: flex;
      align-items: center;
      gap: .25rem;
    }


    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;

      @media (max-width: 768px) {
        grid-column: 1 / 3;
        grid-row: 1 / 2;

        width: 100%;

        border-top-right-radius: 6px;
        padding: 1.5rem 1.5rem 0.25rem;
      }
    }

    &:nth-child(2) {

      @media (max-width: 768px) {
          grid-column: 1 / 3;
          grid-row: 2 / 3;
          padding: 0 1.5rem;

          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.6;
      }
    }

    &:nth-child(3) {

      @media (max-width: 768px) {
        border-bottom-left-radius: 6px;
        padding: .75rem 1.5rem 1.5rem;

        color: ${(props) => props.theme['gray-500']};
      }
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px; 

      @media (max-width: 768px) {
        padding: .75rem 1.5rem 1.5rem;
        text-align: right;

        color: ${(props) => props.theme['gray-500']};
      }
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`