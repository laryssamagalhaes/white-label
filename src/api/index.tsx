const API_URL = "https://todo-cartoes.laryssamagal.now.sh";

export enum OrderByEnum {
  ASC = "asc",
  DESC = "desc"
}

export type ApiParamsType = {
  currentPage: number;
  orderBy?: OrderByEnum;
  inputValue?: string;
};

export async function fetchApi({
  currentPage,
  orderBy,
  inputValue
}: ApiParamsType) {
  const priceOrder = orderBy || OrderByEnum.ASC;
  const response = await fetch(
    `${API_URL}?page=${currentPage}&size=70&priceOrder=${priceOrder}&name=${inputValue ||
      ""}`
  );

  return response.json();
}
