export default function getSpecialAttack(character) {
    const result = [];

	character.special.forEach((item) => {
		const {
			name,
			id,
			icon,
			description = 'Описание недоступно',
		} = item;
		result.push({
			name,
			id,
			icon,
			description,
		});
	});

	return (result);
}