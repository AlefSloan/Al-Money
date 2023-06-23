import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionTable, TransactionTableContainer } from "./style";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionTableContainer>
        <SearchForm />

        <TransactionTable>
          <tr>
            <td width="50%">Desenvolvimento de Site</td>
            <td>
              <PriceHighlight variant="income">
                R$ 12.000,00
              </PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width="50%">Hamburguer</td>
            <td>
              <PriceHighlight variant="outcome">
                - R$ 59,00
              </PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
        </TransactionTable>
      </TransactionTableContainer>
    </div>
  );
}
