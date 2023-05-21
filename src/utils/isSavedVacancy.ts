import { getSavedVacancyIds } from './getSavedVacancyIds';

export function isSavedVacancy(vacancyId: number | string) {
  const savedVacancyIds = getSavedVacancyIds();

  return savedVacancyIds.some((id) => id.toString() === vacancyId.toString());
}
