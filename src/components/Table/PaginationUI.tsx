import { ButtonHTMLAttributes } from "react";
import cn from "@/helpers/cn";

export interface IPagination {
  page: number;
  setPage: (page: number) => void;
  totalPages?: number;
  totalRows?: number;
}

const PAGE_LIMIT = 5;

const Pagination = ({
  page = 1,
  setPage,
  totalPages = 0,
  totalRows = 0,
}: IPagination) => {
  const onClickBack = () => page > 1 && setPage(page - 1);
  const onClickNext = () => page < totalPages && setPage(page + 1);
  const onClickPage = (page: number) => setPage(page);

  const currentGroup = Math.ceil(page / PAGE_LIMIT);

  const startPage = (currentGroup - 1) * PAGE_LIMIT + 1;
  const endPage = Math.min(startPage + PAGE_LIMIT - 1, totalPages);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm">
      <TotalText page={page} totalRows={totalRows} />

      <div className="flex gap-2 items-center">
        <ButtonControl disabled={page <= 1} onClick={onClickBack}>
          Prev
        </ButtonControl>
        {pages.map((p) => (
          <ButtonPage
            key={p}
            isActive={page === p}
            onClick={() => onClickPage(p)}
          >
            {p}
          </ButtonPage>
        ))}

        <ButtonControl disabled={page >= totalPages} onClick={onClickNext}>
          Next
        </ButtonControl>
      </div>
    </div>
  );
};

export default Pagination;

const ButtonPage = ({
  isActive = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean;
}) => (
  <button
    {...props}
    className={cn(
      "w-10 h-10 bg-slate-500 border border-line-active rounded-lg text-sm",
      isActive && "bg-red text-slate-300",
      props.className,
    )}
  />
);

const ButtonControl = ({
  disabled = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className={cn(
      "font-sans font-normal text-sm text-black px-1 py-2 select-none",
      disabled && "text-platinum",
      props.className,
    )}
  />
);

export const TotalText = ({
  totalRows,
  page,
}: {
  totalRows: number;
  page: number;
}) => {
  const limit = 10; // asumsi per page 10 data
  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, totalRows);

  return (
    <div className="font-sans font-normal text-sm text-slate-500">
      Menampilkan {start} hingga {end} dari {totalRows} data
    </div>
  );
};
