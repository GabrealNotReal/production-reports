<template>
  <div>
    <div class="card m-2">
      <div class="card-header">
        <h2 class="text-center">دریافت ورق مرجوعی</h2>
      </div>

      <div class="card-body">
        <form>
          <div class="form-row form-group form-row text-center mb-3">
            <label
              class="form-control-lg"
              for="selectReturnProduct"
              >شناسه ارجاع
            </label>
            <select
              @change="returnIDSelected"
              class="form-select form-select-lg"
              id="returnID"
              v-model="formData.returnID"
              aria-expanded="false"
            >
            <option value="" class="spinner-border">
              <div v-if="loading.returnID === false">
                شناسه ارجاع را انتخاب کنید
              </div>
              <div v-if="loading.returnID">
                در حال بارگذاری...
              </div>
            </option>
            <option v-for="returnID in returnIDs" :value="returnID" :key="returnID.index">{{ returnID.code }}  |  شناسه تولید: {{ returnID.productIDreturn }} |  تعداد:{{ returnID.numberOfSheetReturn }} |  ایراد ورق: {{ returnID.sheetReceivedFault }}</option>
            </select>
          </div>

          <div class="form-row form-group form-row text-center mb-3">
            <label
              class="form-control-lg"
              for="productIDreturn"
              >شناسه تولید
            </label>
            <input
              id="productIDreturn"
              type="text"
              v-model="formData.productIDreturn"
              class="form-control position-relative input-lg"
              placeholder="شناسه تولید ورق های مرجوعی"
              disabled
            />
          </div>

          <div class="row mb-3">
            <div class="form-group col-md-6">
              <label class="form-control-lg" for="numberOfSheetReturn"
                >تعداد ورق مرجوعی
              </label>
              <input
                type="number"
                class="form-control position-relative input-lg text-center"
                id="numberOfSheetReturn"
                placeholder="تعداد ورق مرجوعی"
                v-model="formData.numberOfSheetReturn"
                disabled
              />
            </div>

            <div class="form-group col-md-6">
              <label class="form-control-lg" for="sheetReceivedFault"
                > ایراد ورق مرجوعی
              </label>
              <input
                type="text"
                class="form-control position-relative input-lg text-center"
                id="sheetReceivedFault"
                placeholder="ایراد ورق مرجوعی"
                v-model="formData.sheetReceivedFault"
                disabled
              />
            </div>
          </div>
          
<!-- start-of-originOfSheet -->
          <div class="card p-2"> 
            <div class="card-header mb-3">
              <label class="form-control-lg d-block text-center">مبدا ورق</label>
            </div>

            <div class="row mb-3">
              <div class="form-group col-md-3">
                <select
                  class="form-select form-select-lg"
                  id="originOfSheet1"
                  aria-expanded="false"
                  required
                >
                  <option value="">
                    مبدا ورق را انتخاب کنید
                  </option>
                  <option v-for="originOfSheet in originOfSheets" :value="originOfSheet" :key="originOfSheet.index">مبدا:{{ originOfSheet.place }}  |  کد: {{ originOfSheet.ID }}</option>
                </select>
              </div>

              <div class="form-group col-md-3">
                <select
                  @change="cleanCodeGeneration('1')"
                  class="form-select form-select-lg"
                  id="sheetReceivedGradeStatus1"
                  v-model="formData.sheetReceivedGradeStatus1"
                  aria-expanded="false"
                  required
                >
                  <option value="">وضعیت ورق</option>
                  <option value="grade2">گرید دو</option>
                  <option value="grade3">گرید سه</option>
                  <option value="waste">ضایعات</option>
                </select>
              </div>

              <div v-if="formData.sheetReceivedGradeStatus1 === 'waste' || formData.sheetReceivedGradeStatus1 === '' " class="form-group col-md-2">
                  <input 
                  type="text" 
                  class="form-control position-relative input-lg text-center" 
                  id="forWaste" 
                  value="-------------------"
                  readonly
                  >
              </div>
              
              <div v-if="formData.sheetReceivedGradeStatus1 == 'grade2' || formData.sheetReceivedGradeStatus1 == 'grade3'" class="d-grid mx-auto col-md-2">

                  <button v-if="showStoringCode.storingCode1 === false" @click="getStorageCode1" type="button"
                      class="btn btn-outline-warning btn-lg btn-block" :disabled='loading.storingCode1'
                      id="storingCode1" required>
                      <span v-if="loading.storingCode1 === false ">دریافت کد انبارش</span>
                      <span v-if="loading.storingCode1" class="spinner-border spinner-border-sm"
                          style="width: 1.7rem; height: 1.7rem;" role="status" aria-hidden="true"></span>
                  </button>

                  <input 
                  v-if="showStoringCode.storingCode1 === true" 
                  class="form-control position-relative input-lg text-center" 
                  v-model="formData.storingCode1"
                  disabled>
              </div>

              <div class="form-group col-md-3">
                <input
                  type="number"
                  class="form-control position-relative input-lg text-center"
                  id="numberOfSheetReturnSelect1"
                  v-model="formData.numberOfSheetReturnSelect1"
                  placeholder="تعداد ورق را وارد کنید"
                  required
                />
              </div>

              <div class="d-grid col-md-1 mx-auto">
                <button
                  @click="addSheetReturnFromDrawingToCuttingRow"
                  type="button"
                  class="btn btn-outline-logo"
                  :disabled="sheetReturnFromDrawingToCuttingRow === 1"
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>

            <div v-if="sheetReturnFromDrawingToCuttingRow < 4" class="row mb-3">
              <div class="form-group col-md-3">
                <select
                  class="form-select form-select-lg"
                  id="originOfSheet2"
                  aria-expanded="false"
                >
                  <option value="">
                    مبدا ورق را انتخاب کنید
                  </option>
                  <option v-for="originOfSheet in originOfSheets" :value="originOfSheet" :key="originOfSheet.index">مبدا:{{ originOfSheet.place }}  |  کد: {{ originOfSheet.ID }}</option>
                </select>
              </div>

              <div class="form-group col-md-3">
                <select
                  @change="cleanCodeGeneration('2')"
                  class="form-select form-select-lg"
                  id="sheetReceivedGradeStatus2"
                  v-model="formData.sheetReceivedGradeStatus2"
                  aria-expanded="false"
                  required
                >
                  <option value="">وضعیت ورق</option>
                  <option value="grade2">گرید دو</option>
                  <option value="grade3">گرید سه</option>
                  <option value="waste">ضایعات</option>
                </select>
              </div>

              <div v-if="formData.sheetReceivedGradeStatus2 === 'waste' || formData.sheetReceivedGradeStatus2 === '' " class="form-group col-md-2">
                  <input 
                  type="text" 
                  class="form-control position-relative input-lg text-center" 
                  id="forWaste" 
                  value="-------------------"
                  readonly
                  >
              </div>
              
              <div v-if="formData.sheetReceivedGradeStatus2 == 'grade2' || formData.sheetReceivedGradeStatus2 == 'grade3'" class="d-grid mx-auto col-md-2">
                <button v-if="showStoringCode.storingCode2 === false" @click="getStorageCode2" type="button"
                    class="btn btn-outline-warning btn-lg btn-block" :disabled='loading.storingCode2'
                    id="storingCode2" required>
                    <span v-if="loading.storingCode2 === false ">دریافت کد انبارش</span>
                    <span v-if="loading.storingCode2" class="spinner-border spinner-border-sm"
                        style="width: 1.7rem; height: 1.7rem;" role="status" aria-hidden="true"></span>
                </button>

                <input 
                v-if="showStoringCode.storingCode2 === true" 
                class="form-control position-relative input-lg text-center" 
                v-model="formData.storingCode2"
                disabled>
              </div>

              <div class="form-group col-md-3">
                <input
                  type="number"
                  class="form-control position-relative input-lg text-center"
                  id="numberOfSheetReturnSelect2"
                  v-model="formData.numberOfSheetReturnSelect2"
                  placeholder="تعداد ورق را وارد کنید"
                  required
                />
              </div>

              <div class="d-grid col-md-1 mx-auto">
                <button
                  @click="delSheetReturnFromDrawingToCuttingRow('2')"
                  type="button"
                  class="btn btn-outline-danger"
                  :disabled="sheetReturnFromDrawingToCuttingRow < 3"                            
                >
                <i class="fa-solid fa-minus"></i>
                </button>
                </div>  
            </div>

            <div v-if="sheetReturnFromDrawingToCuttingRow < 3" class="row mb-3  ">
              <div class="form-group col-md-3">
                <select
                  class="form-select form-select-lg"
                  id="originOfSheet3"
                  aria-expanded="false"
                  required
                >
                  <option value="">
                    مبدا ورق را انتخاب کنید
                  </option>
                  <option v-for="originOfSheet in originOfSheets" :value="originOfSheet" :key="originOfSheet.index">مبدا:{{ originOfSheet.place }}  |  کد: {{ originOfSheet.ID }}</option>
                </select>
              </div>

              <div class="form-group col-md-3">
                <select
                  @change="cleanCodeGeneration('3')"
                  class="form-select form-select-lg"
                  id="sheetReceivedGradeStatus3"
                  v-model="formData.sheetReceivedGradeStatus3"
                  aria-expanded="false"
                  required
                >
                  <option value="">وضعیت ورق</option>
                  <option value="grade2">گرید دو</option>
                  <option value="grade3">گرید سه</option>
                  <option value="waste">ضایعات</option>
                </select>
              </div>

              <div v-if="formData.sheetReceivedGradeStatus3 === 'waste' || formData.sheetReceivedGradeStatus3 === '' " class="form-group col-md-2">
                  <input 
                  type="text" 
                  class="form-control position-relative input-lg text-center" 
                  id="forWaste" 
                  value="-------------------"
                  readonly
                  >
              </div>
              
              <div v-if="formData.sheetReceivedGradeStatus3 == 'grade2' || formData.sheetReceivedGradeStatus3 == 'grade3'" class="d-grid mx-auto col-md-2">
                <button v-if="showStoringCode.storingCode3 === false" @click="getStorageCode3" type="button"
                    class="btn btn-outline-warning btn-lg btn-block" :disabled='loading.storingCode3'
                    id="storingCode3" required>
                    <span v-if="loading.storingCode3 === false ">دریافت کد انبارش</span>
                    <span v-if="loading.storingCode3" class="spinner-border spinner-border-sm"
                        style="width: 1.7rem; height: 1.7rem;" role="status" aria-hidden="true"></span>
                </button>

                <input 
                v-if="showStoringCode.storingCode3 === true" 
                class="form-control position-relative input-lg text-center" 
                v-model="formData.storingCode3"
                disabled>
              </div>

              <div class="form-group col-md-3">
                <input
                  type="number"
                  class="form-control position-relative input-lg text-center"
                  id="numberOfSheetReturnSelect3"
                  v-model="formData.numberOfSheetReturnSelect3"
                  placeholder="تعداد ورق را وارد کنید"
                  required
                />
              </div>

              <div class="d-grid col-md-1 mx-auto">
                <button
                  @click="delSheetReturnFromDrawingToCuttingRow(3)"
                  type="button"
                  class="btn btn-outline-danger"
                  :disabled="sheetReturnFromDrawingToCuttingRow < 2"                            
                >
                  <i class="fa-solid fa-minus"></i>
                </button>
              </div>  
            </div>

            <div v-if="sheetReturnFromDrawingToCuttingRow < 2" class="row mb-3">
              <div class="form-group col-md-3">
                <select
                  class="form-select form-select-lg"
                  id="originOfSheet4"
                  aria-expanded="false"
                  required
                >
                  <option value="">
                    مبدا ورق را انتخاب کنید
                  </option>
                  <option v-for="originOfSheet in originOfSheets" :value="originOfSheet" :key="originOfSheet.index">مبدا:{{ originOfSheet.place }}  |  کد: {{ originOfSheet.ID }}</option>
                </select>
              </div>

              <div class="form-group col-md-3">
                <select
                  @change="cleanCodeGeneration('4')"
                  class="form-select form-select-lg"
                  id="sheetReceivedGradeStatus4"
                  v-model="formData.sheetReceivedGradeStatus4"
                  aria-expanded="false"
                  required
                >
                  <option value="">وضعیت ورق</option>
                  <option value="grade2">گرید دو</option>
                  <option value="grade3">گرید سه</option>
                  <option value="waste">ضایعات</option>
                </select>
              </div>

              <div v-if="formData.sheetReceivedGradeStatus4 === 'waste' || formData.sheetReceivedGradeStatus4 === '' " class="form-group col-md-2">
                  <input 
                  type="text" 
                  class="form-control position-relative input-lg text-center" 
                  id="forWaste" 
                  value="-------------------"
                  readonly
                  >
              </div>
              
              <div v-if="formData.sheetReceivedGradeStatus4 == 'grade2' || formData.sheetReceivedGradeStatus4 == 'grade3'" class="d-grid mx-auto col-md-2">
                <button v-if="showStoringCode.storingCode4 === false" @click="getStorageCode4" type="button"
                    class="btn btn-outline-warning btn-lg btn-block" :disabled='loading.storingCode4'
                    id="storingCode4" required>
                    <span v-if="loading.storingCode4 === false ">دریافت کد انبارش</span>
                    <span v-if="loading.storingCode4" class="spinner-border spinner-border-sm"
                        style="width: 1.7rem; height: 1.7rem;" role="status" aria-hidden="true"></span>
                </button>

                <input 
                v-if="showStoringCode.storingCode4 === true" 
                class="form-control position-relative input-lg text-center" 
                v-model="formData.storingCode4"
                disabled>
              </div>

              <div class="form-group col-md-3">
                <input
                  type="number"
                  class="form-control position-relative input-lg text-center"
                  id="numberOfSheetReturnSelect4"
                  v-model="formData.numberOfSheetReturnSelect4"
                  placeholder="تعداد ورق را وارد کنید"
                  required
                />
              </div>
              
              <div v-if="resonForUsageSecondCut4 === '3' " class="form-group col-md-3">
                  <button
                    type="button"
                    class="btn btn-outline-warning btn-lg btn-block"
                    :disabled= 'loading4'
                    id="storageCodeBtn4"
                  >دریافت کد انبارش
                      <span v-if="loading4" class="spinner-border spinner-border-sm" style="width: 1.7rem; height: 1.7rem;" role="status" aria-hidden="true"></span>
                  </button>
              </div>

              <div class="d-grid col-md-1 mx-auto">
                <button
                  @click="delSheetReturnFromDrawingToCuttingRow(4)"
                  type="button"
                  class="btn btn-outline-danger"
                  :disabled="sheetReturnFromDrawingToCuttingRow < 1"                            
                >
                <i class="fa-solid fa-minus"></i>
                </button>
              </div>  
            </div>

            <div class="form-row form-group mb-3">
                <label 
                class="form-control-lg"
                for="sumOfNumberOfSheetSelected"
                 >مجموع تعداد ورق
                </label>
                <input 
                type="number" 
                class="form-control position-relative input-lg text-center" 
                id="sumOfNumberOfSheetSelected" 
                v-model="sumOfNumberOfSheetReturnSelect"
                disabled
                >
            </div>
          </div> 
<!-- end-of-originOfSheet -->

          <div class="form-group mb-3">
            <label
              class="form-control-lg d-block text-center"
              for="infoRecivedReturnSheets"
              >توضیحات</label
            >
            <textarea
              class="form-control position-relative input-lg"
              id="infoRecivedReturnSheets"
              rows="2"
              placeholder="توضیحات بیشتر را وارد کنید"
              v-model="formData.description"
            ></textarea>
          </div>

          <div class="form-row d-grid gap-2 justify-content-md-center d-md-flex d-md-flex">
            <button @click="backToMain" class="btn btn-danger col-md-2 btn-lg">
              بازگشت
            </button>
      
            <button class="btn btn-logo col-md-10 btn-lg" type="submit" :disabled="sumOfNumberOfSheetReturnSelect != formData.numberOfSheetReturn">
              تایید فرم
            </button>
          </div>     
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import {useProductionLineStore} from '../../production-line-reports-store/productionLineReportsStore'
import { computed } from '@vue/runtime-core';

export default {
  data() {
    return {
      moreInfo: "null",
      returnProductSelected: "",

    };
  },

  methods: {
    moreInformation() {
      this.moreInfo = document.querySelector("#sheetReceivedFault").value;
    },

    backToMain(){
      this.$router.push({path:"/production"})
    },
  },

  setup() {
    const formData = reactive({
      subLevel : 'receiveReturnSheets',
      productIDreturn : '',
      returnID: '',
      numberOfSheetReturn: '',
      sheetReceivedFault: '',
      originOfSheet1: '',
      originOfSheet2: '',
      originOfSheet3: '',
      originOfSheet4: '',
      sheetReceivedGradeStatus1 : '',
      sheetReceivedGradeStatus2 : '',
      sheetReceivedGradeStatus3 : '',
      sheetReceivedGradeStatus4 : '',
      storingCode1 : '',
      storingCode2 : '',
      storingCode3 : '',
      storingCode4 : '',
      numberOfSheetReturnSelect1 : 0,
      numberOfSheetReturnSelect2 : 0,
      numberOfSheetReturnSelect3 : 0,
      numberOfSheetReturnSelect4 : 0,
      description : '',
    })

    const loading = reactive({
      returnID: false,
      storingCode1: false,
      storingCode2: false,
      storingCode3: false,
      storingCode4: false,
    })

    const validateData = reactive({
      productIDreturn : '',
      originOfSheet1 : '',
      sheetReceivedGradeStatus1 : '',
      numberOfSheetReturnSelect1 : '',
    })

    const showStoringCode = reactive({
        storingCode1 : false,
        storingCode2 : false,
        storingCode3 : false,
        storingCode4 : false,
    })

    var originOfSheets = reactive(null)

    const sheetReturnFromDrawingToCuttingRow = ref(4);

    const sumOfNumberOfSheetReturnSelect = computed(() => formData.numberOfSheetReturnSelect1 + formData.numberOfSheetReturnSelect2 + formData.numberOfSheetReturnSelect3 + formData.numberOfSheetReturnSelect4)

    const store = useProductionLineStore()
    
    const returnIDs = computed(() => store.returnIDs);
    const storingNewCode = computed(() => store.storingCode);

    function addSheetReturnFromDrawingToCuttingRow() {
        sheetReturnFromDrawingToCuttingRow.value = sheetReturnFromDrawingToCuttingRow.value - 1;
    }

    function delSheetReturnFromDrawingToCuttingRow(row) {
        sheetReturnFromDrawingToCuttingRow.value = sheetReturnFromDrawingToCuttingRow.value + 1;
        if(row == 2){
          showStoringCode.storingCode2 = false
          formData.numberOfSheetReturnSelect2 = 0
        }
        else if(row == 3){
          showStoringCode.storingCode3 = false
          formData.numberOfSheetReturnSelect3 = 0
        }
        else{
          showStoringCode.storingCode4 = false
          formData.numberOfSheetReturnSelect4 = 0
        }
    }

    function returnIDSelected(){
      var returnIDSelected = formData.returnID
      formData.productIDreturn = returnIDSelected.product_id_return
      formData.numberOfSheetReturn = returnIDSelected.number_of_sheet_return
      formData.sheetReceivedFault = returnIDSelected.sheet_recived_fault
      originOfSheets = returnIDSelected.origin_of_sheets
    }

    async function getStorageCode1() {
        loading.storingCode1 = true;
        await store.getListOfDescription();
        formData.storingCode1 = storingNewCode
        loading.storingCode1 = false;
        showStoringCode.storingCode1 = true;
    }

    async function getStorageCode2() {
        loading.storingCode2 = true;
        await store.getListOfDescription();
        formData.storingCode2 = storingNewCode
        loading.storingCode2 = false;
        showStoringCode.storingCode2 = true;
    }

    async function getStorageCode3() {
        loading.storingCode3 = true;
        await store.getListOfDescription();
        formData.storingCode3 = storingNewCode
        loading.storingCode3 = false;
        showStoringCode.storingCode3 = true;
    }

    async function getStorageCode4() {
        loading.storingCode4 = true;
        await store.getListOfDescription();
        formData.storingCode4 = storingNewCode
        loading.storingCode4 = false;
        showStoringCode.storingCode4 = true;
    }

    async function getReturnIDs() {
        loading.returnID = true;
        await store.getReturnIDs();
        loading.returnID = false;
    }

    function cleanCodeGeneration(row){
      if(row == 1){
        showStoringCode.storingCode1 = false
      }
      else if(row == 2){
        showStoringCode.storingCode2 = false
      }
      else if(row == 3){
        showStoringCode.storingCode3 = false
      }
      else{
        showStoringCode.storingCode4 = false
      }
    }
getReturnIDs()

// function resetNumberOfSheetReturnSelect(row){
//   if(row == 2){
//     formData.numberOfSheetReturnSelect2 = 0
//   }
//   else if(row == 3){
//     formData.numberOfSheetReturnSelect3 = 0
//   }
//   else{
//     formData.numberOfSheetReturnSelect4 = 0
//   }
// }

async function submitForm() {
      if (formData.productIDreturn == "" || 
      formData.originOfSheet1 == "" || 
      formData.sheetReceivedGradeStatus1 == "" ||
      formData.numberOfSheetReturnSelect1 == 0) {
        if(formData.productIDreturn == ""){
          validateData.productIDreturn = "شناسه ارجاع را انتخاب کنید!";
        }
        else validateData.productIDreturn = "";

        if(formData.originOfSheet1 == ""){
          validateData.originOfSheet1 = "مبدا ورق را وارد کنید!";
        }
        else validateData.originOfSheet1 = "";

        if(formData.sheetReceivedGradeStatus1 == ""){
          validateData.sheetReceivedGradeStatus1 = "وضعیت ورق را مشخص کنید!";
        }
        else validateData.sheetReceivedGradeStatus1 = "";

        if(formData.numberOfSheetReturnSelect1 == 0){
          validateData.numberOfSheetReturnSelect1 = "تعداد ورق را وارد کنید!";
        }
        else validateData.numberOfSheetReturnSelect1 = "";
      } 
      
      else {
        // loading.value = true;
        await ( 
          store.submitCuttingform(formData)

          // store.authenticateUser(formData.productionLevel)
          )
        // loading.value = false;
      }

  }

    return{
        sheetReturnFromDrawingToCuttingRow,
        addSheetReturnFromDrawingToCuttingRow,
        delSheetReturnFromDrawingToCuttingRow,
        getStorageCode1,
        getStorageCode2,
        getStorageCode3,
        getStorageCode4,
        getReturnIDs,
        returnIDs,
        formData,
        loading,
        returnIDSelected,
        originOfSheets,
        showStoringCode,
        storingNewCode,
        cleanCodeGeneration,
        submitForm,
        validateData,
        sumOfNumberOfSheetReturnSelect,
        // resetNumberOfSheetReturnSelect,
    }
  },
};
</script>

<style>
.border-radius {
  border-radius: 5rem;
  font-size: 1.3rem;
}

textarea {
  font-size: 20px !important;
}
</style>