'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('home.tpl');
  }

  async login() {
    await this.ctx.render('login.tpl');
  }

  async logout() {
    const ctx = this.ctx;
    ctx.logout();
    ctx.redirect(ctx.get('referer') || '/');
  }
}

module.exports = HomeController;
