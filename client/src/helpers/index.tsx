export function writeDataToLocalStorage(token: string, refreshToken: string, expiresIn: string) {
  localStorage.setItem('tokenSportsQuotes', token);
  localStorage.setItem('refreshTokenSportsQuotes', refreshToken);
  localStorage.setItem('expiresInSportsQuotes', expiresIn);
}
