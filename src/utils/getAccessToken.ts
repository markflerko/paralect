export async function getAccessToken() {
  return new Promise((resolve) => {
    const token = localStorage.getItem(
      process.env.REACT_APP_ACCESS_TOKEN_STORAGE_NAME as string,
    );
    if (token) {
      resolve(token);
    } else {
      setTimeout(() => {
        resolve(getAccessToken());
      }, 500);
    }
  });
}
