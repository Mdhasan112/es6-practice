const ages = [10, 23, 50, 34];
const ages2 = [30, 31, 39, 33];
const ages3 = [22, 44, 15, 10]

//  const allAges = ages.concat(ages2).concat(ages3);
//                     or 
 const allAges2 = [...ages, ...ages2, ...ages3];
console.log(allAges2)

const business = 650;
const minister = 350;
const sochib = 450;
const takapoysa = [650, 350, 450];
const maximum = Math.max(business, minister, sochib);
const maximum2 = Math.max(...takapoysa);
console.log(maximum2)