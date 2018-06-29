//这是一个全局过滤器的例子
var filters = {
  //修改键名成得过滤器
  keyChange: function (val, oldKey, newKey) {
    if (val === [] || val === {}) {
      return val;
    } else {
      let tempString = JSON.stringify(val);
      let flag = true;
      while (flag) {
        let temp = tempString;
        tempString = tempString.replace(oldKey, newKey);
        if (temp === tempString) {
          flag = false;
        }
      }
      return JSON.parse(tempString);
    }
  }
};

export default filters
