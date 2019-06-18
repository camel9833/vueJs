<template>
<div id="sample">
  <my-header></my-header>
  <!-- 조회버튼 -->
  <h3>
     extend !!
  </h3>
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
import Sample from './Sample.vue'

export default {
  extends: Sample
}
</script>

<style>

</style>
