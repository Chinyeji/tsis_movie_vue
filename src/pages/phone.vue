<template>
  <div id="app">
    <div class = "phone">
      <form action=" javascript:local();">
        <label for="phone">핸드폰 번호 입력</label><br><br>
        <input type="tel" id="phone" name="phone" placeholder="010-1234-5678" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          required><br><br>
        <button @click='()=>{this.$router.push("/seats")}'>확인</button>
        <button @click='()=>{this.$router.push("/")}'>취소</button>
      </form>
    </div>
  </div>
</template>
<script>
export default ({
})
</script>
<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

</style>