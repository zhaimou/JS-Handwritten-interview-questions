const ajax = (method, url, data, success, fail) => {
    var request = new XMLHttpRequest()
    request.open(method, url);
    request.onreadystatechange = function () {
    if(request.readyState === 4) {
    if(request.status >= 200 && request.status < 300 || request.status === 304) {
    success(request)
    }else{
    fail(request)
    }
    }
    };
    request.send();
    }
    