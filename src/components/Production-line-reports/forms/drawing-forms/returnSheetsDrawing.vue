<template>
  <div>
    <div class="card-block">
        <div class="card-header">
            <h1 class="text-center">عودت مواد</h1>
        </div>
        <div class="card-body">
            <form @submit.prevent="validate">

                <div class="form-group">
                        <label 
                        class="font-medium-5 d-block text-center"
                        for="orderProduct1ID"
                         >شناسه تولید
                        </label>
                        <select class="input-lg custom-select custom-select-lg" id="orderProduct1ID" v-model="formData.orderProduct1" aria-expanded="false">
                        <option value="">شناسه تولید را انتخاب کنید</option>
                        <option value="1">mn123456</option>
                        <option value="2">pw233456</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.orderProduct1Validate}}
                        </div>
                </div>

                 <!-- --waste number start-- -->
                 <div>
            <label 
            class="font-medium-5 d-block text-center"
            >تعداد ورق
            </label>
            
            <div class="form-row">
                <div class="form-group col-8">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfSheetDrawingReturn1" 
                        v-model="formData.numberOfSheetDrawingReturn1"
                        placeholder="تعداد ورق بازگشتی را وارد کنید"
                        >
                        <div class="form-text text-danger">
                            {{formData.numberOfSheetDrawingReturn1Validate}}
                        </div>
                </div>

                <div class="form-group col-3">
                        <select 
                        class="input-lg custom-select custom-select-lg" 
                        id="sheetDrawingReturnReason1" 
                        v-model="formData.sheetDrawingReturnReason.sheetDrawingReturnReason1" 
                        aria-expanded="false"
                        >
                        <option value="">علت بازگشت ورق را انتخاب کنید</option>
                        <option value="1">علت 1</option>
                        <option value="2">علت 2 </option>
                        <option value="3">علت 3</option>
                        <option value="4">علت 4</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.sheetDrawingReturnReason.sheetDrawingReturnReason1Validate}}
                        </div>
                </div>

                <div class="col-md-1">
                    <button
                      @click="addSheetDrawingReturnRow"
                      type="button"
                      class="btn btn-outline-info btn-block btn-lg"
                      :disabled="sheetDrawingReturnRow.row === 1"                           
                    >
                      <i class="ft ft-plus"></i>
                    </button>
                </div>  
            </div>

            
            <div class="form-row" v-if="sheetDrawingReturnRow.row < 4">
                <div class="form-group col-8">
                    <input 
                    type="number" 
                    class="form-control position-relative input-lg" 
                    id="numberOfSheetDrawingReturnType2" 
                    v-model="formData.numberOfSheetDrawingReturn2"
                    placeholder="تعداد ورق بازگشتی را وارد کنید"
                    >
                    <div class="form-text text-danger">
                    {{formData.numberOfSheetDrawingReturn2Validate}}
                    </div>
                </div>

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="sheetDrawingReturnReason2" v-model="formData.sheetDrawingReturnReason.sheetDrawingReturnReason2" aria-expanded="false">
                        <option value="">علت بازگشت ورق را انتخاب کنید</option>
                        <option value="1">علت 1</option>
                        <option value="2">علت 2 </option>
                        <option value="3">علت 3</option>
                        <option value="4">علت 4</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.sheetDrawingReturnReason.sheetDrawingReturnReason2Validate}}
                        </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delSheetDrawingReturnRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="sheetDrawingReturnRow.row < 3"                            
                        >
                        <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
            <div class="form-row" v-if="sheetDrawingReturnRow.row < 3">
                <div class="form-group col-8">
                    <input 
                    type="number" 
                    class="form-control position-relative input-lg" 
                    id="numberOfSheetDrawingReturn3"
                    v-model="formData.numberOfSheetDrawingReturn3"
                    placeholder="تعداد ورق بازگشتی را وارد کنید" 
                    >
                    <div class="form-text text-danger">
                    {{formData.numberOfSheetDrawingReturn3Validate}}
                    </div>                    
                </div>

                <div class="form-group col-3">
                    <select class="input-lg custom-select custom-select-lg" id="sheetDrawingReturnReason3" v-model="formData.sheetDrawingReturnReason.sheetDrawingReturnReason3" aria-expanded="false">
                    <option value="">علت بازگشت ورق را انتخاب کنید</option>
                    <option value="1">علت 1</option>
                    <option value="2">علت 2 </option>
                    <option value="3">علت 3</option>
                    <option value="4">علت 4</option>
                    </select>
                    <div class="form-text text-danger">
                        {{formData.sheetDrawingReturnReason.sheetDrawingReturnReason3Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                    <button
                      @click="delSheetDrawingReturnRow"
                      type="button"
                      class="btn btn-outline-danger btn-block btn-lg"
                      :disabled="sheetDrawingReturnRow.row === 1"                            
                    >
                    <i class="ft ft-trash"></i>
                    </button>
                </div>  
            </div>
            
            <div class="form-row" v-if="sheetDrawingReturnRow.row < 2">
                <div class="form-group col-8">
                    <input 
                    type="number" 
                    class="form-control position-relative input-lg" 
                    id="numberOfSheetDrawingReturn4" 
                    v-model="formData.numberOfSheetDrawingReturn4"
                    placeholder="تعداد ورق بازگشتی را وارد کنید" 
                    >
                    <div class="form-text text-danger">
                    {{formData.numberOfSheetDrawingReturn4Validate}}
                    </div>                      
                </div>

                <div class="form-group col-3">
                    <select class="input-lg custom-select custom-select-lg" id="sheetDrawingReturnReason4" v-model="formData.sheetDrawingReturnReason.sheetDrawingReturnReason4" aria-expanded="false">
                    <option value="">علت بازگشت ورق را انتخاب کنید</option>
                    <option value="1">علت 1</option>
                    <option value="2">علت 2 </option>
                    <option value="3">علت 3</option>
                    <option value="4">علت 4</option>
                    </select>
                    <div class="form-text text-danger">
                        {{formData.sheetDrawingReturnReason.sheetDrawingReturnReason4Validate}}
                    </div>
                </div>

                <div class="col-md-1" v-if="sheetDrawingReturnRow.row < 2">
                    <button
                      @click="delSheetDrawingReturnRow"
                      type="button"
                      class="btn btn-outline-danger btn-block btn-lg"
                      :disabled="sheetDrawingReturnRow.row === 0"                            
                    >
                    <i class="ft ft-trash"></i>
                    </button>
                </div>  
            </div>
            
        </div>
                 <!-- --waste number end-- -->            

                <div class="form-group">
                    <label class="font-medium-5 d-block text-center" for="infoSheetDrawingReturn">توضیحات</label>
                    <textarea 
                    class="form-control position-relative input-lg" 
                    id="infoSheetDrawingReturn" 
                    rows="2"
                    placeholder="توضیحات بیشتر را وارد کنید" 
                    ></textarea>
                </div>                     


                <button type="submit" class="btn btn-info btn-block text-center mt-3">تایید فرم</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { reactive } from '@vue/reactivity';


export default {
    
data(){

return{
    explainCause : 'null',
}
},

    methods:{
        returnCauseFunc(){
            this.explainCause = document.querySelector('#returnCause').value;
        },


    },

setup(){

    const sheetDrawingReturnRow = reactive({row: 4});

    const formData = reactive({
        orderProduct1:'',
        orderProduct1Validate:'',
        numberOfSheetDrawingReturn1:'',
        numberOfSheetDrawingReturn2:'',
        numberOfSheetDrawingReturn3:'',
        numberOfSheetDrawingReturn4:'',
        numberOfSheetDrawingReturn1Validate:'',
        numberOfSheetDrawingReturn2Validate:'',
        numberOfSheetDrawingReturn3Validate:'',
        numberOfSheetDrawingReturn4Validate:'',
        sheetDrawingReturnReason:{
            sheetDrawingReturnReason1:'',
            sheetDrawingReturnReason2:'',
            sheetDrawingReturnReason3:'',
            sheetDrawingReturnReason4:'',
            sheetDrawingReturnReason1Validate:'',
            sheetDrawingReturnReason2Validate:'',
            sheetDrawingReturnReason3Validate:'',
            sheetDrawingReturnReason4Validate:'',
        },


    })

function addSheetDrawingReturnRow() {
    sheetDrawingReturnRow.row = sheetDrawingReturnRow.row - 1;
}

function delSheetDrawingReturnRow() {
    sheetDrawingReturnRow.row = sheetDrawingReturnRow.row + 1;
}

function submitForm(){
        Swal.fire({
            icon: 'warning',
            title: 'به مسئول برشکاری جهت تایید شناسه ارجاع 211555 خبر دهید',
            // text: 'به مسئول برشکاری جهت تایید عودت خبر دهید',
            confirmButtonText: 'باشه'
          })  
}

function validate(){
    if(sheetDrawingReturnRow.row === 4){

        if(formData.orderProduct1 !== "" && formData.numberOfSheetDrawingReturn1 !== "" && formData.sheetDrawingReturnReason.sheetDrawingReturnReason1 !== "" ){
            submitForm()
        }
    }
        

    if(sheetDrawingReturnRow.row == 3){
 

        if(formData.sheetDrawingReturnReason.sheetDrawingReturnReason2 === formData.sheetDrawingReturnReason1 && formData.sheetDrawingReturnReason.sheetDrawingReturnReason2 !== ''){
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason2Validate = "علت بازگشت نمی تواند تکراری باشد!"
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason1Validate = "علت بازگشت نمی تواند تکراری باشد!"
        }
        else if(formData.sheetDrawingReturnReason.sheetDrawingReturnReason2 !== '' && formData.sheetDrawingReturnReason.sheetDrawingReturnReason1 !== ''){
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason2Validate = ''
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason1Validate = ''
        }

        if(formData.orderProduct1 !== "" &&  formData.numberOfSheetDrawingReturn1 !== "" && formData.numberOfSheetDrawingReturn2 !== "" && formData.sheetDrawingReturnReason.sheetDrawingReturnReason1 !== "" && formData.sheetDrawingReturnReason.sheetDrawingReturnReason2 !== "" && formData.sheetDrawingReturnReason.sheetDrawingReturnReason2 !== formData.sheetDrawingReturnReason.sheetDrawingReturnReason1){
            submitForm()
        }
        }

    if(sheetDrawingReturnRow.row == 2){

        if(formData.sheetDrawingReturnReason.sheetDrawingReturnReason2 === formData.sheetDrawingReturnReason.sheetDrawingReturnReason1 && formData.sheetDrawingReturnReason.sheetDrawingReturnReason2 !== ''){
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason2Validate = "علت بازگشت نمی تواند تکراری باشد!"
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason1Validate = "علت بازگشت نمی تواند تکراری باشد!"
        }
        else if(formData.sheetDrawingReturnReason.sheetDrawingReturnReason2 !== '' && formData.sheetDrawingReturnReason.sheetDrawingReturnReason1 !== ''){
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason2Validate = ''
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason1Validate = ''
        }

        if(formData.sheetDrawingReturnReason.sheetDrawingReturnReason3 === formData.sheetDrawingReturnReason.sheetDrawingReturnReason2 && formData.sheetDrawingReturnReason.sheetDrawingReturnReason3 === formData.sheetDrawingReturnReason.sheetDrawingReturnReason1 && formData.sheetDrawingReturnReason.sheetDrawingReturnReason2 !== ''){
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason2Validate = "علت بازگشت نمی تواند تکراری باشد!"
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason1Validate = "علت بازگشت نمی تواند تکراری باشد!"
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason3Validate = "علت بازگشت نمی تواند تکراری باشد!"
        }
        else if(formData.sheetDrawingReturnReason.sheetDrawingReturnReason2 !== '' && formData.sheetDrawingReturnReason.sheetDrawingReturnReason1 !== ''){
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason2Validate = ''
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason1Validate = ''
        }

        if(formData.orderProduct1 !== "" &&  formData.numberOfSheetDrawingReturn1 !== "" && formData.numberOfSheetDrawingReturn2 !== "" && formData.numberOfSheetDrawingReturn3 !== "" && formData.sheetDrawingReturnReason.sheetDrawingReturnReason1 !== "" && formData.sheetDrawingReturnReason.sheetDrawingReturnReason2 !== "" &&  formData.sheetDrawingReturnReason.sheetDrawingReturnReason3 !== ""){
            submitForm()
        }
        }   


        if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.numberOfSheetDrawingReturn1 === ""){
            formData.numberOfSheetDrawingReturn1Validate = "تعداد ورق نباید خالی باشد!"
        }
        else{
            formData.numberOfSheetDrawingReturn1Validate = ''
        }

        if(formData.sheetDrawingReturnReason.sheetDrawingReturnReason1 === ""){
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason1Validate = "علت بازگشت باید انتخاب شود!"
        }
        else{
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason1Validate = ''
        }

        if(formData.numberOfSheetDrawingReturn2 === ""){
            formData.numberOfSheetDrawingReturn2Validate = "تعداد ورق نباید خالی باشد!"
        }
        else{
            formData.numberOfSheetDrawingReturn2Validate = ''
        }

        if(formData.sheetDrawingReturnReason.sheetDrawingReturnReason2 === ""){
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason2Validate = "علت بازگشت باید انتخاب شود!"
        }
        else{
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason2Validate = ''
        }

        if(formData.numberOfSheetDrawingReturn3 === ""){
            formData.numberOfSheetDrawingReturn3Validate = "تعداد ورق نباید خالی باشد!"
        }
        else{
            formData.numberOfSheetDrawingReturn3Validate = ''
        }

        if(formData.sheetDrawingReturnReason.sheetDrawingReturnReason3 === ""){
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason3Validate = "علت بازگشت باید انتخاب شود!"
        }
        else{
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason3Validate = ''
        }

        if(formData.numberOfSheetDrawingReturn4 === ""){
            formData.numberOfSheetDrawingReturn4Validate = "تعداد ورق نباید خالی باشد!"
        }
        else{
            formData.numberOfSheetDrawingReturn4Validate = ''
        }

        if(formData.sheetDrawingReturnReason.sheetDrawingReturnReason4 === ""){
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason4Validate = "علت بازگشت باید انتخاب شود!"
        }
        else{
            formData.sheetDrawingReturnReason.sheetDrawingReturnReason4Validate = ''
        }


    if(sheetDrawingReturnRow.row == 1){
        if(formData.orderProduct1 !== "" &&  formData.numberOfSheetDrawingReturn1 !== "" && formData.numberOfSheetDrawingReturn2 !== "" && formData.numberOfSheetDrawingReturn3 !== "" && formData.numberOfSheetDrawingReturn4 !== ""  && formData.sheetDrawingReturnReason.sheetDrawingReturnReason1 !== "" && formData.sheetDrawingReturnReason.sheetDrawingReturnReason2 !== "" &&  formData.sheetDrawingReturnReason.sheetDrawingReturnReason3 !== "" &&  formData.sheetDrawingReturnReason.sheetDrawingReturnReason4 !== ""){
            submitForm()
        }
        }

    }

    return{
        sheetDrawingReturnRow,
        addSheetDrawingReturnRow,
        delSheetDrawingReturnRow,
        formData,
        validate,
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