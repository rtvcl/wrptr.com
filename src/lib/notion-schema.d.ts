export interface Result {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  created_by: TedBy;
  last_edited_by: TedBy;
  cover: Cover;
  icon: null;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
  public_url: null;
}

export interface Cover {
  type: string;
  file?: External;
  external?: External;
}

export interface External {
  url: string;
}

export interface TedBy {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Properties {
  short: Short;
  tags: Tags;
  status: PropertiesStatus;
  title_to_lower: Slug;
  created_at: CreatedAt;
  is_featured: IsFeatured;
  slug: Slug;
  title: Title;
}

export interface CreatedAt {
  id: string;
  type: string;
  date: DateClass;
}

export interface DateClass {
  start: Date;
  end: null;
  time_zone: null;
}

export interface IsFeatured {
  id: string;
  type: string;
  checkbox: boolean;
}

export interface Short {
  id: string;
  type: string;
  rich_text: RichText[];
}

export interface RichText {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: null;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Text {
  content: string;
  link: null;
}

export interface Slug {
  id: string;
  type: string;
  formula: Formula;
}

export interface Formula {
  type: string;
  string: string;
}

export interface PropertiesStatus {
  id: string;
  type: string;
  status: StatusElement;
}

export interface StatusElement {
  id: string;
  name: string;
  color: string;
}

export interface Tags {
  id: string;
  type: string;
  multi_select: StatusElement[];
}

export interface Title {
  id: string;
  type: string;
  title: RichText[];
}

// export type Tag = {
//     color: string
//     id: string
//     name: string
// }

// export type BlogPost = {
//     id: string;
//     slug: string;
//     cover: string;
//     title: string;
//     tags: Tag[];
//     description: string;
//     date: string
// }

// export type PostPage = {
//     post: BlogPost,
//     markdown: MdStringObject
// }
