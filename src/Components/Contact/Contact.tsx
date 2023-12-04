import React from 'react';
import styles from './Contact.module.scss';
import { SubmitHandler, FieldValues, useForm } from 'react-hook-form';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import ElementDetail from '../../SvgComponents/ElementDetail';
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const destinatario = 'juliowanke@gmail.com';
    const assunto = data.Subject;
    const corpo = data.Message;
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
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
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
            placeholder="NAME"
            {...register('Name', { required: true })}
          />
          {errors.Name && <span>Sorry, name is required</span> && (
            <div className={styles.errorContainer}>
              <span>Sorry, name is required</span>
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
              borderBottom: errors.Email
                ? '1px solid #ff6f5b'
                : '1px solid #fff',
            }}
            type="text"
            placeholder="SUBJECT"
            {...register('Subject', {
              required: 'Please enter the subject',
              shouldUnregister: true,
            })}
          />
          {errors.Subject && (
            <div className={styles.errorContainer}>
              <span>{String(errors.Subject.message)}</span>
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
            placeholder="MESSAGE"
            rows={5}
            {...register('Message', { required: true })}
          ></textarea>
          {errors.Message && (
            <div className={styles.errorContainer}>
              <span>Sorry, message is required</span>
              <AiOutlineExclamationCircle
                className={styles.iconExclamationMessage}
              />
            </div>
          )}
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
