function Human(name, gender) {
    this.name = name;
    this.gender = gender;
};

function Apartment() {
    this.residents = [];
};

Apartment.prototype.addResident = function(human) {
    this.residents.push(human);
};

function Building(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
};

Building.prototype.addApartment = function(apartment) {
    if (this.apartments.length < this.maxApartments) {
        this.apartments.push(apartment); 
    } else {
        console.log("Досягута максимальна кількість квартир");
    }
};

const human1 = new Human('Petro', 'male');
const human2 = new Human('Marichka', 'female');
const human3 = new Human('Volodymyr', 'male');

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(human1);
apartment2.addResident(human2);

const building1 = new Building(10);
building1.addApartment(apartment1);
