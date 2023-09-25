export interface FormItemOption {
  id: number;
  name: string;
}

export interface CategoryForm {
  trivia_categories: CategoryFormItems[];
}

export interface CategoryFormItems {
  id: number;
  name: string;
}
