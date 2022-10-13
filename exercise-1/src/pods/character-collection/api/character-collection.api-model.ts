export interface CharacterEntityAndInfoApi {
  info: InfoApi;
  results: CharacterEntityApi[];
}

interface InfoApi {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Url;
  location: Url;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Url {
  name: string;
  url: string;
}
