<template>
  <div>
    <div class="card-block">
        <div class="card-header">
            <h1 class="text-center">مرحله و شناسه</h1>
        </div>
        <div class="card-body">
    <form>
        <div class="form-row">
          <div class="col-md-12 mb-2">
            <label class="mt-3 font-large-1 d-block text-center" for="PONumb">شناسه تولید</label>
            <input type="text" maxlength="10" class="form-control input-lg" id="PONumb" placeholder="شناسه تولید را وارد کنید."> 
          </div>
        </div>
          <div class="mb-2">
            <label class="font-large-1 d-block text-center" for="productionLevel">مرحله تولید</label>
            <select                     
            id="productionLevel"
            class="select-size-sm form-control input-lg"
            aria-label=".form-select-sm example"
            >
                <option value="">انتخاب کنید</option>
                <option value="1">1- برشکاری</option>
                <option value="2">2- ورق</option>
                <option value="3">3- کشش</option>
                <option value="4">4- پرس دوربرش</option>
                <option value="5">5- امرا/دوربرش 6 میلیمتر</option>
                <option value="6">6- پانچ ولوم</option>
                <option value="7">7- سنگ زنی</option>
                <option value="8">8- تابگیری</option>
                <option value="9">9- لیزر</option>
                <option value="10">10- بسته بندی</option>
            </select>
          </div>
    </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>