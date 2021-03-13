module.exports = function check(str, bracketsConfig) {
  
    let newArray = [];

    for(let i = 0; i < bracketsConfig.length; i++){
        newArray.push(bracketsConfig[i].join(''));
    }

     // Объявляем функцию, которая будет последовательность из newArray вырезать 

    function cutter(string){
        let cutStr = string;
        for ( let i = 0; i<newArray.length; i++){
            cutStr = cutStr.replace(newArray[i], "");
        }
        return string === cutStr ? cutStr : cutter(cutStr); // Создаем рекурсию пока  последовательность существует 
    }

    const result = cutter(str); // Вызов рекурсивной функции и записываем ее вывод в переменную result
  
    //Сравниваем  результат функции cutter, пустой ли он?
 
   return result === "" ? true : false;
}
