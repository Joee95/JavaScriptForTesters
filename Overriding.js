class Bank {
    roi() {
        return 0;
    }
}
class AXIS extends Bank {
    roi() {
        return 10.5;
    }
}

class SBI extends Bank {
    roi() {
        return 15;
    }
}

//bank - new Bank();
sbi = new SBI();
console.log(sbi.roi());

