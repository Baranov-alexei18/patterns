'use client';

import { Fragment, useState } from 'react';

import { PatternInfo } from '../../components/pattern-info';

type FormSteps<T> = {
  validate: (values: T) => boolean;
  submit: (values: T) => void;
  reset?: () => void;
};

function useFormHandler<T>(steps: FormSteps<T>, initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<string | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (key: keyof T, value: any) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    setErrors(null);
    if (!steps.validate(values)) {
      setErrors('Ошибка валидации');
      return;
    }
    steps.submit(values);
    steps.reset?.();
  };

  return { values, errors, handleChange, handleSubmit };
}

export default function TemplateMethodHookPage() {
  const formSteps = {
    validate: (values: { name: string; email: string }) =>
      values.name.trim() !== '' && values.email.includes('@'),
    submit: (values: { name: string; email: string }) =>
      alert(`Submitted: ${JSON.stringify(values)}`),
    reset: () => console.log('Форма сброшена'),
  };

  const { values, errors, handleChange, handleSubmit } = useFormHandler(formSteps, {
    name: '',
    email: '',
  });

  return (
    <Fragment>
      <PatternInfo
        title="Template Method"
        description="Template Method — это шаблонный метод, который задаёт структуру алгоритма, оставляя некоторые шаги реализации «на откуп» конкретным подклассам или внешним функциям.
          То есть:
          Есть общий алгоритм с фиксированным порядком шагов.
          Некоторые шаги делегируются наследникам (в классах) или передаются как функции (в функциональном стиле).
          Основная цель — переиспользование структуры алгоритма, при этом позволяя менять детали реализации."
        advantages={[
          'Чётко разделены шаги обработки формы',
          'Можно легко менять логику validate/submit/reset',
          'Подходит для переиспользуемых форм в React',
        ]}
        disadvantages={[
          'Может быть немного сложнее для новичков',
          'Нужно явно передавать все шаги',
        ]}
        usage={[
          'Формы с разными схемами валидации',
          'Обработка сложных действий пользователя (wizard)',
          'Унификация submit-логики',
        ]}
      />

      <div className="mt-12 flex flex-col gap-4 w-full max-w-md">
        <input
          placeholder="Имя"
          value={values.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="border p-2 rounded"
        />
        <input
          placeholder="Email"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="border p-2 rounded"
        />
        {errors && <p className="text-red-600">{errors}</p>}
        <button onClick={handleSubmit} className="rounded bg-blue-600 px-4 py-2 text-white">
          Submit
        </button>
      </div>
    </Fragment>
  );
}
