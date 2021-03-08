function checkCashRegister(price, cash, cid) {
    // coins included as bills
    const bills = {
      'PENNY' : .01,
      'NICKEL' : .05,
      'DIME' : .1,
      'QUARTER' : 0.25,
      'ONE' : 1,
      'FIVE' : 5,
      'TEN' : 10,
      'TWENTY' : 20,
      'ONE HUNDRED' : 100
    }
    const changeDue = cash - price;
    const drawerTotal = cid.reduce((a, b) => a + b[1], 0);
  
    // find index of the first bill that is greater than change due
    // and is present in change drawer.
    // then start giving change from previous bill
    let index = Object.values(bills).findIndex((value, i) => {
      return value > changeDue && cid[i][1] !== 0;
    }) - 1;
    if (index < 0) index = 0;
  
    let change = {};
    let changeTotal = 0;
    for (let i = index; i >= 0; i--) {
      const bill = Object.keys(bills)[i];
      const billValue = bills[bill];
      let drawerBillTotal = cid[i][1];
  
        // while change is less than change due and bill exists in change drawer: 
        // add current bill value to change
        // subtract bill value from amount in change drawer
        // record in change object
      while ( +(changeTotal + billValue).toFixed(2) <= changeDue &&     drawerBillTotal > 0 ) 
      {
        changeTotal = +(changeTotal + billValue).toFixed(2);
        drawerBillTotal -= billValue;
        change[bill] ? change[bill] = +(change[bill] + billValue).toFixed(2) : 
                        change[bill] = +(billValue.toFixed(2));
      }
    }
  
    const result = {};
    if (changeTotal < changeDue || drawerTotal < changeDue) {
      result.status = 'INSUFFICIENT_FUNDS';
      result.change = [];
    }
    else if (changeTotal === drawerTotal) {
      result.status = 'CLOSED';
      result.change = cid;
    }
    else {
      result.status = 'OPEN';
      result.change = Object.entries(change);
    }
    return result;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);