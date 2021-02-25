const { sanitizeEntity } = require('strapi-utils');
const axios = require('axios')

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.post.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.post });
  },

  async getPostsInstagram(ctx) {
    const { data } = await axios.get('https://www.instagram.com/alinepontesadvocacia/?__a=1')
    return data
  },

};
