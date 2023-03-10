// String Literal
// template literal
const firstName = "Yagnesh";

const lastName = "Modh";

// Yagnesh Modh

// const fullName = firstName + ' ' + lastName;

const fullName = `${firstName} ${lastName}`;

console.log(fullName);

// Yagnesh's car

// const pos = firstName + '\'s car';

const pos = `${firstName}'s car`;

console.log(pos);

// const html = '<!DOCTYPE html>' +
// '\n<html lang="en">' +
// '\n<head>' +
//     '\n\t<meta charset="UTF-8">' +
//     '\n\t<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
//     '\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
//     '\n\t<title>Document</title>' +
// '\n</head>' +
// '\n<body>'
//     '\n' +
// '\n</body>' +
// '\n</html>';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;

console.log(html);

// const a = 1;
// const b = 'a';
// const c = 2;

// console.log(a + b + c);
