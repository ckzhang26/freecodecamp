function addTogether() {
    const args = [...arguments];
    if (args.some(arg => typeof arg !== 'number')) {
      return undefined;
    }
   if (args.length > 1) return args[0] + args[1];
   return function(x) {
     return addTogether(args[0], x);
   }
 }
 
 addTogether(2,3);