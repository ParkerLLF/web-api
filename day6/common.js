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

//获取任意元素的中间的文本内容
function setInnerText(element, text) {
  if (typeof element.textContent == "undefined") {
    element.innerText = text;
  } else {
    element.textContent = text;
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

//匀速动画
//设置任意一个元素，移动到指定的目标位置
function animate(element, target) {
  //先清理定时器
  clearInterval(element.timer);
  //定时器的id值存储在对象的一个属性中
  element.timer = setInterval(function () {
    //获取元素的当前位置
    var current = element.offsetLeft;
    //每次移动的步数
    var step = 10;
    step = current < target ? step : -step;
    //
    current += step;
    if (Math.abs(current - target) > Math.abs(step)) {
      element.style.left = current + "px";
    } else {
      clearInterval(element.timer);
      //直接到达目标
      element.style.left = target + "px";
    }
  }, 20);
}

//变速动画
function animateSpeed(element, target) {
  //清理定时器
  clearInterval(element.timer)
  element.timer = setInterval(function () {
    //获取元素的当前位置
    var current = element.offsetLeft;
    // 移动的步数
    //目标位置减去当前位置 整体除以10  以实现变速
    //(target-current)/10
    var step = (target - current) / 10;

    step = step > 0 ? Math.ceil(step) : Math.floor(step)

    current += step;
    element.style.left = current + "px"
    if (current == target) {
      //清理定时器
      clearInterval(element.timer)
    }
    //测试代码：
    console.log("目标位置" + target + ",当前位置" + current + ",每次移动的步数" + step)
  }, 20)
}