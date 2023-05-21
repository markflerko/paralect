export function setSavedVacancyIds(id: number[]) {
  return localStorage.setItem('saved', JSON.stringify(id));
}
