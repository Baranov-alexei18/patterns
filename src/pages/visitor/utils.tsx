import type { ReactNode } from 'react';

export type Document =
  | { type: 'text'; content: string }
  | { type: 'image'; url: string }
  | { type: 'video'; url: string; duration: number };

export type Visitor<T> = {
  text: (doc: { content: string }) => T;
  image: (doc: { url: string }) => T;
  video: (doc: { url: string; duration: number }) => T;
};

export const htmlVisitor: Visitor<string> = {
  text: (doc) => `<p>${doc.content}</p>`,
  image: (doc) => `<img src="${doc.url}" />`,
  video: (doc) => `<video src="${doc.url}" />`,
};

export const markdownVisitor: Visitor<string> = {
  text: (doc) => doc.content,
  image: (doc) => `![image](${doc.url})`,
  video: (doc) => `![video](${doc.url})`,
};

export const mdxVisitor: Visitor<ReactNode> = {
  text: (doc) => <p>{doc.content}</p>,
  image: (doc) => <img src={doc.url} alt="image" />,
  video: (doc) => (
    <video src={doc.url} controls>
      Your browser does not support the video tag.
    </video>
  ),
};

export function visit<T>(doc: Document, visitor: Visitor<T>) {
  switch (doc.type) {
    case 'text':
      return visitor.text(doc);
    case 'image':
      return visitor.image(doc);
    case 'video':
      return visitor.video(doc);
  }
}
