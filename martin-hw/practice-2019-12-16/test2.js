/* TEST NUMBER 2 */

myRow = input =>{
    let firstDigit = input * (input-1);
    let finalResult = 0;
    let count = 0;
    while(count < input){
        if(firstDigit % 2 !== 0){
            finalResult += firstDigit;
            count++;
        }
    firstDigit++;
    }
    console.log(finalResult);
}
myRow(5);

