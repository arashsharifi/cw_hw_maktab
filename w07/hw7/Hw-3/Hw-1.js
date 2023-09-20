
let Anagrams=["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr){
    let lowerCase=arr.map(element => {
         element=element.toLowerCase()
         return element
    });
    let sort= lowerCase.map(item => {
    let sortItem=item.split('').sort().join('')
    return sortItem
    });
    let newList=new Set(sort)
    return newList
}

console.log(aclean(Anagrams));

// ----------------------------------------------------------------------

