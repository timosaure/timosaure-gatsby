import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons"
import { useTranslation } from "react-i18next"

const ContactForm = ({ successPath }) => {
  const { t } = useTranslation()
  return (
    <form name="Contact" method="POST" data-netlify="true" action={successPath}>
      <input type="hidden" name="form-name" value="Contact" />
      <FormInput name="name" label={t("name")} type="text" icon={faUser} />
      <FormInput name="mail" label={t("mail")} type="email" icon={faEnvelope} />
      <div className="field">
        <label className="label" htmlFor="message-input">
          {t("message")}
        </label>
        <div className="control">
          <textarea
            id="message-input"
            name="message"
            className="textarea"
            placeholder="Textarea"
          ></textarea>
        </div>
      </div>
      <div className="control">
        <button type="submit" className="button is-primary">
          {t("submit")}
        </button>
      </div>
    </form>
  )
}

const FormInput = ({ name, type, label, icon }) => {
  const id = name + "-input"
  return (
    <div className="field">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <div className="control has-icons-left">
        <input
          name={name}
          id={id}
          type={type}
          className="input"
          placeholder={label}
        />
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={icon} />
        </span>
      </div>
    </div>
  )
}

export default ContactForm
