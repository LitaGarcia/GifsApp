import { Gif } from './gif.interface';

export interface SearchGifsRandom {
  data: Gif;
  meta: Meta;
}

export interface Meta {
  msg: string;
  status: number;
  response_id: string;
}
