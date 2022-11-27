var myDBInstance = openDatabase('dbSibeeshPassion', '1.0', 'This is a client side database', 2 * 1024 * 1024);

if (!myDBInstance) {
    alert('Oops, your database was not created');
}
else {
    var version = myDBInstance.version;
}

