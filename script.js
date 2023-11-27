const fetchNews = async (q)=>{
      let url = 'https://gnews.io/api/v4/search?' +
                'q=' +q+
                '&lang=fr&' +
                'max=10&' +
                'sortBy=popularity&' +
                'apikey=da794dcb02ec0bd7a8664bba0d6e3bc8';
              
      
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
            <p class="card-text">${item.content}</p>
            <a href="${item.url}" target="_blank" class="btn btn-primary">Lire l'article</a>
          </div>
          </div>`
      }
      document.querySelector(".content").innerHTML = str
      }
      fetchNews('tech')
      
      
      
      
      
      
      
      
      
      
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
      
      
