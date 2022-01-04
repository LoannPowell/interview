test('sum without parameters has to be 0',()=>{
    function sum(firstParameter){
        let total=0
        function validator(arg)
        {
            return arg(total)
        }
        return validator(firstParameter)
    }
    expect(sum(result=>result)).toBe(0)
})

test('sum with just 1 as parameter has to be 1',()=>{
    function sum(firstParameter){
        let total=0
        function validator(arg)
        {
            if(typeof arg==="function"){
                return arg(total)
            }
            else{
                total+=arg
                return validator
            }
            
        }
        return validator(firstParameter)
    }
    expect(sum(1)(result=>result)).toBe(1)
})
test('sum 1+2, must be 3',()=>{
    function sum(firstParameter){
        let total=0
        function validator(arg)
        {
            if(typeof arg==="function"){
                return arg(total)
            }
            else{
                total+=arg
                return validator
            }
            
        }
        return validator(firstParameter)
    }
    expect(sum(1)(2)(result=>result)).toBe(3)
})
test('sum 1+2+4, must be 7',()=>{
    function sum(firstParameter){
        let total=0
        function validator(arg)
        {
            if(typeof arg==="function"){
                return arg(total)
            }
            else{
                total+=arg
                return validator
            }
            
        }
        return validator(firstParameter)
    }
    expect(sum(1)(2)(4)(result=>result)).toBe(7)
})
test('infinite sum in this case 1+2+3+4+5+6, must be 21',()=>{
    function sum(firstParameter){
        let total=0
        function validator(arg)
        {
            if(typeof arg==="function"){
                return arg(total)
            }
            else{
                total+=arg
                return validator
            }
            
        }
        return validator(firstParameter)
    }
    expect(sum(1)(2)(3)(4)(5)(6)(result=>result)).toBe(21)
})

//Just in case we need to take care of more validations, like numbers or nulls.

test('arguments that are no numbers throw error',()=>{
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
      expect(()=>sum(1)(2)('Team international')(result=>result)).toThrow(TypeError)
      expect(()=>sum(1)(2)()(result=>result)).toThrow(TypeError)
})