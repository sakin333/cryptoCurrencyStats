export type Coin = {
  uuid: string;
  symbol: string;
  name: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  rank: number;
  volume: string;
  change: string;
};

export type InitialState = {
  loading: boolean;
  coins: Coin[];
  error: string | null;
};
