function calculateYears(principalSum, interestRate, taxRate, desiredSum) {

    let years = 0;
  
  if (principalSum === desiredSum){
    return 0;
  }
  
    while (principalSum < desiredSum){
      let interestAccrued = principalSum * interestRate;
      let taxTotal = interestAccrued * taxRate;

      principalSum += interestAccrued - taxTotal
      years++;
    }
  
  return years;
  
}