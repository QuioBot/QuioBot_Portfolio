<template>

  <form ref="form" class="contactform" v-on:submit="sendForm">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="form-group">
          <input
            type="text"
            name="name"
            placeholder="YOUR NAME"
            v-model="ContactForm.name"
            required
          />
        </div>
      </div>


      <div class="col-12 col-md-6">
        <div class="form-group">
          <input
            type="email"
            name="user_email"
            placeholder="YOUR EMAIL"
            required
            v-model="ContactForm.email"
          />
        </div>
      </div>

      <div class="col-12">
        <div class="form-group">
          <textarea
            name="message"
            placeholder="YOUR MESSAGE"
            required
            v-model="ContactForm.message"
          ></textarea>
        </div>
      </div>


      <div class="col-12 col-md-6">
        <button type="submit" class="button">
          <span class="button-text">Send Message</span>
          <span class="button-icon fa fa-send"></span>
        </button>
      </div>

      <div v-if="sent" class="col-12 col-md-6">
        <div class="form-group">
          <span>Message Done</span>
        </div>
      </div>


    </div>
  </form>

  
</template>

<script>
import axios from 'axios'

const querystring = require("querystring");

export default {
  data() {
    return {
      sent: false,
            ContactForm: {
                name: '',
                email: '',
                subject: 'Website Message',
                message: ''
              },
    };
  },
  methods: {
    sendForm(e) {
              e.preventDefault()
              console.log(this.ContactForm)
              axios.post('https://quioapi.000webhostapp.com/mail_server.php',
              querystring.stringify(this.ContactForm)).then(() => {
                this.sent = true
              })
            }
      },
};
</script>

<style>
.center {
  margin: auto;
  width: 60%;
  padding: 10px;
}
</style>
