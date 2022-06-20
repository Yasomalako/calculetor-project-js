
let result = document.getElementById('output_resulte');
let numbers1 =document.getElementsByTagName('button');
// console.log(result);
for(const i of numbers1) {
    i.addEventListener("click" , () => {
        switch (i.innerText) {
            case "x":
                result.innerText += "*"
                break;
            case "%":
                result.innerText += "/"
                break;
                case "+":
                    result.innerText +='+' 
                    break;
                case "-":
                    result.innerText +='-' 
                    break;
                case "AC":
                    result.innerText = ""
                    break;
            case "=":
                try {
                    result.innerText = eval(result.innerText);
                } catch {
                    result.innerText = "Eror";
                }
                break;
            default:
                result.innerText += i.innerText;
        }
    })
}
