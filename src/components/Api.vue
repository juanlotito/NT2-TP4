<template lang>

  <section class="src-components-multiple-choice">
    <div class="jumbotron" mt-3>
    <table class="table">

      <button class="btn btn-primary my-3 mr-3" @click="getPostPromise()">Pedir XHR (Promise)</button>
      <button class="btn btn-primary my-3 mr-3" @click="getPostFetch()">Pedir fetch</button>
      <button class="btn btn-primary my-3 mr-3" @click="getPostAxios()">Pedir Axios</button>

      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Email</th>
        <th>Número de telefono</th>
      </tr>
      <tr v-for="(post,index) in posts" :key="index">
        <td>{{post.id}}</td>
        <td>{{post.nombre}}</td>
        <td>{{post.email}}</td>
        <td>{{post.numero}}</td>
      </tr>
    </table>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-multiple-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
          url: 'https://618afec934b4f400177c498d.mockapi.io/Tabla_mock',
          posts: [],
      }
    },
    methods: {
            postPromise() {
        return new Promise((resolve,reject) => {
          let xhr = new XMLHttpRequest()
          xhr.open('get',this.url)
          xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
              let respuesta = JSON.parse(xhr.response)
              resolve(respuesta)
            }
            else {
              let error = {
                title: 'Error de status',
                status: xhr.status
              }
              reject(error)              
            }
          })
          xhr.addEventListener('error', e => {
              let error = {
                title: 'Error event XHR',
                info: e
              }
              reject(error)  
          })

          xhr.send()
        })
      },


        async getPostPromise() {
        this.posts = []
        try {
          let respuesta = await this.postPromise()
          console.log('XHR Promise', respuesta)
          this.posts = respuesta
        }
        catch(error) {
          console.error('Error XHR Promise', error)
        }
      },

            async getPostFetch() {
        this.posts = []
        try {
          let response = await fetch(this.url)
          let respuesta = await response.json()
          console.log('FETCH', respuesta)
          this.posts = respuesta
        }
        catch(error) {
          console.error('Error FETCH', error)
        }
      },

        async getPostAxios() {
        this.posts = []
        try {
          let respuesta = await this.axios(this.url)
          console.log('AXIOS', respuesta.data)
          this.posts = respuesta.data
        }
        catch(error) {
          console.error('Error AXIOS', error)
        }
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-multiple-choice {
    color: black
  }
  .table{
    align-content: center;
  }
</style>
