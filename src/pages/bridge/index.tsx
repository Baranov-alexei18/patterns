'use client';

import { Heading, Stack } from '@chakra-ui/react';
import { Fragment } from 'react';

import { Button } from './ui/button';
import { DarkTheme } from './ui/dark-theme';
import { LightTheme } from './ui/light-theme';
import { PatternInfo } from '../../components/pattern-info';

//
// --- Реализация (Implementor) ---
//
interface Device {
  turnOn(): string;
  turnOff(): string;
  setVolume(level: number): string;
}

class TV implements Device {
  turnOn() {
    return 'Телевизор включен';
  }
  turnOff() {
    return 'Телевизор выключен';
  }
  setVolume(level: number) {
    return `Громкость ТВ: ${level}`;
  }
}

class Radio implements Device {
  turnOn() {
    return 'Радио включено';
  }
  turnOff() {
    return 'Радио выключено';
  }
  setVolume(level: number) {
    return `Громкость радио: ${level}`;
  }
}

//
// --- Абстракция (Abstraction) ---
//
class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  powerOn() {
    return this.device.turnOn();
  }

  powerOff() {
    return this.device.turnOff();
  }

  volume(level: number) {
    return this.device.setVolume(level);
  }
}

//
// --- Расширенная абстракция (Refined Abstraction) ---
//
class AdvancedRemote extends RemoteControl {
  mute() {
    return this.device.setVolume(0);
  }
}

const BridgePage = () => {
  const light = new LightTheme();
  const dark = new DarkTheme();

  const tvRemote = new AdvancedRemote(new TV());
  const radioRemote = new AdvancedRemote(new Radio());

  return (
    <Fragment>
      <PatternInfo
        title="Bridge (Мост)"
        description="Паттерн Bridge разделяет абстракцию и её реализацию, позволяя изменять их независимо. Это полезно, когда нужно поддерживать разные комбинации интерфейсов и реализаций без жёсткой связки."
        advantages={[
          'Абстракция и реализация развиваются независимо',
          'Избегаем «взрыва классов» при множестве комбинаций',
          'Упрощает расширение и поддержку кода',
          'Удобен для больших систем с несколькими платформами',
        ]}
        disadvantages={[
          'Добавляет дополнительный уровень абстракции',
          'Структура кода становится сложнее',
        ]}
        usage={[
          'Устройства и пульты управления (TV, Radio, Projector)',
          'UI-темизация (абстракция — кнопка, реализация — светлая/тёмная тема)',
          'Кроссплатформенные библиотеки (Windows, macOS, Linux)',
          'Работа с БД (абстракция — репозиторий, реализация — MySQL, PostgreSQL, MongoDB)',
          'Рисование фигур (абстракция — Shape, реализация — разные рендеры)',
        ]}
      />

      <div>
        <Heading size="lg" mb={4} mt={12} color="black.600">
          Пример: пульт и разные устройства
        </Heading>

        <Stack gap={4} p={6}>
          <div>{tvRemote.powerOn()}</div>
          <div>{tvRemote.volume(15)}</div>
          <div>{tvRemote.mute()}</div>
          <div>{radioRemote.powerOn()}</div>
          <div>{radioRemote.volume(5)}</div>
        </Stack>
      </div>

      <div>
        <Button label="Светлая кнопка" theme={light} />
        <Button label="Тёмная кнопка" theme={dark} />
      </div>
    </Fragment>
  );
};

export default BridgePage;
