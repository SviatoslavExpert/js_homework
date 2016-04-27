var users = [];
				for(var i = 0; i <= 4; i++){
								users.push(prompt("Please, enter any user name."));	
				}
console.log(users);	

var currentUser = prompt("Please, enter YOUR NAME."),
	isUser = false; 
				for(var i = 0; i <= users.length; i++){
								if(users[i] === currentUser){
												isUser = true;
								}
				}
var message = isUser ? currentUser + ", вы успешно вошли" : "Введенное имя пользователя не существует в массиве.";
alert(message);