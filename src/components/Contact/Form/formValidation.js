/** Formato de email razonable para UI (no pretende cubrir todo el RFC). */
export const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const MIN_NAME = 3;
const MIN_MESSAGE = 10;

/**
 * @param {{ name: string, lastname: string, email: string, message: string }} values
 * @param {(key: string) => string} t - i18n para claves contact.form.validation_*
 * @returns {Record<string, string>} mapa campo → mensaje (vacío si ok)
 */
export function validateContactForm(values, t) {
    const name = values.name.trim();
    const lastname = values.lastname.trim();
    const email = values.email.trim();
    const message = values.message.trim();

    const errors = {
        name: '',
        lastname: '',
        email: '',
        message: '',
    };

    if (!name) errors.name = t('contact.form.validation_name_required');
    else if (name.length < MIN_NAME) errors.name = t('contact.form.validation_name_short');

    if (!lastname) errors.lastname = t('contact.form.validation_lastname_required');
    else if (lastname.length < MIN_NAME)
        errors.lastname = t('contact.form.validation_lastname_short');

    if (!email) errors.email = t('contact.form.validation_email_required');
    else if (!EMAIL_REGEX.test(email)) errors.email = t('contact.form.validation_email_invalid');

    if (!message) errors.message = t('contact.form.validation_message_required');
    else if (message.length < MIN_MESSAGE)
        errors.message = t('contact.form.validation_message_short');

    return errors;
}

export function hasValidationErrors(errors) {
    return Object.values(errors).some(Boolean);
}
