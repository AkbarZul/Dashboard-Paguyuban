export const filterEmptyValue = (
  obj: object
) =>
  Object.entries(obj)
    .filter(([, value]) => Boolean(value))
    .reduce((acc, cur) => ({ ...acc, [cur[0]]: cur[1] }), {})
