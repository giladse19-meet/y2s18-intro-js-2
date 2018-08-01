// Create your 'me' object literal here!
var me = {
	firstName: 'Gilad',
	lastName: 'Segev',
	favoriteFoods: ['pasta', 'pizza', 'bread'],
	age: 16,
	picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png'
}
var me_str = JSON.stringify(me);
document.write(me_str);