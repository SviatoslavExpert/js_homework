﻿//alert ('Святослав');

$(function() {

var pageData = [
         {
			name : 'Святослав Грановский',
			photo: {
				src: 'img/portrait.png',
				alt: 'портрет',
				title:'портрет',
			},
			job: 'Преподаватель английского языка',
			why: 'Хочу учить фронтенд потому, что:',
			reasons: ['Хочу больше зарабатывать',
					'Хочу создавать интересные проекты',
					'Хочу развивать свой домашний проект'],
			tel:'Мой контакный телефон',
			number: '+097 498 27 07',
			vk: 'Мой профиль вконтакте',
			vk_link: 'http://vk.com/id22604785',
			feedback: 'Мой фидбек:',
			feedback_text: 'Могу проконсультировать по поводу английского'
        }
      ];

	var html = $('#test').html();
	var articles = [
		{
			title: 'Article 1',
			content: 'Some text 1'
		},
		{
			title: 'Article 2',
			content: 'Some text 2'
		},
		{
			title: 'Article 3',
			content: 'Some text 3'
		}
	];
	
	var content = tmpl(html, {
		data: articles
		});
	
	$('body').append(content);
	console.log(pageData[0]["name"]);
});