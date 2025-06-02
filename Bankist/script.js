"use strict";

// BANKIST APP

// Data
const account1 = {
  owner: "Cristiano Ronaldo",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 7777,
  movementsDates: [
    "2023-10-05T10:12:45.000Z",
    "2023-11-15T09:30:00.000Z",
    "2023-12-20T08:22:10.000Z",
    "2024-01-22T11:05:30.000Z",
    "2025-02-10T14:15:00.000Z",
    "2025-05-20T13:45:50.000Z",
    "2025-05-26T16:50:00.000Z",
    "2025-05-29T19:30:15.000Z",
  ],
  movementInfo: [
    "⬆ Deposit into account",
    "⬆ Deposit into account",
    "⬇ Withdrew from account",
    "⬆ Deposit into account",
    "⬇ Withdrew from account",
    "⬇ Withdrew from account",
    "⬆ Deposit into account",
    "⬆ Deposit into account",
  ],
  country: "portugal",
  currency: "EUR",
  locale: "pt-PT",
};

const account2 = {
  owner: "Peter Parker",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 1111,
  movementsDates: [
    "2023-11-03T04:00:00.000Z",
    "2023-11-27T06:30:00.000Z",
    "2023-12-23T08:00:00.000Z",
    "2024-01-23T09:30:00.000Z",
    "2025-02-07T10:00:00.000Z",
    "2025-05-23T13:00:00.000Z",
    "2025-05-27T16:30:00.000Z",
    "2025-05-28T21:45:00.000Z",
  ],
  movementInfo: [
    "⬆ Deposit into account",
    "⬆ Deposit into account",
    "⬇ Withdrew from account",
    "⬇ Withdrew from account",
    "⬇ Withdrew from account",
    "⬇ Withdrew from account",
    "⬆ Deposit into account",
    "⬇ Withdrew from account",
  ],
  country: "usa",
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Walter White",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 2222,
  movementsDates: [
    "2023-10-31T23:59:00.000Z",
    "2023-11-29T01:00:00.000Z",
    "2023-12-26T05:00:00.000Z",
    "2024-01-26T07:00:00.000Z",
    "2025-02-04T09:00:00.000Z",
    "2025-05-22T11:00:00.000Z",
    "2025-05-27T15:00:00.000Z",
    "2025-05-28T19:00:00.000Z",
  ],
  movementInfo: [
    "⬆ Deposit into account",
    "⬇ Withdrew from account",
    "⬆ Deposit into account",
    "⬇ Withdrew from account",
    "⬇ Withdrew from account",
    "⬆ Deposit into account",
    "⬆ Deposit into account",
    "⬇ Withdrew from account",
  ],
  country: "usa",
  currency: "USD",
  locale: "en-US",
};

const account4 = {
  owner: "Jessie Pinkman",
  movements: [430, 1000, 700, 50, 90, -150, 300, -70],
  interestRate: 1,
  pin: 3333,
  movementsDates: [
    "2023-08-25T06:45:00.000Z",
    "2023-10-01T10:10:10.000Z",
    "2023-12-15T09:25:00.000Z",
    "2024-01-20T12:00:00.000Z",
    "2025-02-08T13:35:00.000Z",
    "2025-05-23T11:00:00.000Z",
    "2025-05-26T16:00:00.000Z",
    "2025-05-28T21:00:00.000Z",
  ],
  movementInfo: [
    "⬆ Deposit into account",
    "⬆ Deposit into account",
    "⬆ Deposit into account",
    "⬆ Deposit into account",
    "⬆ Deposit into account",
    "⬇ Withdrew from account",
    "⬆ Deposit into account",
    "⬇ Withdrew from account",
  ],
  country: "usa",
  currency: "USD",
  locale: "en-US",
};

const account5 = {
  owner: "Brad Pitt",
  movements: [420, 100, -5000, 4700, -12, 5050, 9, 130, -200, 7000],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    "2023-09-01T07:00:00.000Z",
    "2023-10-10T12:00:00.000Z",
    "2023-12-05T15:15:15.000Z",
    "2024-05-27T17:45:00.000Z",
    "2024-01-10T10:30:30.000Z",
    "2025-02-12T08:00:00.000Z",
    "2025-05-21T14:00:00.000Z",
    "2025-05-24T17:45:00.000Z",
    "2025-05-27T17:45:00.000Z",
    "2025-05-28T20:20:20.000Z",
  ],
  movementInfo: [
    "⬆ Deposit into account",
    "⬆ Deposit into account",
    "⬇ Withdrew from account",
    "⬆ Deposit into account",
    "⬇ Withdrew from account",
    "⬆ Deposit into account",
    "⬆ Deposit into account",
    "⬆ Deposit into account",
    "⬇ Withdrew from account",
    "⬆ Deposit into account",
  ],
  country: "usa",
  currency: "USD",
  locale: "en-US",
};

const account6 = {
  owner: "Garvit Chainani",
  movements: [999, -100, -700, 5000, 900, -3000, -2200, 5000, 150],
  interestRate: 1,
  pin: 9999,
  movementsDates: [
    "2023-10-05T10:12:45.000Z",
    "2023-11-15T09:30:00.000Z",
    "2023-12-20T08:22:10.000Z",
    "2024-01-22T11:05:30.000Z",
    "2025-02-10T14:15:00.000Z",
    "2025-05-20T13:45:50.000Z",
    "2025-05-26T16:50:00.000Z",
    "2025-05-28T19:30:15.000Z",
    "2025-05-30T12:00:00.000Z",
  ],

  movementInfo: [
    "⬆ Deposit into account",
    "⬇ Withdrew from account",
    "⬇ Withdrew from account",
    "⬆ Deposit into account",
    "⬆ Deposit into account",
    "⬇ Withdrew from account",
    "⬇ Withdrew from account",
    "⬆ Deposit into account",
    "⬆ Deposit into account",
  ],
  country: "india",
  currency: "INR",
  locale: "en-IN",
};

const accounts = [account1, account2, account3, account4, account5, account6];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const movInfo = document.querySelector(".movements__info");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////creates username out of Account owners name //////////////////
function createUserName(account) {
  account.forEach((acc) => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((nam) => {
        return nam[0];
      })
      .join("");
  });
}
createUserName(accounts);

//////////////////updates ui func////////////////////////////
function updateUI(currAcc) {
  displayMovements(currAcc);
  balanceAmt(currAcc);
  calcDisplaySummary(currAcc);
  sorted = false;
}

/////////////////////login function///////////////////////////
let currAcc;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputLoginUsername.value === "") {
    window.alert(`Please Enter The Username`);
    return;
  }

  currAcc = accounts.find((acc) => acc.userName === inputLoginUsername.value);

  if (!currAcc) {
    window.alert(`❗ account not texist`);
  } else if (currAcc?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = "1";
    document.querySelector("#bg").style.opacity = "0";
    document.querySelector(".bankist").style.opacity = "0";
    document.querySelector(".logtin-bankist").style.opacity = "1";
    labelWelcome.textContent = `Welcome ${currAcc.owner.split(" ")[0]}`;

    document.querySelectorAll("input").forEach((input) => (input.value = ""));
    inputLoginPin.blur();

    /// other func calling in login ///
    updateUI(currAcc);
    setInterval(displayDate, 5000);
    labelTimer.textContent = "5:00";
    logOutTimer();
    displayDate();
    //------------------------//
  } else {
    window.alert(`❗WRONG PIN`);
  }
});

/////////////////////movmentDate///////////////////////
function displayMovementsDate(date) {
  const calcDaysPassed = (date1, date2) => {
    return Math.abs(+date2 - date1) / (1000 * 60 * 60 * 24);
  };
  const daysPassed = Math.round(calcDaysPassed(new Date(), date));

  if (daysPassed === 0) {
    return "Today";
  } else if (daysPassed === 1) {
    return "Yesterday";
  } else if (daysPassed <= 7) {
    return `${daysPassed} days ago`;
  } else {
    const option = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    return new Intl.DateTimeFormat(currAcc.locale, option).format(date);
  }
}

///////////////////intl CURRENCY formation/////////////////////
function currency(mov) {
  const option = {
    style: "currency",
    currency: currAcc.currency,
  };
  return new Intl.NumberFormat(currAcc.locale, option).format(mov);
}

//////////////display movemnets array///////////////////
function displayMovements(acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort // sorting //
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach((mov, i) => {
    const date = new Date(acc.movementsDates[i]);
    const displayDate = displayMovementsDate(date);

    const formattedCurrency = currency(mov);

    const infoOfMov = acc.movementInfo[i];
    containerMovements.insertAdjacentHTML(
      "afterbegin",
      `<div class="movements__row">
          <div class="movements__type movements__type--${
            mov > 0 ? "deposit" : "withdrawal"
          }">${i + 1} ${mov > 0 ? "deposit" : "withdrew"}</div>
          <div class="movements__date">${displayDate}</div>
           <div class="movements__info">${infoOfMov}</div>
          <div class="movements__value">${formattedCurrency}</div>
        </div>`
    );
  });
  [...document.querySelectorAll(".movements__row")].forEach((mov, i) => {
    if (i % 2 === 0) mov.style.backgroundColor = "rgb(243 251 255 / 50%)";
  });
}

////////////////Sort mov by btn/////////////////////
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  displayMovements(currAcc, !sorted);
  sorted = !sorted;
});

///////////calc and dissplay balance////////////////
function balanceAmt(account) {
  account.balance = account.movements.reduce(
    (acc, currMov) => (acc += currMov)
  );

  labelBalance.textContent = currency(account.balance);
}

///////////calc display summary////////////////
//-------income-------//
function calcDisplaySummary(account) {
  labelSumIn.textContent = currency(
    account.movements
      .filter((mov) => {
        return mov > 0;
      })
      .reduce((acc, mov) => {
        return (acc += mov);
      }, 0)
  );

  //-------out--------//
  labelSumOut.textContent = currency(
    Math.abs(
      account.movements
        .filter((mov) => {
          return mov < 0;
        })
        .reduce((acc, mov) => {
          return (acc += mov);
        }, 0)
    )
  );

  //-----intrest------//
  labelSumInterest.textContent = currency(
    account.movements
      .filter((mov) => {
        return mov > 0;
      })
      .map((deposits) => {
        return (deposits * account.interestRate) / 100;
      })
      .filter((int) => {
        return int >= 1;
      })
      .reduce((acc, int) => {
        return (acc += int);
      }, 0)
  );
}

//////////////////transfer money/////////////////////////
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiversAccount = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );

  const intlAmount = conversion(amount, currAcc, receiversAccount);

  if (
    amount > 0 &&
    receiversAccount &&
    receiversAccount !== currAcc &&
    currAcc.balance >= amount
  ) {
    currAcc.movements.push(-amount);
    receiversAccount.movements.push(intlAmount);

    currAcc.movementInfo.push(`Transfer to ${receiversAccount.owner}`);
    receiversAccount.movementInfo.push(`Recieved from ${currAcc.owner}`);

    currAcc.movementsDates.push(new Date().toISOString());
    receiversAccount.movementsDates.push(new Date().toISOString());

    // Update UI //
    updateUI(currAcc);

    // Clear inputs //
    inputTransferAmount.value = "";
    inputTransferTo.value = "";
    inputTransferAmount.blur();
  }
});

//////////////Money convrsion/////////////////////
const ratesToUSD = {
  india: 85.56,
  portugal: 0.88,
  usa: 1,
};

function conversion(amount, from, to) {
  let inUSD = amount / ratesToUSD[from.country];
  let convertedAmount = inUSD * ratesToUSD[to.country];
  return convertedAmount;
}

/////////////////request loan//////////////////////
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);
  setTimeout(function () {
    if (
      loanAmount > 0 &&
      currAcc.movements.some((mov) => {
        return mov >= (loanAmount * 10) / 100;
      })
    ) {
      currAcc.movements.push(loanAmount);
      currAcc.movementInfo.push(`Loan granted by bank`);
      currAcc.movementsDates.push(new Date().toISOString());

      inputLoanAmount.value = "";

      updateUI(currAcc);
    } else window.alert(`⚠ LOAN REJECTED`), (inputLoanAmount.value = "");
  }, 3000);
});

////////////////////////close account//////////////////////////
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    currAcc.userName === inputCloseUsername.value &&
    currAcc.pin === Number(inputClosePin.value)
  ) {
    const delAccIndex = accounts.findIndex((account) => {
      return account.userName === currAcc.userName;
    });
    accounts.splice(delAccIndex, 1);

    containerApp.style.opacity = "0";
    labelWelcome.textContent = "Log in to get started";

    document.querySelectorAll("input").forEach((input) => (input.value = ""));
    inputLoginPin.blur();
  }
});

///////////////////////DATE LABEL////////////////////////////
function displayDate() {
  const now = new Date();
  const option = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour12: "true",
    hour: "numeric",
    minute: "numeric",
  };

  labelDate.textContent = new Intl.DateTimeFormat(
    currAcc.locale,
    option
  ).format(now);
}

/////////////////Log out Timer/////////////////
function logOutTimer() {
  let [min, sec] = labelTimer.textContent.split(":").map(Number);
  const timer = setInterval(() => {
    if (sec === 0) {
      sec = 59;
      min--;
    } else sec--;

    if (min === 0 && sec === 0) {
      clearInterval(timer);

      containerApp.style.opacity = "0";
      labelWelcome.textContent = "Log in to get started";

      document.querySelectorAll("input").forEach((input) => (input.value = ""));
      inputLoginPin.blur();
    }
    labelTimer.textContent = min + `:` + `${sec}`.padStart(2, 0);
  }, 1000);

  btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    clearInterval(timer);
  });
}
