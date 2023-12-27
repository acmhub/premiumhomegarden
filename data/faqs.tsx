interface FAQ {
	question: string;
	answer: JSX.Element;
}

const faqs: FAQ[] = [
	{
		question: "Cât costă un/o ...",
		answer: (
			<>
				Costul depinde de configurarea dorită, de aceea vă recomandăm să ne solicitați o ofertă de preț
				personalizată.
			</>
		),
	},
	{
		question: "De ce am nevoie pentru a primi o ofertă de preț?",
		answer: (
			<>
				Pentru a vă putea realiza o ofertă de preț aproximativă, avem nevoie de dimensiunile relative și toate
				specificațiile pe care vrei să le regăsești în lucrarea ta - performanțe, culoare, buget, etc.
			</>
		),
	},
	{
		question: "Când veniți la măsurători?",
		answer: (
			<>
				Realizăm măsurători gratuite pentru lucrările care se contractează. Trebuie doar să ne contactați pentru
				o ofertă de preț gratuită și să achitați un avans.
			</>
		),
	},
	{
		question: "Cum pot achita serviciile?",
		answer: (
			<>
				Serviciile firmei noastre pot fi achitate în numerar la sediul nostru sau prin virament bancar în contul
				firmei, care apare în contractul de prestări servicii. Avansul se platește la semnarea contractului, iar
				diferența în ziua montajului.
			</>
		),
	},
	{
		question: "Cât durează execuția și montajul?",
		answer: (
			<>
				În funcție de specificațiile lucrării, firma noastră poate asigura execuția unei lucrări într-un
				interval de timp cuprins între 7 zile lucrătoare și termenul maxim oferit de furnizorii noștri.
			</>
		),
	},
	{
		question: "Ce fac dacă apar defecțiuni?",
		answer: (
			<>
				Oferim o garanție de 3 ani pentru execuție și montaj, iar produsele noastre beneficiază de o garanție
				individuală oferită de producător. Vă rugăm să ne contactați și vom găsi o soluție la orice problemă
				întâmpinați.
			</>
		),
	},
];

export default faqs;
