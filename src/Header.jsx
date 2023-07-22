import { Heading, HStack } from '@chakra-ui/react';
import { BiSolidBank } from 'react-icons/bi';
import SearchBar from './SearchBar';

const Header = ({ title, transactions, search, setSearch }) => {
	return (
		<HStack justify={'space-between'}>
			<HStack p={'2rem'}>
				<Heading>{title}</Heading>
				<BiSolidBank size="3rem" />
			</HStack>

			<SearchBar
				transactions={transactions}
				setSearch={setSearch}
				search={search}
			/>
		</HStack>
	);
};

export default Header;
