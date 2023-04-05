<template>
  <div>
    <div class="card m-2">
      <div class="card-header">
        <h2 class="text-center">تحویل ورق جهت جبران ضایعات</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="form-row form-group form-row mb-3">
            <label
              class="form-control-lg text-center d-block"
              for="orderProductID"
              >شناسه تولید
            </label>
            <!-- <select
              class="form-select form-select-lg"
              id="orderProductID"
              v-model="formData.orderProductID"
              aria-expanded="false"
            >
            <option value="" class="spinner-border">
              <div v-if="loading.orderProductID === false">
                شناسه تولید را انتخاب کنید
              </div>
              <div v-if="loading.orderProductID">
                در حال بارگذاری...
              </div>
            </option>
            <option v-for="orderProductID in orderProductIDs" :value="orderProductID.id" :key="orderProductID.index">{{ orderProductID.code }}  |  کد محصول: {{ orderProductID.productCode }} |  نام محصول:{{ orderProductID.productName }} |  تعداد: {{ orderProductID.number }} |  نام مشتری: {{ orderProductID.customer }} |  شماره سفارش: {{ orderProductID.orderID }}</option>
            </select>
            <div class="form-text text-danger">
              {{validateData.product}}
            </div>  -->

            <v-select 
              dir="rtl" 
              id="orderProductID"
              class="" 
              v-model="formData.orderProductID" 
              placeholder="شناسه تولید را انتخاب کنید"
              :filter="fuseSearchProductID"
              :options="orderProductIDs" 
              :get-option-label="(option) => option.code"
              :loading="loading.orderProductID"
              close-on-select
            >

              <template #spinner="{ loading }">
                <div
                  v-if="loading.orderProductID"
                  style="border-left-color: rgba(88, 151, 251, 0.71)"
                  class="vs__spinner"
                >
                </div>
              </template>
            
              <template #option="{ code , productCode , productName , number , customer , orderID }">
                <h4 style="margin: 0">{{ code }}</h4>
                <em>کد محصول: {{ productCode }} | نام محصول: {{ productName }} | تعداد: {{ number }} | نام مشتری: {{ customer }} |  شماره سفارش: {{ orderID }}</em>
              </template>

              <template #footer>
                <div class="form-text text-danger">
                  {{validateData.orderProductID}}
                </div>
              </template>

            </v-select>
          </div>

          <div class="form-row form-group form-row text-center mb-3">
            <label
              class="form-control-lg"
              for="numberOfSheetDelivered"
              >تعداد ورق درخواستی
            </label>
            <input
              type="number"
              class="form-control position-relative input-lg text-center"
              id="numberOfSheetRequestForWaste"
              placeholder="تعداد ورق درخواست شده"
              disabled='true'
            />
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
                      @change="sheetDeliveredPlace() && correctionSumOfDelivered1()"
                      class="form-select form-select-lg"
                      id="sheetDeliveredPlace1"
                      v-model="formData.sheetDeliveredPlace1"
                      aria-expanded="false"
                    >
                      <option value="">محل تخصیص ورق را انتخاب کنید</option>
                      <option value="cutting">برشکاری از رول یا شیت</option>
                      <option value="storage">انبار</option>
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
            
              <div v-if="formData.sheetDeliveredPlace1 == 'cutting'" class="row mb-3">
                  <div class="col-md-6">
                    <!-- <select
                      class="form-select form-select-lg"
                      id="rollID1"
                      v-model="formData.storingCode1"
                      aria-expanded="false"
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
  
                  <div class="col-md-6">
                    <input
                      type="number"
                      class="form-control position-relative input-lg text-center"
                      id="numberOfSheetDeliveredCutting1"
                      placeholder="تعداد ورق ارسال شده"
                      v-model="formData.numberOfSheetDeliveredCutting1"
                      required
                    />
                  </div>
              </div>
            
              <div v-if="formData.sheetDeliveredPlace1 == 'storage'">
                <div class="row mb-3">
                  <div class="col-md-6 form-group">
                    <select
                      class="form-select form-select-lg"
                      id="storedProductID1"
                      v-model="formData.storingCode1"
                      aria-expanded="false"
                      required
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
                      placeholder="تعداد ورق ارسال شده"
                      v-model="formData.numberOfSheetDeliveredStore1"
                      required
                    />
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
                      @change="sheetDeliveredPlace() && correctionSumOfDelivered2()"
                      class="form-select form-select-lg"
                      id="sheetDeliveredPlace2"
                      v-model="formData.sheetDeliveredPlace2"
                      aria-expanded="false"
                      required
                    >
                      <option value="">محل تخصیص ورق را انتخاب کنید</option>
                      <option value="cutting">برشکاری از رول یا شیت</option>
                      <option value="storage">انبار</option>
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
                <div class="col-md-6">
                    <!-- <select
                      class="form-select form-select-lg"
                      id="rollID2"
                      v-model="formData.storingCode2"
                      aria-expanded="false"
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

                  <div class="col-md-6">
                    <input
                      type="number"
                      class="form-control position-relative input-lg text-center"
                      id="numberOfSheetDeliveredCutting2"
                      placeholder="تعداد ورق ارسال شده"
                      v-model="formData.numberOfSheetDeliveredCutting2"
                      required
                    />
                  </div>
                </div>
              </div>

              <div v-if="formData.sheetDeliveredPlace2 == 'storage'" class="row mb-3">
                <div class="col-md-6">
                  <select
                    class="form-select form-select-lg"
                    id="storedProductID2"
                    v-model="formData.storingCode2"
                    aria-expanded="false"
                    required
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

                <div class="col-md-6">
                  <input
                    type="number"
                    class="form-control position-relative input-lg text-center"
                    id="numberOfSheetDeliveredStore2"
                    placeholder="تعداد ورق ارسال شده"
                    v-model="formData.numberOfSheetDeliveredStore2"
                  />
                </div>
              </div>
            </div>
  
            <hr v-if="sheetDeliveredPlaceRow < 2">
  
            <div v-if="sheetDeliveredPlaceRow < 2">
              <div class="row mb-3">
                <div class="form-group col-md-11">
                  <div>
                    <select
                      @change="sheetDeliveredPlace() && correctionSumOfDelivered3()"
                      class="form-select form-select-lg"
                      id="sheetDeliveredPlace3"
                      aria-expanded="false"
                      v-model="formData.sheetDeliveredPlace3"
                      required
                    >
                      <option value="">محل تخصیص ورق را انتخاب کنید</option>
                      <option value="cutting">برشکاری از رول یا شیت</option>
                      <option value="storage">انبار</option>
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

              <div v-if="formData.sheetDeliveredPlace3 == 'cutting'" class="row mb-3">
                <div class="col-md-6">
                  <!-- <select
                    class="form-select form-select-lg"
                    id="rollID3"
                    v-model="formData.storingCode3"
                    aria-expanded="false"
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

                <div class="col-md-6">
                  <input
                      type="number"
                      class="form-control position-relative input-lg text-center"
                      id="numberOfSheetDeliveredCutting3"
                      placeholder="تعداد ورق ارسال شده"
                      v-model="formData.numberOfSheetDeliveredCutting3"
                    />
                </div>
              </div>

              <div v-if="formData.sheetDeliveredPlace3 == 'storage'" class="row mb-3">
                <div class="col-md-6">
                  <select
                    class="form-select form-select-lg"
                    id="storedProductID3"
                    v-model="formData.storingCode3"
                    aria-expanded="false"
                    required
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
                
                <div class="col-md-6">
                  <input
                      type="number"
                      class="form-control position-relative input-lg text-center"
                      id="numberOfSheetDeliveredStore3"
                      placeholder="تعداد ورق ارسال شده"
                      v-model="formData.numberOfSheetDeliveredStore3"
                    />
                </div>
              </div>
            </div>
          </div>

          <div class="form-row form-group form-row mt-3 mb-3">
            <label 
            class="form-control-lg text-center d-block"
            for="sumOfNumberOfSheetDelivered"
             >مجموع تعداد ورق
            </label>
            <input 
            type="number" 
            class="form-control position-relative input-lg text-center" 
            id="sumOfNumberOfSheetDelivered" 
            placeholder="مجموع تعداد ورق ارسالی " 
            v-model="sumOfNumberOfSheetDelivered"
            disabled
            >
          </div>

          <div class="form-row d-grid gap-2 justify-content-md-center d-md-flex">
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
import { computed } from '@vue/runtime-core';
import {useProductionLineStore} from '../../production-line-reports-store/productionLineReportsStore'
import Fuse from 'fuse.js'

export default {
  data() {
    return {
      moreInfo: "null",
      sheetDeliveredPlace1: "null",
      sheetDeliveredPlace2: "null",
      sheetDeliveredPlace3: "null",
    };
  },

  methods: {
    moreInformation() {
      this.moreInfo = document.querySelector("#sheetReceivedFault").value;
    },

    backToMain(){
      this.$router.push({path:"/production"})
    },

    fuseSearchProductID(options, search) {
      const fuse = new Fuse(options, {
        keys: [ 'code' , 'productCode' , 'productName' , 'number' , 'customer' , 'orderID'],
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
      subLevel : 'sheetDeliveredForWaste',
      orderProductID : '',
      sheetDeliveredPlace1: '',
      sheetDeliveredPlace2: '',
      sheetDeliveredPlace3: '',
      numberOfSheetDeliveredCutting1: 0,
      numberOfSheetDeliveredCutting2: 0,
      numberOfSheetDeliveredCutting3: 0,
      numberOfSheetDeliveredStore1: 0,
      numberOfSheetDeliveredStore2: 0,
      numberOfSheetDeliveredStore3: 0,
      storingCode1: '',
      storingCode2: '',
      storingCode3: '',
      rollOrSheet1: '',
      rollOrSheet2: '',
      rollOrSheet3: '',
    })

    const loading = reactive({
      orderProductID : '',
      listOfRollsOrSheets : '',
      storingCode : '',
    })

    const validateData = reactive({
      orderProductID : '',
      sheetDeliveredPlace1 : '',
    })

    const sumOfNumberOfSheetDelivered = computed(() => formData.numberOfSheetDeliveredCutting1 + formData.numberOfSheetDeliveredCutting2 + formData.numberOfSheetDeliveredCutting3 + formData.numberOfSheetDeliveredStore1 + formData.numberOfSheetDeliveredStore2 + formData.numberOfSheetDeliveredStore3)

    const sheetDeliveredPlaceRow = ref(3);
    const rollAndSheetLouded = ref(false)
    const storageLouded = ref(false)

    const store = useProductionLineStore()
    const orderProductIDs = computed(() => store.orderProductIDs);
    const listOfRolls = computed(() => store.allRolls);
    const listOfSheets = computed(() => store.allSheets);
    const storingCodes = computed(() => store.storingCodes);

    function correctionSumOfDelivered1(){
      if(formData.sheetDeliveredPlace1 == 'cutting'){
        formData.numberOfSheetDeliveredStore1 = 0
        formData.storingCode1 = null
      }
      else if(formData.sheetDeliveredPlace1 == 'storage'){
        formData.numberOfSheetDeliveredCutting1 = 0
        formData.storingCode1 = null
      }
      else{
        formData.numberOfSheetDeliveredStore1 = 0
        formData.numberOfSheetDeliveredCutting1 = 0
        formData.storingCode1 = null
        formData.storingCode1 = null
      }
    }

    function correctionSumOfDelivered2(){
      if(formData.sheetDeliveredPlace2 == 'cutting'){
        formData.numberOfSheetDeliveredStore2 = 0
        formData.storingCode2 = null
      }
      else if(formData.sheetDeliveredPlace2 == 'storage'){
        formData.numberOfSheetDeliveredCutting2 = 0
        formData.storingCode2 = null
      }
      else if(formData.sheetDeliveredPlace2 === ''){
        formData.numberOfSheetDeliveredStore2 = 0
        formData.numberOfSheetDeliveredCutting2 = 0
        formData.storingCode2 = null
        formData.storingCode2 = null
      }
    }

    function correctionSumOfDelivered3(){
      if(formData.sheetDeliveredPlace3 == 'cutting'){
        formData.numberOfSheetDeliveredStore3 = 0
        formData.storingCode3 = null
      }
      else if(formData.sheetDeliveredPlace3 == 'storage'){
        formData.numberOfSheetDeliveredCutting3 = 0
        formData.storingCode3 = null
      }
      else{
        formData.numberOfSheetDeliveredStore3 = 0
        formData.numberOfSheetDeliveredCutting3 = 0
        formData.storingCode3 = null
        formData.storingCode3 = null
      }
    }

    function addSheetDeliveredPlaceRow() {
      sheetDeliveredPlaceRow.value = sheetDeliveredPlaceRow.value - 1;
    }

    function delSheetDeliveredPlaceRow() {
      sheetDeliveredPlaceRow.value = sheetDeliveredPlaceRow.value + 1;
      if(sheetDeliveredPlaceRow.value == 3){
          formData.numberOfSheetDeliveredStore2 = 0
          formData.numberOfSheetDeliveredCutting2 = 0
          formData.storingCode2 = null
          formData.storingCode2 = null
          formData.numberOfSheetDeliveredStore3 = 0
          formData.numberOfSheetDeliveredCutting3 = 0
          formData.storingCode3 = null
          formData.storingCode3 = null    
        }
        else{
          formData.numberOfSheetDeliveredStore3 = 0
          formData.numberOfSheetDeliveredCutting3 = 0
          formData.storingCode3 = null
          formData.storingCode3 = null    
        }
    }

    async function getOrderProductIDs() {
        loading.orderProductID = true;
        await store.getListOfOrderProductIDs();
        loading.orderProductID = false;
    }

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

    getOrderProductIDs();

    async function submitForm() {
      if (formData.orderProductID == "" || 
      formData.sheetDeliveredPlace1 == "") {
        if(formData.orderProductID == ""){
          validateData.orderProductID = "شناسه تولید را انتخاب کنید!";
        }
        else validateData.orderProductID = "";

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
      formData,
      orderProductIDs,
      getOrderProductIDs,
      loading,
      validateData,
      sheetDeliveredPlace,
      rollAndSheetLouded,
      storageLouded,
      sumOfNumberOfSheetDelivered,
      storingCodes,
      listOfSheets,
      listOfRolls,
      correctionSumOfDelivered1,
      correctionSumOfDelivered2,
      correctionSumOfDelivered3,
      submitForm,
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

.select-size1 {
  width: 104%;
}
</style>