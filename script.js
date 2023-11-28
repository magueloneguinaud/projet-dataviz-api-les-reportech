const fetchNews = async (q)=>{
      let url = 'https://gnews.io/api/v4/search?' +
                'q=' +q+
                '&lang=fr&' +
                'max=10&' +
                'sortBy=popularity&' +
                'apikey=e20cc85d9c286864e397e16f1014d2dc';
              
      
      let req = new Request(url)
      
      let a = await fetch(req)
      let response = await a.json()
      console.log(JSON.stringify(response))
      
          //console.log(response)
      let str = ""
      
      for (let item of response.articles){
          str = str + `<div class="card my-4 mx-2" style="width: 18rem;">
          <img src="${item.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.content.slice(0,123)}</p>
            <a href="${item.url}" target="_blank" class="btn btn-primary">Lire l'article</a>
          </div>
          </div>`
      }
      document.querySelector(".content").innerHTML = str
      }
      fetchNews('tech')
      search.addEventListener("click", (e)=>{
        e.preventDefault() 
        let query = searchInput.value;
        fetchNews(query)
      })
      
      
      
      
      
      
      
      
      
      
      // fetch(req)
      //   .then(response => response.json())
      //   .then(news => {
      //       console.log(news)
      //       let myFirstData = news['articles']
      //       let newsToDisplay = []
      
      //       for(i=0;i<myFirstData.length;i++){
      //             newsToDisplay.push(myFirstData[i]['title'])
      //       }
      //       console.log(newsToDisplay)
      //       // document.getElementById("myFirstData").innerHTML = 'Voici vos articles ' + newsToDisplay
            
      //   })
      
      
