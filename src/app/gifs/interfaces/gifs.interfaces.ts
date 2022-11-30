import { Gif } from './gif.interface';

export interface SearchGifsResponse {
  data: Gif[];
  pagination: Pagination;
  meta: Meta;
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}
