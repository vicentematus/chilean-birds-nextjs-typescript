export interface Bird {
  uid: string;
  name: Name;
  images: Images;
  _links: Links;
  sort: number;
}

interface Links {
  self: string;
  parent: string;
}

interface Images {
  main: string;
  full: string;
  thumb: string;
}

interface Name {
  spanish: string;
  english: string;
  latin: string;
}

export interface BirdDetail {
  uid: string;
  name: Name;
  map: Map;
  habitat: string;
  didyouknow: string;
  migration: boolean;
  dimorphism: boolean;
  size: string;
  order: string;
  species: string;
  images: Images;
  audio: {
    author: string;
    file: string;
  };
  _links: Links;
  sort: number;
}

interface Links {
  self: string;
  parent: string;
}

interface Images {
  main: string;
  gallery: Gallery[];
}

interface Gallery {
  url: string;
}

interface Map {
  image: string;
  title: string;
}

interface Name {
  spanish: string;
  english: string;
  latin: string;
}
