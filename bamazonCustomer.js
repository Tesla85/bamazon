var mysql = require('mysql')
var inquirer = require('inquirer')
var total = 0;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //insert inquirer function
    listItems();
});

function listItems() {

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (i = 0; i < res.length; i++) {
            console.log("--------------------------------------")
            console.log("Item_Id: " + res[i].item_id);
            console.log("Product: " + res[i].product_name);
            console.log("Department : " + res[i].department_name);
            console.log("Price: " + res[i].price);
            console.log("Stock quantity: " + res[i].stock_quantity);
            console.log("--------------------------------------")
        }
        purchase();
    });
}
function purchase() {

    connection.query("SELECT * FROM products", function (err, res) {
        if(err) throw err;

        inquirer.prompt([
            {
                name: "item_id",
                type: "input",
                message: "What is the ID of the product you would like to buy?",
            },
            {
                type: "input",
                name: "quantity",
                message: "How many would you like to purchase?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ]).then(function(answer){
        var findId = ("SELECT * FROM products WHERE ?");
        connection.query(findId,)


// Need to add logic to count the qauntity needed by customer and multiply by price.


        })
        

    });



}