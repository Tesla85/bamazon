var mysql = require('mysql')
var inquirer = require('inquirer')

var connection = mysql.createConnection({
    host: "localhost",
    port: 3300,

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
            for (i = 0; i < results.length; i++) {
               console.log("Item_Id: " + res[i].item_id);
               console.log("Product: " + res[i].product_name);
               console.log("Department : " + res[i].department_name);
               console.log("Price: " + res[i].price);
               console.log("Stock quantity: " + res[i].stock_quantity);
             
            }
            return itemArray;
        });
    }
    //     function productId() {

    //         inquirer.prompt([

    //             {
    //                 name: "item_ID",
    //                 type: "input",
    //                 choices:
    //         },
    //             message: "What is the ID of the product you would like to buy?"
    //     },
    //     {
    //         type: "input",
    //             name: "quantity",
    //                 message: "How many would you like to purchase?"
    //     }



    //     // ]).then(function)
    // }