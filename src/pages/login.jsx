import React, { useState } from 'react'
import { Box, Center, Flex, FormControl, Input, FormLabel, Stack, HStack, VStack, Textarea, Button, Heading, InputRightElement, InputGroup } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'


const Login = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)


    return (
        <Flex align="center" height="100vh" justify="center">
            <Center padding="2%" width="100%" maxW="40%" borderRadius={5} boxShadow="0 3px 3px #ccc" >
                <FormControl display="flex" flexDir="column" gap="4" >
                    <Heading fontSize='3xl'>Login</Heading>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input />
                    </FormControl >
                    <FormControl isRequired >
                        <FormLabel>Senha</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                            />
                            <InputRightElement width='4rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? <ViewOffIcon /> : <ViewIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl >
        

                    <HStack spacing={4}>
                        <Button w="full" colorScheme='teal'>Login</Button>
                        <Button w="full" colorScheme='teal' variant='outline'>Cadastre-se</Button>
                    </HStack>
                    <Box>
                        <Button colorScheme='teal' variant="link"> Esqueceu a senha?</Button>
                    </Box>

                </FormControl>
            </Center>

        </Flex>
    );
};

export default Login;