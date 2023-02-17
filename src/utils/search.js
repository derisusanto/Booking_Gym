import React, { useState } from 'react';

const [query, setQuery] = useState('');

const Search = data => {
	return data.filter(item =>
		keys.some(key => item.category.toLowerCase().includes(query))
	);
};

export default Search;
