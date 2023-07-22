import {
	FormControl,
	FormLabel,
	Input,
	VStack,
	Button,
	Heading,
} from '@chakra-ui/react';
import { useState } from 'react';
import { baseURL } from './constants';

const NewTransactionForm = () => {
	const [date, setDate] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [amount, setAmount] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		const newTransaction = { date, description, category, amount };

		fetch(baseURL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newTransaction),
		}).then(() => {
			setDate('');
			setDescription('');
			setCategory('');
			setAmount('');
		});
	}
	return (
		<>
			<FormControl
				maxW={'300px'}
				m={'1rem'}
				p={'1rem'}
				border={'1px solid white'}
				isRequired
			>
				<Heading fontSize={"1.5rem"} textAlign={'center'} p={"1rem"}>Add New Transaction</Heading>

				<VStack mb={'1rem'}>
				
					<FormLabel>Date</FormLabel>
					<Input
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						required
					/>
				</VStack>
				
				<VStack mb={'1rem'}>
					<FormLabel>Description</FormLabel>
					<Input
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						isRequired={true}
					/>
				</VStack>
				
				<VStack mb={'1rem'}>
					<FormLabel>Category</FormLabel>
					<Input
						type="text"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						required
					/>
				</VStack>
				
				<VStack mb={'1rem'}>
					<FormLabel>Amount</FormLabel>
					<Input
						type="text"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						required
					/>
				</VStack>
				
				<Button mb={'1rem'} onClick={handleSubmit}>
					Add New Transaction
				</Button>
			</FormControl>
		</>
	);
};

export default NewTransactionForm;
