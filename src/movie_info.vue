<template>
  <div id="app">
    <div>
      <h2>영화 예매</h2>
      <button @click='()=>{this.$router.push("/check")}' class = "btn">예매정보 확인</button>
    </div>
    <div class = "movie">
      <table class = "movie table">
        <tr>
          <td><img src="https://movie-phinf.pstatic.net/20111222_33/1324533894503h3QAH_JPEG/movie_image.jpg"
              alt="cla_img" style="width:256px;height:256px;"></td>
          <td><img src="https://movie-phinf.pstatic.net/20200622_258/1592800941290k9j8W_JPEG/movie_image.jpg"
              alt="cla_img" style="width:256px;height:256px;"></td>
          <td><img src="https://movie-phinf.pstatic.net/20111222_110/1324565733425n9ccN_JPEG/movie_image.jpg"
              alt="cla_img" style="width:256px;height:256px;"></td>

        </tr>
        <tr>
          <td>
            <select v-model="time" class="form-select" aria-label="Default select example">
              <option value="" hidden>9:00</option>
              <option id = "timeselect" v-for="(item, index) in movie1" :key="`hash-${index}`" :value="item.time">{{item.time}}</option>
            </select>
            <br><br>
          </td>
          <td>
          <select v-model="time" class="form-select" aria-label="Default select example">
              <option value="" hidden>8:30</option>
              <option v-for="(item, index) in movie2" :key="`hash-${index}`" :value="item.time">{{item.time}}</option>
            </select>
            <br><br>
          </td>
          <td>
            <select v-model="time" class="form-select" aria-label="Default select example">
              <option value="" hidden>10:00</option>
              <option v-for="(item, index) in movie3" :key="`hash-${index}`" :value="item.time">{{item.time}}</option>
            </select>
            <br><br>
          </td>
        </tr>
        <tr>
          <td><div>{{theaternumber[0]}}관</div></td>
          <td><div>{{theaternumber[1]}}관</div></td>
          <td><div>{{theaternumber[2]}}관</div></td>
        </tr>
        <tr>
          <td><div>{{moviename[0]}}</div></td>
          <td><div>{{moviename[1]}}</div></td>
          <td><div>{{moviename[2]}}</div></td>
        </tr>
        <tr>
          <td>잔여좌석: </td>
          <td>잔여좌석: </td>
          <td>잔여좌석: </td>
        </tr>
        <tr>
          <td><button @click='()=>{this.$router.push("/phone")}'>예매하기</button></td>
          <td><button @click='()=>{this.$router.push("/phone")}'>예매하기</button></td>
          <td><button @click='()=>{this.$router.push("/phone")}'>예매하기</button></td>

        </tr>

      </table>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default ({
  data() {
    return {
      datas: '',
      time: '',
      movie1: '',
      movie2: '',
      movie3: '',
      theater_no : '',
      theaternumber: [],
      movie_name: '',
      moviename: [],
    }
  },
  mounted() {
    axios.get("http://localhost:8000/api/info")
      .then((data) => {
        this.datas = data.data
        this.movie1 = this.datas.slice(0,3)
        this.movie2 = this.datas.slice(3,6)
        this.movie3 = this.datas.slice(6, )
        
        let mySet = new Set();
        let mySet2 = new Set();

        for(let i = 0; i<this.datas.length; i++){
          mySet.add(this.datas[i].theater_no);
          mySet2.add(this.datas[i].movie_name);
        }
        // let theaternumber = [];
        for (let item of mySet){
          this.theaternumber.push(item);
        }
        for (let item of mySet2){
          this.moviename.push(item);
        }

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
.movie table{
  width: 100%;
  padding-right: 35px;
}
.btn{
  float: right;
  font-size: 15px;
}
</style>