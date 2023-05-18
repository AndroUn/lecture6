//დავალება 1

function changeWord(string, valueToReplace, valueToReplaceWith){
    const wordLength = valueToReplace.length
    const startIndex = string.indexOf(valueToReplace)
    const string2 = string.slice(0,startIndex) + valueToReplaceWith + string.slice(startIndex + wordLength)
    console.log(string)
    console.log(string2)
}


changeWord('Hello skillwill, how are you?','skillwill','friend')

//დავალება 2

function upperCase(string){
    let result = string.toUpperCase()
    console.log(result)

    let result2 = string.split(" ").map((w) => w[0].toUpperCase() + w.slice(1))
    console.log(result2.join(" "))

}

upperCase('hello, my name is Andro')



//დავალება 3

const array = [{name: 'Lasha', age: 30}, {name: 'Saba', age: 20}, {name: 'Giorgi', age: 43}, {name: 'Tekla', age: 19}]  


function sortAges(arr){
        arr.sort(function(a, b){return a.age - b.age})
        console.log(arr)

}

sortAges(array)
