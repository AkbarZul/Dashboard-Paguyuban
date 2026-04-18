import { useSearchParams } from "react-router";

import { OverrideOptional } from "@/types/utils";

import PaginationUI, { IPagination as IPaginationUI } from "./PaginationUI";

export type IPagination = OverrideOptional<IPaginationUI, "page" | "setPage">;

const Pagination = ({ page = 1, setPage, ...props }: IPagination) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const _page = setPage ? page : +(searchParams.get("page") ?? 1);

  const onClickPage = (page: number) => {
    if (setPage) {
      setPage(page);
    } else {
      setSearchParams((prev) => {
        prev.set("page", `${page}`);
        prev.sort();

        return prev;
      });
    }
  };

  return <PaginationUI {...props} page={_page} setPage={onClickPage} />;
};

export default Pagination;
