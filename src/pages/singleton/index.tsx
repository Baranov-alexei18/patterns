'use client';

import { Button, Heading, Stack } from '@chakra-ui/react';

import { NotificationContainer } from './NotificationContainer';
import { notificationService } from './notificationServices';
import { PatternInfo } from '../../components/pattern-info';

const SingletonPage = () => {
  return (
    <div style={{ width: '100%' }}>
      <PatternInfo
        title="Singleton (Одиночка)"
        description="Паттерн Singleton гарантирует, что в приложении будет только один экземпляр класса, и предоставляет глобальную точку доступа к нему. В фронтенде это часто используется для хранения глобального состояния или сервисов."
        advantages={[
          'Гарантия единственного экземпляра объекта',
          'Удобная глобальная точка доступа',
          'Полезен для централизованного управления состоянием',
        ]}
        disadvantages={[
          'Может нарушать принцип единой ответственности (SRP)',
          'Сложнее тестировать (нужны моки)',
          'Может привести к излишней связанности',
        ]}
        usage={[
          'ApiClient (обёртка над fetch/axios).',
          'Глобальное управление уведомлениями (Redux)',
          'Менеджер тем или конфигураций',
          'Контекст React (Context API): Например, ThemeProvider или AuthProvider фактически создаёт глобальный доступ к одному объекту.',
          'Логирование / Analytics: Google Analytics, Sentry и другие SDK создаются одним экземпляром на приложение.',
        ]}
      />
      <div>
        <Heading size="lg" mb={4} mt={12} color="black.600">
          Пример с уведомлением
        </Heading>

        <Stack gap={4} p={6}>
          <Button color="teal" onClick={() => notificationService.success('Операция успешна!')}>
            Показать Success
          </Button>

          <Button color="red" onClick={() => notificationService.error('Произошла ошибка')}>
            Показать Error
          </Button>

          <Button color="blue" onClick={() => notificationService.info('Информационное сообщение')}>
            Показать Info
          </Button>

          <Button color="yellow" onClick={() => notificationService.warning('Будьте осторожны!')}>
            Показать Warning
          </Button>
        </Stack>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default SingletonPage;
