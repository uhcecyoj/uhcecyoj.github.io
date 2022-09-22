node_api = 'http://localhost:8060/';
java_api = 'http://localhost:8070/';

API_getRedisInfo = node_api + 'getRedisInfo';
fetch(API_getRedisInfo)
  .then(response => response.json())
  .then(data => {
    document.getElementById('id_h1').innerHTML = data;
  });
