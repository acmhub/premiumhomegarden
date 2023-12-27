export const contactFormValidation = {
	name: {
		validate: (value: string) => value.trim() !== "",
		message: "Numele trebuie completat.",
	},
	email: {
		validate: (value: string) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value),
		message: "Adresa de mail trebuie să fie validă.",
	},
	subject: {
		validate: (value: string) => value.trim() !== "",
		message: "Subiectul trebuie completat.",
	},
	message: {
		validate: (value: string) => value.trim() !== "",
		message: "Mesajul trebuie completat.",
	},
};
