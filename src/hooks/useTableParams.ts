import { filterEmptyValue } from "@/helpers/filterEmptyValue";
import { useMemo } from "react";
import { useSearchParams } from "react-router";

function useTableParams<T extends object>({
  defaultFilters,
}: {
  defaultFilters: T;
}) {
    const [searchParams, setSearchParams] = useSearchParams(
    new URLSearchParams(filterEmptyValue(defaultFilters))
  )

  const filterParams = useMemo(() => {
    const result = {} as T;

    Object.keys(defaultFilters).forEach((key) => {
      const value = searchParams.get(key);

      result[key as keyof T] =
        (value as T[keyof T]) ?? defaultFilters[key as keyof T];
    });

    return result;
  }, [searchParams, defaultFilters]);

  const setFilterParams = (params: Partial<T>) => {
    setSearchParams(
      (prev) => {
        const newParams = new URLSearchParams(prev);

        Object.entries(params).forEach(([key, value]) => {
          if (value === undefined || value === "") {
            newParams.delete(key);
          } else {
            newParams.set(key, String(value));
          }
        });

        if (Object.keys(params).some((key) => key !== "page")) {
          newParams.set("page", "1");
        }

        return newParams;
      },
      { replace: true }
    );
  };

  const isFilterActive = Object.entries(filterParams).some(
    ([key, val]) => key !== "page" && Boolean(val)
  );

  return {
    filterParams,
    setFilterParams,
    isFilterActive,
  };
}

export default useTableParams;