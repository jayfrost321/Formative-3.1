//NewsAPI: https://gnews.io/docs/v3#news-from-topic

var token = '8439a3dac357922f642ab4143d6a67cd'

function loadArticlesByTopic(topic){
	var url = 'https://gnews.io/api/v3/topics/'+topic+'?token='+token
	fetch(url)
		.then( res=>res.json())
		.then((data)=>{
			var articles = data.articles
			console.log(articles)
		})
}

function loadArticlesByTerm(term){
	var url = 'https://gnews.io/api/v3/search?q='+term+'&token='+token
	fetch(url)
		.then( res=>res.json())
		.then((data)=>{
			var articles = data.articles
			console.log(articles)
		})
}

loadArticlesByTopic('health')
loadArticlesByTerm('oil')