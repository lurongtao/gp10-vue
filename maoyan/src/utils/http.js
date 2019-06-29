import axios from 'axios'

const http = {
  get({url, params={}}) {
    return axios({
      url,
      method: 'GET',
      params,
    })
    .then((result) => {
      return result.data
    })
  }
}

export default http