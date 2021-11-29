export interface Client {
  _id: string;
  isActive: boolean;
  balance: string;
  name: string;
  gender: string;
  company?: string;
  email: string;
  phone: string;
  country: string;
  postcode: string;
  houseNr: number;
  addition: string;
  street: string;
  city: string;
  state: string;
  address: string;
  iban: string;
}
