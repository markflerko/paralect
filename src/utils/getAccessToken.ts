export function getAccessToken() {
  return localStorage.getItem(
    process.env.REACT_APP_ACCESS_TOKEN_STORAGE_NAME as string,
  );
}
