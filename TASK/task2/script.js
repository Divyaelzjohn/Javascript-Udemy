  const btn=document.getElementById("getNew")
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json()) 
    .then(data => {
      const imgId=document.getElementById('new')
      let image=document.createElement('img');
      image.src=data.message
      image.alt="image"
      imgId.appendChild(image)

      const button=document.createElement("button")
      button.textContent="Get New Dog";
      document.body.appendChild(button)

      button.addEventListener("click",()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
          image.src = data.message;  
        });
      })
    }) 
  .catch(error => console.error('Error:', error))
 