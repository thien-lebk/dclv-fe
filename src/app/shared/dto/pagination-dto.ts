export class PaginationDto {
  search: string;
  ordering: string;
  page = 1;
  limit = 10;
}
