<template>
  <div>
    <h2>Comment before the meeting</h2>
    <div v-for="document in documents" :key="document.id" class="document">
      <h3>{{ document.title }}</h3>
      <button @click="viewDocument(document.url)">View Docs</button>
      <button @click="downloadDocument(document.url)">Download Docs</button>
    </div>
    <div>
      <h3>Give comments on the report</h3>
      <textarea v-model="feedback" placeholder="Enter your comments"></textarea>
      <button @click="submitFeedback">Send comments</button>
    </div>
    <div>
      <h3>Upload text</h3>
      <input type="file" @change="uploadFile" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documents: [
        { id: 1, title: 'View document 1', url: '/documents/document1.pdf' },
        { id: 2, title: 'View document 2', url: '/documents/document2.pdf' },
      ],
      feedback: '',
    };
  },
  methods: {
    viewDocument(url) {
      window.open(url, '_blank');
    },
    downloadDocument(url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = url.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    submitFeedback() {
      if (this.feedback.trim()) {
        alert('Your comments have been sent: ' + this.feedback);
        this.feedback = '';
      } else {
        alert('Please enter your comments');
      }
    },
    uploadFile(event) {
      const file = event.target.files[0];
      if (file) {
        alert('The file has been selected: ' + file.name);
      }
    },
  },
};
</script>

<style>
.document {
  margin-bottom: 20px;
}
textarea {
  width: 100%;
  height: 100px;
  margin-top: 10px;
}
button {
  margin-top: 10px;
  background-color: #dcdc48;
  color: #1263dd;
  width: 140px;
  height: 30px;
  margin-bottom: 10px;
  margin-right: 12px;
  border: unset;
  border-radius: 10px;
}
</style>
