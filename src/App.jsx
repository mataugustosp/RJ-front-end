import React, { useState } from 'react'
import { Box, Center, Flex, FormControl, Input, FormLabel, Stack, HStack, VStack, Textarea, Select, IconButton } from '@chakra-ui/react'
import { SearchIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'


function App() {
  const { text, setText } = useState('')

  return (
    <Box height="auto" padding="3%" bg="pink">
     
      <Flex align="center" height="100%" justify="center">
        <Center overflowY="auto" padding="2%" bg="white" width="100%" maxW="75%" borderRadius={5} boxShadow="0 1px 2px #ccc">
          <FormControl display="flex" flexDir="column" gap="4" >
            <HStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Sugestão de Título</FormLabel>
                <Input />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Sugestão de Sutien</FormLabel>
                <Input />
              </FormControl>
            </HStack>
            <Box>
              <FormLabel>Nome dos Editores do Texto</FormLabel>
              <Input />
            </Box>
            <Box >
              <Textarea height="30vh" />
            </Box>
            <FormControl isRequired>
              <FormLabel>Quem trabalha na matéria (outros jornalistas e editores)</FormLabel>
              <Input />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Palavra Chave</FormLabel>
              <Input />
            </FormControl>
            <FormControl isRequired>
              <Select placeholder='Editoria de Destino' variant='filled'>
                <option value='option1'>Política</option>
                <option value='option2'>Esporte</option>
                <option value='option3'>Cultura</option>
                <option value='option3'>Factuais</option>
                <option value='option3'>Lazer</option>
              </Select>
            </FormControl>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  )
}

export default App
