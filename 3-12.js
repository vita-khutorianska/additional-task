function countProps(object) {
    let propCount = 0;
    const arr = [];
  // Пиши код ниже этой строки
for (const key in object){
    if (object.hasOwnProperty(key)) {
        arr.push(object[key]);
        propCount = arr.length;
    
}}
  // Пиши выше ниже этой строки
   
  return propCount;
}
countProps({ name: 'Mango', age: 2 })