export const calculateSellPrice = (price: number, percent: number) => {
  return price - (price * percent) / 100;
};

const numberWithVND = (num: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    num
  );
export default numberWithVND;
