import { FormControl, Input } from '@chakra-ui/react';

const SearchBar = ({ transactions, search, setSearch }) => {
	function filterTransactions(e) {
		transactions.filter(
			(transaction) => transaction.description === e.target.value
		);
	}

	return (
		<FormControl maxW={'250px'} px={'2rem'} mx={'2rem'}>
			<Input
				placeholder="search transactions"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</FormControl>
	);
};

export default SearchBar;
