import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import useFormValidation from "@/hooks/useFormValidation";
import { contactFormValidation } from "@/data/validation-rules";
import { TextInput, TextArea } from "@/components/form";
import { toast } from "react-toastify";
import LoadingIcon from "../decorative/loading-icon";

function ContactForm() {
	const formEl = useRef<HTMLFormElement | null>(null);
	const { validateForm, clearErrors } = useFormValidation({ validationRules: contactFormValidation });
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		clearErrors();
		setIsLoading(true);

		let form = new FormData(e.target);
		let formData = Object.fromEntries(form);

		if (validateForm(formData)) {
			const userId = process.env.NEXT_PUBLIC_EJS_USER_ID as string;
			const serviceId = process.env.NEXT_PUBLIC_EJS_SERVICE_ID as string;
			const templateId = process.env.NEXT_PUBLIC_EJS_TEMPLATE_ID as string;

			if (formEl.current) {
				try {
					await emailjs.sendForm(serviceId, templateId, formEl.current, userId);
					toast.success(
						`Îți mulțumim pentru mesaj ${formData.name}! Echipa noastră îți va răspunde în cel mai scurt timp posibil.`
					);
					e.target.reset();
				} catch (error) {
					toast.error(`Ne pare rău, s-a produs o eroare. Te rugăm să încerci mai târziu.`);
					console.log(error);
				}
			}

			setIsLoading(false);
		} else {
			setIsLoading(false);
			const formInputWithError: HTMLInputElement | null = document.querySelector(".form-input.error-input");

			if (formInputWithError) {
				const inputOrTextareaInsideParent = formInputWithError
					.closest(".form-input")
					?.querySelector("input, textarea") as HTMLElement;
				if (inputOrTextareaInsideParent) {
					inputOrTextareaInsideParent.focus();
				}
			}
		}
	};

	return (
		<form
			className="card lg:max-w-lg max-lg:mx-auto lg:ml-auto max-lg:px-5 space-y-5"
			onSubmit={handleSubmit}
			id="contact-form"
			ref={formEl}
		>
			<div className="text-2xl text-center font-cinzel">Completează Formularul</div>

			<div>
				<TextInput label="Nume" id="name" />
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
				<TextInput label="Email" id="email" />
				<TextInput label="Numar de telefon" id="phone_number" />
			</div>

			<TextInput label="Subiect" id="subject" />
			<TextArea label="Mesaj" id="message" />

			<button type="submit" className="button button-gunmetal rounded-md text-center w-full">
				{isLoading ? <LoadingIcon /> : "Trimite"}
			</button>
		</form>
	);
}

export default ContactForm;
