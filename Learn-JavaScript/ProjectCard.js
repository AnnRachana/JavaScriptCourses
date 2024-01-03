const num = '1234 5678 9876 1235';

const checkCreditCard = (cardNum) => {
    return new Promise((resolve, reject) => {
        if (cardNum.length !== 16) {
            reject('Invalid card length');
        }

        const cleanedCardNum = cardNum.replace(/\s/g, '');
        if (!/^\d+$/.test(cleanedCardNum)) {
            reject('Invalid characters in the card number');
        } else {
            resolve('Credit card is valid');
        }
    });
};
checkCreditCard(num)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
    