document.write("<h2>Hello,JavaScriptWorld!</h2>");
document.write("<h2>你好</h2>");


const peachBlossom = '桃花坞里桃花庵，\
桃花庵下桃花仙；\
桃花仙人种桃树，\
又摘桃花卖酒钱。';

console.log(peachBlossom);

// match方法返回匹配的字符串，以数组的形式返回。没有找到匹配字符，则返回null。
const str = "植树节：03月12日；劳动节：5月1日；儿童节：6月1日"
const dateRegular = /((?:(?:0[1-9])|(?:1[0-2]))月(?:(?:[0-2][1-9])|(?:[1-3][0-1]))日/g;
const index = str.search(dateRegular)
if (index === -1) {
  console.log("不包含该字符串")
} else {
  console.log("包含该字符串，下标索引是", index)
}

