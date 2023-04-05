<template>
  <div>
    <div class="card m-2">
        <div class="card-header">
            <h2 class="text-center">اعلام ضایعات رول یا شیت</h2>
        </div>
        <div class="card-body">
            <form @submit.prevent="submitForm">

                <div class="form-row form-group text-center mb-3">
                  <label class="form-control-lg" for="rollID">کد رول/شیت </label>
                  <!-- <select
                    @click="getRollsAndSheetsList"                
                    class="form-control-lg form-select"
                    id="rollID"
                    v-model="formData.rollOrSheet"
                    aria-expanded="false"
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
                    :options="listOfRolls && listOfSheets" 
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

                <div class="form-row form-group text-center mb-3">
                        <label 
                        class="form-control-lg"
                        for="wasteArea"
                         >طول اولیه ضایعات
                        </label>
                    <div class="input-group">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg text-center" 
                        id="lenghtOfPrimaryWaste" 
                        v-model="formData.lenghtOfPrimaryWaste"
                        placeholder="طول اولیه ورق ضایعات را وارد کنید" 
                        >
                        <span class="input-group-text">m</span>
                    </div>    
                    <div class="form-text text-danger">
                      {{validateData.lenghtOfPrimaryWaste }}
                    </div> 
                </div>

                <!-- stat-of-secondCut -->
                <div class="card p-2">
                    <div class="card-header mb-3">
                        <label 
                        class="form-control-lg font-medium-5 d-block text-center"
                        >برش ثانویه ورق ضایعات
                        </label>
                    </div>
                    
                    <div class="row mb-3">    
                        <div class="form-group col-md-3">
                            <select
                            class="form-select form-select-lg" 
                            id="usageSecondCutWaste1"
                            v-model="formData.usageSecondCutWaste1" 
                            aria-expanded="false" 
                            >
                                <option value="">استفاده جهت</option>
                                <option value="waste">ضایعات</option>
                                <option value="order">سفارش</option>
                                <option value="storage">انبارش</option>
                            </select>
                            <div class="form-text text-danger">
                              {{validateData.usageSecondCutWaste1 }}
                            </div> 
                        </div>
    
                        
                        <div v-if="formData.usageSecondCutWaste1 === 'waste' || formData.usageSecondCutWaste1 === '' " class="form-group col-md-3">
                            <input 
                            type="text" 
                            class="form-control position-relative input-lg text-center" 
                            id="forWaste" 
                            value="-------------------"
                            readonly
                            >
                        </div>
    
                        <div v-if="formData.usageSecondCutWaste1 === 'order'" class="form-row col-md-3">
                            <!-- <select 
                            @click="getOrderProductID" 
                            class="form-select form-select-lg" 
                            id="orderProductID1"
                            v-model="formData.orderProductID1" 
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

                            <v-select 
                              dir="rtl" 
                              @click="getOrderProductID"
                              id="orderProductID1"
                              class="" 
                              v-model="formData.orderProductID1" 
                              placeholder="شناسه تولید را انتخاب کنید"
                              :filter="fuseSearchProductID"
                              :options="orderProductIDs" 
                              :get-option-label="(option) => option.code"
                              :loading="loading.listOfRollsOrSheets"
                              close-on-select
                              requierd
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

                            </v-select>
                        </div>
                        
                        <div v-if="formData.usageSecondCutWaste1 === 'storage' " class="d-grid mx-auto col-md-3">
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
                    
                    <div class="form-group col-md-2">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg text-center" 
                        id="numberOfSecondaryCut1" 
                        placeholder="تعداد"                         
                        >
                        <div class="form-text text-danger">
                          {{validateData.numberOfSecondaryCut1 }}
                        </div> 
                    </div>
    
                    <div class="form-group col-md-3">
                        <div class="input-group">
                            <input type="number" id="secondCutX1" aria-label="طول" placeholder="طول" class="form-control position-relative input-lg text-center" v-model="formData.secondCutX1">
                            <input type="number" id="secondCutY1" aria-label="عرض" placeholder="عرض" class="form-control position-relative input-lg text-center" v-model="formData.secondCutY1">
                            <span class="input-group-text">m</span>
                        </div>
                        <div class="form-text text-danger">
                          {{validateData.secondCutXY1 }}
                        </div>
                    </div>
                    
                    <div class="d-grid col-md-1 mx-auto">
                        <button
                              @click="addSecondaryCutWasteRow"
                              type="button"
                              class="btn btn-outline-logo"
                              :disabled="secondaryCutWasteRow === 1"                            
                            >
                              <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>                                
                    </div>
                            
                    
                    <div v-if="secondaryCutWasteRow < 4" class="row mb-3">
                        <div class="form-group col-md-3">
                            <select 
                            class="form-select form-select-lg"
                            id="usageSecondCutWaste2"
                            v-model="formData.usageSecondCutWaste2" 
                            aria-expanded="false"
                            required>
                                <option value="">استفاده جهت</option>
                                <option value="waste">ضایعات</option>
                                <option value="order">سفارش</option>
                                <option value="storage">انبارش</option>
                            </select>
                        </div>
    
                        
                        <div v-if="formData.usageSecondCutWaste2 === 'waste' || formData.usageSecondCutWaste2 === '' " class="form-group col-md-3">
                            <input 
                            type="text" 
                            class="form-control position-relative input-lg text-center" 
                            id="forWaste" 
                            value="-------------------"
                            readonly
                            >
                        </div>
    
                        <div v-if="formData.usageSecondCutWaste2 === 'order'" class="form-row col-md-3">
                            <!-- <select 
                              @click="getOrderProductID" 
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

                            <v-select 
                              dir="rtl" 
                              @click="getOrderProductID"
                              id="orderProductID2"
                              class="" 
                              v-model="formData.orderProductID2" 
                              placeholder="شناسه تولید را انتخاب کنید"
                              :filter="fuseSearchProductID"
                              :options="orderProductIDs" 
                              :get-option-label="(option) => option.code"
                              :loading="loading.listOfRollsOrSheets"
                              close-on-select
                              requierd
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

                            </v-select>
                        </div>
    
                        <div v-if="formData.usageSecondCutWaste2 === 'storage' " class="d-grid mx-auto col-md-3">
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
                        
                        <div class="form-group col-md-2">
                            <input 
                            type="number" 
                            class="form-control position-relative input-lg text-center" 
                            id="numberOfSecondaryCut2" 
                            placeholder="تعداد" 
                            required
                            >
                        </div>
                        
                        <div class="form-group col-md-3">
                            <div class="input-group">
                              <input type="number" id="secondCutX2" aria-label="طول" placeholder="طول" class="form-control position-relative input-lg text-center" v-model="formData.secondCutX2" required>
                              <input type="number" id="secondCutY2" aria-label="عرض" placeholder="عرض" class="form-control position-relative input-lg text-center" v-model="formData.secondCutY2" required>
                              <span class="input-group-text">m</span>
                            </div>
                        </div>
    
                        <div class="d-grid col-md-1 mx-auto">
                            <button
                              @click="delSecondaryCutWasteRow"
                              :disabled="secondaryCutWasteRow < 3"                            
                              type="button"
                              class="btn btn-outline-danger"
                            >
                            <i class="fa-solid fa-minus"></i>
                            </button>
                        </div>                                
                    </div>
                            
                    
                    <div v-if="secondaryCutWasteRow < 3" class="row mb-3">
                        <div class="col-md-3">
                            <select 
                            class="form-select form-select-lg"
                            id="usageSecondCutWaste3" 
                            v-model="formData.usageSecondCutWaste3"
                            aria-expanded="false"
                            required>
                                <option value="">استفاده جهت</option>
                                <option value="waste">ضایعات</option>
                                <option value="order">سفارش</option>
                                <option value="storage">انبارش</option>
                            </select>
                        </div>
    
                        
                        <div v-if="formData.usageSecondCutWaste3 === 'waste' || formData.usageSecondCutWaste3 === '' " class="form-group col-md-3">
                            <input 
                            type="text" 
                            class="form-control position-relative input-lg text-center" 
                            id="forWaste" 
                            value="-------------------"
                            readonly
                            >
                        </div>
    
                        <div v-if="formData.usageSecondCutWaste3 === 'order'" class="form-row col-md-3">
                            <!-- <select 
                              @click="getOrderProductID" 
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

                            <v-select 
                              dir="rtl" 
                              @click="getOrderProductID"
                              id="orderProductID3"
                              class="" 
                              v-model="formData.orderProductID3" 
                              placeholder="شناسه تولید را انتخاب کنید"
                              :filter="fuseSearchProductID"
                              :options="orderProductIDs" 
                              :get-option-label="(option) => option.code"
                              :loading="loading.listOfRollsOrSheets"
                              close-on-select
                              requierd
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

                            </v-select>
                        </div>
                        
                        <div v-if="formData.usageSecondCutWaste3 === 'storage' " class="d-grid mx-auto col-md-3">
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
    
                        <div class="form-group col-md-2">
                            <input 
                            type="number" 
                            class="form-control position-relative input-lg text-center" 
                            id="numberOfSecondaryCut3" 
                            placeholder="تعداد" 
                            required
                            >
                        </div>
                        
                        <div class="form-group col-md-3">
                            <div class="input-group">
                                <input type="number" id="secondCutX3" aria-label="طول" placeholder="طول" class="form-control position-relative input-lg text-center" v-model="formData.secondCutX3" required>
                                <input type="number" id="secondCutY3" aria-label="عرض" placeholder="عرض" class="form-control position-relative input-lg text-center" v-model="formData.secondCutY3" required>
                                  <span class="input-group-text">m</span>
                            </div>
                        </div>
    
                        <div class="d-grid col-md-1 mx-auto">
                            <button
                              @click="delSecondaryCutWasteRow"
                              :disabled="secondaryCutWasteRow === 1"                            
                              type="button"
                              class="btn btn-outline-danger"
                            >
                            <i class="fa-solid fa-minus"></i>
                            </button>
                        </div>                                
                        
                    </div>
                    
                    <div v-if="secondaryCutWasteRow < 2" class="row mb-3">
                        <div class="col-md-3">
                            <select
                            class="form-select form-select-lg"
                            id="usageSecondCutWaste4"
                            v-model="formData.usageSecondCutWaste4"
                            aria-expanded="false"
                            required>
                                <option value="">استفاده جهت</option>
                                <option value="waste">ضایعات</option>
                                <option value="order">سفارش</option>
                                <option value="storage">انبارش</option>
                            </select>
                        </div>
    
                        
                        <div v-if="formData.usageSecondCutWaste4 === 'waste' || formData.usageSecondCutWaste4 === '' " class="form-group col-md-3">
                            <input 
                            type="text" 
                            class="form-control position-relative input-lg text-center" 
                            id="forWaste" 
                            value="-------------------"
                            readonly
                            >
                        </div>
                        
                        <div v-if="formData.usageSecondCutWaste4 === 'order'" class="form-row col-md-3">
                          <!-- <select 
                            @click="getOrderProductID" 
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
                          
                          <v-select 
                              dir="rtl" 
                              @click="getOrderProductID"
                              id="orderProductID4"
                              class="" 
                              v-model="formData.orderProductID4" 
                              placeholder="شناسه تولید را انتخاب کنید"
                              :filter="fuseSearchProductID"
                              :options="orderProductIDs" 
                              :get-option-label="(option) => option.code"
                              :loading="loading.listOfRollsOrSheets"
                              close-on-select
                              requierd
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

                            </v-select>
                        </div>
                        
                        <div v-if="formData.usageSecondCutWaste4 === 'storage' " class="d-grid mx-auto col-md-3">
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
    
                        <div class="form-group col-md-2">
                            <input 
                            type="number" 
                            class="form-control position-relative input-lg text-center" 
                            id="numberOfSecondaryCut4" 
                            placeholder="تعداد" 
                            required
                            >
                        </div>
                        
                        <div class="form-group col-md-3">
                            <div class="input-group">
                                <input type="number" id="secondCutX4" aria-label="طول" placeholder="طول" class="form-control position-relative input-lg text-center" v-model="formData.secondCutX4" required>
                                <input type="number" id="secondCutY4" aria-label="عرض" placeholder="عرض" class="form-control position-relative input-lg text-center" v-model="formData.secondCutY4" required>
                                <span class="input-group-text">m</span>
                            </div>
                        </div>
    
                        <div class="d-grid col-md-1 mx-auto">
                            <button
                              @click="delSecondaryCutWasteRow"
                              :disabled="secondaryCutWasteRow === 0"                            
                              type="button"
                              class="btn btn-outline-danger"
                            >
                            <i class="fa-solid fa-minus"></i>
                            </button>
                        </div>                                
                        
                    </div>
                </div>

                <!-- end-of-secondCut -->

                <div class="form-group mb-3">
                        <label 
                        class="form-control-lg d-block text-center"
                        for="reasonForWaste"
                         >علت ایجاد ضایعات
                        </label>
                        <select @click="getReasonsForWaste" @change="getListOfOperators" class="form-select form-select-lg" id="reasonForWaste" v-model="formData.reasonForWaste" aria-expanded="false">
                            <option value="" class="spinner-border">
                              <div v-if="loading.reasonForWaste === false">
                                علت ایجاد ضایعات را انتخاب کنید
                              </div>
                              <div v-if="loading.reasonForWaste">
                                در حال بارگذاری...
                              </div>
                            </option>
                            <option value="operatorFault">خطای اپراتور</option>
                            <option v-for="reasonForWaste in reasonsForWaste" :value="reasonForWaste.id" :key="reasonForWaste.index">کد خطا: {{ reasonForWaste.reasonForWasteCode }} {{ reasonForWaste.massage }}</option>
                        </select>
                </div>

                <div v-if="formData.reasonForWaste === 'operatorFault'" class="form-group">
                        <label 
                        class="form-control-lg"
                        for="operator"
                         >نام اپراتور
                        </label>
                        <select class="form-select form-select-lg" id="operator" v-model="formData.operator" aria-expanded="false" required>
                            <option value="" class="spinner-border">
                              <div v-if="loading.operator === false">
                                علت ایجاد ضایعات را انتخاب کنید
                              </div>
                              <div v-if="loading.operator">
                                در حال بارگذاری...
                              </div>
                            </option>
                            <option v-for="operator in operators" :value="operator.id" :key="operator.index">{{ operator.name }}</option>
                        </select>
                </div>


                <div class="form-group mb-3">
                    <label class="form-control-lg d-block text-center" for="infoCutCuttingWaste">توضیحات</label>
                    <textarea 
                    class="form-control position-relative input-lg" 
                    id="description" 
                    rows="3"
                    v-model="formData.description"
                    placeholder="توضیحات بیشتر را وارد کنید" 
                    ></textarea>
                  </div>                

            </form>

                <div class="form-row d-grid gap-2 justify-content-md-center d-md-flex d-md-flex">
                  <button @click="backToMain" class="btn btn-danger col-md-2 btn-lg">
                    بازگشت
                  </button>
            
                  <button class="btn btn-logo col-md-10 btn-lg" type="submit">
                    تایید فرم
                  </button>
                </div>   

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
    
data(){

return{

}
},

    methods:{
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

setup(){
    const formData = reactive({
          subLevel : 'sheetCutting',
          rollOrSheet : '',
          lenghtOfPrimaryWaste : '',
          usageSecondCutWaste1 : '',
          usageSecondCutWaste2 : '',
          usageSecondCutWaste3 : '',
          usageSecondCutWaste4 : '',
          orderProductID1 : '',
          orderProductID2 : '',
          orderProductID3 : '',
          orderProductID4 : '',
          storingCode1 : '',
          storingCode2 : '',
          storingCode3 : '',
          storingCode4 : '',
          numberOfSecondaryCut1 : '',
          numberOfSecondaryCut2 : '',
          numberOfSecondaryCut3 : '',
          numberOfSecondaryCut4 : '',
          secondCutX1 : '',
          secondCutX2 : '',
          secondCutX3 : '',
          secondCutX4 : '',
          secondCutY1 : '',
          secondCutY2 : '',
          secondCutY3 : '',
          secondCutY4 : '',
          description : '',
          reasonForWaste : '',
          operator : '',
        })

    const secondaryCutWasteRow = ref(4);

    const loading = reactive({
        listOfRollsOrSheets : false,
        storingCode1 : false,
        storingCode2 : false,
        storingCode3 : false,
        storingCode4 : false,
        orderProductID : false,        
        reasonForWaste : false,        
        operator : false,        
    })

    const validateData = reactive({
        rollOrSheet : '',
        NumberOfPrimaryCut : '',
        lenghtOfPrimaryWaste : '',
        usageSecondCut1 : '',
        numberOfSecondaryCut1 : '',
        secondCutXY1 : '',
        usageSecondCutWaste1 : '',
        description : '',
    })

    const showStoringCode = reactive({
        storingCode1 : false,
        storingCode2 : false,
        storingCode3 : false,
        storingCode4 : false,
    })

    const store = useProductionLineStore()
    const listOfRolls = computed(() => store.allRolls);
    const listOfSheets = computed(() => store.allSheets);
    const storingNewCode = computed(() => store.storingCode);
    const orderProductIDs = computed(() => store.orderProductIDs);
    const reasonsForWaste = computed(() => store.reasonsForWaste);
    const operators = computed(() => store.operators);

    async function getRollsAndSheetsList() {
      loading.listOfRollsOrSheets = true;
      await store.getListOfRolls();
      await store.getListOfSheets();
      loading.listOfRollsOrSheets = false;
    }

    function addSecondaryCutWasteRow() {
        secondaryCutWasteRow.value = secondaryCutWasteRow.value - 1;
    }

    function delSecondaryCutWasteRow() {
        secondaryCutWasteRow.value = secondaryCutWasteRow.value + 1;
    }

    async function getOrderProductID(){
            loading.orderProductID = true;
            await store.getListOfOrderProductIDs();
            loading.orderProductID = false;
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

        async function getReasonsForWaste() {
            loading.reasonForWaste = true;
            await store.getListOfReasonForWaste();
            loading.reasonForWaste = false;
        }

        async function getListOfOperators() {
            if(formData.reasonForWaste == 'operatorFault'){
                loading.reasonForWaste = true;
                await store.getListOfOperators();
                loading.reasonForWaste = false;
            }
        }

        async function submitForm() {
            if (formData.rollOrSheet == "" || 
            formData.lenghtOfPrimaryWaste == "" || 
            formData.usageSecondCutWaste1 == "" ||
            formData.numberOfSecondaryCut1 == '' || 
            formData.secondCutX1 == "" || 
            formData.secondCutY1 == "" ||
            formData.description == "") {
              if(formData.rollOrSheet == ""){
                validateData.rollOrSheet = "کد رول یا شیت را انتخاب کنید!";
              }
              else validateData.rollOrSheet = "";

              if(formData.lenghtOfPrimaryWaste == ""){
                validateData.lenghtOfPrimaryWaste = "طول اولیه ورق ضایعات را وارد کنید!";
              }
              else validateData.lenghtOfPrimaryWaste = "";

              if(formData.usageSecondCutWaste1 == ""){
                validateData.usageSecondCutWaste1 = "مورد استفاده را مشخص کنید!";
              }
              else validateData.usageSecondCutWaste1 = "";

              if(formData.numberOfSecondaryCut1 == ''){
                validateData.numberOfSecondaryCut1 = "تعداد ورق را وارد کنید!";
              }
              else validateData.numberOfSecondaryCut1 = "";
              
              if(formData.secondCutX1 == "" || formData.secondCutY1 == ""){
                validateData.secondCutXY1 = "ابعاد برش ثانویه را وارد کنید!";
              }
              else validateData.secondCutXY1 = "";
              
              if(formData.description == "" || formData.secondCutY1 == ""){
                validateData.description = "علت ایجاد ضایعات را وارد کنید!";
              }
              else validateData.description = "";
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
        secondaryCutWasteRow,
        addSecondaryCutWasteRow,
        delSecondaryCutWasteRow,
        getStorageCode1,
        getStorageCode2,
        getStorageCode3,
        getStorageCode4,
        loading,
        getRollsAndSheetsList,
        orderProductIDs,
        storingNewCode,
        listOfSheets,
        listOfRolls,
        validateData,
        formData,
        getOrderProductID,
        showStoringCode,
        getReasonsForWaste,
        reasonsForWaste,
        getListOfOperators,
        operators,
        submitForm,
    }

}
}
</script>

<style>

.border-radius{
    border-radius:  5rem;
    font-size: 1.3rem;
}

textarea {
   font-size: 20px!important;
}

</style>