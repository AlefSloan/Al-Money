import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { SummaryCard, SummaryContainer } from "./style";
import { numberFormater } from "../../utils/formatters";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>

          <ArrowCircleUp size={26} color="#00b37e" />
        </header>
        <strong>{numberFormater.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saída</span>

          <ArrowCircleDown size={26} color="#F75A68" />
        </header>
        <strong>{numberFormater.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar size={26} color="#ffffff" />
        </header>
        <strong>{numberFormater.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
