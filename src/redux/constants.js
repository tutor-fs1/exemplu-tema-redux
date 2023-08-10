export const categoriesForFilter = [
  'all',
  'work',
  'domestic'
];

export const categories = categoriesForFilter.filter((cat) => cat !== 'all');

export const completedFilters = ['all', 'active', 'completed'];