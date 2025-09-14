'use client';

import { Box, Heading, Text, List } from '@chakra-ui/react';

export type PatternInfoProps = {
  title: string;
  description: string;
  advantages: string[];
  disadvantages: string[];
  usage: string[];
};

export const PatternInfo = ({
  title,
  description,
  advantages,
  disadvantages,
  usage,
}: PatternInfoProps) => {
  return (
    <Box p={6} borderWidth="1px" borderRadius="lg" shadow="md" bg="white">
      <Heading size="lg" mb={4} color="teal.600">
        {title}
      </Heading>

      <Text mb={4}>{description}</Text>

      <Heading size="md" mb={2}>
        ✅ Преимущества
      </Heading>
      <List.Root pl={6} mb={4}>
        {advantages.map((item, idx) => (
          <List.Item key={idx}>{item}</List.Item>
        ))}
      </List.Root>

      <Heading size="md" mb={2}>
        ⚠️ Недостатки
      </Heading>
      <List.Root pl={6} mb={4}>
        {disadvantages.map((item, idx) => (
          <List.Item key={idx}>{item}</List.Item>
        ))}
      </List.Root>

      <Heading size="md" mb={2}>
        🎯 Когда применять
      </Heading>
      <List.Root pl={6} mb={4}>
        {usage.map((item, idx) => (
          <List.Item key={idx}>{item}</List.Item>
        ))}
      </List.Root>
    </Box>
  );
};
