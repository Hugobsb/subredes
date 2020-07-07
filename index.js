const prompt = require('prompt');

prompt.start();

console.log('\x1b[31m' + 'REDE$$' + '\x1b[0m\n');
console.log('Welcome to the ' + '\x1b[31m' + 'party' + '\x1b[0m\n');
console.log('\x1b[96m' + 'This is our galaxy');
console.log('This is our galaxy' + '\x1b[0m\n\n');

console.log('\x1b[96m' + '1' + '\x1b[0m' + ' para IP\n');
console.log('\x1b[96m' + '2' + '\x1b[0m' + ' para primeiro IP\n');
console.log('\x1b[96m' + '3' + '\x1b[0m' + ' para último IP\n');

prompt.get(['escolha', 'quantidade de ip'], (err, result) => {
    if (err) onErr(err);

    let choice = Number(Object.entries(result)[0][1]);
    let ipQuantity = Number(Object.entries(result)[1][1]);
    if (typeof choice !== "number" && typeof ipQuantity !== "number") {
        console.log('Precisam ser um números');
        return 1;
    } else {
        if (ipQuantity % 2 !== 0) {
            console.log('A quantidade de ip precisa ser par');
            return 1;
        } else {
            console.log('\n\n');
            if (choice === 1) {
                let quoc = 256 / ipQuantity;
                for (let i = 0; i < ipQuantity; i++) console.log('192.168.1.' + (quoc * i));
            }
            
            if (choice === 2) {
                let quoc = 256 / ipQuantity;
                for (let i = 0; i < ipQuantity; i++) console.log('192.168.1.' + (quoc * i + 1));
            }
            
            if (choice === 3) {
                let quoc = 256 / ipQuantity;
                for (let i = 0; i < ipQuantity; i++) console.log('192.168.1.' + (quoc * (i + 1) - 1));
            }

            if (choice < 1 || choice > 3) console.log('Opção não encontrada');
        }
    }
});

function onErr(err) {
    if (err == 'Error: canceled') console.log('\x1b[31m'+'... and here you go'+'\x1b[0m\n');
    else console.log(err);
    return 1;
}