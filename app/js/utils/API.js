'use strict';

import {camelizeKeys} from 'humps';
import request        from 'superagent';

var API = {

  root: '//localhost:4000/api/',

  normalizeResponse(response) {
    return camelizeKeys(response.body);
  },

  authenticate(path, username, password) {
    var self = this;
    return new Promise((resolve, reject) => {
      request.post(this.root + path)
      .auth(username, password)
      .end(function(err, res) {
        if (!res.ok) {
          reject(self.normalizeResponse(res));
        } else {
          resolve(self.normalizeResponse(res));
        }
      });
    });
  },

  get(path) {
    var self = this;
    return new Promise((resolve, reject) => {
      request.get(this.root + path)
      .end(function(err, res) {
        if (!res.ok) {
          reject(self.normalizeResponse(res));
        } else {
          resolve(self.normalizeResponse(res));
        }
      });
    });
  },

  post(path, body) {
    var self = this;
    return new Promise((resolve, reject) => {
      request.post(this.root + path, body)
      .end(function(err, res) {
        if (!res.ok) {
          reject(self.normalizeResponse(res));
        } else {
          resolve(self.normalizeResponse(res));
        }
      });
    });
  },

  patch(path, body) {
    var self = this;
    return new Promise((resolve, reject) => {
      request.patch(this.root + path, body)
      .end(function(err, res) {
        if (!res.ok) {
          reject(self.normalizeResponse(res));
        } else {
          resolve(self.normalizeResponse(res));
        }
      });
    });
  },

  put(path, body) {
    var self = this;
    return new Promise((resolve, reject) => {
      request.put(this.root + path, body)
      .end(function(err, res) {
        if (!res.ok) {
          reject(self.normalizeResponse(res));
        } else {
          resolve(self.normalizeResponse(res));
        }
      });
    });
  },

  del(path) {
    var self = this;
    return new Promise((resolve, reject) => {
      request.del(this.root + path)
      .end(function(err, res) {
        if (!res.ok) {
          reject(self.normalizeResponse(res));
        } else {
          resolve(self.normalizeResponse(res));
        }
      });
    });
  }

};

export default API;