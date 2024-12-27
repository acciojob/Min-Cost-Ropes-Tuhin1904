function mincost(arr)
{ 
//write your code here
// return the min cost
if(arr.length <= 1){
	return 0;
}
	let totalcost = 0;

	while (arr.length > 1) {
		// console.log("Array in every stage: ",arr)
		arr.sort((a,b) => a-b);

		const rope1 = arr.shift();
		const rope2 = arr.shift();

		const cost = rope1 + rope2;
		totalcost += cost;

		arr.push(cost)
		
	}
  return totalcost;
}

module.exports=mincost;
