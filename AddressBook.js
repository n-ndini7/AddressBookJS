class Contact{
    constructor (...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        let firstNameRegex =RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(firstNameRegex.test(firstName))
        this._firstName=firstName;
        else throw "First Name is Incorrect!! "+firstName;
    }
    get lastName()
    {
        return this._lastName;
    }
    set lastName(lastName){
        let lastNameRegex =RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(lastNameRegex.test(lastName))
        this._lastName = lastName;
        else throw "Last Name is Incorrect!! "+lastName;
    }
    get address(){
        return this._address;
    }
    set address(address){
        let addRegex = RegExp('^[A-Z]{1}[a-z0-9/_  +]{4,}$');
        if(addRegex.test(address))
        this._address=address;
        else throw "Address is Invalid!! "+address;
    }
    get city(){
        return this._city;
    }
    set city(city){
        let cityRegex = RegExp('^[A-Z]{1}[a-z A-Z +]{4,}$');
        if(cityRegex.test(city))
        this._city=city;
        else throw "City is Invalid!! "+city;
    }
    get state(){
        return this._state;
    }
    set state(state){
        let stateRegex = RegExp('^[A-Z]{1}[a-z A-Z+]{4,}$');
        if(stateRegex.test(state))
        this._state=state;
        else throw "State is Invalid!! "+state;
    }
    get zip(){
        return this._zip; 
    }
    set zip(zip){
        let zipRegex = RegExp('^[0-9]{6}$');
        if(zipRegex.test(zip))
        this._zip=zip;
        else throw "ZIP is Invalid!! "+zip;
    }
    get phone(){
        return this._phone;
    }
    set phone(phone){
        let phoneRegex = RegExp('[0-9]{2}[7-9]{1}[0-9]{9}');
        if(phoneRegex.test(phone))
        this._phone=phone;
        else throw "Phone number is Invalid!! "+phone;
    }
    get email(){
        return this._email;
    }
    set email(email){
        let emailRegex = RegExp('^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$');
        if(emailRegex.test(email))
        this._email=email;
        else throw "Email is Invalid!! "+email;
    }
    toString(){
        return "Contact => First Name : "+this.firstName+" , Last Name : "+this.lastName+" \nAddress : "+this.address+" , City : "+this.city+" , State : "+this.state+" , ZIP : "+this.zip+" \nPhone number : "+this.phone+" , Email : "+this.email+"\n \n";
    }
}

let addressBook = new Array();
function addContact(contact){
    name = contact.firstName+" "+contact.lastName;
    let num ="0";
    addressBook.filter(
        contact1 => (name != (contact1.firstName+" "+contact1.lastName))?num++:num 
        );
        if(num==addressBook.length){
            addressBook.push(contact);
            console.log("Contact "+name+" added Successfully!!");
        }else {
            console.log("Duplicate entry not allowed for "+name+ " !!!");
        }
    }    
try{
    let contact1 = new Contact("Emily","Clark","Address 1","Banaras","Uttar Pradesh",123456,919999999999,"ema@yahoo.com");
    addressBook.push(contact1);
    let contact2 = new Contact("Robert","Brown","Address 2","Vellore","Tamil Nadu",777777,919898989898,"rob@gmail.com");
    addressBook.push(contact2);
    let contact3 = new Contact("David","Doughlas","Address 3","Gwalior","Madhya Pradesh",222222,919898989811,"dav@gmail.com");
    addressBook.push(contact3);
    let contact4 = new Contact("Ritu","Sharma","Address 4","Durgapur","West Bengal",232323,919898339811,"ritu@gmail.com");
    addressBook.push(contact4);
}catch(e){
    console.error(e);
}
function findContact(firstName, lastName){
let foundContact = addressBook.find( contact => ((contact.firstName == firstName) && (contact.lastName==lastName)));
if(foundContact != null)
return foundContact;
else 
return "Contact "+firstName+" "+lastName+" does not exist in the Address Book!!";
}
function updateDetails(contact, type , update){
    if(contact.firstName != undefined){
 switch(type){
     case "FIRST_NAME":
         contact.firstName = update;
         console.log("First Name updated of "+contact.firstName+" "+contact.lastName+" Contact!!");
         break;
    case "LAST_NAME":
        contact.lastName = update;
        console.log("Last Name updated of "+contact.firstName+" "+contact.lastName+" Contact!!");
        break;
    case "ADDRESS":
        contact.address = update;
        console.log("Address updated of "+contact.firstName+" "+contact.lastName+" Contact!!");
        break;
    case "CITY":
        contact.city = update;
        console.log("City updated of "+contact.firstName+" "+contact.lastName+" Contact!!");
        break;
    case "STATE":
        contact.state = update;
        console.log("State updated of "+contact.firstName+" "+contact.lastName+" Contact!!");
        break;
    case "ZIP":
        contact.zip = update;
        console.log("ZIP updated of "+contact.firstName+" "+contact.lastName+" Contact!!"); 
        break;
    case "PHONE":
        contact.phone = update;
        console.log("Phone number updated of "+contact.firstName+" "+contact.lastName+" Contact!!");
        break;
    case "EMAIL":
        contact.email = update;
        console.log("Email updated of "+contact.firstName+" "+contact.lastName+" Contact!!"); 
        break;
    default :
        console.log("Property does not exist!!");
        break;
 }
}
 return contact;
}
function deleteContact(firstName,lastName){
    let deleteContact = findContact(firstName,lastName);
 if(deleteContact.firstName != undefined){
     addressBook.pop(findContact(firstName,lastName));
     console.log("Contact "+firstName+" "+lastName+" removed successfully!!");
 }else{
     console.log("Contact "+firstName+" "+lastName+" does not exist!");
 }
}
function searchContact(firstName,lastName,typeOfSearch,key){
    switch(typeOfSearch){
    case "CITY":
     let found= addressBook.find(contact => ((contact.city==key)&&(contact.firstName == firstName) && (contact.lastName==lastName)));
     if(found != null){
         console.log("Contact Found!!");
        return found;
     }else 
     {
         return "Contact "+firstName+" "+lastName+" does not exist in "+key+" !";
            break;
    }
    case "STATE":
        let found2= addressBook.find(contact => ((contact.state==key)&&(contact.firstName == firstName) && (contact.lastName==lastName)));
        if(found2 != null){
            console.log("Contact Found!!");
           return found2;
        }else 
        {
            return "Contact "+firstName+" "+lastName+" does not exist in "+key+" !";
       }   
    default :
    console.log("No such search can be performed!");
    }
}
console.log("Sort Address Book by Choice!");
var size = addressBook.reduce(function(n,contact){
   return n+(contact.firstName != 'undefined');
},0);
function viewBychoice(typeOfView,key){
    switch(typeOfView){
        case "CITY":
            return  addressBook.filter(contact => contact.city == key).map(contact1 => contact1.toString());
        case "STATE":
            return  addressBook.filter(contact => contact.state == key).map(contact1 => contact1.toString());
        default:
            console.log("Wrong Choice entered!!");
            break;
    }
}
function sortByfirstName(){
    return addressBook.sort((contact1,contact2) => (contact1.firstName).localeCompare(contact2.firstName));
}
function sortByChoice(choice)
{
   switch(choice){
       case "CITY":
            return addressBook.sort((contact1,contact2) => (contact1.city).localeCompare(contact2.city));
        case "STATE":
            return addressBook.sort((contact1,contact2) => (contact1.state).localeCompare(contact2.state));   
        case "ZIP":
            function compare(contact1,contact2){
                if(contact1.zip > contact2.zip) return 1;
                if(contact1.zip < contact2.zip) return -1;
            }
            return addressBook.sort(compare);
        default :
            console.log("Wrong choice entered!!");
            break;
   } 
}
console.log("Sorted Address Book by City :"+sortByChoice("CITY"));
console.log("Sorted Address Book by State :"+sortByChoice("STATE"));
console.log("Sorted Address Book by ZIP :"+sortByChoice("ZIP"));