

const nums = [1, 2, 3, 4, 5]

function squared(an_array){
    let squared = []
    for (i=0; i<an_array.length; i++){
        squared.push(an_array[i]*an_array[i])
    }
    return squared
}

some_nums = squared(nums)
console.log(some_nums)

const squared_map = nums.map(function(item){
    return item*item})

console.log(squared_map)

const names = ["alice", "bob", "charlie", "danielle"]

const capital = names.map(function(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
})

console.log(capital)

const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle']

const add_p_tags = pokemon.map(pokemon =>{
    return '<p>' + pokemon + '</p>'
})

console.log(add_p_tags)