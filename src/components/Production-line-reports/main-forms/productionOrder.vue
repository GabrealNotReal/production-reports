<template>
  <div>
      <div class="form form-dialog form-lg" role="document">
        <div class="form-content">
          <div class="form-body"> 
        <div class="content-body">
<section id="icon-tabs">
    <div class="row">
        <div class="col-12">
                <div class="card-content">
                        <form>

                            <!-- Step 1 -->

                            <fieldset>
                              <div class="card-block">
                                <div class="card-header">
                                    <h1 class="text-center">مرحله و شناسه</h1>
                                </div>
                                <div class="card-body">
                            <form>
                                <div class="form-row mb-4">
                                  <div class="col-md-12">
                                    <label class="mt-2 font-large-1 d-block text-center" for="PONumb">شناسه تولید</label>
                                    <input type="text" maxlength="10" class="form-control input-lg" id="PONumb" placeholder="شناسه تولید را وارد کنید"> 
                                  </div>
                                </div>
                                  <div>
                                    <label class="font-large-1 d-block text-center">انتخاب مرحله تولید</label>
                                    <div class="form-row text-center mb-1 px-2">
                                      <div class="col">
                                        <button @click="goToCuttingLvl" class="btn btn-block btn-outline-info btn-lg rounded-0 py-6" >برشکاری</button>
                                      </div>
                                      <div class="col">
                                        <button @click="goToSheetLvl" class="btn btn-block btn-outline-info btn-lg rounded-0 py-6" >ورق</button>
                                      </div>
                                      <div class="col">
                                        <button class="btn btn-block btn-outline-info btn-lg rounded-0 py-6" >کشش</button>
                                      </div>
                                      <div class="col">
                                        <button class="btn btn-block btn-outline-info btn-lg rounded-0 py-6" >پرس دوربرش</button>
                                      </div>    
                                      <div class="col">
                                        <button class="btn btn-block btn-outline-info btn-lg rounded-0 py-6 " >امرا</button>
                                      </div>                                                                        
                                    </div>

                                    <div class="form-row text-center px-2">
                                      <div class="col">
                                        <button class="btn btn-block btn-outline-info btn-lg rounded-0 py-6" >پانچ ولوم</button>
                                      </div>
                                      <div class="col">
                                        <button class="btn btn-block btn-outline-info btn-lg rounded-0 py-6" >سنگ زنی</button>
                                      </div>
                                      <div class="col">
                                        <button class="btn btn-block btn-outline-info btn-lg rounded-0 py-6" >تابگیری</button>
                                      </div>                                    
                                      <div class="col">
                                        <button class="btn btn-block btn-outline-info btn-lg rounded-0 py-6" >لیزر</button>
                                      </div>
                                      <div class="col">
                                        <button class="btn btn-block btn-outline-info btn-lg rounded-0 py-6" >بسته بندی</button>
                                      </div>                                    
                                    </div>

                                  </div>
                            </form>
                                </div>
                            </div>
                            </fieldset>

                            <!-- Step 2 -->
                            <fieldset>
                            </fieldset>

                        </form>
                </div>
        </div>
    </div>
</section>
<!-- Form wizard with icon tabs section end -->
            
            <div class="form-footer">
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
components:{

},

methods:{

goToCuttingLvl() {
  this.$router.push({name:'cuttingLvl'})
},
goToSheetLvl() {
  this.$router.push({name:'sheetLvl'})
}

},

setup(){


  return{
    
  }
}
};

</script>

<style>
.py-6{
  padding: 5rem;
}
</style>