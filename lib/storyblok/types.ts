export type TStoryBlokParams = {
  version?: "draft" | "published";
};

export type TStoryBlokResponse = {
  data: {
    story: IStoryItem;
    cv: number;
    rels: any[];
    links: any[];
  };
};

export interface IStoryItem {
  name: string;
  created_at: string;
  published_at: string;
  id: number;
  uuid: string;
  content: IContentItem;
  slug: string;
  full_slug: string;
  sort_by_date: any;
  position: number;
  tag_list: any[];
  is_startpage: boolean;
  parent_id: number;
  meta_data: any;
  group_id: string;
  first_published_at: string;
  release_id: any;
  lang: string;
  path: string;
  alternates: IAlternateItem[];
  default_full_slug: any;
  translated_slugs: any;
}

export interface IContentItem {
  _uid: string;
  body: Body[];
  component: string;
  _editable: string;
}

export interface IBodyItem {
  _uid: string;
  image?: IImageItem;
  component: string;
  _editable: string;
  name?: string;
  text?: string;
  about?: string;
}

export interface IImageItem {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  meta_data: IMetaData;
  is_external_url: boolean;
}

export interface IMetaData {}

export interface IAlternateItem {
  id: number;
  name: string;
  slug: string;
  published: boolean;
  full_slug: string;
  is_folder: boolean;
  parent_id: any;
}
