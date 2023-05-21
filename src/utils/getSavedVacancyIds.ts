export function getSavedVacancyIds() {
  return JSON.parse(localStorage.getItem('saved') || '[]') as number[];
}
