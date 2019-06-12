<template>
<div id="app">

  <div>
    <button @click="searchBtnClick">Search</button>
  </div>

  <div>
    <table>
      <tr>
        <td>NO</td>
        <td>ID</td>
        <td>TEL</td>
        <td>ADDRESS</td>
        <td>NAME</td>
      </tr>
      <tr v-for="(p, index) in searchlist" :key="p.no">
        <td>{{ (pageNum)*10+index+1 }}</td>
        <td>{{ p.no }}</td>
        <td>{{ p.tel }}</td>
        <td>{{ p.address }}</td>
        <td>{{ p.name }}</td>
      </tr>
    </table>
  </div>

  <div class="btn-cover">
    <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
      이전
    </button>
    <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
    <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
      다음
    </button>
  </div>

</div>
</template>

<script>
export default {

  data() {
    return {
      pageNum: 0,
      pageSize: 10
    }
  },

  computed: {
    // stat
    posts() {
      return this.$store.state.s02.posts.contacts;
    },
    // getters
    postlist() {
      return this.$store.getters.postlist;
    },
    // tatal cnt
    totalcnt() {
      var totalcnt;
      if (this.postlist) {
        totalcnt = Object.keys(this.postlist).length;
      } else {
        totalcnt = 0;
      }
      return totalcnt;
    },
    // list paging
    searchlist() {
      const start = this.pageNum * this.pageSize,
        end = start + this.pageSize;
      if (this.totalcnt > 0) {
        return this.postlist.slice(start, end);
      }
    },
    // current page count
    pageCount() {
      let listLeng = this.totalcnt,
        listSize = this.pageSize,
        page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;
      return page;
    }
  },

  methods: {
    searchBtnClick() {
      this.$store.dispatch({
        type: 'fetchPosts'
      })
    },
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    }
  }
}
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

table th {
  font-size: 1.2rem;
}

table tr {
  height: 2rem;
  text-align: center;
  border-bottom: 1px solid #505050;
}

table tr:first-of-type {
  border-top: 2px solid #404040;
}

table tr td {
  padding: 1rem 0;
  font-size: 1.1rem;
}

.btn-cover {
  margin-top: 1.5rem;
  text-align: center;
}

.btn-cover .page-btn {
  width: 5rem;
  height: 2rem;
  letter-spacing: 0.5px;
}

.btn-cover .page-count {
  padding: 0 1rem;
}
</style>
