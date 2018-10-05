import RealWorldAPI from ".";

export default class ArticlesAPI extends RealWorldAPI {
  public async fetchArticles() {
    const result = await this.get("articles");
    return result.articles;
  }
}
