export const sortBy = (key, asc) => {
  return (a, b) =>
    isNaN(a[key])
      ? a[key].localeCompare(b[key]) * asc
      : (a[key] - b[key]) * asc;
};
