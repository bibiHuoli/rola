import { Box, Button, Flex, FormControl, FormLabel, Input, Table, Tbody, Td, Th, Thead, Tr, VStack } from '@chakra-ui/react'

import Header from '../Components/Header'

export default function Home() {
  return (
    <Box>
      <Header />
      <Flex align='center' justifyContent='center'>
        <Box
          width={800}
          borderWidth={1}
          borderRadius={8}
          boxShadow='lg'
          p={20}
          mt='25'
        >
          <Flex justifyContent='flex-end'>
            <Button colorScheme='green'>+</Button>
          </Flex>
          <VStack as='form'>
            <FormControl>
              <FormLabel>Namae</FormLabel>
              <Input type='text' placeholder='Say your namae' />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type='email' placeholder='Say your email' />
            </FormControl>
            <Button colorScheme='green' type='submit' mt={6}>
              Cadastrar
            </Button>
          </VStack>
          <Table variant='simple' mt={6}>
            <Thead bg='teal.500'>
              <Tr>
                <Th color='white'>Namae</Th>
                <Th color='white'>Email</Th>
                <Th color='white'>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Rola Roluda</Td>
                <Td>rola@gmail.com</Td>
                <Td justifyContent='space-between'>
                  <Flex>
                    <Button size='sm' fontSize='small' colorScheme='yellow' mr='2'>Edit</Button>
                    <Button size='sm' fontSize='small' colorScheme='red' mr='2'>Remove</Button>
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  )
}
