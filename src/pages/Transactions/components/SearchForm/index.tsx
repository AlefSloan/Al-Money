import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContent } from "./style";

export function SearchForm() {
  return (
    <SearchFormContent>
      <input type="text" placeholder="Busque por transações"/>

      <button>
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </SearchFormContent>
  )
}
