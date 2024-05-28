class person{
    constructor(Name,ID,Batch){
    this.Name= Name,
    this.ID= ID,
    this.Batch=Batch
    }
}
const Man1=new person("Sathish",22654,"3rd");
const Man2=new person("Nithish",22653,"3rd")
const Man3=new person("harish",22652,"3rd")
const Man4=new person("Ramesh",22651,"3rd")
const Man5=new person("Kamalesh",22650,"3rd")
console.log(Man1);
console.log(Man2);
console.log(Man3);
console.log(Man4);
console.log(Man5);
console.log(Man1.Name);
console.log(Man2.Name);
console.log(Man3.Name);
console.log(Man4.Name);
console.log(Man5.Name);


console.log(Man1.ID);
console.log(Man2.ID);
console.log(Man3.ID);
console.log(Man4.ID);
console.log(Man5.ID);

console.log(Man1.Batch);
console.log(Man2.Batch);
console.log(Man3.Batch);
console.log(Man4.Batch);
console.log(Man5.Batch);

console.log(`First nameof Man1=${Man1.Name}`)