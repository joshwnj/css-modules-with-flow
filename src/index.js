/* @flow */

const styles = require('./index.css')

const elem = document.getElementById('root')
elem.innerHTML = `
<div class="${styles.outer}">
  <div class="${styles.inner}">
    ${repeatString('fun ', 4)} lookin fwd to the wknd
  </div>
</div>
`

function repeatString (str: string, times: number) {
  return str.repeat(times)
}
