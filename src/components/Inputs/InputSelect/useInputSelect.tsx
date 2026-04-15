import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface Option<T = string | number> {
  label: string;
  value: T;
  disabled?: boolean;
}

export function useInputSelect<T>({
  list,
  value,
  onChange,
  disabled,
}: {
  list: Option<T>[];
  value?: T;
  onChange?: (val: T) => void;
  disabled?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  const selectedLabel = useMemo(
    () => list.find((i) => i.value === value)?.label ?? "",
    [list, value],
  );

  const filtered = useMemo(() => {
    if (!keyword) return list;
    return list.filter((i) =>
      i.label.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [keyword, list]);

  const close = useCallback(() => {
    setOpen(false);
    setActiveIndex(-1);
    setKeyword(selectedLabel);
  }, [selectedLabel]);

  const toggle = () => {
    if (disabled) return;
    setOpen((prev) => !prev);
    setKeyword("");
    inputRef.current?.focus();
  };

  const select = (val: T) => {
    const item = list.find((i) => i.value === val);
    if (!item || item.disabled) return;

    onChange?.(val);
    setOpen(false);
    setActiveIndex(-1);
    setKeyword(item.label);
    inputRef.current?.blur();
  };

  const move = (dir: 1 | -1) => {
    if (!filtered.length) return;

    let next = activeIndex;
    do {
      next += dir;
      if (next < 0) next = filtered.length - 1;
      if (next >= filtered.length) next = 0;
    } while (filtered[next]?.disabled);

    setActiveIndex(next);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        if (!open) setOpen(true);
        move(1);
        break;
      case "ArrowUp":
        move(-1);
        break;
      case "Enter":
        if (filtered[activeIndex]) {
          select(filtered[activeIndex].value);
        }
        break;
      case "Escape":
      case "Tab":
        close();
        break;
    }
  };

  useEffect(() => {
    setKeyword(selectedLabel);
  }, [selectedLabel]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [close]);

  return {
    inputRef,
    containerRef,
    open,
    keyword,
    activeIndex,
    filtered,
    setKeyword,
    toggle,
    select,
    onKeyDown,
  };
}
