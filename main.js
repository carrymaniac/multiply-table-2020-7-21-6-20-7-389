function createMultiplyTable(start, end) {
  return isVail?generateMultiplyAllLine(start, end) : "null";
}

function isVail(start, end){
    return (start<end)&&(start>0&&start<=1000)&&(end>0&&end<=100);
}

function generateMultiplyAllLine(start, end){
   const result = new Array();
   for(let i = start; i<=end; i++){
      result.push(generateMultiplyOneLine(start,i));
   }
   return connectMultiplyOneLine(result);
}

function generateMultiplyOneLine(lineStart,lineEnd){
    let str = "";
    for(let i = lineStart; i<=lineEnd; i++){
        str += ""+i+"*"+lineEnd+"="+(i*lineEnd);
        str += "\t"
    }
    str = str.substring(0,str.length-1);
    return str;
}

function connectMultiplyOneLine(resultArr){
    return resultArr.join("\n");
}

module.exports = {
  createMultiplyTable,
};
