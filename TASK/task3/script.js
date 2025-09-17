fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response => response.json()) 
.then(data => {
  const list=document.getElementById('list')
  data.results.slice(0,10).forEach(item=>{
    let li=document.createElement("li")
    li.textContent=item.name;
    list.appendChild(li);
  })
}) 
.catch(error => console.error('Error:', error))