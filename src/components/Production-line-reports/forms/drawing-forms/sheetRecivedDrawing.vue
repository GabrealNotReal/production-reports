<!-- eslint-disable no-extra-semi -->
<template>
  <div>
    <div class="card-block">
        <div class="card-header">
            <h1 class="text-center">دریافت ورق</h1>
        </div>
        <div class="card-body">
            <form @submit.prevent="validate">

                <div class="form-group">
                        <label 
                        class="font-medium-5 d-block text-center"
                        for="orderProductID"
                         >شناسه تولید
                        </label>
                        <select class="input-lg custom-select custom-select-lg" id="orderProductID" v-model="formData.orderProduct" aria-expanded="false">
                        <option value="">شناسه تولید را انتخاب کنید</option>
                        <option value="1">mn123456</option>
                        <option value="2">pw233456</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.orderProductValidate}}
                        </div>
                </div>

                <div class="form-group">
                        <label 
                        class="font-medium-5 d-block text-center"
                        for="numberOfSheetRecivedDrawing"
                         >تعداد ورق
                        </label>
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfSheetRecivedDrawing" 
                        v-model="formData.numberOfSheetRecivedDrawing"
                        placeholder="تعداد ورق دریافتی را وارد کنید" 
                        >
                        <div class="form-text text-danger">
                        {{formData.numberOfSheetRecivedDrawingValidate}}
                        </div>
                </div>

                <div class="form-group">
                        <label 
                        class="font-medium-5 d-block text-center"
                        for="operator"
                         >نوع تولید
                        </label>
                        <select class="input-lg custom-select custom-select-lg" id="operator" v-model="formData.operator" aria-expanded="false">
                        <option value=""> نوع تولید را انتخاب کنید</option>
                        <option value="normal">عادی</option>
                        <option value="compensationWaste">جهت جبران ضایعات</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.operatorValidate}}
                        </div>
                </div>                

                <button class="btn btn-info btn-block text-center mt-3" type="submit">تایید فرم</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'

export default {
    
data(){

return{
    // moreInfo : 'null',
}
},

    methods:{
        // moreInformation(){
        //     this.moreInfo = document.querySelector('#sheetReceivedFault').value;
        // },

    },

setup(){

    const formData = reactive({
        orderProduct:'',
        orderProductValidate:'',
        numberOfSheetRecivedDrawing:'',
        numberOfSheetRecivedDrawingValidate:'',
        operator:'',
        operatorValidate:'',

    })

    function validate(){
        if(formData.orderProduct === ""){
            formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProductValidate = ''
        }

        if(formData.numberOfSheetRecivedDrawing === ""){
            formData.numberOfSheetRecivedDrawingValidate = "تعداد ورق نباید خالی باشد!"
        }
        else{
            formData.numberOfSheetRecivedDrawingValidate = ''
        }

        if(formData.operator === ""){
            formData.operatorValidate = "نوع تولید باید انتخاب شود!"
        }
        else{
            formData.operatorValidate = ''
        }
    }


    return{
        formData,
        validate,
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