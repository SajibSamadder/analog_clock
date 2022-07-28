var number = 20809217620725;
var num_parts = number.toString().split(".")
num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
console.log(num_parts[0])