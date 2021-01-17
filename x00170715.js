// Payroll System



// Global Variables and Arrays 

let employees = [],
    hours = [],
    payment = [];

//function to add employees 

function addEmployee(){
    const max_emp = 5;
    for(let i = 1; i <= max_emp; i++){
        let name = prompt(`What is the name of the employee number ${i}`);
        employees.push(name);
        }
    alert(`The name of your employees are:${employees}`);
}


//function to add Hours to each employee

function addHours(){
    for(let j = 0; j < employees.length; j++){
        let hour = Number(prompt(`How many hours did ${employees[j]} work?`));
        hours.push(hour);
    }
    alert(  employees[0] + " worked " + hours[0] + " hours\n" +
            employees[1] + " worked " + hours[1] + " hours\n" +
            employees[2] + " worked " + hours[2] + " hours\n" +
            employees[3] + " worked " + hours[3] + " hours\n" +
            employees[4] + " worked " + hours[4] + " hours\n" 
    )
    
}

//function to calculate Payment

function getPayment(){
    const   NORMAL = 7;
    let     basic_rate = 20, 
            medium_rate = 30, 
            over_rate = 40,
            sum = 0,
            payslip = 0;
            
    for(let i = 0; i < employees.length; i++){
        if(hours[i] <= NORMAL){
            payslip = hours[i] * basic_rate;
            payment.push(payslip);
        }
        else if (hours[i] > NORMAL && hours[i] <= 10){
            payslip = ((NORMAL * basic_rate) + ((hours[i] - NORMAL) * medium_rate));
            payment.push(payslip);
        }
        else if(hours[i] > 10){
            payslip = ((NORMAL * basic_rate) + (3 * medium_rate) + ((hours[i] - 10)* over_rate));
            payment.push(payslip);
        }
    }

    sum = payment.reduce(function(a, b){
        return a + b;
    }, 0);
    alert(`The total pay is € ${sum}`);
};


//function to display payment for each employee

function displayEmployees(){
    for(let i = 0; i < employees.length; i++){
        alert(`${employees[i]} has earned €${payment[i]}`);
    }  
}


// function to classify employees by hours worked 

function stats(){
    let under_seven = 0,
        between = 0,
        over_ten = 0;

    for(let i = 0; i < employees.length; i++){
        if(hours[i] < 7){
            under_seven++
        }
        else if(hours[i] > 7 && hours[i] <= 10){
            between++
        }
        else if(hours[i] > 10){
            over_ten++
        }
    }
    
    alert(under_seven + " employees worked 7 hours or less \n" +
        between + " employees worked between 7 to 10 hours \n" +
        over_ten + " employees worked more than 10 hours");
}


//function to get max salary

function maxSalary(){
    let topEarner = employees[0],
        max = payment[0];
        for(let i = 0; i < employees.length; i++){
            if(payment[i] > max){
                max = payment[i];
                topEarner = employees[i];
            }
        }
    alert(`${topEarner} earns the most money`)
}