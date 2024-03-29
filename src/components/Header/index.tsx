import { Flex, Icon, IconButton, Spacer, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContex';
import Logo from './Logo';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile';
import SearchBox from './SearchBox';

export default function Header () {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      as="header" w="100%" maxWidth={1480} h="20"
      mx="auto" mt="4" px="6"
      align="center"
    >
      { !isWideVersion &&
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label="Open navigation"
          mr="2"
        />
      }

      <Logo />

      { isWideVersion ? <SearchBox /> : <Spacer/> }

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}