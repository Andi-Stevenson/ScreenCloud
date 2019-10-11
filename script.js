var balance;
var overdraft = sessionStorage.getItem("overdraft");
var usersPin = 1111;
var amountToWithdraw = sessionStorage.getItem("amountToWithdraw");

function checkPin(inputPin) {

		if (inputPin.value.match(usersPin)) {
			console.log("Pin Correct")
			window.location.replace("options.html");
		}
		else {
			console.log("Pin Incorrect")
			document.getElementById("inputBox").style.borderColor ="#e55039";
			document.getElementById("inputBox").value = "";
			document.getElementById("errorMessage").innerText = "Incorrect Pin";
		}
	}

function withdraw(amount) {

	balance  = Number(sessionStorage.getItem("balance"));

	if (balance >= amount) {

		balance = balance - amount;
		sessionStorage.setItem("balance", balance);
		location.href="output.html";
	}

	else {
		sessionStorage.setItem("amountToWithdraw", amount);
		location.href="overdraft.html";
	}
}

function useOverdraft() {

	balance = Number(sessionStorage.getItem("balance")) + Number(sessionStorage.getItem("overdraft"));
	sessionStorage.setItem("balance", balance);
	sessionStorage.setItem("overdraft", "0");
	withdraw(sessionStorage.getItem("amountToWithdraw"));
}

document.getElementById("outputBalance").innerHTML = "&pound" + sessionStorage.getItem("balance") +".00";
document.getElementById("overdraft").innerHTML = "&pound" + overdraft +".00";