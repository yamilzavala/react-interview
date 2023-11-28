//'This' always get the reference to the parent
//windows context
function getThisContext() {
    console.log(this)
}
getThisContext()

//object context
const obj = {
    name: 'paul',
    getThisObj() {
        console.log(this)
    }
}
obj.getThisObj()

//class context
class Item {
    name = 'item name';

    getThisClass() {
        console.log(this)
    }

    getNestedThis() {
        let _this = this; //fix - get this reference
        function someFc(){
            console.log(this)//this return undefined
            console.log(_this)//fix undefined return and return Item instance
        }
        someFc();

        const fixThisNested = () => {
            console.log(this)
        }
        fixThisNested()
    }
}
const newInstance = new Item()
newInstance.getThisClass()
newInstance.getNestedThis()