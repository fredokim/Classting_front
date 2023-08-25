export interface Form {
  data: {
    formId: number;
    title: string;
    items: FormItems[];
  };
}

export interface FormItems {
  itemId: number;
  title: string;
  formType: string;
  options: FormItemOption[];
}

export interface FormItemOption {
  id: number;
  text: string;
}

export interface Output {
  id: number;
  items: FormItemOption[];
  page: number;
  selectedValue: FormItemOption[];
  length: number;
  lastItem: FormItemOption[];
}
