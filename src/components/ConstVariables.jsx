import * as Imports from '../components/Imports';

export const ConstVariables = () => {
    const { t } = Imports.useTranslation();
    const { i18n } = Imports.useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const [btnText, setBtnText] = Imports.useState(t('log-text'));
    const [isActive, setIsActive] = Imports.useState(false);
    const [formStatus, setFormStatus] = Imports.useState('');
    const [isOpen, setIsOpen] = Imports.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            const response = await fetch('https://formspree.io/f/movqqjlb', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                setBtnText(t('thanks'));
                setIsActive(true);

                setTimeout(() => {
                    window.location.reload();
                }, 4000);
            } else {
                setBtnText(t('error'));

                setTimeout(() => {
                    window.location.reload();
                }, 4000);
            }
        } catch (error) {
            console.error('Fehler beim Absenden:', error);
        }
    };

    return {
        btnText,
        t,
        setBtnText,
        isActive,
        setIsActive,
        formStatus,
        setFormStatus,
        isOpen,
        toggleMenu,
        handleSubmit,
        changeLanguage,
    };
};

