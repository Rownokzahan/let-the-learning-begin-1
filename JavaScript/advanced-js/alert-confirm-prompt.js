document.body.innerHTML= '<H1>Add Numbers</H1>Number1<input id="num1" type="text"><br><br>Number2<input id="num2"  type="text"><br><br><button onclick="add()" type="submit">Submit</button><br><br>Result <input id="result" type="text">';

function add(){
    let num1 =document.getElementById('num1').value;
    let num2 =document.getElementById('num2').value;
    let result =document.getElementById('result');
    if(num1<0 || num2<0 || num1=='' || num2=='' ){
        alert('The numbers can not be negative or null');
    }
    else{
        if(confirm('Do you want to add another number?')==false){
            let sum =parseInt(num1)+parseInt(num2);
            result.value=sum;  
        }
        else{
            let x=prompt('Enter the another number');
            let sum =parseInt(num1)+parseInt(num2)+parseInt(x);
            result.value=sum;  
        }
    }
}
