import { Entry, Asset } from 'contentful'
export const News = 'news'
export interface News {
  //News
  /* FN news item */
  readonly newsDate: string
  readonly newsDetail?: { content: any, data: any, nodeType: string }
  readonly newsSummary: string
  readonly newsTitle?: string
  readonly slug: string
}

export const TeamMember = 'teamMember'
export interface TeamMember {
  //Team Member
  /* FN team member content type */
  readonly bio?: string
  readonly name: string
  readonly picture?: Asset
  readonly slug: string
  readonly title: string
}

