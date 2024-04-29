var a = 1
this.a = 3
var obj = {
	a: 2,
	fn: function () {
		console.log(this)
		console.log(this.a)
	}
}
obj.fn() 
/*  
{ a: 2, fn: [Function: fn] }
2
*/

var fn = obj.fn
fn()
/* 
宿主对象(globalThis:window｜global)
undefined
*/