import React from 'react';
import styles from './Contact.module.scss';
import { SubmitHandler, FieldValues, useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const destinatario = 'juliowanke@gmail.com';
    const assunto = data.Name;
    const corpo = data.Message;
    const gmailLink = `https://mail.google.com/mail/?view=cm&to=${destinatario}&su=${encodeURIComponent(
      assunto,
    )}&body=${encodeURIComponent(corpo)}`;
    window.open(gmailLink, '_blank');
  };
  return (
    <div id="contact" className={styles.contactContainer}>
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
        <input
          type="text"
          placeholder="NAME"
          {...register('Name', { required: true })}
        />
        {errors.Name && <span>Sorry, name is required</span>}

        <input
          type="text"
          className={errors.Email ? styles.errorInput : styles.validInput}
          placeholder="EMAIL"
          {...register('Email', {
            required: 'Please enter your email',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Please enter a valid email address',
            },
            shouldUnregister: true,
          })}
        />
        {errors.Email && <span>{String(errors.Email.message)}</span>}

        <textarea
          placeholder="MESSAGE"
          rows={5}
          {...register('Message', { required: true })}
        ></textarea>
        {errors.Message && <span>Sorry, message is required</span>}
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
