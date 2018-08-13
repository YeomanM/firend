import axios from 'axios'
import Qs from 'qs'

function get(url,data) {
  return axios.get(url,{
    params: data
  })
}

function post(url,data) {
  return axios.post(url,data);
}

function postFrom(url,data) {
  let reqData = Qs.stringify(data);
  return axios.post(url,reqData,{headers:{'Content-Type':'application/x-www-form-urlencoded'}})
}

function deleteMethod(url,data) {
  return axios.delete(url,{
    params: data
  })
}

function putMethod(url,data) {
  let reqData = Qs.stringify(data);
  return axios.put(url,reqData,{headers:{'Content-Type':'application/x-www-form-urlencoded'}})
}


export default {

  login: (data) => {
    return postFrom('/authc/login',data);
  },

  getRight: () => {
    return get('/right');
  }


}
