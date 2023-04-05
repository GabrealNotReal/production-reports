<template>
    <div>
        <div class="card m-2">
            <div class="card-header">
                <h2 class="text-center">برش ورق از رول/شیت</h2>
            </div>
            <div class="card-body">
                <form @submit.prevent="submitForm">

                    <div class="form-group form-row mb-3">
                  <label class="form-control-lg d-block text-center" for="rollOrSheet">کد رول/شیت </label>
                  <!-- <select
                    @click="getRollsAndSheetsList"
                    class="form-select-lg form-select"
                    id="rollOrSheet"
                    v-model="formData.rollOrSheet"
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
                  </select>
                  <div class="form-text text-danger">
                    {{validateData.rollOrSheet}}
                  </div>  -->

                  <v-select 
                    dir="rtl" 
                    @click="getRollsAndSheetsList"
                    id="rollOrSheet"
                    class="form-select-lg" 
                    v-model="formData.rollOrSheet" 
                    placeholder="کد رول یا شیت را انتخاب کنید"
                    :filter="fuseSearchRollAndSheet"
                    :options="listOfRolls " 
                    :get-option-label="(option) => option.code"
                    :loading="loading.listOfRollsOrSheets"
                    close-on-select
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

                    <template #footer>
                      <div class="form-text text-danger">
                        {{validateData.rollOrSheet}}
                      </div>
                    </template>
                    
                  </v-select>
                </div>

                    <div class="row mb-3">
                        <div class="form-group col-md-4">
                            <label class="form-control-lg" for="numberOfPrimaryCut">تعداد برش اولیه
                            </label>
                            <input type="number" class="form-control position-relative input-lg text-center" id="numberOfPrimaryCut"
                                placeholder="تعداد برش اولیه را وارد کنید" v-model="formData.numberOfPrimaryCut">
                                <div class="form-text text-danger">
                                  {{validateData.numberOfPrimaryCut }}
                                </div> 
                        </div>

                        <div class="form-group col-md-4">
                            <label class="form-control-lg" for="lenghtOfPrimaryCut">طول برش اولیه
                            </label>
                            <div class="input-group">
                                <input 
                                type="number" 
                                class="form-control position-relative input-lg text-center" 
                                id="lenghtOfPrimaryCut"
                                placeholder="طول برش اولیه را وارد کنید"
                                v-model="formData.lenghtOfPrimaryCut"
                                >
                                    <span class="input-group-text">m</span>
                            </div>
                            <div class="form-text text-danger">
                              {{validateData.lenghtOfPrimaryCut }}
                            </div> 
                        </div>

                        <div class="form-group col-md-4">
                            <label class="form-control-lg" for="lenghtOfPrimaryCut">وزن برش اولیه
                            </label>
                            <div class="input-group">
                                <input 
                                type="number" 
                                class="form-control position-relative input-lg text-center" 
                                id="weightOfPrimaryCut"
                                placeholder="وزن برش اولیه را وارد کنید"
                                v-model="formData.weightOfPrimaryCut"
                                >
                                    <span class="input-group-text">kg</span>
                            </div>
                            <div class="form-text text-danger">
                              {{validateData.weightOfPrimaryCut }}
                            </div> 
                        </div>
                    </div>

                    <!-- stat-of-secondCut -->
                    <div class="card p-2">
                        <div class="card-header mb-3">
                            <label class="form-control-lg font-medium-5 d-block text-center">برش ثانویه</label>
                        </div>

                        <div class="row mb-3">
                            <div class="form-group col-md-2">
                                <select 
                                @change="usegeSecondCutFunc"
                                class="form-select form-select-lg" 
                                id="usageSecondCut1"
                                v-model="secondCutData[1].type"
                                aria-expanded="false">
                                    <option value= null>استفاده جهت</option>
                                    <option value="wastage">ضایعات</option>
                                    <option value="order">سفارش</option>
                                    <option value="store">انبارش</option>
                                </select>
                                <div class="form-text text-danger">
                                  {{validateData.usageSecondCut1 }}
                                </div> 
                            </div>
    
    
                            <div v-if="secondCutData[1].type === 'wastage' || secondCutData[1].type === null" class="form-group col-md-2">
                                <input type="text" class="form-control position-relative input-lg text-center" id="forWaste"
                                    value="-------------------" readonly>
                            </div>
    
                            <div v-if="secondCutData[1].type === 'order'" class="form-group col-md-2">
                                <select 
                                class="form-select form-select-lg" 
                                id="orderProductID1"
                                v-model="secondCutData[1].order_products"
                                aria-expanded="false" 
                                required>
                                    <option value="" class="spinner-border">
                                      <div v-if="loading.orderProductID === false">
                                        شناسه تولید را انتخاب کنید
                                      </div>
                                      <div v-if="loading.orderProductID">
                                        در حال بارگذاری...
                                      </div>
                                    </option>
                                    <option v-for="orderProductID in orderProductIDs" :value="orderProductID" :key="orderProductID.index">{{ orderProductID }}</option>
                                </select>

                                <!-- <v-select 
                                  dir="rtl" 
                                  @option:selected="selectRoll"
                                  id="orderProductID1"
                                  class="" 
                                  v-model="formData.orderProductID1" 
                                  placeholder="شناسه تولید را انتخاب کنید"
                                  :filter="fuseSearchProductID"
                                  :options="orderProductIDs" 
                                  :get-option-label="(option) => option.code"
                                  :loading="loading.listOfRollsOrSheets"
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

                                </v-select> -->
                            </div>
    
                            <!-- <div v-if="secondCutData[1].type === 'store'" class="d-grid mx-auto col-md-2">
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
                            </div> -->
    
                            <div class="form-group col-md-2">
                                <input 
                                type="number" 
                                class="form-control position-relative input-lg text-center" 
                                id="numberOfSecondaryCut1"
                                v-model="secondCutData[1].qty"
                                placeholder="تعداد برش ثانویه">
                                <div class="form-text text-danger">
                                  {{validateData.numberOfSecondaryCut1 }}
                                </div> 
                            </div>

                            <div class="form-group col-md-2">
                                <div class="input-group">
                                    <input 
                                    type="number" 
                                    class="form-control position-relative input-lg text-center" 
                                    id="weightOfSecondCut1"
                                    placeholder="وزن برش ثانویه"
                                    v-model="secondCutData[1].weight"
                                    >
                                        <span class="input-group-text">kg</span>
                                </div>
                                <div class="form-text text-danger">
                                  {{validateData.weightOfSecondCut1 }}
                                </div> 
                            </div>

    
                            <div class="form-group col-md-3">
                                <div class="input-group">
                                    <input 
                                    type="number" 
                                    id="secondCutX1" 
                                    aria-label="طول" 
                                    placeholder="طول"
                                    v-model="secondCutData[1].length"
                                    class="form-control position-relative input-lg text-center">
                                    <input 
                                    type="number" 
                                    id="secondCutY1" 
                                    aria-label="عرض" 
                                    placeholder="عرض"
                                    v-model="secondCutData[1].width"
                                    class="form-control position-relative input-lg text-center">
                                        <span class="input-group-text">m</span>
                                </div>
                                <div class="form-text text-danger">
                                  {{validateData.secondCutXY1 }}
                                </div> 
                            </div>
    
                            <div class="d-grid col-md-1 mx-auto">
                                <button @click="addSecondaryCutRow" 
                                type="button"
                                class="btn btn-outline-logo" 
                                >
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
    
                        <hr v-if="secondaryCutRow < 4" >
    
                        <div v-if="secondaryCutRow < 4" class="row mb-2">
                            <div class="form-group col-md-2">
                                <select 
                                @click="usage2" 
                                class="form-select form-select-lg" 
                                id="usageSecondCut2"
                                v-model="secondCutData[2].type"
                                aria-expanded="false"
                                required>
                                    <option value=null>استفاده جهت</option>
                                    <option value="wastage">ضایعات</option>
                                    <option value="order">سفارش</option>
                                    <option value="store">انبارش</option>
                                </select>
                            </div>
    
    
                            <div v-if="secondCutData[2].type === 'wastage' || secondCutData[2].type === null" class="form-group col-md-2">
                                <input type="text" class="form-control position-relative input-lg text-center" id="forWaste"
                                    value="-------------------" readonly>
                            </div>
    
                            <div v-if="secondCutData[2].type === 'order'" class="form-group col-md-2">
                                <!-- <select 
                                class="form-select form-select-lg" 
                                id="orderProductID2"
                                v-model="formData.orderProductID2"
                                aria-expanded="false" 
                                required>
                                    <option value="" class="spinner-border">
                                      <div v-if="loading.orderProductID === false">
                                        شناسه تولید را انتخاب کنید
                                      </div>
                                      <div v-if="loading.orderProductID">
                                        در حال بارگذاری...
                                      </div>
                                    </option>
                                    <option v-for="orderProductID in orderProductIDs" :value="orderProductID.id" :key="orderProductID.index">{{ orderProductID.code }}  |  کد محصول: {{ orderProductID.productCode }} |  نام محصول:{{ orderProductID.productName }} |  تعداد: {{ orderProductID.number }} |  نام مشتری: {{ orderProductID.customer }} |  شماره سفارش: {{ orderProductID.orderID }}</option>
                                </select> -->

                                <select 
                                class="form-select form-select-lg" 
                                id="orderProductID1"
                                v-model="formData.orderProductID2"
                                aria-expanded="false" 
                                required>
                                    <option value="" class="spinner-border">
                                      <div v-if="loading.orderProductID === false">
                                        شناسه تولید را انتخاب کنید
                                      </div>
                                      <div v-if="loading.orderProductID">
                                        در حال بارگذاری...
                                      </div>
                                    </option>
                                    <option v-for="orderProductID in orderProductIDs" :value="orderProductID" :key="orderProductID.index">{{ orderProductID }}</option>
                                </select>

                                <!-- <v-select 
                                  dir="rtl" 
                                  @option:selected="selectRoll"
                                  id="orderProductID2"
                                  class="" 
                                  v-model="formData.orderProductID2" 
                                  placeholder="شناسه تولید را انتخاب کنید"
                                  :filter="fuseSearchProductID"
                                  :options="orderProductIDs" 
                                  :get-option-label="(option) => option.code"
                                  :loading="loading.listOfRollsOrSheets"
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

                                </v-select> -->
                            </div>
    
                            <!-- <div v-if="secondCutData[2].type === 'store'" class="d-grid mx-auto col-md-2">
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
                            </div> -->
    
                            <div class="form-group col-md-2">
                                <input 
                                type="number" 
                                class="form-control position-relative input-lg text-center" 
                                id="numberOfSecondaryCut2"
                                v-model="secondCutData[2].qty"
                                placeholder="تعداد برش ثانویه"
                                required>
                            </div>

                            <div class="form-group col-md-2">
                                <div class="input-group">
                                    <input 
                                    type="number" 
                                    class="form-control position-relative input-lg text-center" 
                                    id="weightOfSecondCut2"
                                    placeholder="وزن برش ثانویه"
                                    v-model="secondCutData[2].weight"
                                    >
                                        <span class="input-group-text">kg</span>
                                </div>
                            </div>
    
                            <div class="form-group col-md-3">
                                <div class="input-group">
                                    <input 
                                    type="number" 
                                    id="secondCutX2" 
                                    aria-label="طول" 
                                    placeholder="طول"
                                    v-model="secondCutData[2].length"    
                                    class="form-control position-relative input-lg text-center"
                                    required>
                                    <input 
                                    type="number" 
                                    id="secondCutY2" 
                                    aria-label="عرض" 
                                    placeholder="عرض"
                                    v-model="secondCutData[2].width"
                                    class="form-control position-relative input-lg text-center"
                                    required>
                                        <span class="input-group-text">m</span>
                                </div>
                            </div>
    
                            <div class="d-grid col-md-1 mx-auto">
                                <button 
                                @click="delSecondaryCutRow" 
                                :disabled="secondaryCutRow < 3" 
                                type="button"
                                class="btn btn-outline-danger">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                            </div>
                        </div>
    
                        <hr v-if="secondaryCutRow < 3">
    
                        <div v-if="secondaryCutRow < 3" class="row mb-3">
                            <div class="form-group col-md-2">
                                <select 
                                @click="usage3" 
                                class="form-select form-select-lg" 
                                id="usageSecondCut3"
                                v-model="secondCutData[3].type"
                                aria-expanded="false"
                                required>
                                    <option value= null >استفاده جهت</option>
                                    <option value="wastage">ضایعات</option>
                                    <option value="order">سفارش</option>
                                    <option value="store">انبارش</option>
                                </select>
                            </div>
    
    
                            <div v-if="secondCutData[3].type === 'wastage' || secondCutData[3].type === null" class="form-group col-md-2">
                                <input type="text" class="form-control position-relative input-lg text-center" id="forWaste"
                                    value="-------------------" readonly>
                            </div>
    
                            <div v-if="secondCutData[3].type === 'order'" class="form-group col-md-2">
                                <!-- <select 
                                class="form-select form-select-lg" 
                                id="orderProductID3"
                                v-model="formData.orderProductID3"
                                aria-expanded="false" 
                                required>
                                    <option value="" class="spinner-border">
                                      <div v-if="loading.orderProductID === false">
                                        شناسه تولید را انتخاب کنید
                                      </div>
                                      <div v-if="loading.orderProductID">
                                        در حال بارگذاری...
                                      </div>
                                    </option>
                                    <option v-for="orderProductID in orderProductIDs" :value="orderProductID.id" :key="orderProductID.index">{{ orderProductID.code }}  |  کد محصول: {{ orderProductID.productCode }} |  نام محصول:{{ orderProductID.productName }} |  تعداد: {{ orderProductID.number }} |  نام مشتری: {{ orderProductID.customer }} |  شماره سفارش: {{ orderProductID.orderID }}</option>
                                </select> -->

                                <select 
                                class="form-select form-select-lg" 
                                id="orderProductID3"
                                v-model="secondCutData[3].order_products"
                                aria-expanded="false" 
                                required>
                                    <option value="" class="spinner-border">
                                      <div v-if="loading.orderProductID === false">
                                        شناسه تولید را انتخاب کنید
                                      </div>
                                      <div v-if="loading.orderProductID">
                                        در حال بارگذاری...
                                      </div>
                                    </option>
                                    <option v-for="orderProductID in orderProductIDs" :value="orderProductID" :key="orderProductID.index">{{ orderProductID }}</option>
                                </select>

                                <!-- <v-select 
                                  dir="rtl" 
                                  @option:selected="selectRoll"
                                  id="orderProductID3"
                                  class="" 
                                  v-model="formData.orderProductID3" 
                                  placeholder="شناسه تولید را انتخاب کنید"
                                  :filter="fuseSearchProductID"
                                  :options="orderProductIDs" 
                                  :get-option-label="(option) => option.code"
                                  :loading="loading.listOfRollsOrSheets"
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

                                </v-select> -->
                            </div>
    
                            <!-- <div v-if="secondCutData[3].type === 'store'" class="d-grid mx-auto col-md-2">
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
                            </div> -->
    
                            <div class="form-group col-md-2">
                                <input 
                                type="number" 
                                class="form-control position-relative input-lg text-center" 
                                id="numberOfSecondaryCut3"
                                v-model="secondCutData[3].qty"
                                placeholder="تعداد برش ثانویه" 
                                required>
                            </div>
                            
                            <div class="form-group col-md-2">
                                <div class="input-group">
                                    <input 
                                    type="number" 
                                    class="form-control position-relative input-lg text-center" 
                                    id="weightOfSecondCut3"
                                    placeholder="وزن برش ثانویه"
                                    v-model="secondCutData[3].weight"
                                    required
                                    >
                                        <span class="input-group-text">kg</span>
                                </div>

                            </div>
    
                            <div class="form-group col-md-3">
                                <div class="input-group">
                                    <input 
                                    type="number" 
                                    id="secondCutX3" 
                                    aria-label="طول" 
                                    placeholder="طول"
                                    v-model="secondCutData[3].length"    
                                    class="form-control position-relative input-lg text-center"
                                    required>
                                    <input 
                                    type="number" 
                                    id="secondCutY3" 
                                    aria-label="عرض" 
                                    placeholder="عرض"
                                    v-model="secondCutData[3].width"    
                                    class="form-control position-relative input-lg text-center"
                                    required>
                                        <span class="input-group-text">m</span>
                                </div>
                            </div>
    
                            <div class="d-grid col-md-1 mx-auto">
                                <button 
                                @click="delSecondaryCutRow" 
                                :disabled="secondaryCutRow === 1" 
                                type="button"
                                class="btn btn-outline-danger">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                            </div>
                        </div>
    
                        <hr v-if="secondaryCutRow < 2">
    
                        <div v-if="secondaryCutRow < 2" class="row mb-3">
                            <div class="form-group col-md-2">
                                <select 
                                @click="usage4" 
                                class="form-select form-select-lg" 
                                id="usageSecondCut4"
                                v-model="secondCutData[4].type"
                                aria-expanded="false"
                                required>
                                    <option value="">استفاده جهت</option>
                                    <option value="wastage">ضایعات</option>
                                    <option value="order">سفارش</option>
                                    <option value="store">انبارش</option>
                                </select>
                            </div>
    
    
                            <div v-if="secondCutData[4].type === 'wastage' || secondCutData[4].type === ''" class="form-group col-md-2">
                                <input type="text" class="form-control position-relative input-lg text-center" id="for"
                                    value="-------------------" readonly>
                            </div>
    
                            <div v-if="secondCutData[4].type === 'order'" class="form-row col-md-2">
                                <!-- <select 
                                class="form-select form-select-lg" 
                                id="orderProductID4"
                                v-model="formData.orderProductID4"
                                aria-expanded="false" 
                                required>
                                    <option value="" class="spinner-border">
                                      <div v-if="loading.orderProductID === false">
                                        شناسه تولید را انتخاب کنید
                                      </div>
                                      <div v-if="loading.orderProductID">
                                        در حال بارگذاری...
                                      </div>
                                    </option>
                                    <option v-for="orderProductID in orderProductIDs" :value="orderProductID.id" :key="orderProductID.index">{{ orderProductID.code }}  |  کد محصول: {{ orderProductID.productCode }} |  نام محصول:{{ orderProductID.productName }} |  تعداد: {{ orderProductID.number }} |  نام مشتری: {{ orderProductID.customer }} |  شماره سفارش: {{ orderProductID.orderID }}</option>
                                </select> -->

                                <select 
                                class="form-select form-select-lg" 
                                id="orderProductID4"
                                v-model="secondCutData[4].order_products"
                                aria-expanded="false" 
                                required>
                                    <option value="" class="spinner-border">
                                      <div v-if="loading.orderProductID === false">
                                        شناسه تولید را انتخاب کنید
                                      </div>
                                      <div v-if="loading.orderProductID">
                                        در حال بارگذاری...
                                      </div>
                                    </option>
                                    <option v-for="orderProductID in orderProductIDs" :value="orderProductID" :key="orderProductID.index">{{ orderProductID }}</option>
                                </select>

                                <!-- <v-select 
                                  dir="rtl" 
                                  @option:selected="selectRoll"
                                  id="orderProductID4"
                                  class="" 
                                  v-model="formData.orderProductID4" 
                                  placeholder="شناسه تولید را انتخاب کنید"
                                  :filter="fuseSearchProductID"
                                  :options="orderProductIDs" 
                                  :get-option-label="(option) => option.code"
                                  :loading="loading.listOfRollsOrSheets"
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

                                </v-select> -->
                            </div>
    
                            <!-- <div v-if="secondCutData[4].type === 'store'" class="d-grid mx-auto col-md-2">
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
                            </div> -->
    
                            <div class="form-group col-md-2">
                                <input 
                                type="number" 
                                class="form-control position-relative input-lg text-center" 
                                id="numberOfSecondaryCut4"
                                v-model="secondCutData[4].qty"    
                                placeholder="تعداد برش ثانویه" 
                                required>
                            </div>

                            
                            <div class="form-group col-md-2">
                                <div class="input-group">
                                    <input 
                                    type="number" 
                                    class="form-control position-relative input-lg text-center" 
                                    id="weightOfSecondCut4"
                                    placeholder="وزن برش ثانویه"
                                    v-model="secondCutData[4].weight"
                                    required
                                    >
                                        <span class="input-group-text">kg</span>
                                </div> 
                            </div>
    
                            <div class="form-group col-md-3">
                                <div class="input-group">
                                    <input 
                                    type="number" 
                                    id="secondCutX4" 
                                    aria-label="طول" 
                                    placeholder="طول"
                                    v-model="secondCutData[4].length"
                                    class="form-control position-relative input-lg text-center"
                                    required>
                                    <input 
                                    type="number" 
                                    id="secondCutY4" 
                                    aria-label="عرض" 
                                    placeholder="عرض"
                                    v-model="secondCutData[4].width"    
                                    class="form-control position-relative input-lg text-center"
                                    required>
                                        <span class="input-group-text">m</span>
                                </div>
                            </div>
    
                            <div class="d-grid col-md-1 mx-auto">
                                <button @click="delSecondaryCutRow" :disabled="secondaryCutRow === 0" type="button"
                                    class="btn btn-outline-danger">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                            </div>
    
                        </div>
                    </div>
                    <!-- end-of-secondCut -->

                    <!-- <div class="form-group mb-3">
                            <label class="form-control-lg d-block text-center" for="description">توضیحات</label>
                            <select @click="getDescriptions()" id="description" class="form-select form-select-lg"
                                aria-label=".form-select-sm example" v-model="formData.description">
                                <option value="">انتخاب کنید</option>
                                <option v-for="description in descriptionsList" :value="description.id" :key="description.index"> {{ description.text }} </option>
                            </select>
                    </div> -->

                    <div class="form-row d-grid gap-2 justify-content-md-center d-md-flex d-md-flex">
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
import { reactive, ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import {useProductionLineStore} from '../../production-line-reports-store/productionLineReportsStore'
import Fuse from 'fuse.js'

export default {

    data() {

        return {

        }
    },

    methods: {

        backToMain(){
          this.$router.push({path:"/production"})
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

        fuseSearchProductID(options, search) {
          const fuse = new Fuse(options, {
            keys: [ 'code' , 'productCode' , 'productName' , 'number' , 'customer' , 'orderID'],
            shouldSort: true,
          })
          return search.length
            ? fuse.search(search).map(({ item }) => item)
            : fuse.list
        },
    },

    setup() {

        const formData = reactive({
          subLevel : 'sheetCutting',
          rollOrSheet : '',
          numberOfPrimaryCut : '',
          lenghtOfPrimaryCut : '',
          weightOfPrimaryCut : '',
          // orderProductID1 : '',
          // orderProductID2 : '',
          // orderProductID3 : '',
          // orderProductID4 : '',
          // storingCode1 : '',
          // storingCode2 : '',
          // storingCode3 : '',
          // storingCode4 : '',
          // numberOfSecondaryCut1 : '',
          // numberOfSecondaryCut2 : '',
          // numberOfSecondaryCut3 : '',
          // numberOfSecondaryCut4 : '',
          // weightOfSecondCut1 : '',
          // weightOfSecondCut2 : '',
          // weightOfSecondCut3 : '',
          // weightOfSecondCut4 : '',
          // secondCutX1 : '',
          // secondCutX2 : '',
          // secondCutX3 : '',
          // secondCutX4 : '',
          // secondCutY1 : '',
          // secondCutY2 : '',
          // secondCutY3 : '',
          // secondCutY4 : '',
          primaryCutOperator : 127,
          description : '',
        })

        const secondCutData = reactive({
          1: {
          'type': null,
          'qty': null,
          'order_products': null,
          'length': null,
          'width': null,
          'weight': null,
          'cut_operator': 127,
          'description': null
          },
          2: {
          'type': null,
          'order_products': null,
          'qty': null,
          'length': null,
          'width': null,
          'weight': null,
          'cut_operator': 127,
          'description': null
          },
          3: {
          'type': null,
          'qty': null,
          'order_products': null,
          'length': null,
          'width': null,
          'weight': null,
          'cut_operator': 127,
          'description': null
          },
          4: {
          'type': null,
          'qty':null,
          'order_products': null,
          'length': null,
          'width': null,
          'weight': null,
          'cut_operator': 127,
          'description': null
          }
        })

        const validateData = reactive({
            rollOrSheet : '',
            numberOfPrimaryCut : '',
            lenghtOfPrimaryCut : '',
            weightOfPrimaryCut : '',
            usageSecondCut1 : '',
            weightOfSecondCut1 : '',
            numberOfSecondaryCut1 : '',
            secondCutXY1 : '',
        })

        const loading = reactive({
            listOfRollsOrSheets : false,
            descriptionsList : false,
            storingCode1 : false,
            storingCode2 : false,
            storingCode3 : false,
            storingCode4 : false,
            orderProductID : false,
        })

        const secondaryCutRow = ref(4);

        const showStoringCode = reactive({
            storingCode1 : false,
            storingCode2 : false,
            storingCode3 : false,
            storingCode4 : false,
        })

        const store = useProductionLineStore()
        const listOfRolls = computed(() => store.allRolls);
        const listOfSheets = computed(() => store.allSheets);
        const descriptionsList = computed(() => store.allDescriptions);
        const storingNewCode = computed(() => store.storingCode);
        const orderProductIDs = computed(() => store.getOrderProductID);

        async function getRollsAndSheetsList() {
          loading.listOfRollsOrSheets = true;
          await store.getListOfRolls();
          await store.getListOfSheets();
          loading.listOfRollsOrSheets = false;
        }

        function addSecondaryCutRow() {
            secondaryCutRow.value = secondaryCutRow.value - 1;
        }

        function delSecondaryCutRow() {
            secondaryCutRow.value = secondaryCutRow.value + 1;
        }

       async function usegeSecondCutFunc(){
            loading.orderProductID = true;
            await store.getListOfOrderProductIDs();
            console.log(orderProductIDs)
            loading.orderProductID = false;
        }
    
        async function getDescriptions() {
          loading.descriptionsList = true;
          await store.getListOfDescription();
          loading.descriptionsList = false;
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

        async function submitForm() {
          if (formData.rollOrSheet == "" || 
          formData.numberOfPrimaryCut == "" || 
          formData.lenghtOfPrimaryCut == "" || 
          formData.weightOfPrimaryCut == "" || 
          secondCutData[1].type == "" || 
          formData.numberOfSecondaryCut1 == "" || 
          secondCutData[1].length == "" || 
          secondCutData[1].width == "" ) {
            if(formData.rollOrSheet == ""){
              validateData.rollOrSheet = "رول را مشخص کنید!";
            }
            else validateData.rollOrSheet = "";

            if(formData.numberOfPrimaryCut == ""){
              validateData.numberOfPrimaryCut = "تعداد برش اولیه را وارد کنید!";
            }
            else validateData.numberOfPrimaryCut = "";

            if(formData.lenghtOfPrimaryCut == ""){
              validateData.lenghtOfPrimaryCut = "طول برش اولیه را وارد کنید!";
            }
            else validateData.lenghtOfPrimaryCut = "";

            if(formData.weightOfPrimaryCut == ""){
              validateData.weightOfPrimaryCut = "طول برش اولیه را وارد کنید!";
            }
            else validateData.weightOfPrimaryCut = "";

            if(secondCutData[1].type == ""){
              validateData.usageSecondCut1 = "محل اختصاص را انتخاب کنید!";
            }
            else secondCutData[1].qty = "";

            if(secondCutData[1].qty == ""){
              validateData.numberOfSecondaryCut1 = "تعداد برش ثانویه را وارد کنید!";
            }
            else validateData.numberOfSecondaryCut1 = "";

            if(secondCutData[1].weight  == ""){
              validateData.weightOfSecondCut1 = "وزن برش ثانویه را وارد کنید!";
            }
            else validateData.weightOfSecondCut1 = "";

            if(secondCutData[1].length == "" || secondCutData[1].width == ""){
              validateData.secondCutXY1 = "ابعاد برش ثانویه را وارد کنید!";
            }
            else validateData.secondCutXY1 = "";
          } 
          
          else {
            // loading.value = true;
            await ( 
              store.submitSheetCutform(formData , secondCutData)

              // store.authenticateUser(formData.productionLevel)
              )
            // loading.value = false;
          }
        }

        return {
            secondaryCutRow,
            addSecondaryCutRow,
            delSecondaryCutRow,
            getStorageCode1,
            getStorageCode2,
            getStorageCode3,
            getStorageCode4,
            getRollsAndSheetsList,
            loading,
            listOfRolls,
            listOfSheets,
            formData,
            validateData,
            submitForm,
            getDescriptions,
            descriptionsList,
            showStoringCode,
            storingNewCode,
            orderProductIDs,
            usegeSecondCutFunc,
            secondCutData,
        }
    }
}
</script>

<style>
.border-radius {
    border-radius: 5rem;
    font-size: 1.3rem;
}
</style>