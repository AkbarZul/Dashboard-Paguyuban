import { useEffect, useState } from "react";
import useTableParams from "@/hooks/useTableParams";

interface UseFilterChangeProps<T extends Record<string, string | number>> {
  defaultFilters: T;
  debounceKeys?: (keyof T)[];
  debounceDelay?: number;
}

const useFilterChange = <T extends Record<string, string | number>>({
  defaultFilters,
  debounceKeys = [],
  debounceDelay = 500,
}: UseFilterChangeProps<T>) => {
  const { filterParams, setFilterParams } = useTableParams({ defaultFilters });

  const [values, setValues] = useState<T>(filterParams);
  const [debouncedValues, setDebouncedValues] = useState(values);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValues(values);
    }, debounceDelay);

    return () => clearTimeout(handler);
  }, [values, debounceDelay]);

  const handleChange = <K extends keyof T>(field: K, value: T[K]) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    const nextParams = { ...values };

    debounceKeys.forEach((key) => {
      nextParams[key] = debouncedValues[key];
    });

    setFilterParams(nextParams);
  }, [values, debouncedValues, debounceKeys, setFilterParams]);

  const resetFilters = () => {
    setValues(defaultFilters);
    setFilterParams(defaultFilters);
  };

  return {
    values,
    setValues,
    handleChange,
    resetFilters,
    filterParams,
  };
};

export default useFilterChange;