<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    <footer class="footer">
      <div class="footer-content">
        <div class="social-section">
          <h2 class="logo">GrafoZilla</h2>
          <div class="social-icons">

            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>

          </div>
        </div>
  
        <div class="about-section">
          <p>
            Hi, I'm <strong>Alfredo</strong>, a <em>passionate</em> developer focused on creating amazing web experiences.
            Let's build something great together!
          </p>
        </div>
      </div>
  
      <div class="footer-bottom">
        <p>&copy; 2024 GrafoZilla. All rights reserved. | Built with ❤️ and Vue.js</p>
      </div>
    </footer>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'FooterPage',
  });
  </script>
  
  <style scoped>
  
  .footer {
    background-color: #222;
    color: #f5f5f5;
    padding: 20px;
    text-align: center;
    font-family: 'Arial', sans-serif;
  }
  
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .social-section {
    margin-bottom: 15px;
  }
  
  .logo {
    font-size: 24px;
    color: #61dafb;
    margin-bottom: 10px;
  }
  
  .social-icons {
    display: flex;
    gap: 15px;
  }
  
  .social-icons a {
    color: #61dafb;
    font-size: 24px;
    text-decoration: none;
  }
  
  .about-section {
    max-width: 400px;
    line-height: 1.6;
    margin: 10px 0;
  }
  
  .about-section strong {
    color: #61dafb;
  }
  
  .footer-bottom {
    margin-top: 10px;
    font-size: 14px;
    border-top: 1px solid #444;
    padding-top: 10px;
  }
  
  .footer-bottom p {
    margin: 0;
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      text-align: center;
    }
  }
  </style>
  