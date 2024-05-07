import styles from './Contact.module.scss';
import { SubmitHandler, FieldValues, useForm } from 'react-hook-form';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import ElementDetail from '../../SvgComponents/ElementDetail';
import { useLanguage } from '../../hooks/useLanguage';

const Contact = () => {
  const { translate, currentLanguage } = useLanguage();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const destinatario = process.env.GMAIL_CONTACT;
    const assunto = data.Subject;
    const corpo =
      currentLanguage === 'pt'
        ? `Olá meu nome é ${capitalize(data.Name)}, ${data.Message}`
        : `Hello, my name is ${capitalize(data.Name)}, ${data.Message}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&to=${destinatario}&su=${encodeURIComponent(
      assunto,
    )}&body=${encodeURIComponent(corpo)}`;
    window.open(gmailLink, '_blank');
    reset();
  };
  return (
    <div id="contact" className={styles.contactContainer}>
      <ElementDetail />
      <div className={styles.contactText}>
        <h2 translate="no"> {translate('contactTitle')}</h2>
        <p translate="no">{translate('contactDescription')}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContact}>
        <div className={styles.inputNameContainer}>
          <input
            className={styles.inputName}
            style={{
              borderBottom: errors.Name
                ? '1px solid #ff6f5b'
                : '1px solid #fff',
            }}
            type="text"
            translate="no"
            placeholder={translate('contactInputName').toUpperCase()}
            {...register('Name', { required: true })}
          />
          {errors.Name && (
            <div className={styles.errorContainer}>
              <span translate="no">{translate('errorNameInput')}</span>
              <AiOutlineExclamationCircle
                className={styles.iconExclamationName}
              />
            </div>
          )}
        </div>
        <div className={styles.inputEmailContainer}>
          <input
            translate="no"
            className={styles.inputEmail}
            style={{
              borderBottom: errors.Subject
                ? '1px solid #ff6f5b'
                : '1px solid #fff',
            }}
            type="text"
            placeholder={translate('contactInputSubject').toUpperCase()}
            {...register('Subject', {
              required: true,
              shouldUnregister: true,
            })}
          />
          {errors.Subject && (
            <div className={styles.errorContainer}>
              <span translate="no">{translate('errorSubjectInput')}</span>
              <AiOutlineExclamationCircle
                className={styles.iconExclamationEmail}
              />
            </div>
          )}
        </div>
        <div className={styles.inputMessageContainer}>
          <textarea
            className={styles.inputMessage}
            translate="no"
            style={{
              borderBottom: errors.Message
                ? '1px solid #ff6f5b'
                : '1px solid #fff',
            }}
            placeholder={translate('contactInputMessage').toUpperCase()}
            rows={5}
            {...register('Message', { required: true })}
          ></textarea>
          {errors.Message && (
            <div className={styles.errorContainer}>
              <span translate="no">{translate('errorMessageInput')}</span>
              <AiOutlineExclamationCircle
                className={styles.iconExclamationMessage}
              />
            </div>
          )}
        </div>

        <button translate="no" type="submit">
          {translate('contactButtonSubmit')}
        </button>
      </form>
    </div>
  );
};

export default Contact;
