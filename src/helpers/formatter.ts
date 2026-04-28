const getOptions = (
  data?: {
    id: number;
    nama: string;
  }[],
) => (data?.length ? data.map((v) => ({ label: v.nama, value: v.id })) : []);

export { getOptions };
