import getSpecialAttack from '../js/app';

test('getSpecialAttack', () => {
	const character = {
		name: 'Лучник',
		type: 'Bowman',
		health: 50,
		level: 3,
		attack: 40,
		defence: 10,
		special: [{
			id: 8,
			name: 'Двойной выстрел',
			icon: 'http://...',
			description: 'Двойной выстрел наносит двойной урон'
		}, 
		{
			id: 9,
			name: 'Нокаутирующий удар',
			icon: 'http://...'
		}]	
	}
	const result = [{
		name: 'Двойной выстрел',
		id: 8,
		icon: 'http://...',
		description: 'Двойной выстрел наносит двойной урон'
	},
	{
		name: 'Нокаутирующий удар',
		id: 9,
		icon: 'http://...',
		description: 'Описание недоступно'
	}];
	expect(getSpecialAttack(character)).toEqual(result);
});