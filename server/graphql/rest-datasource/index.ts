import { RESTDataSource } from "apollo-datasource-rest";

export default class RealWorldAPI extends RESTDataSource {
  public baseURL = "https://conduit.productionready.io/api/";
}
