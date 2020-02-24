export function writeDataToLocalStorage(token: string, refreshToken: string, expiresIn: string) {
  localStorage.setItem('token', token);
  localStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('expiresIn', expiresIn);
}
