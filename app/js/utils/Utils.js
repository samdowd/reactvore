// import reqwest from 'reqwest';

// class Utils {
//   constructor() {
    
//   }
  
//   _request(method, path, data, filters = '') {
//     Settings.crudfilters = filters;
//     var headers = Settings._getHeaders();
//     Settings.crudfilters = '';

//     return reqwest({
//       url: Settings.url + path,
//       method: method,
//       type: 'json',
//       data: data,
//       headers: headers
//     });
//   }

//   _requestBasic(path, username, password) {
//     return reqwest({
//       url: Settings.url + path,
//       method: 'POST',
//       type: 'json',
//       headers: {
//         "Authorization": "Basic " + btoa(username + ":" + password)
//       }
//     })
//   }
// }

// export default Utils;