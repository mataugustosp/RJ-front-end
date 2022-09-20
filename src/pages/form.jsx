import React, { useState } from 'react'
import { Box, Center, Flex, FormControl, Input, FormLabel, Stack, HStack, VStack, Textarea, Select, Heading} from '@chakra-ui/react'
import { SearchIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

const Form = () => {
    const { text, setText } = useState('')
    return (
        <Box height="auto" padding="3%" bg="#F9F9F9"  >

            <Flex  align="center" height="100%" justify="center">
                <Center  overflowY="auto" padding="2%" bg="white" width="100%" maxW="75%" borderRadius={5} boxShadow="0 3px 3px #ccc" >
                    <FormControl  display="flex" flexDir="column" gap="4" >
                        <Heading paddingBottom="2%">Redação Jornalística</Heading>
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
                            <FormLabel>Editores do Texto</FormLabel>
                            <Input />
                        </Box>
                        <Box>
                            <FormLabel>Autores do Texto</FormLabel>
                            <Input />
                        </Box>
                        <Box >
                            <Textarea height="30vh" />
                        </Box>
                        <FormControl isRequired>
                            <FormLabel>Palavra Chave</FormLabel>
                            <Input />
                        </FormControl>
                        <Box>
                            <FormLabel>Notícias Relacionadas</FormLabel>
                            <Input />
                        </Box>
                        <FormControl isRequired>
                            <Select placeholder='Editoria de Destino' variant='filled'>
                                <option value='option1'>Política</option>
                                <option value='option2'>Esporte</option>
                                <option value='option3'>Cultura</option>
                                <option value='option4'>Factuais</option>
                                <option value='option5'>Lazer</option>
                                <option value='option6'>Fofoca</option>
                                <option value='option6'>Moda</option>
                            </Select>
                        </FormControl>
                    </FormControl>
                </Center>
            </Flex>
        </Box>
    );
};

export default Form;