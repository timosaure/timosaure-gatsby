import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons"

const ContactForm = () => {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <FormInput name="name" label="Name" type="text" icon={faUser} />
      <FormInput name="mail" label="Email" type="email" icon={faEnvelope} />
      <div class="field">
        <label class="label" htmlFor="message-input">
          Message
        </label>
        <div class="control">
          <textarea
            id="message-input"
            name="message"
            class="textarea"
            placeholder="Textarea"
          ></textarea>
        </div>
      </div>
      <div class="control">
        <button type="submit" class="button is-primary">
          Submit
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
        <span class="icon is-small is-left">
          <FontAwesomeIcon icon={icon} />
        </span>
      </div>
    </div>
  )
}

export default ContactForm
