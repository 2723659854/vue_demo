import http from './axios'

export function getList(query){
  return http.post('/api',query)
}

