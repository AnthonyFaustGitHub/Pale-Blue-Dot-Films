export interface Films {
  readonly id: number;
  readonly title: string;
  readonly year: string;
  type: string;
  lengthInMinutes: number;
  still?: string;
  synopsis: string;
  poster?: string;
  stills?: string;
  distribution?: string;
  link?: string;
}
