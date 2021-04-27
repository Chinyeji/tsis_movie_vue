<template>
  <div id="app">
    <div>
      <label for="people">인원 수:  </label>
      <input type="number" id="people" name="people" min = "1" max="156"> 명<br><br>
    </div>
    <div class = "screen">screen</div>
    <table>
      <tr v-for='row in rows' :key='row'>
        <td v-for='column in columns' :key='column'>
           <button @click='check($event)'> {{String.fromCharCode(row + 64)}}-{{column}} </button>
        </td>
      </tr>
    </table>

    <div>
      <br><br><br>
      <button>예약하기</button>
      <button @click='()=>{this.$router.push("/")}'>처음으로</button>
    </div>
  </div>
</template>

<script>
export default ({
  data () {
    return {
      rows: 12,
      columns: 13
    }
  },
  methods: {
    check (event){
      if (event.target.id == 'check') {
        event.target.id = ''
      } else {
       event.target.id = 'check'
      }
   }
  }
  
})
</script>


<style>
.screen{
  background-color:black;
  color: white;
  text-align: center;
}
#check {
  background: #f80000;
}
</style>