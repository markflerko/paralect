export function getSavedVacancyIds() {
  return JSON.parse(
    localStorage.getItem(
      process.env.REACT_APP_SAVED_VACANCIES_STORAGE_NAME as string,
    ) || '[]',
  ) as number[];
}
