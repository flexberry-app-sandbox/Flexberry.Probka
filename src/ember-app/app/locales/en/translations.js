import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProbkaГрафикиОтпускаLForm from './forms/i-i-s-probka-графики-отпуска-l';
import IISProbkaДолжностиLForm from './forms/i-i-s-probka-должности-l';
import IISProbkaОтделыLForm from './forms/i-i-s-probka-отделы-l';
import IISProbkaРасчетныйЛистLForm from './forms/i-i-s-probka-расчетный-лист-l';
import IISProbkaСогласиеНаОпдLForm from './forms/i-i-s-probka-согласие-на-опд-l';
import IISProbkaСотрудникиLForm from './forms/i-i-s-probka-сотрудники-l';
import IISProbkaГрафикиОтпускаEForm from './forms/i-i-s-probka-графики-отпуска-e';
import IISProbkaДолжностиEForm from './forms/i-i-s-probka-должности-e';
import IISProbkaОтделыEForm from './forms/i-i-s-probka-отделы-e';
import IISProbkaРасчетныйЛистEForm from './forms/i-i-s-probka-расчетный-лист-e';
import IISProbkaСогласиеНаОпдEForm from './forms/i-i-s-probka-согласие-на-опд-e';
import IISProbkaСотрудникиEForm from './forms/i-i-s-probka-сотрудники-e';
import IISProbkaГрафикиОтпускаModel from './models/i-i-s-probka-графики-отпуска';
import IISProbkaДолжностиModel from './models/i-i-s-probka-должности';
import IISProbkaОтделыModel from './models/i-i-s-probka-отделы';
import IISProbkaРасчетныйЛистModel from './models/i-i-s-probka-расчетный-лист';
import IISProbkaСогласиеНаОпдModel from './models/i-i-s-probka-согласие-на-опд';
import IISProbkaСоставРасчетаModel from './models/i-i-s-probka-состав-расчета';
import IISProbkaСотрудникиModel from './models/i-i-s-probka-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probka-графики-отпуска': IISProbkaГрафикиОтпускаModel,
    'i-i-s-probka-должности': IISProbkaДолжностиModel,
    'i-i-s-probka-отделы': IISProbkaОтделыModel,
    'i-i-s-probka-расчетный-лист': IISProbkaРасчетныйЛистModel,
    'i-i-s-probka-согласие-на-опд': IISProbkaСогласиеНаОпдModel,
    'i-i-s-probka-состав-расчета': IISProbkaСоставРасчетаModel,
    'i-i-s-probka-сотрудники': IISProbkaСотрудникиModel
  },

  'application-name': 'КЭДО',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'КЭДО',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'КЭДО',
          title: 'КЭДО'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-probka-графики-отпуска-l': {
            caption: 'Графики отпуска',
            title: ''
          },
          'i-i-s-probka-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-probka-согласие-на-опд-l': {
            caption: 'Согласие на опд',
            title: ''
          },
          'i-i-s-probka-расчетный-лист-l': {
            caption: 'Расчетный лист',
            title: ''
          },
          'i-i-s-probka-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-probka-отделы-l': {
            caption: 'Отделы',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-probka-графики-отпуска-l': IISProbkaГрафикиОтпускаLForm,
    'i-i-s-probka-должности-l': IISProbkaДолжностиLForm,
    'i-i-s-probka-отделы-l': IISProbkaОтделыLForm,
    'i-i-s-probka-расчетный-лист-l': IISProbkaРасчетныйЛистLForm,
    'i-i-s-probka-согласие-на-опд-l': IISProbkaСогласиеНаОпдLForm,
    'i-i-s-probka-сотрудники-l': IISProbkaСотрудникиLForm,
    'i-i-s-probka-графики-отпуска-e': IISProbkaГрафикиОтпускаEForm,
    'i-i-s-probka-должности-e': IISProbkaДолжностиEForm,
    'i-i-s-probka-отделы-e': IISProbkaОтделыEForm,
    'i-i-s-probka-расчетный-лист-e': IISProbkaРасчетныйЛистEForm,
    'i-i-s-probka-согласие-на-опд-e': IISProbkaСогласиеНаОпдEForm,
    'i-i-s-probka-сотрудники-e': IISProbkaСотрудникиEForm
  },

});

export default translations;
