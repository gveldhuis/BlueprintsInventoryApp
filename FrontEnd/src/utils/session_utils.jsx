import Cookies from 'universal-cookie';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

const cookies = new Cookies();
const key = process.env.REACT_APP_COOKIE_KEY;

export function getSession(name) {
  const cookie = cookies.get(name);
  if (cookie === undefined) {
    return null;
  } else {
    return AES.decrypt(cookies.get(name), key).toString(Utf8);
  }
}

// 14400 seconds = 4 hours
export function setSession(name, value) {
  cookies.set(name, AES.encrypt(value, key).toString(), { maxAge: 14400 });
};

export function clearSession(name){
  cookies.remove(name);
}
