/**
 * @param {number} millis
 */


/*
Runtime 51 ms Beats 92.41%
Memory 41.6 MB Beats 62.89%
*/
async function sleep(millis) {
    
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
          resolve(1);
       },millis);
   })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
