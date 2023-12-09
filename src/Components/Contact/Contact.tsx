import React from 'react';
import styles from './Contact.module.scss';
import { SubmitHandler, FieldValues, useForm } from 'react-hook-form';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import ElementDetail from '../../SvgComponents/ElementDetail';
import { useLanguage } from '../../hooks/useLanguage';
import Lottie from 'lottie-react';
import animationEmail from '.././../Animation/Animation - 1701902791959.json';
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
    const destinatario = 'juliowanke@gmail.com';
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
      <ElementDetail  />
      <div className={styles.contactText}>
        <h2> {translate('contactTitle')}</h2>
        <p>{translate('contactDescription')}</p>
        <Lottie animationData={animationEmail} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className={styles.formContact}
      >
        <div className={styles.inputNameContainer}>
          <input
            className={styles.inputName}
            style={{
              borderBottom: errors.Name
                ? '1px solid #ff6f5b'
                : '1px solid #fff',
            }}
            type="text"
            placeholder={translate('contactInputName').toUpperCase()}
            {...register('Name', { required: true })}
          />
          {errors.Name && (
            <div className={styles.errorContainer}>
              <span>{translate('errorNameInput')}</span>
              <AiOutlineExclamationCircle
                className={styles.iconExclamationName}
              />
            </div>
          )}
        </div>
        <div className={styles.inputEmailContainer}>
          <input
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
              <span>{translate('errorSubjectInput')}</span>
              <AiOutlineExclamationCircle
                className={styles.iconExclamationEmail}
              />
            </div>
          )}
        </div>
        <div className={styles.inputMessageContainer}>
          <textarea
            className={styles.inputMessage}
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
              <span>{translate('errorMessageInput')}</span>
              <AiOutlineExclamationCircle
                className={styles.iconExclamationMessage}
              />
            </div>
          )}
        </div>

        <button type="submit">{translate('contactButtonSubmit')}</button>
      </form>
    </div>
  );
};

export default Contact;
