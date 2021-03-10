module.exports = function(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++)
  {
      if (min > arr[i])
      {
          min = arr[i];
      }
  }
  return min;
}
