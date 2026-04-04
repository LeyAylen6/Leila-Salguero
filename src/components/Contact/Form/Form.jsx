import style from './form.module.css';

import { useState, useRef, useEffect } from 'react';

import emailjs from 'emailjs-com';

import { useTranslation } from 'react-i18next';

import FormFeedbackModal from './FormFeedbackModal';
import { validateContactForm, hasValidationErrors } from './formValidation';

const initialState = {
    name: '',
    lastname: '',
    email: '',
    message: '',
};

const initialErrors = { name: '', lastname: '', email: '', message: '' };
const initialTouched = { name: false, lastname: false, email: false, message: false };

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';
const emailJsConfigured = Boolean(
    String(serviceId).trim() && String(templateId).trim() && String(publicKey).trim(),
);

const FIELD_ORDER = ['name', 'lastname', 'email', 'message'];

const Form = () => {
    const [state, setState] = useState(initialState);
    const [errors, setErrors] = useState(initialErrors);
    const [touched, setTouched] = useState(initialTouched);
    const [sending, setSending] = useState(false);
    const [feedback, setFeedback] = useState({
        open: false,
        variant: 'success',
        detail: '',
    });
    const stateRef = useRef(state);
    const { t } = useTranslation('common');

    useEffect(() => {
        stateRef.current = state;
    }, [state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleBlur = (e) => {
        const field = e.target.name;
        setTouched((prev) => ({ ...prev, [field]: true }));
        const all = validateContactForm(stateRef.current, t);
        setErrors((prev) => ({ ...prev, [field]: all[field] }));
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        if (sending) return;

        const errs = validateContactForm(state, t);
        setErrors(errs);
        setTouched({
            name: true,
            lastname: true,
            email: true,
            message: true,
        });

        if (hasValidationErrors(errs)) {
            const firstInvalid = FIELD_ORDER.find((key) => errs[key]);
            if (firstInvalid) {
                document.getElementById(firstInvalid)?.focus();
            }
            return;
        }

        if (!emailJsConfigured) {
            setFeedback({
                open: true,
                variant: 'error',
                detail: t('contact.form.env_not_configured_detail'),
            });
            return;
        }

        const templateParams = {
            name: `${state.name.trim()} ${state.lastname.trim()}`,
            email: state.email.trim(),
            message_html: state.message.trim(),
            reply_to: state.email.trim(),
        };

        setSending(true);
        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setState(initialState);
            setErrors(initialErrors);
            setTouched(initialTouched);
            setFeedback({ open: true, variant: 'success', detail: '' });
        } catch (err) {
            console.error(err);
            const detail = err?.text ?? err?.message ?? String(err);
            setFeedback({ open: true, variant: 'error', detail });
        } finally {
            setSending(false);
        }
    };

    const formInputs = [
        { id: 'name', name: 'name', type: 'text', autoComplete: 'given-name' },
        { id: 'lastname', name: 'lastname', type: 'text', autoComplete: 'family-name' },
        { id: 'email', name: 'email', type: 'text', inputMode: 'email', autoComplete: 'email' },
        { id: 'message', name: 'message', type: 'textarea' },
    ];

    const closeFeedback = () => setFeedback((prev) => ({ ...prev, open: false }));

    const showError = (field) => Boolean(errors[field] && touched[field]);

    return (
        <>
            <form className={style.formContainer} onSubmit={sendMessage} noValidate>
                <h3 className={style.formTitle}>{t('contact.form.subtitle')}</h3>

                {formInputs.map((input) => {
                    const err = showError(input.name) ? errors[input.name] : '';
                    const errId = `${input.name}-error`;

                    return (
                        <div
                            key={input.id}
                            className={`${style.field} ${
                                input.name === 'email' || input.name === 'message'
                                    ? style.fieldSpan
                                    : ''
                            }`}
                        >
                            <label htmlFor={input.name}>{t(`contact.form.${input.id}`)}</label>

                            {input.type === 'textarea' ? (
                                <textarea
                                    className={`${style.message}${err ? ` ${style.inputError}` : ''}`}
                                    placeholder={t('contact.form.message_placeholder')}
                                    name="message"
                                    id="message"
                                    value={state.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={err ? 'true' : 'false'}
                                    aria-describedby={err ? errId : undefined}
                                />
                            ) : (
                                <input
                                    placeholder={t(`contact.form.${input.name}_placeholder`)}
                                    name={input.name}
                                    id={input.name}
                                    type={input.type}
                                    inputMode={input.inputMode}
                                    autoComplete={input.autoComplete}
                                    value={state[input.name]}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={err ? 'true' : 'false'}
                                    aria-describedby={err ? errId : undefined}
                                />
                            )}

                            {err ? (
                                <p id={errId} className={style.fieldError} role="alert">
                                    {err}
                                </p>
                            ) : null}
                        </div>
                    );
                })}

                <button
                    type="submit"
                    className={style.submit}
                    disabled={sending || !emailJsConfigured}
                >
                    {sending ? t('contact.form.sending') : t('contact.form.submit')}
                </button>
            </form>

            <FormFeedbackModal
                open={feedback.open}
                onClose={closeFeedback}
                variant={feedback.variant}
                title={
                    feedback.variant === 'success'
                        ? t('contact.form.modal_success_title')
                        : t('contact.form.modal_error_title')
                }
                message={
                    feedback.variant === 'success'
                        ? t('contact.form.send_success')
                        : t('contact.form.send_error_intro')
                }
                detail={feedback.variant === 'error' ? feedback.detail : ''}
                okLabel={t('contact.form.modal_ok')}
                closeLabel={t('contact.form.modal_close')}
            />
        </>
    );
};

export default Form;
