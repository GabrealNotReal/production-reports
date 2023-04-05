<template>
    <div>
        <form>
          <div class="container-fluid pt-4">
            <header class="form-group align-self-end text-center">
                <h2>پنل کاربری سرپست کنترل کیفی</h2>
            </header>
            <hr>
          </div>
          <div class="container-fluid pt-2 pr-4 pl-4">
            <body>
              <div class="card">
                <div class="card-header text-center">
                  <div>
                    <ul class="list-inline row justify-content-center">
                      <li class="col-md-2 font-medium-5 mb-sm-1 mb-xs-1">
                        تایید شده
                        <div class="btn btn-success little-padding">
                            <span class="">
                              <i class="ft ft-check-square h2 white"></i>
                            </span>
                        </div>
                      </li>

                      <li class="col-md-2 font-medium-5 mb-sm-1 mb-xs-1">
                        تایید نشده
                        <div class="btn btn-danger little-padding">
                            <span class="">
                              <i class="ft ft-x-square h2 white"></i>
                            </span>
                        </div>
                      </li>

                      <li class="col-md-2 font-medium-5 mb-sm-1 mb-xs-1">
                        در انتظار تایید
                        <div class="btn btn-secondary little-padding">
                            <span class="">
                              <i class="ft ft-square h2 white"></i>
                            </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div class="card-body table-responsive align-items-center">
                    <table class="table table-hover table-bordered table-striped text-center h4">
                      <thead>
                        <tr>
                          <th scope="col">ردیف</th>
                          <th scope="col">شماره درخواست</th>
                          <th scope="col">درخواست کننده</th>
                          <th scope="col">تعداد</th>
                          <th scope="col">عملیات</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr @click="modalFunc(event)" data-toggle="modal" data-id="1" data-target="#qualityControlItemModal">
                          <th scope="row">1</th>
                          <td>
                          <a>
                            17231
                          </a>
                          </td>
                          <td>کشش</td>
                          <td>6</td>
                          <td class="p-1">
                            <span class="border-primary p-1 primary small border-padding">
                              در انتظار تایید
                              <span class="btn btn-secondary little-padding">
                                  <i class="ft ft-square h2 white"></i>
                              </span>
                            </span>
                          </td>
                        </tr>
                        <tr @click="modalFunc(event)" data-toggle="modal" data-id="2" data-target="#qualityControlItemModal">
                          <th scope="row">2</th>
                          <td>
                          <a>
                            21151
                          </a>
                          </td>
                          <td>دوربرش</td>
                          <td>2</td>
                          <td>
                            <span class="border-primary p-1 primary small border-padding">
                              تایید شده
                              <span class="btn btn-success little-padding">
                                  <i class="ft ft-check-square h2 white"></i>
                              </span>
                            </span>
                          </td>
                        </tr>
                        <tr @click="modalFunc(event)" data-toggle="modal" data-id="3" data-target="#qualityControlItemModal">
                          <th scope="row">3</th>
                          <td>
                          <a>
                            <span>
                              1121
                            </span>
                          </a>
                          </td>
                          <td>پانچ ولوم</td>
                          <td>5</td>
                          <td>
                            <span class="border-primary p-1 primary small border-padding">
                              تایید نشده
                              <span class="btn btn-danger little-padding">
                                  <i class="ft ft-x-square h2 white"></i>
                              </span>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
              </div>
            </body>
          </div>
        </form>

         <!-- item-modal-begin  -->
        <div id="qualityControlItemModal" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="qualityControlItemModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="ModalTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">انصراف</button>
                <button type="button" class="btn btn-info">ذخیره</button>
              </div>
            </div>
          </div>
        </div>
         <!-- item-modal-end  -->

    </div>
</template>

<script>
  // document.queryselector('#ModalTitle').
  
export default {
  data(){

    
    return{

    }
  },

  setup(){

    // function modalFunc(event){

    // }
    return{

    }
  }


}
</script>

<style>
.little-padding{
  padding: 0.3rem 0.5rem; 
}

.border-padding{
  width: .3rem;
}
</style>