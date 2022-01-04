function extractValuesForKey(object,searchKey){
    let resultMap=new Map()
    function checkDeep(obj,path){
        for(var key in obj){
            if(key===searchKey){
                resultMap.set(path,obj[key])
            }
            if(typeof obj[key] === "object") {
                let newPath=path ? path+"/"+key:key
                checkDeep(obj[key], newPath);
            }
        }
    }
    checkDeep(object,path="")
    return resultMap
}
function sum(initialParameter) {
    let total = 0;  
    function validator (arg) {
      if (typeof arg === "function") {
          return arg(total);
      } else if (typeof arg === 'number') {
          total += arg;  
          return validator;
      }  else {
          throw new TypeError('Invalid argument. Must be a number or function');
      }
  }  
  return validator(initialParameter);
  }
sum(result=>console.log("-> ", result))
sum(1)(result=>console.log("-> ", result))
sum(1)(2)(result=> console.log("-> ", result))
sum(1)(2)(4)(result=>console.log("-> ", result))
sum(1)(2)(3)(4)(5)(6)(result=>console.log("-> ", result))

//Extract key values function
const someObject= {
    uuid:1,
    innerOne:{
        someKey:"some text"
    },
    innerTwo:{
        uuid:2,
        innerThree:{
            someOtherKey: "some other text",
            innerFour:{
                uuid:3
            }
        }
    }

}
function extractValuesForKey(object,searchKey){
    let resultMap=new Map()
    function checkDeep(obj,path){
        for(var key in obj){
            if(key===searchKey){
                resultMap.set(path,obj[key])
            }
            if(typeof obj[key] === "object") {
                let newPath=path ? path+"/"+key:key
                checkDeep(obj[key], newPath);
            }
        }
    }
    checkDeep(object,path="")
    return resultMap
}
const result= extractValuesForKey(someObject, "uuid")
const result2= extractValuesForKey({someObject:someObject}, "uuid")