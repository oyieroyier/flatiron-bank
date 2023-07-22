import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Button,
} from '@chakra-ui/react';
import { baseURL, tableHeads } from './constants';

const AllTransactions = ({ transactions }) => {
	function deleteTransaction(id) {
		fetch(`${baseURL}/${id}`, {
			method: 'DELETE',
		});
	}

	return (
		<TableContainer
			px={{
				base: '0',
				md: '2rem',
			}}
			flex="3"
		>
			<Table variant={'striped'}>
				<TableCaption>All Transactions</TableCaption>
				<Thead>
					<Tr>
						{tableHeads.map((tableHead) => (
							<Th key={tableHead}>{tableHead}</Th>
						))}
					</Tr>
				</Thead>

				<Tbody>
					{transactions.map((transaction) => (
						<Tr key={transaction.id}>
							<Td>{transaction.date}</Td>
							<Td>{transaction.description}</Td>
							<Td>{transaction.category}</Td>
							<Td>{transaction.amount}</Td>
							<Td>
								<Button
									colorScheme={'red'}
									onClick={() => deleteTransaction(transaction.id)}
								>
									DELETE
								</Button>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default AllTransactions;
