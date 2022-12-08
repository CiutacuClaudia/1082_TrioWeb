<template>
    <div class="contact">
        <img alt="Our Logo" src="../assets/logo.png">
        <div id="contact">
            <h2>Contact us</h2>
            <p>Contact us by phone on {{ phoneNumber }}, or via our address at 123 Fake Street, New York City.</p>
        </div>
        <footer>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'Contact-1',
  data () {
    return {
      phoneNumber: '123-123-123'
    }
  }
}
</script>
<style scoped="">
#contact {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 2rem;
    margin: 2rem;
    border: 1px solid #ddd;
    border-radius: 10px;
}

h2 {
    margin: 0 0 1.5rem 0;
}
</style>
