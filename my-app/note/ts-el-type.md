# ts 사용시 HtmlElement types

## React 에서 Ts 사용시

```js
// vanilla
HTMLTextAreaElement

// tsx
React.KeyboardEvent<HTMLTextAreaElement>
```

## input element

> text 등을 반환하는 엘리먼트

`HTMLTextAreaElement`

error
```js
TS2339: Property 'value' does not exist on type 'EventTarget & HTMLElement'.
```

use
```js
HTMLTextAreaElement
```