function my$(id) {
  return document.getElementById(id);
}

//设置任意元素的中间的文本内容
function setInnnerText(element, text) {
  if (typeof element.textContent == "undefined") {
    element.innerText = text;
  } else {
    element.textContent = text;
  }
}

//获取任意元素的中间的文本内容
function getInnerText(element) {
  if (typeof element.textContent == "undefined") {
    return element.innerText;
  } else {
    return element.textContent;
  }
}

//获取任意一个父级元素的第一个子级元素
function getFirstElementChild(element) {
  if (typeof element.firstElementChild == "undefined") {
    return element.firstElementChild;
  } else {
    var node = element.firstChild;
    while (node && node.nodeType != 1) {
      // nextNode = node.nextSibling 下一个兄弟姐妹
      node = node.nextSibling;
    }
    return node;
  }
}

// 获取任意一个父级元素的最后一个子级元素
function getLastElementChild(element) {
  if (typeof element.lastElementChild == "undefined") {
    return element.lastElementChild;
  } else {
    var node = element.lastChild;
    while (node && node.nodeType != 1) {
      //previousNode = node.previousSibling  前一个兄弟姐妹
      node = node.previousSibling;
    }
    return node;
  }
}

//为任意元素.绑定任意的事件, 任意的元素,事件的类型,事件处理函数
function addEventListener(element, type, fn) {
  //判断浏览器是否支持这个方法
  if (element.addEventListener) {
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, fn);
  } else {
    element["on" + type] = fn;
  }
}