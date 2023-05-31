import doughtSizes from '@/common/data/doughSizes';
import sizes from '@/common/data/sizes';
import sauces from '@/common/data/sauces';
import ingredients from '@/common/data/ingredients';

export const normalizeDough = dough => {
	return {
	  ...dough,
	  size: dough.id ? doughtSizes[dough.id] : '',
	};
  };

export const normalizeSize = size => {
	return {
	  ...size,
	  diametr: size.id ? sizes[size.id] : '',
	};
};

export const normalizeSauce = sauce => {
	return {
	  ...sauce,
	  eng_name: sauce.id ? sauces[sauce.id] : '',
	};
};

export const normalizeIngredient = ingredient => {
	return {
	  ...ingredient,
	  eng_name: ingredient.id ? ingredients[ingredient.id] : '',
	};
};