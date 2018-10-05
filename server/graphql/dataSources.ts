import ArticlesAPI from "./rest-datasource/Articles";

const dataSources = () => ({
  articles: new ArticlesAPI(),
});

export default dataSources;
