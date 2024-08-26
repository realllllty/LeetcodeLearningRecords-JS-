
void async function () {
    // Write your code here
    let input = [];
    while(line = await readline()){
        input.push(line);
    }
    
    let total = input[0];

    let calculator = (a, b, op) => {
        switch(op) {
            case '+':
                return 0;
            case '-':
                return (a - b) - (b - a);
            case '*':       
                return 0;
            case '/':
                return (a / b) - (b / a);
            case '^':
                return Math.pow(a, b) - Math.pow(b, a);         
        }
    }

    for (let i = 0; i < total; i++) {
        let a = Number(input[i+1].split(' ')[0]);
        let b = Number(input[i+1].split(' ')[1]);
        let operator = input[i+1].split(' ')[2];

        let res = calculator(a, b, operator);

        if (res === 0) {
            console.log('=');
        } else if (res > 0) {
            console.log('>');
        } else if (res < 0) {
            console.log('<');
        }
    }
}()