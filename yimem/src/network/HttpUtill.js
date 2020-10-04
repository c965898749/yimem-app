import aixos from 'axios'
export let Inner = aixos.create({
  baseURL: 'http://www.yimem.com/',
  // baseURL: '/api',
  // baseURL:this.HOST,
  timeout:6000,
  headers: {
    'Content-type': 'application/json'
  }
})
