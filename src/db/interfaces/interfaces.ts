export interface IIngredient {
  id?: number;
  name: string;
  quantity: number;
  unit: string;
}

export interface ITag {
  id?: number;
  name: string;
}

export interface IRecipe {
  id?: number;
  name: string;
  user_id: number;
  description: string;
  instructions: string;
  prep_time: number;
  cook_time: number;
  serving_size: number;
  rating?: number;
  ingredients?: Array<IIngredient>;
  tags?: Array<ITag>;
  img?: string;
}
