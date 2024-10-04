import { useEffect, useState } from "react";
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

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });
  const [screenWidth, SetScreenWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    SetScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
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
                    {screenWidth > 768 ? "" : <TagSimple />}
                    {transaction.category}
                  </td>
                  <td>
                    {screenWidth > 768 ? "" : <CalendarBlank />}
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
