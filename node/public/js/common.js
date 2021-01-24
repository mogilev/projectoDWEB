var current_user = null;

var users = [
    {
        first_name: "Admin",
        last_name: "Sudo",
        email: "admin@sudo.com.pt",
        country: "PT",
        username: "admin_sudo",
        password: "Qwerty.321",
        isAdmin: true
    }
]

var studios = [
    { id: 1, name: "Paramount Pictures", register_date: "09-30-1928", location: "California, USA" },
    { id: 2, name: "The Film Syndicate", register_date: "04-14-1972", location: "LA, USA" },
    { id: 3, name: "DreamWorks", register_date: "05-06-1987", location: "Silicon Valley, USA" },
    { id: 4, name: "Columbia Pictures", register_date: "03-17-1969", location: "Hollyhood, USA" },
    { id: 5, name: "Walt Disney Pictures", register_date: "06-01-1965", location: "Orlando, USA" },
    { id: 6, name: "Jerry Bruckheimer Films", register_date: "09-02-1985", location: "Washington, USA" },
    { id: 7, name: "Warner Bros.", register_date: "02-23-1979", location: "LA, USA" },
    { id: 8, name: "Metro-Goldwyn-Mayer", register_date: "01-25-1972", location: "Hollyhood, USA" },
    { id: 9, name: "Universal Studios", register_date: "06-27-1960", location: "LA, USA" },
    { id: 10, name: "DC Entertainment", register_date: "03-03-1977", location: "Passadena, USA" },
    { id: 11, name: "Twentieth Century Fox", register_date: "04-06-1975", location: "New York, USA" },
    { id: 12, name: "Walt Disney Animation Studios", register_date: "09-07-1975", location: "Orlando, USA" },
    { id: 13, name: "BRON Studios", register_date: "06-19-1968", location: "Burnaby, Canada" },
    { id: 14, name: "TV Zero", register_date: "06-27-1959", location: "Rio de Janeiro, Brasil" },
    { id: 15, name: "Les Films Pelléas", register_date: "08-06-1972", location: "Paris, France" },
    { id: 16, name: "New Line Cinema", register_date: "07-19-1975", location: "LA, USA" },
    { id: 17, name: "Castle Rock Entertainment", register_date: "01-16-1948", location: "Hollyhood, USA" }
];

var actors = [
    { id: 1, name: "Arnold Schwarzenegger", country: "Austria", birth_date: "07-07-1947", sex: "M" },
    { id: 2, name: "Linda Hamilton", country: "USA", birth_date: "09-09-1956", sex: "F" },
    { id: 3, name: "Mackenzie Davis", country: "Canada", birth_date: "01-04-1987", sex: "F" },
    { id: 4, name: "Isaac Bardavid", country: "Brasil", birth_date: "01-01-1931", sex: "M" },
    { id: 5, name: "Halle Berry", country: "USA", birth_date: "08-08-1966", sex: "F" },
    { id: 6, name: "Rebecca Romijn", country: "USA", birth_date: "03-03-1968", sex: "F" },
    { id: 7, name: "Shia LaBeouf", country: "USA", birth_date: "06-02-1967", sex: "M" },
    { id: 8, name: "Megan Fox", country: "USA", birth_date: "06-06-1960", sex: "F" },
    { id: 9, name: "Josh Duhamel", country: "USA", birth_date: "04-04-1939", sex: "M" },
    { id: 10, name: "Will Smith", country: "USA", birth_date: "06-05-1980", sex: "M" },
    { id: 11, name: "Tommy Lee Jones", country: "USA", birth_date: "04-04-1988", sex: "M" },
    { id: 12, name: "Josh Brolin", country: "USA", birth_date: "06-06-1963", sex: "M" },
    { id: 13, name: "Johnny Depp", country: "USA", birth_date: "01-01-1963", sex: "M" },
    { id: 14, name: "Armie Hammer", country: "USA", birth_date: "08-05-1976", sex: "M" },
    { id: 15, name: "Tom Wilkinson", country: "USA", birth_date: "07-07-1938", sex: "M" },
    { id: 16, name: "Orlando Bloom", country: "England", birth_date: "06-06-1948", sex: "M" },
    { id: 17, name: "Keira Knightley ", country: "England", birth_date: "09-09-1978", sex: "F" },
    { id: 18, name: "Ben Barnes", country: "USA", birth_date: "09-09-1969", sex: "M" },
    { id: 19, name: "Skandar Keynes", country: "England", birth_date: "07-07-1952", sex: "M" },
    { id: 20, name: "Georgie Henley", country: "USA", birth_date: "03-03-1970", sex: "M" },
    { id: 21, name: "Henry Cavill", country: "USA", birth_date: "05-03-1959", sex: "M" },
    { id: 22, name: "Amy Adams", country: "USA", birth_date: "02-02-1981", sex: "F" },
    { id: 23, name: "Michael Shannon ", country: "USA", birth_date: "10-10-1959", sex: "M" }
];

var directors = [
    { id: 1, name: "Tim Miller" },
    { id: 2, name: "Brett Ratner" },
    { id: 3, name: "Michael Bay" },
    { id: 4, name: "Barry Sonnenfeld" },
    { id: 5, name: "Gore Verbinski" },
    { id: 6, name: "Joachim Rønning" },
    { id: 7, name: "Espen Sandberg" },
    { id: 8, name: "Andrew Adamson" },
    { id: 9, name: "Zack Snyder" },
    { id: 10, name: "Marc Forster" },
    { id: 11, name: "Marc Webb" },
    { id: 12, name: "Bryan Singer" },
    { id: 13, name: "James Cameron" },
    { id: 14, name: "Christopher Nolan" },
    { id: 15, name: "David Yates" },
    { id: 16, name: "Byron Howard" },
    { id: 17, name: "Nathan Greno" },
    { id: 18, name: "Todd Phillips" },
    { id: 19, name: "John McNaughton" },
    { id: 20, name: "Roberto Berliner" },
    { id: 21, name: "Stanley Kubrick" },
    { id: 22, name: "Mia Hansen-Løve" },
    { id: 23, name: "David Fincher" },
    { id: 24, name: "Rob Reiner" },
    { id: 25, name: "Clint Eastwood" },
];

var movies = [
    { id: 1, name: "Terminator : Dark Fate", year: 2019 },
    { id: 2, name: "X-Men : The Last Stand", year: 2006 },
    { id: 3, name: "Transformers : Revenge Of The Fallen", year: 2009 },
    { id: 4, name: "Men In Black 3", year: 2012 },
    { id: 5, name: "The Lone Ranger", year: 2013 },
    { id: 6, name: "Pirates Of The Caribbean : Dead Man´s Chest", year: 2006 },
    { id: 7, name: "The Chronicles Of Narnia : Prince Caspian", year: 2008 },
    { id: 8, name: "Man Of Steel", year: 2013 },
    { id: 9, name: "Quantum Of Solace", year: 2008 },
    { id: 10, name: "The Amazing Spider-Man", year: 2012 },
    { id: 11, name: "Superman Returns", year: 2006 },
    { id: 12, name: "Avatar", year: 2009 },
    { id: 13, name: "The Dark Knight Rises", year: 2012 },
    { id: 14, name: "Harry Potter And The Half-Blood Prince", year: 2009 },
    { id: 15, name: "Tangled", year: 2010 },
    { id: 16, name: "Joker", year: 2019 },
    { id: 17, name: "Mad Dog And Glory", year: 1992 },
    { id: 18, name: "Nise : O Coração Da Loucura", year: 2016 },
    { id: 19, name: "The Shining", year: 1980 },
    { id: 20, name: "Maya", year: 2019 },
    { id: 21, name: "Deadpool", year: 2016 },
    { id: 22, name: "Titanic", year: 1997 },
    { id: 23, name: "Seven : 7 Pecados Mortais", year: 1995 },
    { id: 24, name: "Bad Boys", year: 1995 },
    { id: 25, name: "A Few Good Men", year: 1992 },
    { id: 26, name: "Million Dollar Baby", year: 2004 }
];

function signUp() {
    let email = document.getElementById("email-input2").value;
    let password = document.getElementById("password-input2").value
    if (email == '' || password == '') {
        alert("Email or password must be filled!");
        return;
    }
    let valid = true;
    getUsers().forEach(user => {
        if (user.email == email) {
            alert("The email is not available!");
            valid = false;
            return;
        }
    });

    if(valid) {
        let newUser = {
            first_name: document.getElementById("first-name-input").value,
            last_name: document.getElementById("last-name-input").value,
            email: email,
            country: document.getElementById("country-input").value,
            username: "",
            password: password,
            isAdmin: false,
            movies: [],
            directors: [],
            actors: [],
            studios: [],
        };

        let cusers = getUsers();
        cusers.push(newUser);
        setUsers(cusers);
        alert("User signed up successfuly!");
    }
}

function signIn() {
    let success = false;
    let email = document.getElementById("email-input").value;
    let password = document.getElementById("password-input").value
    if (email == '' || password == '') {
        alert("Email or password are not valid!");
        return;
    }
    let savedUsers = getUsers();
    savedUsers.forEach(user => {
        if (user.password == password && user.email == email) {
            $("#sign-in").hide();
            $("#sign-up").hide();
            current_user = user;
            $("#name-tag").text("Hello " + current_user.email + "!");
            if (current_user.isAdmin) {
                $("#back-office").show();
                $("#sign-out").show();
            } else {
                $("#my-favourites").show();
                $("#my-profile").show();
            }
            $("#sign-out").show();
            success = true;
            setCurrentUser(current_user)
            alert("Signed in successfuly!");
            return;
        }
    });

    if (!success) {
        alert("Email or password are incorrect!");
    }
}

function signOut() {
    current_user = null;
    setCurrentUser(current_user);
    $("#my-favourites").hide();
    $("#sign-out").hide();
    $("#my-profile").hide();
    $("#back-office").hide();
    $("#sign-in").show();
    $("#sign-up").show();
    $("#name-tag").text("");
    alert("Signed out successfuly!");
}

function removeFavourite(type, id) {
    let current_user = getCurrentUser();
    if (current_user != null || current_user != "null" || current_user != undefined) {
        let filtered = getUsers().filter(function (value, index, arr) {
            return current_user.email == value.email;
        });

        if (type == 'movie') {
            current_user.movies = current_user.movies.filter(function (value, index, arr) {
                return id != value;
            });
        } else if (type == 'actor') {
            current_user.actors = current_user.actors.filter(function (value, index, arr) {
                return id != value;
            });
        } else if (type == 'studio') {
            current_user.studios = current_user.studios.filter(function (value, index, arr) {
                return id != value;
            });
        } else if (type == 'director') {
            current_user.directors = current_user.directors.filter(function (value, index, arr) {
                return id != value;
            });
        }

        filtered.push(current_user);
        setCurrentUser(current_user);
        setUsers(filtered);
        alert("Removed " + type + " from your favourites!");
    }
}

function addFavourite(type, id) {
    let current_user = getCurrentUser();
    if (current_user != null || current_user != "null" || current_user != undefined) {
        let filtered = getUsers().filter(function (value, index, arr) {
            return current_user.email == value.email;
        });

        if (type == 'movie') {
            if (current_user.movies == null || current_user.movies == "null" || current_user.movies == undefined) {
                current_user.movies = [];
            }
            current_user.movies.push(id);
        } else if (type == 'actor') {
            if (current_user.actors == null || current_user.actors == "null" || current_user.actors == undefined) {
                current_user.actors = [];
            }
            current_user.actors.push(id);
        } else if (type == 'studio') {
            if (current_user.studios == null || current_user.studios == "null" || current_user.studios == undefined) {
                current_user.studios = [];
            }
            current_user.studios.push(id);
        } else if (type == 'director') {
            if (current_user.directors == null || current_user.directors == "null" || current_user.directors == undefined) {
                current_user.directors = [];
            }
            current_user.directors.push(id);
        }

        filtered.push(current_user);
        setCurrentUser(current_user);
        setUsers(filtered);
        alert("New " + type + " added to your favourites!");
    }
}

window.onload = () => {
    let cuser = getCurrentUser();
    if (cuser == null || cuser == "null" || cuser == undefined) {
        $("#sign-in").show();
        $("#sign-up").show();
    } else {
        if (!cuser.isAdmin) {
            $("#my-favourites").show();
            $("#my-profile").show();
        } else {
            $("#back-office").show();
        }
        $("#name-tag").text("Hello " + cuser.email + "!");
        $("#sign-out").show();
    }

    let cusers = getUsers() 
    if (cusers == null || cusers == "null" || cusers == undefined) {
        setUsers(users);
    }
};

function buildMyProfile() {
    let cuser = getCurrentUser();
    document.getElementById("first-name-edit-input").value = cuser.first_name;
    document.getElementById("last-name-edit-input").value = cuser.first_name;
    document.getElementById("email-edit-input").value = cuser.email;
    document.getElementById("country-edit-input").value = cuser.country;
    document.getElementById("password-edit-input").value = cuser.password;
}

function editMyProfile() {
    let cuser = getCurrentUser();
    cuser.first_name = document.getElementById("first-name-edit-input").value;
    cuser.last_name = document.getElementById("last-name-edit-input").value,
    cuser.country = document.getElementById("country-edit-input").value;
    cuser.password = document.getElementById("password-edit-input").value;

    let filtered = getUsers().filter(function (value, index, arr) {
        return cuser.email != value.email;
    });
    filtered.push(cuser);
    setCurrentUser(cuser);
    setUsers(filtered);
    alert("User edited with success!");
}

function buildMyFavourites() {
    let cuser = getCurrentUser();
    let strHtml = `<thead><tr><th>Id</th><th>Title</th><th>Year</th><th>Favourite</th></tr></thead>`;
    strHtml += `<tbody>`;
    let i = 1;
    for (const movie of cuser.movies) {
        let filtered = movies.filter(function(value, index, arr){ 
            return value.id == movie;
        });
        if (filtered.length > 0 ) {
            filtered = filtered[0];
        }
        strHtml += `<tr><td>${filtered.id}</td><td>${filtered.name}</td><td>${filtered.year}</td><td><button class="btn" onclick="removeFavourite('movie', ${filtered.id})"><i class="fa fa-heart"></i></button></td></tr>`;
        i++;
    }
    strHtml += `</tbody>`;
    document.getElementById("tblmyMovies").innerHTML = strHtml;

    strHtml = `<thead><tr><th>Id</th><th>Name</th><th>Country</th><th>Birthday date</th><th>Gender</th><th>Favourite</tr></thead>`;
    strHtml += `<tbody>`;
    i = 1;
    for (const actor of cuser.actors) {
        let filtered = actors.filter(function(value, index, arr){ 
            return value.id == actor;
        });
        if (filtered.length > 0 ) {
            filtered = filtered[0];
        }
        strHtml += `<tr><td>${filtered.id}</td><td>${filtered.name}</td><td>${filtered.country}</td><td>${filtered.birth_date}</td><td>${filtered.sex}</td><td><button class="btn" onclick="removeFavourite('actor', ${filtered.id})"><i class="fa fa-heart"></i></button></td></tr>`;
        i++;
    }
    strHtml += `</tbody>`;
    document.getElementById("tblmyActors").innerHTML = strHtml;

    strHtml = `<thead><tr><th>Id</th><th>Name</th><th>Foundation date</th><th>Location</th><th>Favourite</tr></thead>`;
    strHtml += `<tbody>`;
    i = 1;
    for (const studio of cuser.studios) {
        let filtered = studios.filter(function(value, index, arr){ 
            return value.id == studio;
        });
        if (filtered.length > 0 ) {
            filtered = filtered[0];
        }
        strHtml += `<tr><td>${filtered.id}</td><td>${filtered.name}</td><td>${filtered.register_date}</td><td>${filtered.location}</td><td><button class="btn" onclick="removeFavourite('studio', ${filtered.id})"><i class="fa fa-heart"></i></button></td></tr>`;
        i++;
    }
    strHtml += `</tbody>`;
    document.getElementById("tblmyStudios").innerHTML = strHtml;

    strHtml = `<thead><tr><th>Id</th><th>Name</th><th>Favourite</tr></thead>`;
    strHtml += `<tbody>`;
    i = 1;
    for (const director of cuser.directors) {
        let filtered = directors.filter(function(value, index, arr){ 
            return value.id == director;
        });
        if (filtered.length > 0 ) {
            filtered = filtered[0];
        }
        strHtml += `<tr><td>${filtered.id}</td><td>${filtered.name}</td><td><button class="btn" onclick="removeFavourite('director', ${filtered.id})"><i class="fa fa-heart"></i></button></td></tr>`;
        i++;
    }
    strHtml += `</tbody>`;
    document.getElementById("tblmyDirectors").innerHTML = strHtml;
}

function showTblMovies() {
    let strHtml = `<thead><tr><th>Id</th><th>Title</th><th>Year</th><th>Favourite</th></tr></thead>`;
    strHtml += `<tbody>`;
    let i = 1;
    for (const movie of movies) {
        strHtml += `<tr><td>${movie.id}</td><td>${movie.name}</td><td>${movie.year}</td><td><button class="btn" onclick="addFavourite('movie', ${movie.id})"><i class="fa fa-heart-o"></i></button></td></tr>`;
        i++;
    }
    strHtml += `</tbody>`;
    document.getElementById("tblMovies").innerHTML = strHtml;
}

function showTblActors() {
    let strHtml = `<thead><tr><th>Id</th><th>Name</th><th>Country</th><th>Birthday date</th><th>Gender</th><th>Favourite</tr></thead>`;
    strHtml += `<tbody>`;
    let i = 1;
    for (const actor of actors) {
        strHtml += `<tr><td>${actor.id}</td><td>${actor.name}</td><td>${actor.country}</td><td>${actor.birth_date}</td><td>${actor.sex}</td><td><button class="btn" onclick="addFavourite('actor', ${actor.id})"><i class="fa fa-heart-o"></i></button></td></tr>`;
        i++;
    }
    strHtml += `</tbody>`;
    document.getElementById("tblActors").innerHTML = strHtml;
}

function showTblStudios() {
    let strHtml = `<thead><tr><th>Id</th><th>Name</th><th>Foundation date</th><th>Location</th><th>Favourite</tr></thead>`;
    strHtml += `<tbody>`;
    let i = 1;
    for (const studio of studios) {
        strHtml += `<tr><td>${studio.id}</td><td>${studio.name}</td><td>${studio.register_date}</td><td>${studio.location}</td><td><button class="btn" onclick="addFavourite('studio', ${studio.id})"><i class="fa fa-heart-o"></i></button></td></tr>`;
        i++;
    }
    strHtml += `</tbody>`;
    document.getElementById("tblStudios").innerHTML = strHtml;
}

function showTblDirectors() {
    let strHtml = `<thead><tr><th>Id</th><th>Name</th><th>Favourite</tr></thead>`;
    strHtml += `<tbody>`;
    let i = 1;
    for (const director of directors) {
        strHtml += `<tr><td>${director.id}</td><td>${director.name}</td><td><button class="btn" onclick="addFavourite('director', ${director.id})"><i class="fa fa-heart-o"></i></button></td></tr>`;
        i++;
    }
    strHtml += `</tbody>`;
    document.getElementById("tblDirectors").innerHTML = strHtml;
}


function getCurrentUser() {
    let cuser = localStorage.getItem("current_user");
    if (users == null || users == "null" || users == undefined) {
        setCurrentUser(cuser);
        return cuser;
    }
    return JSON.parse(localStorage.getItem("current_user"));
}

function setCurrentUser(user) {
    localStorage.setItem("current_user", JSON.stringify(user));
}

function getUsers() {
    let lusers = localStorage.getItem("users");
    if (lusers == null || lusers == "null" || lusers == undefined) {
        setUsers(users);
        return users;
    }
    return JSON.parse(localStorage.getItem("users"));
}

function setUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}