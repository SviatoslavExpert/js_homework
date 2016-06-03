function Human(name,age,sex,height,weight) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.height = height;
  this.weight = weight;
}

function Worker(name,age,sex,height,weight,job,salary){
	Human.call(this, name,age,sex,height,weight);
	this.job = job;
	this.salary = salary;
	
	this.toWork = function(){
		console.log("работает");
	}
}

function Student(name,age,sex,height,weight,university,scolarship){
	Human.call(this, name,age,sex,height,weight);
	this.university = university;
	this.scolarship = scolarship;
	
	this.toWatchTV = function(){
		console.log("смотрит сериал");
	}
}

Worker.prototype = Object.create(Human.prototype);
Student.prototype = Object.create(Human.prototype);


var student1 = new Student("Иван",21,"male",175,66,"КПИ",1000);
var student2 = new Student("Петров",23,"male",180,70,"КПИ",800);
student1.toWatchTV();

var worker1 = new Worker("Ашрапов",32,"male",190,85,"врач",5000);
var worker2 = new Worker("Титов",40,"male",170,55,"учитель",5000);
worker2.toWork();

console.log(worker1);
console.log(worker2);

console.log(student1);
console.log(student2);
