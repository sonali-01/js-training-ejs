/*
Model a person using javascript object. It can have properties like firstName, lastName, age..
*/
let alice = {
  firstName: "Alice",
  lastName: "Swan",
  nickName: "Alice",
  age: 30,
  height: 5,
  bloodGroup: "O+ve",
  address: {
    locality: "Konchady",
    city: "Mangalore",
    state: "Karnatka",
    postalCode: 576105,
  },
  email: "alice@gmail.com",
  jobTitle: "Software Engineer",
  jobExperience: 5,
  birthDate: "1979-10-12",
  starSign: "Aries",
  gender: "female",
  hobbies: ["Drawing", "Cooking", "dancing"],
  domainInterest: ["react.js", "java", "node.js"],
  telephone: "+91 90000000",
  socialMediaAccounts: [
    "www.facebook.com/alice",
    "www.linkedin.com/alice",
    "www.twitter.com/alice",
  ],
};
//console.log(alice.firstName);
/*
Model bank account as a javascript object.
*/
let bankAccount = {
  branchName: "Mangalore",
  branchCode: 0630,
  accountNo: 12341238901,
  cifNo: 12345678901,
  customerName: "Alice Swan",
  address: {
    locality: "Konchady",
    city: "Mangalore",
    state: "Karnatka",
    postalCode: 575008,
  },
  ifscCode: "SBIB1235435",
  micrCode: 987654321,
  dob: "1979-10-12",
  phone: 9876543210,
  email: "sbi@sbi.co.in",
  dateOfIssue: "14/12/2016",
};

/*
Model state of your favorite computer game as a javascript object.
*/
let game = {
  puzzle: ["Brain Age", "Tetris", "cubes"],
  boardGame: ["chess", "Ludo", "checkers", "monopoly"],
  cardGame: ["UNO", "Spider Solitaire"],
};

/*
Model shopping list as an object. Each item in the list is also an object.
*/
let shopList = {
  foodStuff: {
    vegetables: {
      names: ["Tomatoes", "Onions", "Carrrots", "Mushrooms"],
      quantity: 10,
    },
    fruits: {
      names: ["Apple", "Grapes", "Oranges", "Cherries"],
      quantity: 10,
    },
    dairy: {
      names: ["Butter", "Milk", "Yogurt", "Cheese", "Cream"],
      quantity: 5,
    },
    snacks: {
      names: ["Cookies", "Candy", "Popcorn", "Crackers"],
      quantity: 5,
    },
  },
  houseHold: {
    personalCare: {
      names: ["Bath Soap", "Shampoo", "Lotion", "Toothpaste"],
      quantity: 2,
    },
    Medicine: {
      names: ["Allergy", "Aspirin", "Pain Reliever"],
      quantity: 2,
    },
    Kitchen: {
      names: ["Plastic Wrap", "Aluminum Foil", "Napkins"],
      quantity: 2,
    },
    cleaningStuff: {
      names: ["Air Freashener", "Dish soap", "Bleach"],
      quantity: 2,
    },
  },
};
console.log(shopList.foodStuff.snacks.names);
/*
Model a credit card as a javascript object.
*/
let creditCard = {
  creditCardIssuer: "ICICI Bank",
  creditCardName: "Credit Card",
  creditCardNetwork: "VISA",
  creditCardNumber: 1234567890123456,
  expirationDate: "03/22",
  cardHolderName: "Alice Swarn",
  cvcCode: 1234,
};

/*
Model a car as a javascript object. 
*/
let car = {
  marutiSuzukiy: {
    alto: {
      color: ["White", "Grey", "Silver", "Red"],
      fuelType: "Petrol",
      startingPrice: "2.94 Lakh",
    },
    baleno: {
      color: ["White", "Grey", "Silver", "Red"],
      fuelType: "Petrol",
      startingPrice: "5.63 Lakh",
    },
    vitaraBrezza: {
      color: ["White", "Grey", "Silver", "Red"],
      fuelType: "Petrol",
      startingPrice: "7.34 Lakh",
    },
  },
  tataMotos: {
    tataNexon: {
      color: ["White", "Grey", "Silver", "Red"],
      fuelType: "Petrol & Diesel",
      startingPrice: "7.00 Lakh",
    },
    tiago: {
      color: ["White", "Grey", "Silver", "Red"],
      fuelType: "Petrol",
      startingPrice: "4.68 Lakh",
    },
    tigor: {
      color: ["White", "Grey", "Silver", "Red"],
      fuelType: "Petrol",
      startingPrice: "5.42 Lakh",
    },
  },
};

/*
Model a file in computer as javascript object. 
*/
let file = {
  cDrive: {
    users: {
      files: ["Lenovo", "Public"],
    },
    programFiles: {
      files: ["Git", "Java", "Intel"],
    },
  },
  eDrive: {
    webProject: {
      files: ["css", "adminPage", "indexPage"],
    },
  },
  fDrive: {
    seminar: {
      files: ["ppt", "report", "IEEE Paper"],
    },
  },
};

/*
 Model a recipe of a dish as an object
 */
let recipe = {
  drinks: {
    hotChocolate: [
      "i Cup Milk",
      "1 Cup Chocolate",
      "2-3 tbsp Cocoa powder",
      "1/2 cup Powdered sugar",
    ],
    tiramisu: [
      "3 Eggs",
      "250 Gram Mascarpone cheese",
      "150 Gram Sugar",
      "3 Long expresso coffees",
      "biscuits",
    ],
    LemonMargarita: ["40 ml lemon juice", "10 ml vanilla liqueur"],
  },
  dessert: {
    cookies: [
      "2 1/4 all purpose flour",
      "1 tsp baking soda",
      "1/2 tsp salt",
      "2 Eggs",
      "3/4 cup granulated sugar",
    ],
    Tart: [
      "500 gms white butter",
      "250 gms breakfast sugar",
      "100 ml milk full fat",
      "750 gms refined flour",
      "200 gms ghee",
      "1 kg winter carrots",
    ],
  },
};

/*
 Model a book as an object
 */
let book = {
  fiction: {
    fantasy: ["Harry Potter Series", "The Name of the Wind"],
    horror: ["Dracula", "The Tell-Tale Heart"],
    mystery: ["The Little Death", "The Secret History of Las Vegas"],
  },
  nonFiction: {
    food: [
      "Smoked Everything",
      "The Dude Guide to BBQ",
      "The Fine Art of Backyard Grilling",
    ],
    history: ["Grant", "The History of the Ancient World", "Hitler"],
    health: [
      "The Fit Bottomed Girl’s Anti-Diet",
      "The Big Fat Surprise",
      "Foodist",
    ],
  },
};

/*
 Model a restaurant menu as an object
 */
let restaurantMenu = {
  soup: {
    veg: ["Tomato", "Baby Corn", "Green Pea", "manchow"],
    nonveg: ["chicken manchow", "Crabmeat", "seafood"],
  },
  appetizer: ["Pakoras", "Samosa", "Vada Pav"],
  bread: ["Naan", "Roti", "Paratha", "Poori"],
  mainCourse: {
    rice: ["Pulao", "Biryani", "Fried rice"],
    noodles: ["Chow mein", "Hakka noodles"],
    curry: ["Butter Chicken", "Dal", "Tikka Masala"],
  },
  dessert: ["ice cream", "Tiramisu", "CheeseCake"],
};
/* for each of the above draw object diagram with name binding being 
    the tentacle to actual values of the properties.
    You can use https://excalidraw.com
*/
