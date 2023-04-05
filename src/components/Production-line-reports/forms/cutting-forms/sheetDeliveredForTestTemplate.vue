<template>
  <div>
    <div class="card m-2">
      <div class="card-header">
        <h2 class="text-center">تحویل ورق جهت تست قالب</h2>
      </div>

      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="form-row form-group mb-3">
            <label 
            class="form-control-lg text-center d-block" 
            for="product"
            >نام محصول
            </label>
            <!-- <select
              class="form-select form-select-lg"
              id="product"
              aria-expanded="false"
              @click="getListOfProducts"
              v-model="formData.product"
            >
            <option value="" class="spinner-border">
                <div v-if="loading.orderProductID === false">
                  نام محصول را انتخاب کنید
                </div>
                <div v-if="loading.orderProductID">
                  در حال بارگذاری...
                </div>
              </option>
              <option v-for="productList in productsList" :value="productList.id" :key="productList.index">{{ productList.code }}  |  کد محصول: {{ productList.productCode }}</option>
            </select>
            <div class="form-text text-danger">
              {{validateData.product}}
            </div>  -->

            <v-select 
                  dir="rtl"
                  @click="getListOfProducts" 
                  id="product"
                  class="" 
                  v-model="formData.product" 
                  placeholder="نام محصول را انتخاب کنید"
                  :filter="fuseSearchProduct"
                  :options="productsList" 
                  :get-option-label="(option) => option.code"
                  :loading="loading.product"
                  close-on-select
                >

                  <template #spinner="{ loading }">
                    <div
                      v-if="loading.product"
                      style="border-left-color: rgba(88, 151, 251, 0.71)"
                      class="vs__spinner"
                    >
                    </div>
                  </template>
                
                  <template #option="{code , productCode}">
                    <h4 style="margin: 0">{{ code }}</h4>
                    <em>کد محصول: {{ productCode }}</em>
                  </template>

                  <template #footer>
                    <div class="form-text text-danger">
                      {{validateData.product}}
                    </div>
                  </template>

                </v-select>
          </div>

          <div class="card p-2">
            <div class="card-header mb-3">
              <label
                class="form-control-lg font-medium-5 d-block text-center"
                for="sheetDeliveredPlace"
                >محل تخصیص
              </label>
            </div>

            <div>
              <div class="row mb-3">
                <div class="form-group col-md-11">
                    <select
                      @change="sheetDeliveredPlace()"
                      class="form-select form-select-lg"
                      id="sheetDeliveredPlace1"
                      aria-expanded="false"
                      v-model="formData.sheetDeliveredPlace1"
                    >
                      <option value="">محل تخصیص ورق را وارد کنید</option>
                      <option value="cutting">برشکاری از رول یا شیت</option>
                      <option value="storage">انبار</option>
                      <option value="wastageStorage">انبار ضایعات</option>
                    </select>
                    <div class="form-text text-danger">
                      {{validateData.sheetDeliveredPlace1}}
                    </div> 
                </div>

                <div class="d-grid col-md-1 mx-auto">
                  <button
                    @click="addSheetDeliveredPlaceRow"
                    type="button"
                    class="btn btn-outline-logo"
                    :disabled="sheetDeliveredPlaceRow === 1"
                  >
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
  
              <div v-if="formData.sheetDeliveredPlace1 == 'cutting'">
                <div class="row mb-3">
                  <div class="col-md-6 form-group">
                    <!-- <select
                    class="form-select-lg form-select"
                    id="rollOrSheet1"
                    v-model="formData.rollOrSheet1"
                    required
                  >
                    <option value="" class="spinner-border">
                      <div v-if="loading.listOfRollsOrSheets === false">
                        کد رول یا شیت را انتخاب کنید
                      </div>
                      <div v-if="loading.listOfRollsOrSheets">
                        در حال بارگذاری...
                      </div>
                    </option>
                    <option v-for="roll in listOfRolls" :value="roll" :key="roll.index">{{ roll.code }}  |  مالکیت: {{ roll.ownership }} |  جنس:{{ roll.material }} |  برند: {{ roll.brand }} |  کشور سازنده: {{ roll.manuf_country }}</option>
                    <option v-for="sheet in listOfSheets" :value="sheet" :key="sheet.index">{{ sheet.code }}  |  مالکیت: {{ sheet.ownership }} |  جنس:{{ sheet.material }} |  برند: {{ sheet.brand }} |  کشور سازنده: {{ sheet.manuf_country }}</option>
                  </select> -->

                  <v-select 
                    dir="rtl" 
                    id="rollOrSheet1"
                    class="" 
                    v-model="formData.rollOrSheet1" 
                    placeholder="کد رول یا شیت را انتخاب کنید"
                    :filter="fuseSearchRollAndSheet"
                    :options="listOfRolls && listOfSheets" 
                    :get-option-label="(option) => option.code"
                    :loading="loading.listOfRollsOrSheets"
                    close-on-select
                    required
                  >

                    <template #spinner="{ loading }">
                      <div
                        v-if="loading.listOfRollsOrSheets"
                        style="border-left-color: rgba(88, 151, 251, 0.71)"
                        class="vs__spinner"
                      >
                      </div>
                    </template>
                  
                    <template #option="{ code , ownership , material , brand , manuf_country}">
                      <h4 style="margin: 0">{{ code }}</h4>
                      <em>مالکیت: {{ ownership }} | جنس: {{ material }} | برند: {{ brand }} | کشور سازنده: {{ manuf_country }}</em>
                    </template>

                  </v-select>
                  </div>
  
                  <div class="col-md-6 form-group">
                    <input
                      type="number"
                      class="form-control position-relative input-lg text-center"
                      id="numberOfSheetDeliveredCutting1"
                      placeholder="تعداد ورق ارسالی را وارد کنید"
                      v-model="formData.numberOfSheetDeliveredCutting1"
                    />
                  </div>
                </div>
              </div>
  
              <div v-if="formData.sheetDeliveredPlace1 == 'storage'">
                <div class="row mb-3">
                  <div class="col-md-6 form-group">
                    <select
                        class="form-select form-select-lg"
                        id="storingCode1"
                        v-model="formData.storingCode1"
                        aria-expanded="false"
                        >
                        <option value="" class="spinner-border">
                          <div v-if="loading.storingCode === false">
                            کد انبارش را انتخاب کنید
                          </div>
                          <div v-if="loading.storingCode">
                            در حال بارگذاری...
                          </div>
                        </option>
                        <option v-for="storingCode in storingCodes" :value="storingCode.id" :key="storingCode.index">storingCode.code</option>
                      </select>
                  </div>
  
                  <div class="col-md-6 form-group">
                    <input
                      type="number"
                      class="form-control position-relative input-lg text-center"
                      id="numberOfSheetDeliveredStore1"
                      v-model="formData.numberOfSheetDeliveredStore1"
                      placeholder="تعداد ورق ارسالی را وارد کنید"
                    />
                  </div>
                </div>
              </div>
            </div>
  
            <div v-if="formData.sheetDeliveredPlace1 == 'wastageStorage'">
              <div class="row mb-3">
                <div class="col-md-6 form-group">
                  <input 
                  type="number" 
                  class="form-control position-relative input-lg text-center" 
                  id="numberOfSheetDeliveredWaste1"
                  v-model="formData.numberOfSheetDeliveredWaste1"
                  placeholder="تعداد ورق ارسالی را وارد کنید" 
                  >
                </div>

                <div class="form-group col-md-6">
                    <div class="input-group">
                      <input type="number" id="areaOfWasteForTestTemplateX1" v-model="formData.areaOfWasteForTestTemplateX1" aria-label="طول" placeholder="طول" class="form-control position-relative input-lg text-center">
                      <input type="number" id="areaOfWasteForTestTemplateY1" v-model="formData.areaOfWasteForTestTemplateY1" aria-label="عرض" placeholder="عرض" class="form-control position-relative input-lg text-center">
                        <span class="input-group-text">m</span>
                    </div>
                </div>
              </div>
            </div>
  
            <hr v-if="sheetDeliveredPlaceRow < 3">
  
            <div v-if="sheetDeliveredPlaceRow < 3">
              <div class="row mb-3">
                <div class="form-group col-md-11">
                  <div>
                    <select
                    @change="sheetDeliveredPlace()"
                      class="form-select form-select-lg"
                      id="sheetDeliveredPlace2"
                      aria-expanded="false"
                      v-model="formData.sheetDeliveredPlace2"
                      required
                    >
                      <option value="">محل تخصیص ورق را وارد کنید</option>
                      <option value="cutting">برشکاری از رول یا شیت</option>
                      <option value="storage">انبار</option>
                      <option value="wastageStorage">انبار ضایعات</option>
                    </select>
                  </div>
                </div>
  
                <div class="d-grid col-md-1 mx-auto">
                  <button
                    @click="delSheetDeliveredPlaceRow"
                    type="button"
                    class="btn btn-outline-danger"
                    :disabled="sheetDeliveredPlaceRow === 1"
                  >
                    <i class="fa-solid fa-minus"></i>
                  </button>
                </div>
              </div>
  
              <div v-if="formData.sheetDeliveredPlace2 == 'cutting'">
                <div class="row mb-3">
                  <div class="col-md-6 form-group">
                    <!-- <select
                    class="form-select-lg form-select"
                    id="rollOrSheet2"
                    v-model="formData.rollOrSheet2"
                    required
                  >
                    <option value="" class="spinner-border">کد رول یا شیت را انتخاب کنید</option>
                    <option v-for="roll in listOfRolls" :value="roll" :key="roll.index">{{ roll.code }}  |  مالکیت: {{ roll.ownership }} |  جنس:{{ roll.material }} |  برند: {{ roll.brand }} |  کشور سازنده: {{ roll.manuf_country }}</option>
                    <option v-for="sheet in listOfSheets" :value="sheet" :key="sheet.index">{{ sheet.code }}  |  مالکیت: {{ sheet.ownership }} |  جنس:{{ sheet.material }} |  برند: {{ sheet.brand }} |  کشور سازنده: {{ sheet.manuf_country }}</option>
                  </select> -->

                  <v-select 
                    dir="rtl" 
                    id="rollOrSheet2"
                    class="" 
                    v-model="formData.rollOrSheet2" 
                    placeholder="کد رول یا شیت را انتخاب کنید"
                    :filter="fuseSearchRollAndSheet"
                    :options="listOfRolls && listOfSheets" 
                    :get-option-label="(option) => option.code"
                    :loading="loading.listOfRollsOrSheets"
                    close-on-select
                    required
                  >

                    <template #spinner="{ loading }">
                      <div
                        v-if="loading.listOfRollsOrSheets"
                        style="border-left-color: rgba(88, 151, 251, 0.71)"
                        class="vs__spinner"
                      >
                      </div>
                    </template>
                  
                    <template #option="{ code , ownership , material , brand , manuf_country}">
                      <h4 style="margin: 0">{{ code }}</h4>
                      <em>مالکیت: {{ ownership }} | جنس: {{ material }} | برند: {{ brand }} | کشور سازنده: {{ manuf_country }}</em>
                    </template>

                  </v-select>
                  </div>
  
                  <div class="col-md-6 form-group">
                    <input
                      type="number"
                      class="form-control position-relative input-lg text-center"
                      id="numberOfSheetDeliveredCutting2"
                      v-model="formData.numberOfSheetDeliveredCutting2"
                      placeholder="تعداد ورق ارسالی را وارد کنید"
                    />
                  </div>
                </div>
              </div>
  
              <div v-if="formData.sheetDeliveredPlace2 == 'storage'">
                <div class="row mb-3">
                  <div class="col-md-6 form-group">
                    <select
                        class="form-select form-select-lg"
                        id="storingCode2"
                        v-model="formData.storingCode2"
                        aria-expanded="false"
                        >
                        <option value="">کد انبارش را انتخاب کنید
                          <!-- <div v-if="loading.storingCode === false">
                            کد انبارش را انتخاب کنید
                          </div>
                          <div v-if="loading.storingCode">
                            در حال بارگذاری...
                          </div> -->
                        </option>
                        <option v-for="storingCode in storingCodes" :value="storingCode.id" :key="storingCode.index">storingCode.code</option>
                      </select>
                  </div>
    
                  
                  <div class="col-md-6 form-group">
                      <input
                        type="number"
                        class="form-control position-relative input-lg text-center"
                        id="numberOfSheetDeliveredStore2"
                        v-model="formData.numberOfSheetDeliveredStore2"
                        placeholder="تعداد ورق ارسالی را وارد کنید"
                      />
                    </div>
                </div>
              </div>
  
              
              <div v-if="formData.sheetDeliveredPlace2 == 'wastageStorage'">
                <div class="row mb-3">
                  <div class="col-md-6 form-group">
                    <input 
                    type="number" 
                    class="form-control position-relative input-lg text-center" 
                    id="numberOfSheetDeliveredWaste2" 
                    v-model="formData.numberOfSheetDeliveredWaste2"
                    placeholder="تعداد ورق ارسالی را وارد کنید" 
                    >
                  </div>

                  <div class="form-group col-md-6">
                      <div class="input-group">
                        <input type="number" id="areaOfWasteForTestTemplateX2" v-model="formData.areaOfWasteForTestTemplateX2" aria-label="طول" placeholder="طول" class="form-control position-relative input-lg text-center">
                        <input type="number" id="areaOfWasteForTestTemplateY2" v-model="formData.areaOfWasteForTestTemplateY2" aria-label="عرض" placeholder="عرض" class="form-control position-relative input-lg text-center">
                          <span class="input-group-text">m</span>
                      </div>
                  </div>
                </div>
              </div>
            </div>
  
            <hr v-if="sheetDeliveredPlaceRow < 2">
  
            <div v-if="sheetDeliveredPlaceRow < 2">
              <div class="row mb-3">
                <div class="form-group col-md-11">
                  <div>
                    <select
                    @change="sheetDeliveredPlace()"
                      class="form-select form-select-lg"
                      id="sheetDeliveredPlace3"
                      aria-expanded="false"
                      v-model="formData.sheetDeliveredPlace3"
                      required
                    >
                      <option value="">محل تخصیص ورق را وارد کنید</option>
                      <option value="cutting">برشکاری از رول یا شیت</option>
                      <option value="storage">انبار</option>
                      <option value="wastageStorage">انبار ضایعات</option>
                    </select>
                  </div>
                </div>
  
                <div class="d-grid col-md-1 mx-auto">
                  <button
                    @click="delSheetDeliveredPlaceRow"
                    type="button"
                    class="btn btn-outline-danger"
                    :disabled="sheetDeliveredPlaceRow === 0"
                  >
                    <i class="fa-solid fa-minus"></i>
                  </button>
                </div>
              </div>
  
              <div v-if="formData.sheetDeliveredPlace3 == 'cutting'" class="form-group">
  
                <div class="row mb-3">
                  <div class="col-md-6 form-group">
                    <!-- <select
                    class="form-select-lg form-select"
                    id="rollOrSheet3"
                    v-model="formData.rollOrSheet3"
                    required
                  >
                    <option value="" class="spinner-border">کد رول یا شیت را انتخاب کنید</option>
                    <option v-for="roll in listOfRolls" :value="roll" :key="roll.index">{{ roll.code }}  |  مالکیت: {{ roll.ownership }} |  جنس:{{ roll.material }} |  برند: {{ roll.brand }} |  کشور سازنده: {{ roll.manuf_country }}</option>
                    <option v-for="sheet in listOfSheets" :value="sheet" :key="sheet.index">{{ sheet.code }}  |  مالکیت: {{ sheet.ownership }} |  جنس:{{ sheet.material }} |  برند: {{ sheet.brand }} |  کشور سازنده: {{ sheet.manuf_country }}</option>
                  </select> -->

                  <v-select 
                    dir="rtl" 
                    id="rollOrSheet3"
                    class="" 
                    v-model="formData.rollOrSheet3" 
                    placeholder="کد رول یا شیت را انتخاب کنید"
                    :filter="fuseSearchRollAndSheet"
                    :options="listOfRolls && listOfSheets" 
                    :get-option-label="(option) => option.code"
                    :loading="loading.listOfRollsOrSheets"
                    close-on-select
                    required
                  >

                    <template #spinner="{ loading }">
                      <div
                        v-if="loading.listOfRollsOrSheets"
                        style="border-left-color: rgba(88, 151, 251, 0.71)"
                        class="vs__spinner"
                      >
                      </div>
                    </template>
                  
                    <template #option="{ code , ownership , material , brand , manuf_country}">
                      <h4 style="margin: 0">{{ code }}</h4>
                      <em>مالکیت: {{ ownership }} | جنس: {{ material }} | برند: {{ brand }} | کشور سازنده: {{ manuf_country }}</em>
                    </template>

                  </v-select>
                  </div>
    
                  <div class="col-md-6 form-group">
                      <input
                        type="number"
                        class="form-control position-relative input-lg text-center"
                        id="numberOfSheetDeliveredCutting3"
                        v-model="formData.numberOfSheetDeliveredCutting3"
                        placeholder="تعداد ورق ارسالی را وارد کنید"
                      />
                    </div>
                </div>
              </div>
  
              <div v-if="formData.sheetDeliveredPlace3 == 'storage'">
                <div class="row mb-3">
                  <div class="col-md-6 form-group">
                    <select
                        class="form-select form-select-lg"
                        id="storingCode3"
                        v-model="formData.storingCode3"
                        aria-expanded="false"
                        >
                        <option value="">کد انبارش را انتخاب کنید
                          <!-- <div v-if="loading.storingCode === false">
                            کد انبارش را انتخاب کنید
                          </div>
                          <div v-if="loading.storingCode">
                            در حال بارگذاری...
                          </div> -->
                        </option>
                        <option v-for="storingCode in storingCodes" :value="storingCode.id" :key="storingCode.index">storingCode.code</option>
                      </select>
                  </div>
  
                  <div class="col-md-6 form-group">
                    <input
                      type="number"
                      class="form-control position-relative input-lg text-center"
                      id="numberOfSheetDeliveredStore3"
                      v-model="formData.numberOfSheetDeliveredStore3"
                      placeholder="تعداد ورق ارسالی را وارد کنید"
                    />
                  </div>
                </div>
              </div>
  
              
            <div v-if="formData.sheetDeliveredPlace3 == 'wastageStorage'">
              <div class="row mb-3">
                <div class="col-md-6 form-group">
                  <input 
                  type="number" 
                  class="form-control position-relative input-lg text-center" 
                  id="numberOfSheetDeliveredWaste3" 
                  v-model="formData.numberOfSheetDeliveredWaste3"
                  placeholder="تعداد ورق ارسالی را وارد کنید" 
                  >
                </div>

                <div class="form-group col-md-6">
                    <div class="input-group">
                      <input type="number" id="areaOfWasteForTestTemplateX3" v-model="formData.areaOfWasteForTestTemplateX3" aria-label="طول" placeholder="طول" class="form-control position-relative input-lg text-center">
                      <input type="number" id="areaOfWasteForTestTemplateY3" v-model="formData.areaOfWasteForTestTemplateY3" aria-label="عرض" placeholder="عرض" class="form-control position-relative input-lg text-center">
                        <span class="input-group-text">m</span>
                    </div>
                </div>
              </div>
            </div>
            </div>
          </div>


          <div class="form-row d-grid gap-2 justify-content-md-center d-md-flex mt-2">
            <button @click="backToMain" class="btn btn-danger col-md-2 btn-lg">
              بازگشت
            </button>
      
            <button class="btn btn-logo col-md-10 btn-lg" type="submit">
              تایید فرم
            </button>
          </div> 
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import {useProductionLineStore} from '../../production-line-reports-store/productionLineReportsStore'
import { computed } from '@vue/runtime-core';
import Fuse from 'fuse.js'

export default {
  data() {
    return {
      moreInfo: "null",

    };
  },

  methods: {
    moreInformation() {
      this.moreInfo = document.querySelector("#sheetReceivedFault").value;
    },

    backToMain(){
      this.$router.push({path:"/production"})
    },

    fuseSearchProduct(options, search) {
      const fuse = new Fuse(options, {
        keys: ['code' , 'productCode'],
        shouldSort: true,
      })
      return search.length
        ? fuse.search(search).map(({ item }) => item)
        : fuse.list
    },

    fuseSearchRollAndSheet(options, search) {
      const fuse = new Fuse(options, {
        keys: ['code' , 'ownership' , 'material' , 'brand' , 'manuf_country'],
        shouldSort: true,
      })
      return search.length
        ? fuse.search(search).map(({ item }) => item)
        : fuse.list
    },
  },

  setup() {
    const formData = reactive({
      subLevel : 'sheetDeliveredForTestTemplate',
      product: '',
      sheetDeliveredPlace1: '',
      sheetDeliveredPlace2: '',
      sheetDeliveredPlace3: '',
      rollOrSheet1: '',
      rollOrSheet2: '',
      rollOrSheet3: '',
      storingCode1: '',
      storingCode2: '',
      storingCode3: '',
      numberOfSheetDeliveredCutting1: '',
      numberOfSheetDeliveredCutting2: '',
      numberOfSheetDeliveredCutting3: '',
      numberOfSheetDeliveredStore1: '',
      numberOfSheetDeliveredStore2: '',
      numberOfSheetDeliveredStore3: '',
      numberOfSheetDeliveredWaste1: '',
      numberOfSheetDeliveredWaste2: '',
      numberOfSheetDeliveredWaste3: '',
      areaOfWasteForTestTemplateX1: '',
      areaOfWasteForTestTemplateX2: '',
      areaOfWasteForTestTemplateX3: '',
      areaOfWasteForTestTemplateY1: '',
      areaOfWasteForTestTemplateY2: '',
      areaOfWasteForTestTemplateY3: '',

    })

    const validateData = reactive({
      product: '',
      sheetDeliveredPlace1: '',
    })

    const sheetDeliveredPlaceRow = ref(3);
    const store = useProductionLineStore();
    const rollAndSheetLouded = ref(false)
    const storageLouded = ref(false)

    const loading = reactive({
      product: false,
      listOfRollsOrSheets  : false,
      storingCode  : false,
    })
    
    const storingCodes = computed(() => store.storingCodes);
    const productsList = computed(() => store.productsList);

    function addSheetDeliveredPlaceRow() {
      sheetDeliveredPlaceRow.value = sheetDeliveredPlaceRow.value - 1;
    }

    function delSheetDeliveredPlaceRow() {
      sheetDeliveredPlaceRow.value = sheetDeliveredPlaceRow.value + 1;
    }
    
    async function getListOfProducts() {
        loading.product = true;
        await store.getListOfproducts();
        loading.product = false;
    }

    // async function getRollsAndSheetsList() {
    //       loading.listOfRollsOrSheets = true;
    //       await store.getListOfRolls();
    //       await store.getListOfSheets();
    //       loading.listOfRollsOrSheets = false;
    //     }

    async function sheetDeliveredPlace() {
      if( (formData.sheetDeliveredPlace1 == 'cutting' || formData.sheetDeliveredPlace2 == 'cutting' || formData.sheetDeliveredPlace3 == 'cutting') && rollAndSheetLouded.value == false){
        loading.listOfRollsOrSheets = true;
        await store.getListOfRolls();
        await store.getListOfSheets();
        rollAndSheetLouded.value = true;
        loading.listOfRollsOrSheets = false;
      }
      else if((formData.sheetDeliveredPlace1 == 'storage' || formData.sheetDeliveredPlace2 == 'storage' || formData.sheetDeliveredPlace3 == 'storage') && storageLouded.value == false){
        loading.storingCode = true;
        await store.getStoringCode();
        storageLouded.value = true;
        loading.storingCode = false;
      }
        }

        async function submitForm() {
          if (formData.product == "" || 
          formData.sheetDeliveredPlace1 == "") {
            if(formData.product == ""){
              validateData.product = "نام محصول را انتخاب کنید!";
            }
            else validateData.product = "";

            if(formData.sheetDeliveredPlace1 == ""){
              validateData.sheetDeliveredPlace1 = "محل تخصیص ورق را وارد کنید!";
            }
            else validateData.sheetDeliveredPlace1 = "";
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

    return {
      sheetDeliveredPlaceRow,
      addSheetDeliveredPlaceRow,
      delSheetDeliveredPlaceRow,
      getListOfProducts,
      loading,
      productsList,
      formData,
      // getRollsAndSheetsList,
      // getStoringCodes,
      storingCodes,
      sheetDeliveredPlace,
      rollAndSheetLouded,
      storageLouded,
      submitForm,
      validateData,
    };
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