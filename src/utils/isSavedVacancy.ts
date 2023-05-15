export function isSavedVacancy(vacancyId: number | string) {
  const savedVacancyIds = JSON.parse(
    localStorage.getItem('saved') || '[]',
  ) as number[];

  return savedVacancyIds.some((id) => id.toString() === vacancyId.toString());
}
