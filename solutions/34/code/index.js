const dnaToRna = {
	G: 'C',
	C: 'G',
	T: 'A',
	A: 'U'
}

const transcription = (dna) =>
	dna
		.split('')
		.map((char) => dnaToRna[char])
		.join('')
