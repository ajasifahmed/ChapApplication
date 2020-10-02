//authntication
let signup=()=>{
    let mail=document.getElementById('mail');
    let password=document.getElementById('pass');
    
    firebase.auth().createUserWithEmailAndPassword(mail.value, password.value)
    .then((r)=>{
        alert('signup successesfuly\nlogin to continue')
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('faild\n',errorCode,errorMessage)

      })}
    
      let login=()=>{
        let mail=document.getElementById('mail-login');
        let password=document.getElementById('pass-login');
        firebase.auth().signInWithEmailAndPassword(mail.value, password.value)
        .then((r)=>{
            alert('succssfully login')
            window.location='chat.html'
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('login faild\n',errorCode,errorMessage)
          })}

          const signout=()=>{
            firebase.auth().signOut()
            .then(()=>{
                window.location='index.html'
            })
            .catch(()=>{
        
            })
        }
//nd authntication