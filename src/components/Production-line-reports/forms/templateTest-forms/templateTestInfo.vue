<template>
  <div>
    <div class="card m-2">
        <div class="card-header">
            <h1 class="text-center">اطلاعات تست قالب</h1>
        </div>
        <div class="card-body">
            <form @submit.prevent="submitForm">

                <div class="form-row form-group mb-3">
                    <label 
                    class="form-control-lg text-center d-block"
                    for="pressMachine"
                    >دستگاه پرس
                    </label>
                    <select class="form-select form-select-lg" id="pressMachine" v-model="formData.pressMachine" aria-expanded="false" >
                    <option value="" selected='selected'>دستگاه پرس را انتخاب کنید</option>
                    <option value="1">پرس شماره 1</option>
                    <option value="2">پرس شماره 2</option>
                    <option value="3">پرس شماره 3</option>
                    <option value="4">پرس شماره 4</option>
                    </select>
                    <div class="form-text text-danger">
                        {{formData.pressMachineValidate}}
                    </div>
                </div>

                <div class="form-group">
                    <label 
                    class="form-control-lg font-medium-5 d-block text-center"
                    for="relatedProducts"
                    >محصولات مرتبط با قالب
                    </label>
                    <v-select
                    class="input-lg" 
                    id="relatedProducts"
                    :options="['محصول شماره 1','محصول شماره 2' , 'محصول شماره 3' , 'محصول شماره 4']" 
                    multiple
                    v-model="formData.relatedProducts" 
                    aria-expanded="false" 
                    >
                    </v-select>
                    <!-- <div class="form-text text-danger">
                    {{formData.relatedProductsValidate}}
                    </div> -->
                </div>

                
                <div class="form-group">
                    <label 
                    class="font-medium-5 d-block text-center"
                    for="numberOfSheetRecivedTemplateTestInfo"
                     >تعداد ورق
                    </label>
                    <input 
                    type="number" 
                    class="form-control position-relative input-lg" 
                    id="numberOfSheetRecivedTemplateTestInfo" 
                    v-model="formData.numberOfSheetRecivedTemplateTestInfo"
                    placeholder="تعداد ورق دریافت شده را وارد کنید" 
                    >
                    <div class="form-text text-danger">
                        {{formData.numberOfSheetRecivedTemplateTestInfoValidate}}
                    </div>
                </div>
                
                <div class="row">
                    <div class="form-group col-md-6">
                        <label class="font-medium-5" for="startTemplatingTimeAndDate">تاریخ و ساعت شروع بستن قالب</label>
                        <date-picker color="#03a9f4" type='datetime' id="startTemplatingTimeAndDate" v-model="formData.startTemplatingTimeAndDate"></date-picker>
                        <div class="form-text text-danger">
                            {{formData.startTemplatingTimeAndDateValidate}}
                        </div>
                    </div>
                 
                    <div class="form-group col-md-6">
                            <label class="font-medium-5" for="deliverTemplateTimeAndDate">تاریخ و ساعت تحویل قالب</label>
                            <date-picker color="#03a9f4" type='datetime' id="deliverTemplateTimeAndDate" v-model="formData.deliverTemplateTimeAndDate"></date-picker>
                            <div class="form-text text-danger">
                            {{formData.deliverTemplateTimeAndDateValidate}}
                            </div>
                    </div>
                </div>
                
                            <!-- start-of-originOfSheet -->
                <div> 
                  <label class="font-medium-5 d-block text-center">ورق بعد از تست قالب</label>
                  <div class="form-row">
                    <div class="form-group col-md-4">
                      <select
                      @click="selectGrade1"
                        class="input-lg custom-select custom-select-lg"
                        id="sheetSituationAfterTestTemplateTestInfo1"
                        aria-expanded="false"
                        v-model="formData.sheetSituationAfterTestTemplateTestInfo1"
                      >
                        <option value="">وضعیت ورق</option>
                        <option value="1">گرید یک</option>
                        <option value="2">گرید دو</option>
                        <option value="3">گرید سه</option>
                        <option value="4">ضایعات</option>
                      </select>
                      <div class="form-text text-danger">
                      {{formData.sheetSituationAfterTestTemplateTestInfo1Validate}}
                      </div>
                    </div>
                  
                    <div v-if="sheetSituationAfterTestTemplateTestInfoSelected1 === '4' || sheetSituationAfterTestTemplateTestInfoSelected1 === '' " class="form-group col-md-4">
                        <input 
                        type="text" 
                        class="form-control position-relative input-lg text-center" 
                        id="forWaste" 
                        value="-------------------"
                        readonly
                        >
                    </div>
                    
                    <div v-if="sheetSituationAfterTestTemplateTestInfoSelected1 == 1 || sheetSituationAfterTestTemplateTestInfoSelected1 == 2 || sheetSituationAfterTestTemplateTestInfoSelected1 == 3" class="form-group col-md-4">
                        <button
                          @click="getStorageCode1"
                          type="button"
                          class="btn btn-outline-warning btn-lg btn-block"
                          :disabled= 'loading1'
                          id="storageCodeBtn1"
                        >دریافت کد انبارش
                            <span v-if="loading1" class="spinner-border spinner-border-sm" style="width: 1.7rem; height: 1.7rem;" role="status" aria-hidden="true"></span>
                        </button>
                    </div>
                  
                    <div class="form-group col-md-3">
                      <input
                        type="number"
                        class="form-control position-relative input-lg"
                        id="numberOfSheetTestedTemplateTestInfo1"
                        v-model="formData.numberOfSheetTestedTemplateTestInfo1"
                        placeholder="تعداد ورق را وارد کنید"
                      />
                      <div class="form-text text-danger">
                      {{formData.numberOfSheetTestedTemplateTestInfo1Validate}}
                      </div>                
                    </div>
                  
                    <div class="col-md-1">
                      <button
                        @click="addAfterTestTemplateRow"
                        type="button"
                        class="btn btn-outline-info btn-block btn-lg"
                        :disabled="afterTestTemplateRow.row === 1"
                      >
                        <i class="ft ft-plus"></i>
                      </button>
                    </div>
                  </div>
                
                  <div v-if="afterTestTemplateRow.row < 4" class="form-row">
                  
                    <div class="form-group col-md-4">
                      <select
                      @click="selectGrade2"
                        class="input-lg custom-select custom-select-lg"
                        id="sheetSituationAfterTestTemplateTestInfo2"
                        aria-expanded="false"
                        v-model="formData.sheetSituationAfterTestTemplateTestInfo2"                  
                      >
                      <option value="">وضعیت ورق</option>
                        <option value="1">گرید یک</option>
                        <option value="2">گرید دو</option>
                        <option value="3">گرید سه</option>
                        <option value="4">ضایعات</option>
                      </select>
                      <div class="form-text text-danger">
                      {{formData.sheetSituationAfterTestTemplateTestInfo2Validate}}
                      </div>                
                    </div>
                  
                    <div v-if="sheetSituationAfterTestTemplateTestInfoSelected2 === '4' || sheetSituationAfterTestTemplateTestInfoSelected2 === '' " class="form-group col-md-4">
                        <input 
                        type="text" 
                        class="form-control position-relative input-lg text-center" 
                        id="forWaste" 
                        value="-------------------"
                        readonly
                        >
                    </div>
                    
                    <div v-if="sheetSituationAfterTestTemplateTestInfoSelected2 == 1 || sheetSituationAfterTestTemplateTestInfoSelected2 == 2 || sheetSituationAfterTestTemplateTestInfoSelected2 == 3" class="form-group col-md-4">
                        <button
                          @click="getStorageCode2"
                          type="button"
                          class="btn btn-outline-warning btn-lg btn-block"
                          :disabled= 'loading2'
                          id="storageCodeBtn2"
                        >دریافت کد انبارش
                            <span v-if="loading1" class="spinner-border spinner-border-sm" style="width: 1.7rem; height: 1.7rem;" role="status" aria-hidden="true"></span>
                        </button>
                    </div>
                  
                    <div class="form-group col-md-3">
                      <input
                        type="number"
                        class="form-control position-relative input-lg"
                        id="numberOfSheetTestedTemplateTestInfo2"
                        v-model="formData.numberOfSheetTestedTemplateTestInfo2"
                        placeholder="تعداد ورق را وارد کنید"
                      />
                      <div class="form-text text-danger">
                      {{formData.numberOfSheetTestedTemplateTestInfo2Validate}}
                      </div>                 
                    </div>
                  
                    <div class="col-md-1">
                        <button
                          @click="delAfterTestTemplateRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="afterTestTemplateRow.row < 3"                            
                        >
                            <i class="ft ft-trash"></i>
                        </button>
                    </div>  
                  </div>
                
                  <div v-if="afterTestTemplateRow.row < 3" class="form-row">
                  
                    <div class="form-group col-md-4">
                      <select
                      @click="selectGrade3"
                        class="input-lg custom-select custom-select-lg"
                        id="sheetSituationAfterTestTemplateTestInfo3"
                        aria-expanded="false"
                        v-model="formData.sheetSituationAfterTestTemplateTestInfo3"                  
                      >
                      <option value="">وضعیت ورق</option>
                        <option value="1">گرید یک</option>
                        <option value="2">گرید دو</option>
                        <option value="3">گرید سه</option>
                        <option value="4">ضایعات</option>
                      </select>
                      <div class="form-text text-danger">
                      {{formData.sheetSituationAfterTestTemplateTestInfo3Validate}}
                      </div>                
                    </div>
                  
                    <div v-if="sheetSituationAfterTestTemplateTestInfoSelected3 === '4' || sheetSituationAfterTestTemplateTestInfoSelected3 === '' " class="form-group col-md-4">
                        <input 
                        type="text" 
                        class="form-control position-relative input-lg text-center" 
                        id="forWaste" 
                        value="-------------------"
                        readonly
                        >
                    </div>
                    
                    <div v-if="sheetSituationAfterTestTemplateTestInfoSelected3 == 1 || sheetSituationAfterTestTemplateTestInfoSelected3 == 2 || sheetSituationAfterTestTemplateTestInfoSelected3 == 3" class="form-group col-md-4">
                        <button
                          @click="getStorageCode3"
                          type="button"
                          class="btn btn-outline-warning btn-lg btn-block"
                          :disabled= 'loading3'
                          id="storageCodeBtn3"
                        >دریافت کد انبارش
                            <span v-if="loading3" class="spinner-border spinner-border-sm" style="width: 1.7rem; height: 1.7rem;" role="status" aria-hidden="true"></span>
                        </button>
                    </div>
                  
                    <div class="form-group col-md-3">
                      <input
                        type="number"
                        class="form-control position-relative input-lg"
                        id="numberOfSheetTestedTemplateTestInfo3"
                        v-model="formData.numberOfSheetTestedTemplateTestInfo3"
                        placeholder="تعداد ورق را وارد کنید"
                      />
                      <div class="form-text text-danger">
                      {{formData.numberOfSheetTestedTemplateTestInfo3Validate}}
                      </div>                 
                    </div>
                  
                    <div class="col-md-1">
                            <button
                              @click="delAfterTestTemplateRow"
                              type="button"
                              class="btn btn-outline-danger btn-block btn-lg"
                              :disabled="afterTestTemplateRow.row < 2"                            
                            >
                            <i class="ft ft-trash"></i>
                            </button>
                    </div>  
                  </div>
                
                  <div v-if="afterTestTemplateRow.row < 2" class="form-row">
                      
                    <div class="form-group col-md-4">
                      <select
                      @click="selectGrade4"
                        class="input-lg custom-select custom-select-lg"
                        id="sheetSituationAfterTestTemplateTestInfo4"
                        aria-expanded="false"
                        v-model="formData.sheetSituationAfterTestTemplateTestInfo4"                  
                      >
                      <option value="">وضعیت ورق</option>
                        <option value="1">گرید یک</option>
                        <option value="2">گرید دو</option>
                        <option value="3">گرید سه</option>
                        <option value="4">ضایعات</option>
                      </select>
                      <div class="form-text text-danger">
                      {{formData.sheetSituationAfterTestTemplateTestInfo4Validate}}
                      </div>                
                    </div>
                  
                    <div v-if="sheetSituationAfterTestTemplateTestInfoSelected4 === '4' || sheetSituationAfterTestTemplateTestInfoSelected4 === '' " class="form-group col-md-4">
                        <input 
                        type="text" 
                        class="form-control position-relative input-lg text-center" 
                        id="forWaste" 
                        value="-------------------"
                        readonly
                        >
                    </div>
                    
                    <div v-if="sheetSituationAfterTestTemplateTestInfoSelected4 == 1 || sheetSituationAfterTestTemplateTestInfoSelected4 == 2 || sheetSituationAfterTestTemplateTestInfoSelected4 == 3" class="form-group col-md-4">
                        <button
                          @click="getStorageCode4"
                          type="button"
                          class="btn btn-outline-warning btn-lg btn-block"
                          :disabled= 'loading4'
                          id="storageCodeBtn4"
                        >دریافت کد انبارش
                            <span v-if="loading4" class="spinner-border spinner-border-sm" style="width: 1.7rem; height: 1.7rem;" role="status" aria-hidden="true"></span>
                        </button>
                    </div>
                  
                    <div class="form-group col-md-3">
                      <input
                        type="number"
                        class="form-control position-relative input-lg"
                        id="numberOfSheetTestedTemplateTestInfo4"
                        v-model="formData.numberOfSheetTestedTemplateTestInfo4"
                        placeholder="تعداد ورق را وارد کنید"
                      />
                      <div class="form-text text-danger">
                      {{formData.numberOfSheetTestedTemplateTestInfo4Validate}}
                      </div>                 
                    </div>
                  
                    <div class="col-md-1">
                            <button
                              @click="delAfterTestTemplateRow"
                              type="button"
                              class="btn btn-outline-danger btn-block btn-lg"
                              :disabled="afterTestTemplateRow.row < 1"                            
                            >
                            <i class="ft ft-trash"></i>
                            </button>
                    </div>  
                  </div>
                
                </div> 
    <!-- end-of-originOfSheet -->
    
                <button class="btn btn-info btn-block text-center mt-3" type="submit">تایید فرم</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';

export default {
    
    components: {
    },    
    
    data(){
        
        return{

      sheetSituationAfterTestTemplateTestInfoSelected1 : '',
      sheetSituationAfterTestTemplateTestInfoSelected2 : '',
      sheetSituationAfterTestTemplateTestInfoSelected3 : '',
      sheetSituationAfterTestTemplateTestInfoSelected4 : '',
        }
},

    methods:{

    selectGrade1(){
        this.sheetSituationAfterTestTemplateTestInfoSelected1 = document.querySelector('#sheetSituationAfterTestTemplateTestInfo1').value
        // console.log(this.sheetSituationAfterTestTemplateTestInfoSelected1)
    },

    selectGrade2(){
        this.sheetSituationAfterTestTemplateTestInfoSelected2 = document.querySelector('#sheetSituationAfterTestTemplateTestInfo2').value
        // console.log(this.sheetSituationAfterTestTemplateTestInfoSelected2)
    },

    selectGrade3(){
        this.sheetSituationAfterTestTemplateTestInfoSelected3 = document.querySelector('#sheetSituationAfterTestTemplateTestInfo3').value
        // console.log(this.sheetSituationAfterTestTemplateTestInfoSelected3)
    },

    selectGrade4(){
        this.sheetSituationAfterTestTemplateTestInfoSelected4 = document.querySelector('#sheetSituationAfterTestTemplateTestInfo4').value
        // console.log(this.sheetSituationAfterTestTemplateTestInfoSelected4)
    },        

    },

setup(){

  const formData = reactive({
        pressMachine:'',
        pressMachineValidate:'',
        numberOfSheetRecivedTemplateTestInfo:'',
        numberOfSheetRecivedTemplateTestInfoValidate:'',
        startTemplatingTimeAndDate:'',
        startTemplatingTimeAndDateValidate:'',
        deliverTemplateTimeAndDate:'',
        deliverTemplateTimeAndDateValidate:'',
        sheetSituationAfterTestTemplateTestInfo1:'',
        sheetSituationAfterTestTemplateTestInfo1Validate:'',
        sheetSituationAfterTestTemplateTestInfo2:'',
        sheetSituationAfterTestTemplateTestInfo2Validate:'',
        sheetSituationAfterTestTemplateTestInfo3:'',
        sheetSituationAfterTestTemplateTestInfo3Validate:'',
        sheetSituationAfterTestTemplateTestInfo4:'',
        sheetSituationAfterTestTemplateTestInfo4Validate:'',
        numberOfSheetTestedTemplateTestInfo1:'',
        numberOfSheetTestedTemplateTestInfo1Validate:'',
        numberOfSheetTestedTemplateTestInfo2:'',
        numberOfSheetTestedTemplateTestInfo2Validate:'',
        numberOfSheetTestedTemplateTestInfo3:'',
        numberOfSheetTestedTemplateTestInfo3Validate:'',
        numberOfSheetTestedTemplateTestInfo4:'',
        numberOfSheetTestedTemplateTestInfo4Validate:'',

    })

    const loading1 = ref(false)
    const loading2 = ref(false)
    const loading3 = ref(false)
    const loading4 = ref(false)

    const afterTestTemplateRow = reactive({row: 4});


    function addAfterTestTemplateRow() {
        afterTestTemplateRow.row = afterTestTemplateRow.row - 1;
    }

    function delAfterTestTemplateRow() {
        afterTestTemplateRow.row = afterTestTemplateRow.row + 1;
    }

    function getStorageCode1(){
        loading1.value = true;
        document.querySelector('#storageCodeBtn1').textContent = Math.random()*100
        document.querySelector('#storageCodeBtn1').disabled = true;
        loading1.value = false;
    }
    
    function getStorageCode2(){
        loading2.value = true;
        document.querySelector('#storageCodeBtn2').textContent = Math.random()*100
        document.querySelector('#storageCodeBtn2').disabled = true;
        loading2.value = false;
    }
    
    function getStorageCode3(){
        loading3.value = true;
        document.querySelector('#storageCodeBtn3').textContent = Math.random()*100
        document.querySelector('#storageCodeBtn3').disabled = true;
        loading3.value = false;
    }
    
    function getStorageCode4(){
        loading4.value = true;
        document.querySelector('#storageCodeBtn4').textContent = Math.random()*100
        document.querySelector('#storageCodeBtn4').disabled = true;
        loading4.value = false;
    }


    function submitForm(){
    if(afterTestTemplateRow.row === 4){
        if(formData.pressMachine === ""){
            formData.pressMachineValidate = "دستگاه پرس نباید خالی باشد!"
        }
        else{
            formData.pressMachineValidate = ''
        }

        if(formData.numberOfSheetRecivedTemplateTestInfo === ""){
            formData.numberOfSheetRecivedTemplateTestInfoValidate = "تعداد ورق نباید خالی باشد!"
        }
        else{
            formData.numberOfSheetRecivedTemplateTestInfoValidate = ''
        }

        if(formData.startTemplatingTimeAndDate === ""){
            formData.startTemplatingTimeAndDateValidate = "زمان بستن قالب باید وارد شود!"
        }
        else{
            formData.startTemplatingTimeAndDateValidate = ''
        }

        if(formData.deliverTemplateTimeAndDate === ""){
            formData.deliverTemplateTimeAndDateValidate = "زمان تحویل قالب باید وارد شود!"
        }
        else{
            formData.deliverTemplateTimeAndDateValidate = ''
        }

        if(formData.sheetSituationAfterTestTemplateTestInfo1 === ""){
            formData.sheetSituationAfterTestTemplateTestInfo1Validate = "وضعیت ورق را مشخص کنید!"
        }
        else{
            formData.sheetSituationAfterTestTemplateTestInfo1Validate = ''
        }

        if(formData.numberOfSheetTestedTemplateTestInfo1 === ""){
            formData.numberOfSheetTestedTemplateTestInfo1Validate = "تعداد ورق را وارد کنید!"
        }
        else{
            formData.numberOfSheetTestedTemplateTestInfo1Validate = ''
        }

    }
        

    if(afterTestTemplateRow.row == 3){
        if(formData.pressMachine === ""){
            formData.pressMachineValidate = "دستگاه پرس نباید خالی باشد!"
        }
        else{
            formData.pressMachineValidate = ''
        }

        if(formData.numberOfSheetRecivedTemplateTestInfo === ""){
            formData.numberOfSheetRecivedTemplateTestInfoValidate = "تعداد ورق نباید خالی باشد!"
        }
        else{
            formData.numberOfSheetRecivedTemplateTestInfoValidate = ''
        }

        if(formData.startTemplatingTimeAndDate === ""){
            formData.startTemplatingTimeAndDateValidate = "زمان بستن قالب باید وارد شود!"
        }
        else{
            formData.startTemplatingTimeAndDateValidate = ''
        }

        if(formData.deliverTemplateTimeAndDate === ""){
            formData.deliverTemplateTimeAndDateValidate = "زمان تحویل قالب باید وارد شود!"
        }
        else{
            formData.deliverTemplateTimeAndDateValidate = ''
        }

        if(formData.sheetSituationAfterTestTemplateTestInfo1 === ""){
            formData.sheetSituationAfterTestTemplateTestInfo1Validate = "وضعیت ورق را مشخص کنید!"
        }
        else{
            formData.sheetSituationAfterTestTemplateTestInfo1Validate = ''
        }

        if(formData.numberOfSheetTestedTemplateTestInfo1 === ""){
            formData.numberOfSheetTestedTemplateTestInfo1Validate = "تعداد ورق را وارد کنید!"
        }
        else{
            formData.numberOfSheetTestedTemplateTestInfo1Validate = ''
        }

        if(formData.sheetSituationAfterTestTemplateTestInfo2 === ""){
            formData.sheetSituationAfterTestTemplateTestInfo2Validate = "وضعیت ورق را مشخص کنید!"
        }
        else{
            formData.sheetSituationAfterTestTemplateTestInfo2Validate = ''
        }

        if(formData.numberOfSheetTestedTemplateTestInfo2 === ""){
            formData.numberOfSheetTestedTemplateTestInfo2Validate = "تعداد ورق را وارد کنید!"
        }
        else{
            formData.numberOfSheetTestedTemplateTestInfo2Validate = ''
        }

        }

    if(afterTestTemplateRow.row == 2){
        if(formData.pressMachine === ""){
            formData.pressMachineValidate = "دستگاه پرس نباید خالی باشد!"
        }
        else{
            formData.pressMachineValidate = ''
        }

        if(formData.numberOfSheetRecivedTemplateTestInfo === ""){
            formData.numberOfSheetRecivedTemplateTestInfoValidate = "تعداد ورق نباید خالی باشد!"
        }
        else{
            formData.numberOfSheetRecivedTemplateTestInfoValidate = ''
        }

        if(formData.startTemplatingTimeAndDate === ""){
            formData.startTemplatingTimeAndDateValidate = "زمان بستن قالب باید وارد شود!"
        }
        else{
            formData.startTemplatingTimeAndDateValidate = ''
        }

        if(formData.deliverTemplateTimeAndDate === ""){
            formData.deliverTemplateTimeAndDateValidate = "زمان تحویل قالب باید وارد شود!"
        }
        else{
            formData.deliverTemplateTimeAndDateValidate = ''
        }

        if(formData.sheetSituationAfterTestTemplateTestInfo1 === ""){
            formData.sheetSituationAfterTestTemplateTestInfo1Validate = "وضعیت ورق را مشخص کنید!"
        }
        else{
            formData.sheetSituationAfterTestTemplateTestInfo1Validate = ''
        }

        if(formData.numberOfSheetTestedTemplateTestInfo1 === ""){
            formData.numberOfSheetTestedTemplateTestInfo1Validate = "تعداد ورق را وارد کنید!"
        }
        else{
            formData.numberOfSheetTestedTemplateTestInfo1Validate = ''
        }

        if(formData.sheetSituationAfterTestTemplateTestInfo2 === ""){
            formData.sheetSituationAfterTestTemplateTestInfo2Validate = "وضعیت ورق را مشخص کنید!"
        }
        else{
            formData.sheetSituationAfterTestTemplateTestInfo2Validate = ''
        }

        if(formData.numberOfSheetTestedTemplateTestInfo2 === ""){
            formData.numberOfSheetTestedTemplateTestInfo2Validate = "تعداد ورق را وارد کنید!"
        }
        else{
            formData.numberOfSheetTestedTemplateTestInfo2Validate = ''
        }

        if(formData.sheetSituationAfterTestTemplateTestInfo3 === ""){
            formData.sheetSituationAfterTestTemplateTestInfo3Validate = "وضعیت ورق را مشخص کنید!"
        }
        else{
            formData.sheetSituationAfterTestTemplateTestInfo3Validate = ''
        }

        if(formData.numberOfSheetTestedTemplateTestInfo3 === ""){
            formData.numberOfSheetTestedTemplateTestInfo3Validate = "تعداد ورق را وارد کنید!"
        }
        else{
            formData.numberOfSheetTestedTemplateTestInfo3Validate = ''
        }

        }   

    if(afterTestTemplateRow.row == 1){
        if(formData.pressMachine === ""){
            formData.pressMachineValidate = "دستگاه پرس نباید خالی باشد!"
        }
        else{
            formData.pressMachineValidate = ''
        }

        if(formData.numberOfSheetRecivedTemplateTestInfo === ""){
            formData.numberOfSheetRecivedTemplateTestInfoValidate = "تعداد ورق نباید خالی باشد!"
        }
        else{
            formData.numberOfSheetRecivedTemplateTestInfoValidate = ''
        }

        if(formData.startTemplatingTimeAndDate === ""){
            formData.startTemplatingTimeAndDateValidate = "زمان بستن قالب باید وارد شود!"
        }
        else{
            formData.startTemplatingTimeAndDateValidate = ''
        }

        if(formData.deliverTemplateTimeAndDate === ""){
            formData.deliverTemplateTimeAndDateValidate = "زمان تحویل قالب باید وارد شود!"
        }
        else{
            formData.deliverTemplateTimeAndDateValidate = ''
        }

        if(formData.sheetSituationAfterTestTemplateTestInfo1 === ""){
            formData.sheetSituationAfterTestTemplateTestInfo1Validate = "وضعیت ورق را مشخص کنید!"
        }
        else{
            formData.sheetSituationAfterTestTemplateTestInfo1Validate = ''
        }

        if(formData.numberOfSheetTestedTemplateTestInfo1 === ""){
            formData.numberOfSheetTestedTemplateTestInfo1Validate = "تعداد ورق را وارد کنید!"
        }
        else{
            formData.numberOfSheetTestedTemplateTestInfo1Validate = ''
        }


        if(formData.sheetSituationAfterTestTemplateTestInfo2 === ""){
            formData.sheetSituationAfterTestTemplateTestInfo2Validate = "وضعیت ورق را مشخص کنید!"
        }
        else{
            formData.sheetSituationAfterTestTemplateTestInfo2Validate = ''
        }

        if(formData.numberOfSheetTestedTemplateTestInfo2 === ""){
            formData.numberOfSheetTestedTemplateTestInfo2Validate = "تعداد ورق را وارد کنید!"
        }
        else{
            formData.numberOfSheetTestedTemplateTestInfo2Validate = ''
        }

        if(formData.sheetSituationAfterTestTemplateTestInfo3 === ""){
            formData.sheetSituationAfterTestTemplateTestInfo3Validate = "وضعیت ورق را مشخص کنید!"
        }
        else{
            formData.sheetSituationAfterTestTemplateTestInfo3Validate = ''
        }

        if(formData.numberOfSheetTestedTemplateTestInfo3 === ""){
            formData.numberOfSheetTestedTemplateTestInfo3Validate = "تعداد ورق را وارد کنید!"
        }
        else{
            formData.numberOfSheetTestedTemplateTestInfo3Validate = ''
        }


        if(formData.sheetSituationAfterTestTemplateTestInfo4 === ""){
            formData.sheetSituationAfterTestTemplateTestInfo4Validate = "وضعیت ورق را مشخص کنید!"
        }
        else{
            formData.sheetSituationAfterTestTemplateTestInfo4Validate = ''
        }

        if(formData.numberOfSheetTestedTemplateTestInfo4 === ""){
            formData.numberOfSheetTestedTemplateTestInfo4Validate = "تعداد ورق را وارد کنید!"
        }
        else{
            formData.numberOfSheetTestedTemplateTestInfo4Validate = ''
        }

        }   
    }

    return{
        formData,
        submitForm,
        loading1,
        loading2,
        loading3,
        loading4,
        afterTestTemplateRow,
        addAfterTestTemplateRow,
        delAfterTestTemplateRow,
        getStorageCode1,
        getStorageCode2,
        getStorageCode3,
        getStorageCode4,
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

.vs__search, .vs__search:focus{
    border: 8px solid transparent !important;
    font-size: 1.3rem !important;
}

/* .custom-select-lg{
    padding-right: 1rem;
} */

</style>