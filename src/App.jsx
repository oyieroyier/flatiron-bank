import { useEffect, useState } from 'react';

import AllTransactions from './AllTransactions';
import Header from './Header';
import { HStack } from '@chakra-ui/react';
import NewTransactionForm from './NewTransactionForm';
import { baseURL } from './constants';

const App = () => {
	const [transactions, setTransactions] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch(baseURL)
			.then((res) => res.json())
			.then((data) => setTransactions(data));
	}, [transactions]);

	return (
		<>
			<Header title="Bank of Flatiron" search={search} setSearch={setSearch} />

			<HStack w={'100vw'} px={'2rem'}>
				<AllTransactions
					transactions={transactions.filter((transaction) =>
						transaction.description.toLowerCase().includes(search.toLowerCase())
					)}
				/>
				<NewTransactionForm />
			</HStack>
		</>
	);
};

export default App;
