import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Lucas Santos</Text>
        <Text color="gray.300" fontSize="small">
          lucas.assis@mail.com
        </Text>
      </Box>

      <Avatar size="md" name="Lucas Santos"/>
    </Flex>
  );
}