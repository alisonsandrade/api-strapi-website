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
    try {
      const { data } = await axios.get(process.env.INSTAGRAM_API_URL)
      return data      
    } catch (error) {
      return error.response
    }    
  },

};
