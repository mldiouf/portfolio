 
function sendmail() {

    var nom = document.getElementById('nom').value;
    var email =document.getElementById('email').value;
    var sujet = document.getElementById('sujet').value;
    var commentaire =document.getElementById('commentaire').value;
   

    var Body = 'Name: ' + nom +'<br>email: '+ email+'<br>Sujet: ' +  sujet + '<br>Message: ' + commentaire;
    
    Email.send({
        SecureToken: "fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
        To:  "mldiouf500@gmail.com",
        From: email,
        Subject: "Message de Contact " + nom,
        Body: Body
    }).then(
        message => {
             
            if (message == 'OK') {
                alert('Mail envoyer avec success ');
            } else {
                console.error(message);
                alert('Erreur message. ');

            }

        }
    );



}
 