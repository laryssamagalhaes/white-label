export type OptionsType = {
  value: string;
  text: string;
};

export type PropsType = {
  options: Array<OptionsType>;
  onchange: (value: any) => void;
};
