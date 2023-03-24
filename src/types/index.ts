export interface Carousel {
  url: any,
  title: string,
  desc: string,
  buttons: []
}

export interface Menu {
  title: string,
  showTitle: boolean,
  menus: MenuItem[]
}

interface MenuItem{
  name: string,
  logo: string
}