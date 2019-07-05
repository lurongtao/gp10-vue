export default () => {
  return fetch('https://api.myjson.com/bins/k5q3j')
    .then(response => response.json())
    .then(result => {
      return result
    })
}