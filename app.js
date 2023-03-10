let allInOne = [];



const auto = {
	truck: [],
	sedan: [],
};

// auto => label , wheels , price
function Auto(label, price) {
	const auto = {
		label: label,
		wheels: 4,
		price: price,
	};

	return auto;
}

// label
// wheels
// price
// *-----------
// type = sedan
// color = color
// wheels = 4
// signal () => beeeep

function Sedan(label, price, color, wheels) {
	const sedan = Object.assign(Auto(label, price, wheels), {

		color,
		type: "sedan",
		signal: () => console.log("beeeep"),
	});
	if (label !== undefined && price !== undefined && color !== undefined) {
		auto.sedan.push(sedan);
	}

	return sedan;
}

const sedan1 = Sedan("WV", 12000, "metallic");
const sedan2 = Sedan("Porsche", 140000, "red");
const sedan3 = Sedan("Toyota", 15000, "blue")

console.log(auto.sedan);

// label
// wheels
// price
// *-----------
// type = truck
// color = color
// wheels = 8
// signal () => WoooooW

function Truck(label, price, color) {
	const truck = Object.assign(Auto(label, price), {

		color,
		wheels: 8,
		type: "truck",
		signal: () => console.log("WoooooW"),
	});
	if (label !== undefined && price !== undefined && color !== undefined) {
		auto.truck.push(truck);
	}

	return truck;
}
const truck1 = Truck("Volvo", 130000, "blue");
const truck2 = Truck("Man", 160000, "white");
const truck3 = Truck("KraZ", 300000, "green");

console.log(auto.truck);




let truckLabel = auto.truck.map(({ label }) => `${label}`)

console.log(truckLabel);


const sumPriceSedan = auto.sedan.reduce(
	(accumulator, currentValue) => accumulator + currentValue.price,
	0
);
console.log(sumPriceSedan);

const sumPriceTruck = auto.truck.reduce(
	(accumulator, currentValue) => accumulator + currentValue.price,
	0
);
console.log(sumPriceTruck);

const sumPriceAuto = sumPriceSedan + sumPriceTruck;
console.log(sumPriceAuto);

function sum(truck, sedan) {
	let sumAuto = sedan.concat(truck)
	return sumAuto;
}

allInOne = sum(auto.sedan, auto.truck)
console.log(allInOne);

let onlySedan = [];

for (let i = 0; i < allInOne.length; i++) {

	for (let key in allInOne[i]) {
		if (allInOne[i][key] == "sedan") {
			onlySedan.push(allInOne[i]);
		}
	}
}

console.log(onlySedan);

let onlyTruck = [];

for (let i = 0; i < allInOne.length; i++) {

	for (let key in allInOne[i]) {
		if (allInOne[i][key] == "truck") {
			onlyTruck.push(allInOne[i]);
		}
	}
}

console.log(onlyTruck);


let findItem = allInOne.find((el, idx) => typeof el === "object" && idx === 1);
console.log(findItem);


let findItemByIndex = [];

for (let i = 0; i < allInOne.length; i++) {

	for (let key in allInOne[i]) {
		if (allInOne[i][key] == "Man") {
			findItemByIndex.push(allInOne[i - 1]);
			findItemByIndex.push(allInOne[i + 1]);
		}
	}
}

console.log(findItemByIndex);




// Amount of trucks / sedans => by 3

//* 1) get all trucks label and print it to the console
//* 2) How much cost : all sedans , all trucks , and then all auto
//* 3) Concat arr truck and sedan in allInOne
//* 4) Get from allInOne only truck , only sendan
//* 5) Find elem by index '1' in allInOne and next + prev => [prev , 1 ,next]
