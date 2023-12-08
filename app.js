"use strict";
const totalPrice = ({ price, discount, isInstallment, months, }) => {
    // Your code here...
    let dis = price - (price * discount) / 100;
    if (isInstallment) {
        return dis / months;
    }
    else {
        return dis;
    }
};
const price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
console.log(price); // 6250
