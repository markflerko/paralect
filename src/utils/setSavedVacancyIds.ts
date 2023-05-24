export function setSavedVacancyIds(id: number[]) {
  return localStorage.setItem(
    process.env.REACT_APP_SAVED_VACANCIES_STORAGE_NAME as string,
    JSON.stringify(id),
  );
}
