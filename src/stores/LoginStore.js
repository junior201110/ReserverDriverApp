import EventEmitter from 'events';
import dispatcher from './../dispatcher/Dispatcher';
export const EVENT_CHANGE               = 'user-change';
export const EVENT_EMAIL_RESULT_RECIVED = 'user-email-not-valid';
export const EVENT_AUTH_ERROR           = 'user-auth-failure';
export const EVENT_LOGOUT               = 'user-make-logout';
export const EVENT_UPDATE_VIEW          = 'user-make-update';

