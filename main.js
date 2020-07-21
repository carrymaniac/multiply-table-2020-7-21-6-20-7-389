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
    let strArray = new Array();
    for(let i = lineStart; i<=lineEnd; i++){
        let str = ""+i+"*"+lineEnd+"="+(i*lineEnd);
        strArray.push(str);
    }
    return strArray.join ("\t");
}

function connectMultiplyOneLine(resultArr){
    return resultArr.join("\n");
}

module.exports = {
  createMultiplyTable,
};
