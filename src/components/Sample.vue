<template>
<div id="sample">
  <my-header></my-header>
  <!-- 조회버튼 -->
  <div style="float:right;">
    USER ID<input name="query" v-model="searchQuery"> <button @click="searchBtnClick">Search</button>
  </div>

  <!-- 조회 결과 -->
  <div>
    <table>
      <tr>
        <td><input type="checkbox" id="checkAll" v-model="checkAll" @click="selectAll" /></td>
        <!-- td>No</td -->
        <td>ID</td>
        <td>USER ID</td>
        <td>Title</td>
        <td>body</td>
        <td>Action</td>
      </tr>
      <tr v-for="(p, index) in searchlist" :key="p.id">
        <td><input type="checkbox" id="check01" :value="p" v-model="checkValue" /></td>
        <!--td>{{ (pageNum)*10+index+1 }}</td -->
        <td>{{ p.id }}</td>
        <td>{{ p.userId }}</td>
        <td>{{ p.title }}</td>
        <td>{{ p.body }}</td>


        <!-- 수정/삭제 버튼 -->
        <div class="btn-group pull-right" style="font-size: 12px; line-height: 1;">
          <td>
            <button type="button" class="btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              더보기<span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a @click="updateBtnClick(p)">수정</a></li>
              <li><a @click="deleteBtnClick(p)">삭제</a></li>
            </ul>
          </td>
        </div>

      </tr>
    </table>
  </div>

  <!-- Paging  -->
  <div class="btn-cover">
    <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
      이전
    </button>
    <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
    <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
      다음
    </button>
  </div>
  <br />
  <span>checkValue: {{ checkValue }}</span>

</div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'sample',
  data() {
    return {
      // Paging
      pageNum: 0,
      pageSize: 10,
      // checkbox
      checkValue: [], //체크박스 value
      checkAll: false, //체크박스 전체선택
      // 조회 변수
      searchQuery: '',
      path: 'sample'
    }
  },
  components: {
    'my-header': Header
  },

  computed: {
    // stat
    posts() {
      return this.$store.state.s02.posts;
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
    // list Paging
    searchlist() {
      const start = this.pageNum * this.pageSize,
        end = start + this.pageSize;
      if (this.totalcnt > 0) {
        return this.postlist.slice(start, end);
      }
    },
    // current Paging count
    pageCount() {
      let listLeng = this.totalcnt,
        listSize = this.pageSize,
        page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;
      return page;
    }
  },

  methods: {
    // Paging
    nextPage() {
      this.pageNum += 1;
      this.checkAll = false;
    },
    prevPage() {
      this.pageNum -= 1;
      this.checkAll = false;
    },
    // checkbox checkAll
    selectAll() {
      if (!this.checkAll) {
        this.checkValue = this.searchlist;
      } else {
        this.checkValue = [];
      }
    },
    // 조회버튼 클릭
    searchBtnClick() {
      this.$store.dispatch('fetchPosts', {
        searchTxt: this.searchQuery
      });
    },
    // 수정버튼 클릭
    updateBtnClick(p) {
      alert("update");
    },
    // 삭제버튼 클릭
    deleteBtnClick(p) {
      var no = p.id;

      if (confirm("정말삭제하시겠습니까?") == true) {
        this.$store.dispatch('sampleDelete', {
          deleteId: no
        });
      }
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
