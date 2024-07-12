function submitData(userName, userEmail) {
  const userInfo = {
    name: userName,
    email: userEmail
  }

  const configUser = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(userInfo)
  }

  return fetch('http://localhost:3000/users', configUser)
    .then(response => response.json())
    .then(data => document.body.innerHTML = data.id)
    .catch(error => document.body.innerHTML = error.message)
}

