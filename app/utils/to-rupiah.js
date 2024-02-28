export const ToRupiah = number => {
  const formatCurr = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 20,
  }).format(number);
  return formatCurr;
};
