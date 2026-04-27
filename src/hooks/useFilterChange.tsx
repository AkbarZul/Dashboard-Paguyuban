import { useState } from "react";
import useTableParams from "@/hooks/useTableParams";

interface UseFilterChangeProps<T extends object> {
  defaultFilters: T;
}

const useFilterChange = <T extends object>({
  defaultFilters,
}: UseFilterChangeProps<T>) => {
  const { filterParams, setFilterParams } = useTableParams({ defaultFilters });

  const [values, setValues] = useState<T>(filterParams);

  const handleChange = <K extends keyof T>(field: K, value: T[K]) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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
    setFilterParams,
  };
};

export default useFilterChange;
