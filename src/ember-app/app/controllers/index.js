import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.документы.caption'),
          title: i18n.t('forms.application.sitemap.документы.title'),
          children: [{
            link: 'i-i-s-probka-графики-отпуска-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-probka-графики-отпуска-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-probka-графики-отпуска-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-probka-должности-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-probka-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-probka-должности-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-probka-согласие-на-опд-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-probka-согласие-на-опд-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-probka-согласие-на-опд-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-probka-расчетный-лист-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-probka-расчетный-лист-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-probka-расчетный-лист-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-probka-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-probka-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-probka-сотрудники-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-probka-отделы-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-probka-отделы-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-probka-отделы-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})