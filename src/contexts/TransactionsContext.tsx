import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  category: string,
  price: number,
  createdAt: string,
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => void;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3333/transactions');
    
    if (query) {
      url.searchParams.append('q', query);
    }

    const response = await fetch(url);
    const transactions = await response.json();

    setTransactions(transactions);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);
  
  return (
    <TransactionsContext.Provider 
      value={{
        transactions,
        fetchTransactions
      }}
    >
      { children }
    </TransactionsContext.Provider>
  )
}