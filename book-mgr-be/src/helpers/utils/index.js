const getYearByTimeStamp = (ts) => {
	
	const date = new Date(ts);
	
	return date.getFullYear();
	
};

const getDateByTimeStamp = (ts) => {
	
	const date = new Date(ts);
	
	return date.getDate();
};

//console.log(124);

module.exports = {
	getDateByTimeStamp,
	getDateByTimeStamp,
};


 