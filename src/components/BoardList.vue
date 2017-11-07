<template>
        <!-- TABLE: LATEST ORDERS -->
        <div class="box box-info">
          <div class="box-header with-border">
            <h3 class="box-title">Board - JAVA</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
              <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="table-responsive">
              <table class="table no-margin">
                <thead>
                <tr>
                  <th>게시물 번호</th>
                  <th>제목</th>
                  <th>카테고리</th>
                  <th>작성시간</th>
                  <th>작성자</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in boardList.data.list">
                  <td>{{item.board_id}}</td>
                  <td>{{item.subject}}</td>
                  <td><span class="label label-success">{{item.user_id}}</span></td>
                  <td>
                    <div class="sparkbar" data-color="#00a65a" data-height="20">{{item.reg_date}}</div>
                  </td>
                  <td>{{item.user_name}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <!-- /.table-responsive -->
          </div>
          <!-- /.box-body -->
          <div class="box-footer clearfix">
            <a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>
            <a href="javascript:void(0)" class="btn btn-sm btn-default btn-flat pull-right">View All Orders</a>
          </div>
          <!-- /.box-footer -->
        </div>
        <!-- /.box -->
      </div>
      <!-- /.col -->

</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created () {
    this.boardProduct()
  },
  computed: {
    ...mapGetters([
      'boardList'
    ])
  },
  methods: {
    ...mapActions([
      'boardProduct'
    ])
  }
}
</script>
