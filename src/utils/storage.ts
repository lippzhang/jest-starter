const KEY_NAME = 'my-app-'

const set = (key: string, value: string) => {
  localStorage.setItem(KEY_NAME + key, value)
}

const get = (key: string) => {
  return localStorage.getItem(KEY_NAME + key)
}

const remove = (key: string) => {
  localStorage.removeItem(KEY_NAME + key)
}

const clear = () => {
  localStorage.clear()
}

const storage = {
  set,
  get,
  remove,
  clear,
}
export default storage