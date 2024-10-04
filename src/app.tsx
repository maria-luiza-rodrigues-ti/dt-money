import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default.ts";
import { GlobalStyle } from "./styles/global.ts";
import { Transactions } from "./pages/transactions/index.tsx";
import { TransactionsProvider } from "./contexts/transactions-context.tsx";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
