import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    // this needs to not be 'Hello' or 'root'. These will need to be changed 
    // to fit the contents that I will need to effect. Info needing to be read from
    // the database: customerName, service, width,length, quote.
    // React.createElement('h1', null, 'Hello'),
    // document.getElementById('root')
);

function previousJobData(user){
    return user.name.length > 0 && user.data.length >0;
}
function filterInvailidData(users){
    var validData = [];
    for (var user of users) {
        if (previusJobData (user)) {
            validData.push(user);
        }
    }
    return validData;
}
// This is the rest of the above example from Exeter. the info needs to
// change based upon my data stores in the db.
// function userToFormattedString(user) {
//     return 'name: ' + user.name + '\nrole: ' + user.role;
// }

// var users = [
//     {
//         name: 'Kirk Douglass',
//         password: 'iamspartacus',
//         role: 'revolutionary'
//     },
//     {
//         name: 'Charlie Chaplain',
//         password: '',
//         role: 'tramp'
//     },
//     {
//         name: 'Harrison Ford',
//         password: 'AnythingButSnakes',
//         role: 'archaeologist'
//     }
// ];

// var validUsers = filterInvalidUsers(users);

// for (var i = 0; i < validUsers.length; i++) {
//     console.log(userToFormattedString(validUsers[i]));
// }
