'use client';

import { Box, Button, Input, Stack } from '@chakra-ui/react';
import { useState, Fragment } from 'react';

import { type FormData, validateForm } from './utils';
import { PatternInfo } from '../../components/pattern-info';

export default function ChainOfResponsibilityPage() {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateForm(formData);
  };

  return (
    <Fragment>
      <PatternInfo
        title="Chain of Responsibility (Цепочка обязанностей)"
        description="Паттерн Chain of Responsibility позволяет передавать запрос последовательно по цепочке обработчиков. Каждый обработчик решает, обработать запрос или передать дальше."
        advantages={[
          'Разделение ответственности между обработчиками',
          'Гибкость расширения новых обработчиков',
          'Повышает читаемость кода и уменьшает вложенность if/else',
        ]}
        disadvantages={[
          'Труднее отследить последовательность обработки',
          'Может быть сложно дебажить длинные цепочки',
        ]}
        usage={[
          'Валидация форм',
          'Middleware в API или React',
          'Очереди задач и событий',
          'Фильтрация данных',
        ]}
      />

      <Box mt={8} maxW="md" mx="auto">
        <form onSubmit={handleSubmit}>
          <Stack gap={4}>
            <Input
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <Button color="blue" type="submit">
              Отправить
            </Button>
          </Stack>
        </form>
      </Box>
    </Fragment>
  );
}
