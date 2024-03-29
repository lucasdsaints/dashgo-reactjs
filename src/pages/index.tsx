import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors, isSubmitting } = formState;

  console.log('=>', errors)

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('values', values)
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" >
      <Flex
        as="form" w="100%" maxW="360" p="8" onSubmit={handleSubmit(handleSignIn)}
        bgColor="gray.800" borderRadius="8" flexDir="column"
      >
        <Stack spacing="4">
          <Input
            type="email" label="Email"
            error={errors.email} {...register('email')}
          />
          <Input
            type="password" label="Senha"
            error={errors.password} {...register('password')}
          />
        </Stack>

        <Button
          type="submit" mt="6" colorScheme="pink" 
          size="lg" isLoading={isSubmitting} 
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
