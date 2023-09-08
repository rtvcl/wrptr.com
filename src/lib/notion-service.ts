import { Client } from "@notionhq/client";
// import {BlogPost, PostPage} from "@/lib/notion-schema";
import { NotionToMarkdown } from "notion-to-md";
import { NOTION_DATABASE_POST_ID } from "@/config/notion";
import { Result } from "./notion-schema";
import Error from "next/error";

export type PostProperty = {
  id: string;
  cover_url: string;
  slug: string;
  title: string;
  short: string;
};
export default class NotionService {
  client: Client;
  n2m: NotionToMarkdown;

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
    this.n2m = new NotionToMarkdown({ notionClient: this.client });
  }

  async getAllPost({ isFeatured }: { isFeatured: boolean }) {
    const isPublishedFilter = {
      property: "status",
      status: { equals: "Publish" },
    };
    const filterOptions: Array<any> = [isPublishedFilter];

    if (isFeatured) {
      const isFeaturedFilter = {
        property: "is_featured",
        checkbox: { equals: true },
      };
      filterOptions.push(isFeaturedFilter);
    }

    const response = await this.client.databases.query({
      database_id: NOTION_DATABASE_POST_ID,
      filter: {
        and: filterOptions,
      },
      sorts: [{ property: "created_at", direction: "descending" }],
    });

    const results = response.results as Result[];

    return results.map(this.mapPostProperty);
  }

  mapPostProperty(post: Result): PostProperty {
    return {
      id: post.id,
      cover_url: post.cover.external?.url || post.cover.file!.url,
      slug: post.properties.slug.formula.string,
      title: post.properties.title.title[0].plain_text,
      short: post.properties.short.rich_text[0].plain_text,
    };
  }

  async getPostBySlug(slug: string): Promise<PostProperty & { markdown: any }> {
    const isPublishedFilter = {
      property: "status",
      status: { equals: "Publish" },
    };

    const response = await this.client.databases.query({
      database_id: NOTION_DATABASE_POST_ID,
      filter: {
        and: [
          isPublishedFilter,
          { property: "slug", formula: { string: { equals: slug } } },
        ],
      },
    });

    // TODO: handle if no page fetched
    if (!response.results[0]) {
      // throw new Error({statusCode: 404, title: 'The requested page or resource could not be found'})
      throw "Something went wrong...";
    }

    const postProperty = this.mapPostProperty(response.results[0] as Result);
    const mdBlocks = await this.n2m.pageToMarkdown(postProperty.id);
    const markdown = this.n2m.toMarkdownString(mdBlocks);

    return {
      ...postProperty,
      markdown,
    };
  }

  // async getPublishedBlogPosts(): Promise<BlogPost[]> {
  //     const database = process.env.NOTION_BLOG_DATABASE_ID ?? '';
  //     // list blog posts
  //     const response = await this.client.databases.query({
  //         database_id: database,
  //         filter: {
  //             property: 'Published',
  //             checkbox: {
  //                 equals: true
  //             }
  //         },
  //         sorts: [
  //             {
  //                 property: 'Updated',
  //                 direction: 'descending'
  //             }
  //         ]
  //     });

  //     return response.results.map(res => {
  //         return NotionService.pageToPostTransformer(res);
  //     })
  // }

  // async getSingleBlogPost(slug: string): Promise<PostPage> {
  //     let post, markdown

  //     const database = process.env.NOTION_BLOG_DATABASE_ID ?? '';
  //     // list of blog posts
  //     const response = await this.client.databases.query({
  //         database_id: database,
  //         filter: {
  //             property: 'Slug',
  //             formula: {
  //                 string: {
  //                     equals: slug // slug
  //                 }
  //             },
  //             // add option for tags in the future
  //         },
  //         sorts: [
  //             {
  //                 property: 'Updated',
  //                 direction: 'descending'
  //             }
  //         ]
  //     });

  //     if (!response.results[0]) {
  //         throw 'No results available'
  //     }

  //     // grab page from notion
  //     const page = response.results[0];

  //     const mdBlocks = await this.n2m.pageToMarkdown(page.id)
  //     markdown = this.n2m.toMarkdownString(mdBlocks);
  //     post = NotionService.pageToPostTransformer(page);

  //     return {
  //         post,
  //         markdown
  //     }
  // }

  // private static pageToPostTransformer(page: any): BlogPost {
  //     let cover = page.cover;
  //     console.log(cover)
  //     switch (cover.type) {
  //         case 'file':
  //             cover = page.cover.file
  //             break;
  //         case 'external':
  //             cover = page.cover.external.url;
  //             break;
  //         default:
  //             // Add default cover image if you want...
  //             cover = ''
  //     }

  //     return {
  //         id: page.id,
  //         cover: cover,
  //         title: page.properties.Name.title[0].plain_text,
  //         tags: page.properties.Tags.multi_select,
  //         description: page.properties.Description.rich_text[0].plain_text,
  //         date: page.properties.Updated.last_edited_time,
  //         slug: page.properties.Slug.formula.string
  //     }
  // }
}

export const notion = new NotionService();
