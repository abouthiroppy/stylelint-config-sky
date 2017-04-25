# stylelint-config-sky

[![Build Status](https://travis-ci.org/lint-config/stylelint-config-sky.svg?branch=master)](https://travis-ci.org/lint-config/stylelint-config-sky)
[![codecov](https://codecov.io/gh/lint-config/stylelint-config-sky/branch/master/graph/badge.svg)](https://codecov.io/gh/lint-config/stylelint-config-sky)
[![npm version](https://badge.fury.io/js/stylelint-config-sky.svg)](https://badge.fury.io/js/stylelint-config-sky)
## Install
```
$ npm install --save-dev stylelint-config-sky
```

## Sample
```css
@import url("x.css");
@import url("y.css");

.selector1 {
  padding: "1px 2px 3px 4px";
}

.selector-1,
.selector-2,
.selector-3[type="text"] {
  background: linear-gradient(#fff, rgba(0, 0, 0, .1));
  box-sizing: border-box;
  color: #333;
}

.selector-a,
.selector-b:not(:first-child) {
  padding: 10px;
  top: calc(calc(1em * 20) / 40);
}

@media (min-width >= 10em) {
  .selector {

    /* comment */
    transform: translate(1, 1) scale(4);
  }
}

.selector-x > .selector-y {
  font-size: 1rem;
}

.selector-z:after {
  background-image: url("http://hoge/x.svg");
  content: "";
}

/* css-next */
:root {
  --color: #fff;
}

.selector-100 {
  text-align: center;

  & p {
    color: #f0f;
  }

  & a {
    color: #ff0;
  }
}
```
