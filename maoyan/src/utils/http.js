import axios from 'axios'

const http = {
  get(url) {
    return axios({
      url,
      method: 'GET'
    })
    .then((result) => {
      return result.data
    })
  }
}

export default http