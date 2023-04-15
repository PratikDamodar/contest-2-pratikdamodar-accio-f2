  let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  
  function PrintStudentswithMap() {
    //Write your code here
    arr.map(printingThroghMap); // Each element is stored in "printingThroghMap" variable
  
    function printingThroghMap(arrayItem) {
      if (arrayItem.profession === "developer") {
        console.log(arrayItem);
      }
    }
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here
    arr.forEach(printingThroghForEach); // Each element is stored in "printingThroghForEach" variable
  
    function printingThroghForEach(arrayItem) {
      if (arrayItem.profession === "developer") {
        console.log(arrayItem);
      }
    }
  }
  
  function addData() {
    //Write your code here
    let newObj = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newObj);
    console.log(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here
    let filtered_arr = arr.filter(function (val) {
      //callback function
      if (val.profession !== "admin") {
        //filtering criteria
        return val;
      }
    });
    console.log(filtered_arr);
  }
  
  function concatenateArray() {
    //Write your code here
    let arr2 = [
      { id: 5, name: "swapnilC", age: "30", profession: "PROgrammer" },
      { id: 6, name: "akshayG", age: "28", profession: "developer" },
      { id: 7, name: "vidhiJ", age: "21", profession: "Manager" },
    ];
  
    let concatArray = arr.concat(arr2);
    console.log(concatArray);
  }