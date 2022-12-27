export const vndFormatter = (price) => {
  return Intl.NumberFormat('vi-VN').format(price);
};

//range -> return an array with [start, ..., stop].
export const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
