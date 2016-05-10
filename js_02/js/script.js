var _DOM = {
	'append' : function(oParent, oParams){

		oParams['tagName'] 		= oParams['tagName'] || 'DIV';
		oParams['className'] 	= oParams['className'] || '';
		oParams['type'] 		= oParams['type'] || '';
		oParams['name'] 		= oParams['name'] || '';
		oParams['value'] 		= oParams['value'] || '';
		oParams['html'] 		= oParams['html'] || '';
		oParent 				= oParent || document.body;
		
		var oHTMLElement = document.createElement(oParams['tagName']);
		oHTMLElement.setAttribute('class', oParams['className']);
		oHTMLElement.setAttribute('type', oParams['type']);
		oHTMLElement.setAttribute('name', oParams['name']);
		oHTMLElement.setAttribute('value', oParams['value']);
		oHTMLElement.innerHTML = oParams['html'];
		console.log(oHTMLElement);
		return oParent.appendChild(oHTMLElement);
	}
},
	testData = {
		'1. Вопрос №1' : ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
		'2. Вопрос №2' : ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
		'3. Вопрос №3' : ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
	}
;

 _DOM.append(null, {
	'tagName'	: 'h3',
	'className'	: 'heading',
	'html'		: 'Тест по программированию'
	});

var form = _DOM.append(null, {
			'tagName'	: 'form',
			'className'	: 'form-control'
			});
	
var ul = _DOM.append(form, {
			'tagName'	: 'ul',
			'className'	: 'questions',
			});	
	
	for(var question in testData){
		var tag = _DOM.append(ul, {
			'tagName'	: 'li',
			'className'	: 'one_question',
			'html'		: question
			});
		
		for(var i=0; i<testData[question].length; i++){
		_DOM.append(tag, {
			'tagName'	: 'input',
			'className'	: 'checkbox',
			'type'		: 'checkbox',
			'value'		: i,
			'html'		: testData[question][i]
			});	
		}
	}
	
 _DOM.append(null, {
			'tagName'	: 'input',
			'className'	: 'check_results',
			'type'		: 'button',
			'value'		: 'Проверить мои результаты'
			});
			
console.log(_DOM)

	/* 
		oParent - тег-родитель
		oParams - параметры для создания нового тега
		
		тернарные операторы
	*/