fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) 
  .then(data => {
    const list=document.getElementById('users')
    data.forEach(item=>{
      let li=document.createElement("li")
      li.textContent=item.name;
      list.appendChild(li);
    })
  }) 
  .catch(error => console.error('Error:', error))




