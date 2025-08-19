'use client';

import { Box, Flex, Button, Stack, Span, Accordion } from '@chakra-ui/react';
import { type ReactNode } from 'react';
import { Link } from 'react-router';

import styles from './styles.module.css';
import { PATTERN_GROUPS } from '../../routes/constants';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex className={styles.container}>
      <Box className={styles.sidebar}>
        <Stack gap="4" width="100%">
          <Button colorScheme="teal" variant="solid" width="100%">
            <Link to="/">Home</Link>
          </Button>

          <Accordion.Root collapsible>
            {PATTERN_GROUPS.map((group) => (
              <Accordion.Item key={group.key} value={group.key}>
                <Accordion.ItemTrigger>
                  <Span flex="1">{group.title}</Span>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Stack gap="2" pl="4">
                    {group.items.map((pattern) => (
                      <Button
                        key={pattern.path}
                        variant="ghost"
                        as={Link}
                        width="100%"
                        justifyContent="flex-start"
                        asChild={true}
                      >
                        <Link to={pattern.path}>{pattern.name}</Link>
                      </Button>
                    ))}
                  </Stack>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Stack>
      </Box>

      <Box className={styles.content}>{children}</Box>
    </Flex>
  );
};
