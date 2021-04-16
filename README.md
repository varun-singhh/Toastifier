# React-Toast-It

## Installation

```
$ npm install --save toastifier
$ yarn add toastify
```

## The gist

```jsx
import React from 'react';

import { toast } from 'toastifier';
import 'toastifier/dist/toastifier.min.css';

function App() {
  const notify = () => toast('Boom! it Worked');

  return (
    <div>
      <button onClick={notify}>Notify!</button>
    </div>
  );
}
```

## Demo

<img src="https://imgur.com/ThbikEk" alt="Image"/>

## Documentation

Check this to get you started!

| Name           | Type           | Description                                |
| -------------- | -------------- | ------------------------------------------ |
| `type`         | `String`       | **Required.** Toast Type                   |
| `animation`    | `String`       | **Required.** Animation Category           |
| `duration`     | `Number`       | **Required.** Duration for Animation .     |
| `position`     | `String`       | Toast position on window.                  |
| `onhoverPause` | `Boolean`      | pasue toast on hover.                      |
| `showIcons`    | `boolean`      | Show default SVG icons on toast            |
| `onClick`      | `Function`     | Function to trriger events.                |
| `styleClass`   | `Class Object` | Object for Style Class.                    |
| `background`   | `String`       | Background colour, by default white        |
| `text`         | `String`       | Text Color, by default based on toast type |
| `border`       | `String`       | Border, by default based on toast type     |

Check these values for each attributes!

| Name           | Values                                                                       |
| -------------- | ---------------------------------------------------------------------------- |
| `type`         | `error, success, warn, info`                                                 |
| `animation`    | `flip, bounce, fade, zoom`                                                   |
| `position`     | `top-left, top-center, top-right, bottom-left, bottom-center, bottom-right,` |
| `onhoverPause` | `true/false`                                                                 |
| `showIcons`    | `true/false`                                                                 |

```jsx
import React from 'react';

import { toast } from 'toastifier';
import 'toastifier/dist/toastifier.min.css';

function App() {
  const toastfunction = () => {
    alert('function Trigerred');
  };
  const oprions = {
    type: 'success',
    shadow: false,
    animation: 'bounce',
    duration: 3000,
    position: 'top-center',
    onhoverPause: true,
    onClick: toastfunction,
    styleClass: {
      background: '', // leave blank or remove styleClass to use default style
      text: '',
      border: '',
    },
  };
  const notify = () => toast(options, 'Boom! it Worked');

  return (
    <div>
      <button onClick={notify}>Notify!</button>
    </div>
  );
}
```

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome!

### Code Contributors

This project exists thanks to all the people who contribute.
