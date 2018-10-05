export default `
  type Profile {
    username: String
    bio: String
    image: String
    following: Boolean
  }

  type Article {
    slug: String
    title: String
    description: String
    body: String
    tagList: [String]
    createdAt: String # validate format 2016-02-18T03:22:56.637Z
    updatedAt: String # validate format 2016-02-18T03:22:56.637Z
    favorited: Boolean
    favoritesCount: Int
    author: Profile
  }

  type Query {
    articles: [Article]!
  }
`;
