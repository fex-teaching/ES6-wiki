

export default function ajax(options) {
  const xhr = new XMLHttpRequest();

  const { method, success, error } = options;
  let url = options.url;
  let params = options.params;

  console.log('0000')
  xhr.onreadystatechange = function () {
    // readyState为4的时候已接收完毕
    if (xhr.readyState === 4) {
      // 状态码200表示成功
      if (xhr.status === 200) {
        success.call(this, JSON.parse(xhr.responseText));
      } else {
        console.log(xhr.status);
        error.call(this, xhr.status)
      }
    }
  };

  xhr.onerror = (err) => {
    throw error(err)
  }

  // get 请求
  if (method === 'get' || method === 'GET') {
    if (typeof params === 'object') {
      // params拆解成字符串
      params = Object.keys(params).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');
    }
    url = params ? `${url}?${params}` : url;
    xhr.open(method, url, true);
    xhr.send();
  }

  // post 请求
  if (method === 'post' || method === 'POST') {
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(params));
  }
}

