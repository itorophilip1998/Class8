// advance sort array of objects by multiple keys
const array = [1, 2, 3, 4, 5, 6, 7, 100, 25]
console.log(array) // main array

// Sort numbers in ascending order
const sortedAscending = array.sort((a, z) => a - z);

// sort number in descending order
const sortedDescending = array.sort((a, z) => z - a);

const arrayOfPeople = [
    {
        name: 'Jane', age: 25, city: 'Los Angeles', community: {
            name: 'T',
            members: 1200
        }
    },
    {
        name: 'Mike', age: 30, city: 'Chicago', community: {
            name: 'A',
            members: 5700
        },
    },
    {
        name: 'Alice', age: 18, city: 'New York', community: {
            name: 'B',
            members: 1400
        }
    },
    {
        name: 'Bob', age: 22, city: 'Los Angeles', community: {
            name: 'C',
            members: 100
        }
    },

];
// Sort array of objects by age in ascending order
const sortedByAgeAscending = arrayOfPeople.sort((start, end) => start.community.members - end.community.members);
console.log(sortedByAgeAscending);