import type {
  AddressInPut,
  AddressModel,
  CategoryOutPut,
  ProudctOutPut,
  TagListOutPut,
} from "@/api";

export type FilterConditions = {
  All: string;
  Newset: string;
  Cheapest: string;
  MostExpensive: string;
  MostPopular: string;
};
export interface Brand {
  id: number;
  label_type: number;
  name: string;
}

/**
 * * `1` - PACKAGE
 * `2` - GAME
 * `3` - PHYSCIAL
 * `4` - GIFTCART
 */
export type ProductTypeEnum =
  (typeof ProductTypeEnum)[keyof typeof ProductTypeEnum];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ProductTypeEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
} as const;

export interface ProductDetailOutPut {
  readonly description: string;
  /**
   * @maxLength 100
   * @nullable
   */
  device_model?: string | null;
  /** @nullable */
  discount_end_time?: string | null;
  readonly id: number;
  readonly main_image: string;
  /** @pattern ^-?\d{0,15}(?:\.\d{0,0})?$ */
  off_price: string;
  /**
   * @minimum -2147483648
   * @maximum 2147483647
   * @nullable
   */
  order_limit?: number | null;
  /** @pattern ^-?\d{0,15}(?:\.\d{0,0})?$ */
  price: string;
  /**
   * @minimum -2147483648
   * @maximum 2147483647
   */
  product_type?: ProductTypeEnum;
  /**
   * @minimum -2147483648
   * @maximum 2147483647
   */
  quantity?: number;
  /** @maxLength 100 */
  title: string;
}

export interface Label {
  id: number;
  name: string;
  category_type: number;
  parent: number;
}

export interface Attachment {
  id: string;
  title: string;
  description: string;
  attachment_type: number;
  price: string;
  is_force_attachment: boolean;
  selected: boolean;
}

export type CategoryLabel = Label & {
  value: boolean;
};
export type CategoryOutPutWithSelected = CategoryLabel & { value: boolean };
export type BrandWithSelected = Brand & { value: boolean };

export const ProductTypes = {
  PACKAGE: 1,
  GAME: 2,
  PHYCICAL: 3,
  GIFTCART: 4,
} as const;
export const PriceTypes = {
  EXPENSIVE: 1,
  INEXPENSIVE: 2,
  NEWEST: 3,
  FAVOURITE: 4,
} as const;

interface GamepadButton {
  pressed: boolean;
  touched: boolean;
  value: number;
}

export interface ButtonMapping {
  bottomButton: GamepadButton;
  rightButton: GamepadButton;
  leftButton: GamepadButton;
  topButton: GamepadButton;
  leftBumper: GamepadButton;
  rightBumper: GamepadButton;
  leftTrigger: GamepadButton;
  rightTrigger: GamepadButton;
  optionsButton: GamepadButton;
  startButton: GamepadButton;
  leftAnalogButton: GamepadButton;
  rightAnalogButton: GamepadButton;
  DpadUp: GamepadButton;
  DpadDown: GamepadButton;
  DpadLeft: GamepadButton;
  DpadRight: GamepadButton;
  power: GamepadButton;
}

export interface AxesMapping {
  leftAxesX: number;
  leftAxesY: number;
  rightAxesX: number;
  rightAxesY: number;
}

export enum CategoryTypes {
  PRODUCT = 1,
  FEATURE = 2,
  BRAND = 3,
  BLOG = 4,
  SERVICE = 5,
  GAME = 7,
  GIFTCART = 8,
}

export type Product = ProductDetailOutPut & ProudctOutPut;
export type Package = ProductDetailOutPut &
  ProudctOutPut & {
    included_products: any[];
  };
export interface LabelListApi {
  id: number;
  name: string;
  category_type: number;
  parent?: null;
  children?: ChildrenEntity[] | null;
}
export interface ChildrenEntity {
  id: number;
  name: string;
  category_type: number;
  parent: number;
  children?: (ChildrenEntity1 | null)[] | null;
}
export interface ChildrenEntity1 {
  id: number;
  name: string;
  category_type: number;
  parent: number;
  children?: null[] | null;
}
export interface Label {
  id: number;
  name: string;
  category_type: number;
  parent: number;
}
export interface Brand {
  id: number;
  label_type: number;
  name: string;
}
export type CardItems = {
  product: ProductDetailOutPut;
  attachment: Attachment;
  price: number;
  cart: number;
  id: number;
}[];

export interface Review {
  id: string;
  user: User;
  comment: string;
  created_at: string;
}
export interface User {
  firstname: string;
  lastname: string;
}
export interface Question {
  id: string;
  sender: Sender;
  question: string;
  answer: string;
}
export interface Sender {
  firstname: string;
  lastname: string;
}
export interface Attachment {
  id: string;
  title: string;
  description: string;
  attachment_type: number;
  price: string;
  is_force_attachment: boolean;
  selected: boolean;
}
export type TagOutPutWithSelected = { selected: boolean } & TagListOutPut;
export type Position = {
  lat: number;
  lng: number;
};
export interface ApiAddress {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  address: Address;
  boundingbox?: string[] | null;
}
export interface Address {
  road: string;
  neighbourhood: string;
  suburb: string;
  city: string;
  state: string;
  district: string;
  county: string;
  province: string;
  "ISO3166-2-lvl4": string;
  postcode: string;
  country: string;
  town: string;
  country_code: string;
}

export type Card = {
  depositDescription: string;
  depositNumber: string;
  iban: string;
};

export type AddressModelWithSelected = AddressModel & { selected: boolean };

export type MyAddressInPut = AddressInPut & {
  id?: number;
  position: {
    lat: number;
    lng: number;
  };
};

export type TransformedProvince = {
  id: number;
  name: string;
  slug: string;
  province_id: number;
}[];
export type Profile = {
  firstname: string;
  lastname: string;
  national_code: string;
  phone_number: string;
  email: string;
  birthdate: string;
  password: string;
  confirm_password: string;
  profile_image: string;
  otp: string;
};
