import { useEffect, useState } from 'react';

import AllTransactions from './AllTransactions';
import Header from './Header';
import { Flex } from '@chakra-ui/react';
import NewTransactionForm from './NewTransactionForm';
import { baseURL } from './constants';

const App = () => {
	const [transactions, setTransactions] = useState([]);
	const [search, setSearch] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(baseURL)
			.then((res) => res.json())
			.then((data) => {
				setTransactions(data);
				setLoading(false);
			});
	}, [transactions]);

	return (
		<>
			<Header title="Bank of Flatiron" search={search} setSearch={setSearch} />

			<Flex
				w={'100vw'}
				px={'2rem'}
				direction={{
					base: 'column-reverse',
					md: 'row',
				}}
			>
				<AllTransactions
					transactions={transactions.filter((transaction) =>
						transaction.description.toLowerCase().includes(search.toLowerCase())
					)}
					loading={loading}
				/>
				<NewTransactionForm />
			</Flex>
		</>
	);
};

export default App;
