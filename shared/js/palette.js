const basicCols = {

	newsMain: '#c70000',
	newsDark: '#880105',
	newsBright: '#ff4e36',
	newsPastel: '#ffbac8',
	newsFaded: '#fff4f2',
	opinionMain: '#e05e00',
	opinionDark: '#bd5318',
	opinionBright: '#ff7f0f',
	opinionPastel: '#f9b376',
	opinionFaded: '#fef9f5',
	sportMain:  '#0084c6',
	sportDark: '#005689',
	sportBright: '#00b2ff',
	sportPastel: '#90dcff',
	sportFaded: '#f1f8fc',
	cultureMain: '#a1845c',
	cultureDark: '#6b5840',
	cultureBright: '#eacca0',
	culturePastel: '#e7d4b9',
	cultureFaded: '#fbf6ef',
	lifestyleMain: '#bb3b80',
	lifestyleDark: '#7d0068',
	lifestyleBright: '#ffabdb',
	lifestylePastel: '#fec8d3',
	lifestyleFaded: '#feeef7',
	neutral7: '#121212',
	neutral20: '#333333',
	neutral46: '#767676',
	neutral60: '#999999',
	neutral86: '#dcdcdc',
	neutral92: '#eaeaea',
	neutral96: '#f6f6f6',
	neutral100: '#ffffff',
	brandMain: '#052962',
	brandDark: '#041f4a', 
	brandPastel: '#506991',
	highlightMain: '#ffe500',
	highlightDark: '#ffbb50',
	specialDark: '#3f464a',
	labsMain: '#69d1ca',
	labsDark: '#65a897',
	greenMain: '#3db540',
	greenDark: '#236925',
	liveRed: '#ae0000'
}

const chartCols = {
	guRed: basicCols.newsBright,
	guDarkred: basicCols.newsMain,
	guBlue: basicCols.sportBright,
	guDarkblue: basicCols.sportMain,
	guOrange: basicCols.opinionBright,
	guDarkorange: basicCols.opinionDark
}

const aliases = {
	red : chartCols.guRed,
	darkred : chartCols.guDarkred,
	blue : chartCols.guBlue,
	darkblue : chartCols.guDarkblue,
	orange : chartCols.guOrange,
	darkorange : chartCols.guDarkorange
}


export default Object.assign({}, basicCols, chartCols, aliases)