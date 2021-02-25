module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async send(ctx) {
    await strapi.plugins['email'].services.email.send({
      to: 'contato@alinepontes.adv.br',
      from: `${ctx.request.body.name} <${ctx.request.body.from}>`,
      replyTo: 'no-replay@alinepontes.adv.br',
      subject: ctx.request.body.subject,
      text: ctx.request.body.text,
      html: ctx.request.body.html,
    })
    return { message: 'E-mail enviado com sucesso!' }
  },
};
