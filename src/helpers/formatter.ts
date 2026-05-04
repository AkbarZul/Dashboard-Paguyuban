const getOptions = (
  data?: {
    id: number;
    nama: string;
  }[],
) => (data?.length ? data.map((v) => ({ label: v.nama, value: v.id })) : []);

const addCommas = (num: number | string): string =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const formattedNumberToRp = (number: number) =>
  number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "-";

export { getOptions, addCommas, formattedNumberToRp };
