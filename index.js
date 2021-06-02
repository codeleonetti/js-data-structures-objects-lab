// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(drivers, key, value) {
    
    return Object.assign({}, drivers, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;

    return driver;
}

function deleteFromDriverByKey(driver, key){
    const newObj = Object.assign({}, driver)
    delete newObj[key];
    return newObj;

}

function destructivelyDeleteFromDriverByKey(driver, key){
    Object.assign({}, driver)
    delete driver[key]
    return driver;
}

// function drivers(){
// const driver = {
//     name: 'name',
//     address: 'address'
// };

// const updateDriverWithKeyAndValue = Object.assign(driver, name, address)

// }








// object.assign()
//  const course = {
//      name: 'Web Programming'
//  };

//  const grade = {
//      score: 92
//  };

//  const finalResult = Odject.assign(course, grade);
//  console.log(finalResult)


 //making a function