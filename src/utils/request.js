// const baseUrl = '/app'
const baseUrl = ''
window.ajax = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    fetch(baseUrl + url, data).then(function (response) {
      return response.json();
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}