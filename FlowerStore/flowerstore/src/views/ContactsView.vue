<template>
  <div class="contacts">
    <h1>Contacts</h1>
    <div class="map">

      <div class="message-block">
        <h1 id="lam">Leave message</h1>
        <div class="inputs">
          <label for="name">Name</label>
          <input id="name" type="text" placeholder="Your name...">

          <label for="email">Email</label>
          <input id="email" type="email" placeholder="Your email...">
          
          <label for="tel">Phone</label>
          <input id="tel" type="tel" placeholder="Your phonenumber...">

          <label for="msg">Message</label>
          <textarea id="msg" cols="30" rows="10"></textarea>
        </div>
        <button>SEND</button>
      </div>

      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aecd44d736ab69bbdc51c28deb6eff2cb29efaed4c74ad22cfe49abe854c5d8d2&amp;source=constructor" width="100%" height="621" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.contacts{
  padding: 0 500px;
}

.message-block{
  background-color: rgb(255, 255, 255);
  position: absolute;
  width: 400px;
  padding: 30px;
  filter: drop-shadow(0 5px 20px rgb(167, 167, 167));
  border-radius: 15px;

  right: 80px;
  top: -40px;
}

.map{
  position: relative;
}

.inputs{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>