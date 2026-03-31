import React, { useState, useTransition } from 'react';
import '../../../CSS/App.css';
import styles from './RegisterForm.module.css';
import { notifications } from '@mantine/notifications';
import { useTranslation } from 'react-i18next';
import { api } from '../../../api';


const RegisterForm = ({ onSuccessfulRegistration, onShowRegisterForm }) => {
	const { t, i18n } = useTranslation("register");
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [lastname, setLastname] = useState('');
	const [firstname, setFirstname] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password.length < 8) {
			setErrorMessage(t("register-errors.password-too-short"));
			return;
		}

		if (password !== confirmPassword) {
			setErrorMessage(t("register-errors.password-mismatch"));
			return;
		}

		try {
			const response = await api.post('/auth/signup', { mail: email, password, lastname, firstname }, {
				headers: {
					'Accept-Language': i18n.language,
					'Content-Type': 'application/json',
				},
			});

			const data = response.data;
			if (data.success) {
				onSuccessfulRegistration();
				notifications.show({
					title: t("noti.signup-success-title"),
					message: t("noti.signup-success-msg"),
					color: 'transparent',
					icon: '🎉',
				});
				return;
			}

			setErrorMessage(data?.message || t("register-errors.registration-error"));
		} catch (error) {
			console.error('Error registering user:', error);
			setErrorMessage(t("register-errors.registration-error"));
		}

	};

	return (
		<div className={styles.registerFormContainer}>
			<form onSubmit={handleSubmit} className={styles.registerForm}>
				<h2>TEST REBUILD 2</h2>

				<input
					type="text" placeholder={t("register.lastname-placeholder")} required
					value={lastname} onChange={(e) => setLastname(e.target.value)}
				/>

				<input
					type="text" placeholder={t("register.firstname-placeholder")} required
					value={firstname} onChange={(e) => setFirstname(e.target.value)}
				/>

				<input
					type="email" placeholder={t("register.email-placeholder")} required
					value={email} onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					type="password" placeholder={t("register.password-placeholder")} required
					value={password} onChange={(e) => setPassword(e.target.value)}
				/>

				<input
					type="password" placeholder={t("register.confirm-password-placeholder")} required
					value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
				/>

				{errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

				<button type="submit">{t("register.submit-button")}</button>

				<div>
					<span>{t("register.already-have-account")} </span>
					<a onClick={onShowRegisterForm}>{t("register.login-link")}</a>
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;