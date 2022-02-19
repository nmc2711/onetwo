import { stringify } from 'query-string';

export function qs(path: string, parameter?: any) {
  return `${process.env.API_URL}/${path}?${stringify(parameter)}`
}
