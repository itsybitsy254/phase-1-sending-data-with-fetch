// Add your code here
function submitData(userName, userEmail) {
    const userData = {
      name: steve,
      email: steve@steve.com
    }
  
    const submitData = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(userData)
    }
  
    return fetch('http://localhost:3000/users', submitData)
      .then(response => response.json())
      .then(data => document.body.innerHTML = data.id)
      .catch(error => document.body.innerHTML = error.message)
  }

  