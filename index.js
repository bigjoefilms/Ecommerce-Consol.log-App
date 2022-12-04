const prompt = require("prompt-sync")({sigint : true});
console.log("Welcome To Nobi's shop Console App 🛒")
const Items = ['Macbook','Linux','Elitbook','Windows']

function order(arg){
    console.log('Congratulation 🙂')
    if (arg == '0'){
        console.log('you just ordered' + ' ' + Items[0])
    }else if (arg == '1'){
        console.log('you just ordered' + ' ' + Items[1])
    }else if (arg == '2'){
        console.log('you just ordered' + ' ' + Items[1])
    }else if (arg == '3'){
        console.log('you just ordered' + ' ' + Items[1])
    }
    console.log('\nYour Order is complete\n 🎉🎉🎉🎉🎉🎉🎉🎉🎉\n' )
} 

let enter = '';

while(enter != 7){
    console.log('Press 1 to Display Products')
    console.log('Press 2 to Place order')
    console.log('Press 7 to exit')
    enter =prompt('')

    if(enter == '1'){
        console.log(Items)
    }
    if(enter == '2'){
        Items.forEach(function (item, index){ 
        console.log(`press ${index} to order ${item}`);
    });

    let ord = prompt('')
    order(ord)
}
}