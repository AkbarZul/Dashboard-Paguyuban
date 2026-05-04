import { useEffect, useRef, useState } from "react";
import useTableParams from "@/hooks/useTableParams";
import debounce from "@/helpers/debounce";

interface UseFilterChangeProps<T extends object> {
  defaultFilters: T;
}

const useFilterChange = <T extends object>({
  defaultFilters,
}: UseFilterChangeProps<T>) => {
  const { filterParams, setFilterParams } = useTableParams({ defaultFilters });

  const [values, setValues] = useState<T>(filterParams);

  const debouncedSetParamsRef = useRef(
    debounce((params: T) => {
      setFilterParams(params);
    }, 500),
  );

  const handleChange = <K extends keyof T>(
    field: K,
    value: T[K],
    options?: { debounce?: boolean },
  ) => {
    setValues((prev) => {
      const updated = {
        ...prev,
        [field]: value,
      };

      if (options?.debounce) {
        debouncedSetParamsRef.current(updated);
      } else {
        setFilterParams(updated);
      }

      return updated;
    });
  };

  const resetFilters = () => {
    setValues(defaultFilters);
    setFilterParams(defaultFilters);
    debouncedSetParamsRef.current.cancel();
  };

  useEffect(() => {
    const debounced = debouncedSetParamsRef.current;

    return () => {
      debounced.cancel();
    };
  }, []);

  return {
    values,
    handleChange,
    resetFilters,
    filterParams,
  };
};

export default useFilterChange;
