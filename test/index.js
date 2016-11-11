import config from '../';
import stylelint from 'stylelint';
import test from 'ava';

const sampleCss = `
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
`;

test('should return no errored', (t) => {
  return stylelint.lint({
    code: sampleCss,
    config: config,
  }).then(data => {
    const {errored, results} = data;
    const {warnings} = results[0];

    t.falsy(errored, 'no errored');
    t.is(warnings.length, 0, 'flags no warnings');
  }).catch((err) => t.fail());
});
