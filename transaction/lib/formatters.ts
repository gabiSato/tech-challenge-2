import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export function formatDate(template: string, date?: Date) {
  return dayjs(date).locale("pt-br").format(template);
}

export function formatToCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
