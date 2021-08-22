import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && <Box mr="4" textAlign="right">
        <Text>Lucas Santos</Text>
        <Text color="gray.300" fontSize="small">
          lucas.assis@mail.com
        </Text>
      </Box> }

      <Avatar size="md" name="Lucas Santos"/>
    </Flex>
  );
}