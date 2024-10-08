import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/searchForm";
import {
  TransactionsContext,
  Transaction,
} from "../../contexts/transactions-context";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { CalendarBlank, TagSimple } from "@phosphor-icons/react";
import { useMobile } from "../../hooks/useMobile";

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });
  const transactionsLength = transactions.length;

  const isMobile = useMobile();

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <div>
          <h2>Transações</h2>
          <span>{transactionsLength} itens</span>
        </div>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction: Transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>
                    {isMobile ? <TagSimple /> : ""}
                    {transaction.category}
                  </td>
                  <td>
                    {isMobile ? <CalendarBlank /> : ""}
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
