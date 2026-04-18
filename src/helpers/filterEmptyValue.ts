export const filterEmptyValue = (
  obj: Record<string | number | symbol, unknown>
) =>
  Object.entries(obj)
    .filter(([, value]) => Boolean(value))
    .reduce((acc, cur) => ({ ...acc, [cur[0]]: cur[1] }), {})
