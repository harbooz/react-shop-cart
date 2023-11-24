import React, { useContext } from "react";
import FormFields from "../components/common/FormFields";
import { styled } from "styled-components";

import { ShopContext } from "../context/AppContextProvider";
import Button from "../components/common/Button";

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 40px auto;

  .cta__contact-section {
    display: flex;

    button {
        margin: 30px 0
    }
  }

  .textarea__field
`

const TextArea = styled.div `
display: flex;
flex-direction: column;

& textarea {
max-width: 320px;
width: 100%;
height: 80px;
border-radius: 5px;
font-size: 14px;
color: #121b27;
padding: 10px;
&:focus {
    outline: unset;
}
}

label {
    font-size: 14px;
    color: #9dabbd;
  }
`

function Contact() {

    const {submitForm, handleSubmit} = useContext(ShopContext)

   return <ContactWrapper>
    <h2>Contact Us</h2>
    <form onSubmit={handleSubmit(submitForm)}>

    
    <FormFields label="First name" name="firstName" type="text"/>
    <FormFields label="Last name" name="lastName" type="text"/>  

    <TextArea className="textarea__field">
        <label htmlFor="message">Your message</label>
        <textarea name="message"/>
    </TextArea>

       <div className="cta__contact-section">
       <Button type="submit">Submit</Button>
       </div>
    </form>
  </ContactWrapper>;
}

export default Contact;