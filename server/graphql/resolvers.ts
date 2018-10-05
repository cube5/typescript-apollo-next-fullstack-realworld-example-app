export default {
  Query: {
    articles(_: any, _args: any, ctx: any) {
      const { dataSources } = ctx;
      return dataSources.articles.fetchArticles();
    },
  },
};
