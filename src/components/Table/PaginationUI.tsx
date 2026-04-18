import { ButtonHTMLAttributes } from "react";

import cn from "@/helpers/cn";

export interface IPagination {
  page: number;
  setPage: (page: number) => void;
  totalPages?: number;
  totalRows?: number;
}

const Pagination = ({
  page = 1,
  setPage,
  totalPages = 0,
  totalRows = 0,
}: IPagination) => {
  const onClickBack = () => page > 1 && setPage(page - 1);

  const onClickNext = () => page < totalPages && setPage(page + 1);

  const onClickPage = (page: number) => setPage(page);

  return (
    <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm">
      <TotalText>{totalRows}</TotalText>

      <div className="flex gap-2 items-center">
        <ButtonControl disabled={page <= 1} onClick={onClickBack}>
          Prev
        </ButtonControl>
        {Array.from({ length: totalPages }).map((_, i) => (
          <ButtonPage
            key={i}
            isActive={page === i + 1}
            onClick={() => onClickPage(i + 1)}
          >
            {i + 1}
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

// const Delimiter = () => (
//   <div className="w-10 h-10 py-3 bg-white rounded-lg text-center select-none">
//     ...
//   </div>
// );

export const TotalText = ({ children }: { children: number }) => (
  <div className="font-sans font-normal text-sm text-slate-500">
    Menampilkan 1 hingga {children < 10 ? children : 10} dari {children} data
  </div>
);
