export const date = new Date().toJSON().slice(0, 10);

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const formatDateMonth = (date: string) => {
  return new Date(date).toLocaleDateString("id-ID", {
    month: "short",
    year: "numeric",
  });
};
