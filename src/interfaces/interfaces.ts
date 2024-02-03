export interface ResponseGetListGames {
  pageNumber: number;
  data: GameDetail[];
}
export interface ResponseGetDetailGame {
  data: GameDetail;
}
export interface GameDetail {
  id: number;
  name: string;
  background_image: string;
  rating: string;
  playtime: number;
  price: string;
  description: string;
  released: Date;
  created: boolean;
  state: boolean;
  Images: Image[];
  Platforms: Genre[];
  Genres: Genre[];
  Stores: Genre[];
}

export interface Genre {
  name: string;
}

export interface Image {
  image_path: string;
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export interface ResponseVerifyProduct {
  data: boolean
}