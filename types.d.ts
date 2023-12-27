interface Route {
	id: number;
	path: string;
	label: string;
	isDropdown?: boolean;
	dropdown?: {
		[key: string]: {
			label: string;
			links: {
				path: string;
				label: string;
				icon: string;
				highlight: string;
			}[];
		};
	};
}

interface NavTabProps {
	width: number;
	underline_left: number;
}

interface Profiles {
	id: number;
	manufacturer: string;
	model: string;
	manufacturerLogo: string;
	profileImage: string;
	usecases: string[];
	href: string;
	specs: {
		label: string;
		value: string | number;
	}[];
}

interface InputProps {
	type?: string;
	label: string;
	id: string;
	defaultValue?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
