import Cookies from 'universal-cookie';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

const cookies = new Cookies();
const key = process.env.REACT_APP_COOKIE_KEY;

export const getSession = (name) => {
  const cookie = cookies.get(name);
  if (cookie === undefined) {
    return null;
  } else {
    return AES.decrypt(cookies.get(name), key).toString(Utf8);
  }
}

export const setSession = (name, value) => {
  cookies.set(name, AES.encrypt(value, key).toString());
};

export const clearSession = (name) => {
  cookies.remove(name);
}
