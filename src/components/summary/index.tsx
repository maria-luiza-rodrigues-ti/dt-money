import { Splide, SplideSlide } from "@splidejs/react-splide";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from "@phosphor-icons/react";

import "@splidejs/react-splide/css/core";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          gap: "2rem",
          breakpoints: {
            640: {
              perPage: 1,
              perMove: 1,
              padding: { left: "0", right: "20%" },
            },
          },
        }}
      >
        <SplideSlide>
          <SummaryCard>
            <header>
              <span>Entradas</span>
              <ArrowCircleUp size={32} color="#00b37e" />
            </header>

            <strong>{priceFormatter.format(summary.income)}</strong>
          </SummaryCard>
        </SplideSlide>
        <SplideSlide>
          <SummaryCard>
            <header>
              <span>Saídas</span>
              <ArrowCircleDown size={32} color="#f75a68" />
            </header>

            <strong>{priceFormatter.format(summary.outcome)}</strong>
          </SummaryCard>
        </SplideSlide>
        <SplideSlide>
          <SummaryCard variant="green">
            <header>
              <span>Entradas</span>
              <CurrencyDollar size={32} color="#fff" />
            </header>

            <strong>{priceFormatter.format(summary.total)}</strong>
          </SummaryCard>
        </SplideSlide>
      </Splide>
    </SummaryContainer>
  );
}
