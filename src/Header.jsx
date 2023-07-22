import { Heading, HStack, Flex } from '@chakra-ui/react';
import { BiSolidBank } from 'react-icons/bi';
import SearchBar from './SearchBar';

const Header = ({ title, transactions, search, setSearch }) => {
	return (
		<Flex
			justify={'space-between'}
			align={'center'}
			direction={{
				base: 'column',
				md: 'row',
			}}
		>
			<HStack p={'2rem'}>
				<Heading>{title}</Heading>
				<BiSolidBank size="3rem" />
			</HStack>

			<SearchBar
				transactions={transactions}
				setSearch={setSearch}
				search={search}
			/>
		</Flex>
	);
};

export default Header;
