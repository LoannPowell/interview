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

test('passing the predeterminate object and key returns ""=>1, "innerTwo"=>2, "innerTwo/innerThree/innerFour=>3"',()=>{
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
    const results=new Map([["",1],["innerTwo",2],["innerTwo/innerThree/innerFour",3]])       
    expect(extractValuesForKey(someObject,'uuid')).toMatchObject(results)
})

test('modifying the path passing the object inside another object and has to return "someObject"=>1, "someObject/innerTwo"=>2, "someObject/innerTwo/innerThree/innerFour=>3"',()=>{
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
    const results=new Map([["someObject",1],["someObject/innerTwo",2],["someObject/innerTwo/innerThree/innerFour",3]])       
    expect(extractValuesForKey({someObject:someObject},'uuid')).toMatchObject(results)
})

test('without key, object or both has to return an empty map',()=>{
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
    const results=new Map()       
    expect(extractValuesForKey({someObject:someObject})).toMatchObject(results)
    expect(extractValuesForKey("","")).toMatchObject(results)
    expect(extractValuesForKey()).toMatchObject(results)
    
})
test('is a parent name object has the same child object both has be showed "someObject/someObject"=>1, "someObject/someObject/innerTwo"=>2, "someObject/someObject/innerTwo/innerThree/innerFour=>3"',()=>{
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
    const results=new Map([["someObject/someObject",1],["someObject/someObject/innerTwo",2],["someObject/someObject/innerTwo/innerThree/innerFour",3]])       
    expect(extractValuesForKey({someObject:{someObject:someObject}},'uuid')).toMatchObject(results)
})
