const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  timeout = 500
) => {
  let timer: ReturnType<typeof setTimeout>;

  const debounced = (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), timeout);
  };

  debounced.cancel = () => {
    clearTimeout(timer);
  };

  return debounced;
};

export default debounce;