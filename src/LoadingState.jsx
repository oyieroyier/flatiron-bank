import { Spinner } from '@chakra-ui/react';
const LoadingState = () => {
	return (
		<Spinner
			thickness="0.5rem"
			speed="0.65s"
			emptyColor="gray.200"
			color="blue.500"
			size="xl"
			m="2rem"
		/>
	);
};

export default LoadingState;
