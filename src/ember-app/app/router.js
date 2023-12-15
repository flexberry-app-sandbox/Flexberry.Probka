import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probka-графики-отпуска-l');
  this.route('i-i-s-probka-графики-отпуска-e',
  { path: 'i-i-s-probka-графики-отпуска-e/:id' });
  this.route('i-i-s-probka-графики-отпуска-e.new',
  { path: 'i-i-s-probka-графики-отпуска-e/new' });
  this.route('i-i-s-probka-должности-l');
  this.route('i-i-s-probka-должности-e',
  { path: 'i-i-s-probka-должности-e/:id' });
  this.route('i-i-s-probka-должности-e.new',
  { path: 'i-i-s-probka-должности-e/new' });
  this.route('i-i-s-probka-отделы-l');
  this.route('i-i-s-probka-отделы-e',
  { path: 'i-i-s-probka-отделы-e/:id' });
  this.route('i-i-s-probka-отделы-e.new',
  { path: 'i-i-s-probka-отделы-e/new' });
  this.route('i-i-s-probka-расчетный-лист-l');
  this.route('i-i-s-probka-расчетный-лист-e',
  { path: 'i-i-s-probka-расчетный-лист-e/:id' });
  this.route('i-i-s-probka-расчетный-лист-e.new',
  { path: 'i-i-s-probka-расчетный-лист-e/new' });
  this.route('i-i-s-probka-согласие-на-опд-l');
  this.route('i-i-s-probka-согласие-на-опд-e',
  { path: 'i-i-s-probka-согласие-на-опд-e/:id' });
  this.route('i-i-s-probka-согласие-на-опд-e.new',
  { path: 'i-i-s-probka-согласие-на-опд-e/new' });
  this.route('i-i-s-probka-сотрудники-l');
  this.route('i-i-s-probka-сотрудники-e',
  { path: 'i-i-s-probka-сотрудники-e/:id' });
  this.route('i-i-s-probka-сотрудники-e.new',
  { path: 'i-i-s-probka-сотрудники-e/new' });
});

export default Router;
