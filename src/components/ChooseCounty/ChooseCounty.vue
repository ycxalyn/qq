<template>
  <div>
    <form action="">
        <table width="100%">
          <tbody>
            <tr>
              <th>国家/地区</th>
              <td class='more' @click="toCountySelect">中国</td>
            </tr>
            <tr>
              <th>+86</th>
              <td><input type="number" v-model="number"></td>
            </tr>
          </tbody>
        </table>
      </form>
      <mt-button default disabled v-if="!clickBol()">下一步</mt-button>
      <mt-button type="primary" v-else>下一步</mt-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        number: ''
      }
    },
    methods: {
      toCountySelect () {
        this.$router.push('/countySelect')
      },
      clickBol () {
        if (this.number !== '' && (/^1[3|4|5|7|8][0-9]{9}$/.test(this.number))) {
          return true
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  form{
    margin-top: 5%;
    table{
      tbody{
        tr:nth-of-type(2){
          th{
            text-align: right;
          }
        }
        tr{
          border-bottom: 1px solid #e0e0e0;
          font-size: 1.4rem;
          th{
            padding: 1.2rem 0 1.2rem 1.5rem;
            text-align: left;
            width: 7rem;
            font-weight: 400;
            color: #676767;
          }
          td{
            padding-left: 2rem;
            font-weight: 600;
            input{
              outline: none;
            }
          }
          .more{
            background: url(./images/detail.png) no-repeat right center;
            background-size: auto 1.4rem;
          }
        }
      }
    }
  }
  button{
    width: 100%;
    margin-top: 8%;
  }
</style>