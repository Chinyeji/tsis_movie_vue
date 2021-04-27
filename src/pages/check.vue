<template>
  <div id="app">
    <div class = "check">
        <h4>예약정보 </h4>
        <ul>
            <li>영화: </li>
            <li>관:  </li>
            <li>인원수: </li>
        </ul>
        <button @click='()=>{this.$router.push("/")}'>확인</button>

    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default ({
  data() {
    return {
      datas: '',
    }
  },
  mounted() {
    axios.get("http://localhost:8000/api/info")
      .then((data) => {
        this.datas = data.data

      })
      .catch((err) => {
        console.log(err)
      })
  }
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