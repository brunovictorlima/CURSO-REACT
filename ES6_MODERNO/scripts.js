// 1 - VAR, LET E CONST

/* teste exemplificando o funcionamento da variável var
que sua alteração, mesmo dentro de uma função, afeta
o escopo global. */

var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x);
}

console.log(x);

/* usando a variável let, a nova declaração dentro da função
cria uma nova variável, ainda que tenha o mesmo nome
não influenciará na variável declarada anteriormente
no escopo global, existindo apenas
enquanto existir a função. */

let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log(a);
}

console.log(a);

/* Em constantes, o funcionamento por escopo de bloco
é igual em variáveis 'let',
como é possível ver no teste abaixo: */

function logName() {
  const name = "Bruno";
  console.log(name);
}

const name = "Alane";
logName();
console.log(name);

// 2 - ARROW FUNCTION

// a. declaração de função normal

const sum = function sum(a, b) {
  return a + b;
};
// declaração de função com sintaxe reduzida usando
// arrow function

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return "Olá " + name + "!";
  } else {
    return "Olá!";
  }
};

console.log(greeting("Bruno"));
console.log(greeting());

const testeArrow = () => console.log("testou!");
testeArrow();

/* Exemplo de perda de referência do 'this' 
quando dentro de um objeto tem uma função
e dentro da função tem outra função */

/* As saídas no console mostram que a primeira função
retorna o objeto Window e depois Username vazio.
Já a arrow function retorna o objeto pai (user)
e o Username correto (Theo). */

const user = {
  name: "Theo",
  sayUserName() {
    setTimeout(function () {
      console.log(this);
      console.log("Username: " + this.name);
    }, 500);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log("Username: " + this.name);
    }, 700);
  },
};

// user.sayUserName();
// user.sayUserNameArrow();

/* comandos acima foram comentados pois estão
com timeout e atrapalham a visualização das respostas
dos testes seguintes */

/* Para resolver este problema de referência do this
sem o uso de arrow function, declara-se uma var
e atribui o this ANTES da segunda função, para que
a variável armazene a referência ainda correta.
Após isso, substitui-se o this pelo nome da var
(usa-se 'self' ou 'that') */

// 3 - FILTER

const arr = [1, 2, 3, 4, 5];
const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(highNumbers);

const users = [
  { name: "Matheus", available: true },
  { name: "Pedro", available: false },
  { name: "João", available: false },
  { name: "Marcos", available: true },
];

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);

// 4 - MAP

/* O map tem o poder de alterar elementos de um array */

const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira Elétrica", price: 49.99, category: "Eletro" },
  { name: "Fogão", price: 400, category: "Eletro" },
  { name: "Calça jeans", price: 50.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);

// 5 - TEMPLATE LITERALS

const userName = "Matheus";
const age = 30;
// escrevendo com template literals
console.log(`O nome do usuário é ${userName} e ele tem ${age} anos.`);
// escrevendo da forma antiga
console.log("O nome do usuário é " + userName + " e ele tem " + age + " anos.");

// 6 - DESTRUCTURING

/* Definição: O destructuring em JavaScript é
uma técnica poderosa que permite extrair valores
de arrays ou objetos e atribuí-los a variáveis 
individuais de forma simples e concisa. */

const fruits = ["Maçã", "Laranja", "Mamão"];
const [f1, f2, f3] = fruits;

console.log(f1);
console.log(f3);

const productDetails = {
  name: "Mouse",
  price: 39.99,
  category: "Periféricos",
  color: "Cinza",
};

const {
  name: productName,
  price,
  category: productCategory,
  color,
} = productDetails;

console.log(
  `O nome do produto é ${productName}, custa R$ ${price}, pertence a categoria ${productCategory} e é da cor ${color}.`
);

// 7 - SPREAD OPERATOR (operador de propagação)

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];
// o spread operator concatena os dados dos 2 arrays
// formando um novo array
console.log(a3);

const a4 = [0, ...a1, 4];

console.log(a4);

const carName = { name: "Gol" };
const carBrand = { brand: "VW" };
const otherInfos = { km: 100000, price: 49000 };

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 };
// É como se os '...' dissessem: quero só os dados,
// não quero a variável, nem o array, nem o objeto
// SÓ OS DADOS kkkk

console.log(car);

// 8 - CLASSES

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa gola v", 20);

console.log(shirt.name);
console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(50));

const tenis = new Product("Tênis verde", 120);
console.log(tenis.productWithDiscount(20));

// 9 - HERANÇA
// Basicamente significa herdar atributos de outra classe
// usando 'extends' e 'super'

class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price); //'super' diz: use as infos da classe herdada
    this.colors = colors;
  }
  showColors() {
    console.log("As cores são:");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, [
  "Preto",
  "Azul",
  "Verde",
]);

console.log(hat.name);
console.log(hat.productWithDiscount(30));
hat.showColors();
