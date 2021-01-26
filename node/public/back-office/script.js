
//const urlBase = "https://fcawebbook.herokuapp.com"

function signOutAdmin(){
    current_user = null;
    setCurrentUser(current_user);
    window.location.href = "../index.html";
}

window.onload = () => {
    let cuser = getCurrentUser();
    if(cuser == null || cuser == "null" || !cuser.isAdmin) {
        window.location.href = "../index.html";
    }
    // References to HTML objects   
  //  const btnParticipant = document.getElementById("btnParticipant")
    const tblUsers = document.getElementById("tblUsers")

    const renderUsers = async () => {
        let strHtml = `
            <thead>
                <tr><th class='w-100 text-center ' colspan='8'>User list</th></tr>
                <tr>
                    <th class='w-2'>#</th>
                    <th class='w-38'>First Name</th>
                    <th class='w-38'>Last Name</th> 
                    <th class='w-38'>E-mail</th>              
                    <th class='w-2' >Username</th>
                    <th class='w-10'>Country</th>
                    <th class='w-10'>Remove</th>              
                </tr> 
            </thead><tbody>
        `;

        users = getUsers();
        let i = 1
        for (const user of users) {            
            strHtml += `
                <tr>
                    <td>${i}</td>
                    <td>${user.first_name}</td>
                    <td>${user.last_name}</td>           
                    <td>${user.email}</td>       
                    <td>${user.username}</td>                                  
                    <td>${user.country}</td>                                   
                    <td align="center"><i id='${user.email}' class='fas fa-trash-alt remove'></i></td>
                </tr>
            `        
            i++
        }
        strHtml += "</tbody>"
        tblUsers.innerHTML = strHtml

        // Manage click delete        
        const btnDelete = document.getElementsByClassName("remove")
        for (let i = 0; i < btnDelete.length; i++) {
            btnDelete[i].addEventListener("click", () => {
                swal({
                    title: 'Remove user?',
                    text: "This action cannot be undone",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'Cancel',
                    confirmButtonText: 'Remove'
                  }).then( async (result) => {
                    if (result.value) {             
                        let participantId = btnDelete[i].getAttribute("id")
                        try {
                            users = getUsers();
                            let filtered = users.filter(function(value, index, arr){ 
                                return value.email != participantId;
                            });
                            setUsers(filtered);
                            swal('Removed!','User successfully removed!','success')
                            renderUsers()
                        } catch(err) {
                            swal({type: 'error', title: 'Error', text: err})
                        }
                    }
                  })
            })
        }       
    }
 renderUsers()
}