const routes: Route[] = [
	{
		id: 0,
		path: "/",
		label: "Acasă",
	},
	{
		id: 1,
		path: "/despre-noi",
		label: "Despre noi",
	},
	{
		id: 2,
		path: "/servicii",
		label: "Servicii",
	},
	{
		id: 3,
		path: "/produse",
		label: "Produse",
		isDropdown: true,
		dropdown: {
			windoor: {
				label: "Ferestre și Uși",
				links: [
					{
						path: "/produse/tamplarie-pvc",
						label: "Tâmplărie PVC",
						icon: "/images/icons/products/pvc-icon.svg",
						highlight: "/images/products/tamplarie-pvc/highlight.webp",
					},
					{
						path: "/produse/tamplarie-aluminiu",
						label: "Tâmplărie Aluminiu",
						icon: "/images/icons/products/aluminium-icon.svg",
						highlight: "/images/products/tamplarie-aluminiu/highlight.webp",
					},
					{
						path: "/produse/tamplarie-lemn",
						label: "Tâmplărie Lemn Stratificat",
						icon: "/images/icons/products/wood-icon.svg",
						highlight: "/images/products/tamplarie-lemn/highlight.webp",
					},
					{
						path: "/produse/usa-metalica",
						label: "Ușă Metalică",
						icon: "/images/icons/products/metalicdoor-icon.svg",
						highlight: "/images/products/usa-metalica/highlight.webp",
					},
					{
						path: "/produse/usa-antifoc",
						label: "Ușă Antifoc",
						icon: "/images/icons/products/firedoor-icon.svg",
						highlight: "/images/products/usa-antifoc/highlight.webp",
					},
				],
			},
			exterior: {
				label: "Exterior",
				links: [
					{
						path: "/produse/pergola",
						label: "Pergolă",
						icon: "/images/icons/products/pergola-icon.svg",
						highlight: "/images/products/pergola/highlight.webp",
					},
					{
						path: "/produse/copertina",
						label: "Copertină",
						icon: "/images/icons/products/canopy-icon.svg",
						highlight: "/images/products/copertina/highlight.webp",
					},
					{
						path: "/produse/usa-garaj",
						label: "Ușă de Garaj",
						icon: "/images/icons/products/garage-icon.svg",
						highlight: "/images/products/usa-garaj/highlight.webp",
					},
					{
						path: "/produse/perete-antivant",
						label: "Perete Antivânt",
						icon: "/images/icons/products/garage-icon.svg",
						highlight: "/images/products/perete-antivant/highlight.webp",
					},
				],
			},
			accessories: {
				label: "Accesorii",
				links: [
					{
						path: "/produse/panel-ornamental",
						label: "Panel Ornamental Aluminiu",
						icon: "/images/icons/products/panel-ornamental-icon.svg",
						highlight: "/images/products/panel-ornamental/highlight.webp",
					},
					{
						path: "/produse/rulou-exterior",
						label: "Rulou Exterior Aluminiu",
						icon: "/images/icons/products/exterior-roller-icon.svg",
						highlight: "/images/products/rulou-exterior/highlight.webp",
					},
					{
						path: "/produse/rolete-textile",
						label: "Rolete Textile",
						icon: "/images/icons/products/textile-roller-icon.svg",
						highlight: "/images/products/roleta-textila/highlight.webp",
					},
					{
						path: "/produse/plasa-insecte",
						label: "Plasă contra Insectelor",
						icon: "/images/icons/products/insect-icon.svg",
						highlight: "/images/products/plasa-insecte/highlight.webp",
					},
				],
			},
			sticla: {
				label: "Sticlă",
				links: [
					{
						path: "/produse/balustrada",
						label: "Balustradă",
						icon: "/images/icons/products/railing-icon.svg",
						highlight: "/images/products/balustrada/highlight.webp",
					},
					{
						path: "/produse/perete-cortina",
						label: "Perete Cortină",
						icon: "/images/icons/products/curtain-wall-icon.svg",
						highlight: "/images/products/perete-cortina/highlight.webp",
					},
					{
						path: "/produse/sticla",
						label: "Sticlă",
						icon: "/images/icons/products/curtain-wall-icon.svg",
						highlight: "/images/products/sticla/highlight.webp",
					},
				],
			},
		},
	},
	{
		id: 4,
		path: "/portofoliu",
		label: "Portofoliu",
	},
	{
		id: 5,
		path: "/contact",
		label: "Contact",
	},
];

export default routes;
