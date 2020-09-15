// Exercise #02
let account = {
    name: "Glafert ",
    expenses: [],
    addExpenses: function(description, amount){
        this.expenses.push({"description": description, "amount": amount});
    },
    getAccountSummary: function (){
        let totalExpenses = 0;
        this.expenses.forEach(function (el){
            totalExpenses = totalExpenses + el.amount;
        });
    return totalExpenses;
    }
};
account.addExpenses('Membeli Makanan', 15.000);
account.addExpenses('Ongkos Gojek', 50000);
console.log("Total pengeluaran " + account.name + "adalah Rp." + account.getAccountSummary());