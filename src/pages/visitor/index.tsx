'use client';

import { Fragment, useState } from 'react';

import { htmlVisitor, markdownVisitor, mdxVisitor, visit, type Document } from './utils';
import { PatternInfo } from '../../components/pattern-info';

export default function VisitorPage() {
  const [docs] = useState<Document[]>([
    { type: 'text', content: 'Hello Visitor' },
    { type: 'image', url: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg' },
    {
      type: 'video',
      url: 'https://www.youtube.com/shorts/ipkG6rtDGH0?t=2&feature=share',
      duration: 120,
    },
  ]);

  const [exportType, setExportType] = useState<'html' | 'markdown' | 'mdx'>('html');

  const visitor = {
    mdx: mdxVisitor,
    html: htmlVisitor,
    markdown: markdownVisitor,
  };

  return (
    <Fragment>
      <PatternInfo
        title="Visitor (Посетитель)"
        description="Паттерн Visitor позволяет добавлять новые операции для объектов без изменения их структуры. Он выносит поведение в отдельные сущности (visitor'ы), которые можно применять к элементам."
        advantages={[
          'Позволяет добавлять новые операции, не меняя объекты',
          'Отделяет логику от структуры данных',
          'Удобен для экспорта, сериализации, валидации',
        ]}
        disadvantages={[
          'Трудно добавлять новые типы элементов (надо обновлять все visitors)',
          'Может показаться избыточным для простых задач',
        ]}
        usage={[
          'Экспорт документов в разные форматы (HTML, Markdown, PDF)',
          'Валидация сложных структур данных',
          'Анализ AST (например, в компиляторах или линтерах)',
          'Применение разных стилей отображения к UI-элементам',
        ]}
      />

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Пример экспорта документов</h2>

        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setExportType('html')}
            className={`px-4 py-2 rounded ${
              exportType === 'html' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            HTML Export
          </button>
          <button
            onClick={() => setExportType('markdown')}
            className={`px-4 py-2 rounded ${
              exportType === 'markdown' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Markdown Export
          </button>
          <button
            onClick={() => setExportType('mdx')}
            className={`px-4 py-2 rounded ${
              exportType === 'mdx' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Mdx Export
          </button>
        </div>

        <ul className="space-y-2">
          {docs.map((doc, i) => (
            <li key={i} className="border p-2 rounded">
              {visit(doc, visitor[exportType])}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}
