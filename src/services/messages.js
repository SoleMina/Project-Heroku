import Message from "../model/message.js";
import GenericQueries from "./genericQueries.js";

export default class MessageService extends GenericQueries {
  constructor(dao) {
    super(dao, Message.model);
  }
  async getAllWithFormattedIds(params) {
    let documents = await this.dao.findAll(params, this.model);
    console.log(documents);
    documents = documents.map((document) => {
      document.id = document._id;
      document.user.id = document.user._id;
      delete document._id;
      delete document["user"]["_id"];
      delete document.__v;
      return document;
    });
    return documents;
  }
}
