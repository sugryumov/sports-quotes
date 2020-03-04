import store from 'store';

export function writeDataToLocalStorage(token: string, refreshToken: string, expiresIn: string) {
  store.set('refreshTokenSportsQuotes', refreshToken);
  store.set('expiresInSportsQuotes', expiresIn);
  store.set('tokenSportsQuotes', token);
}

export function getDataToLocalStorage(value: string) {
  return store.get(value);
}

export function deleteDataToLocalStorage() {
  store.remove('refreshTokenSportsQuotes');
  store.remove('expiresInSportsQuotes');
  store.remove('tokenSportsQuotes');
  window.location.reload();
}

export const checkToken = (expiresIn: number, password: string) => {
  // Если токен просрочен
  if (expiresIn * 1000 < new Date().getTime()) {
    // Делаем запрос новой связки
    // authRefresh(getTokenFromLocalStorage('refreshTokenSportsQuotes'))
    //   .then(({
    //     token,
    //     refreshToken,
    //     expiresIn
    //   }) => {
    //     writeTokensToLocalStorage(token, refreshToken, expiresIn, password);
    //   })
    //   .catch(err => console.log(err));
  }
};
