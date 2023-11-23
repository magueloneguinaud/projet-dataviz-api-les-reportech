// fetch("https://gnews.io/api/v4/search?q=tech&lang=fr&max=10&apikey=da794dcb02ec0bd7a8664bba0d6e3bc8")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     // Faites quelque chose avec la réponse de l'API
//   })
//   .catch(error => {
//     console.error("Une erreur s'est produite :", error);
//   });

async function afficherNews() {
      const reponse = await fetch("https://gnews.io/api/v4/search?q=tech&lang=fr&max=10&apikey=da794dcb02ec0bd7a8664bba0d6e3bc8");
      const news = await reponse.json();
      let myFirstData = news
      console.log(myFirstData['articles'][0]);
      document.getElementById("myFirstData").innerHTML = 'Voici le premier article : ' + myFirstData['articles'][0]['image']
}
    afficherNews()
