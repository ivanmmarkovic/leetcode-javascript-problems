/*
https://leetcode.com/problems/sleep/

Easy

Given a positive integer millis, 
write an asynchronous function that sleeps for millis milliseconds. 
It can resolve any value.

Runtime 51 ms Beats 92.41%
Memory 41.6 MB Beats 62.89%
*/


/**
 * @param {number} millis
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
