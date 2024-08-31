export interface Carousel {
  url: any,
  title: string,
  desc: string,
  buttons: any[]
}

export interface MenuItem{
  name: string,
  logo: string,
  link?: any,
  desc?: string
}

export interface Menu {
  title: string,
  showTitle: boolean,
  menus: MenuItem[]
}

export interface Anchor {
  title: string,
  href: string
}

export interface Tab {
  name: string,
  logo: string,
  content: Object
}
