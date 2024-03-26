function getuserdata( ){
    const userId =document.getElementById('userId').value 
    if (userId < 1 || userId > 10 ) {
        alert('пожалуйста введите только от 1 до 10')
        return;
    }
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then(response => {
    if (!response.ok) {
        throw new error('network response was not ok');
    }
    return response.json()

})
.then(data => {
    const userdatadiv = document.getElementById('userdata')
    userdatadiv.innerHTML= `
    <h2>userdata:</h2>
    <p>name:${data.name}</p>
    <p>username:${data.username}</p>
    <p>phone:${data.phone}</p>
    `;
})
.catch(error => {
    console.error('theree was a problem with the fetch operation:',error);
});
}

document.getElementById('userId').addEventListener('keyup',function(event){
    if (event.key === 'enter') {
        event.preventDefault();
        getuserdata();
    }
});


