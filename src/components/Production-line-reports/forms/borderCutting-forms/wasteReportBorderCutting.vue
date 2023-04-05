<template>
  <div>
    <div class="card-block">
        <div class="card-header">
            <h1 class="text-center">گزارش ضایعات افت گرید و ارفاقی</h1>
        </div>
        <div class="card-body">
            <form @submit.prevent="validate">

                <div class="form-group">
                        <label 
                        class="font-medium-5 d-block text-center"
                        for="orderProductID"
                         >شناسه تولید
                        </label>
                        <select class="input-lg custom-select custom-select-lg" id="orderProductID" v-model="formData.orderProduct1" aria-expanded="false">
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
            >محصولات
            </label>
            
            <div class="form-row">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteBorderCuttingType1" v-model="formData.wasteBorderCuttingType1" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteBorderCuttingType1Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                    <v-select 
                    class="input-lg" 
                    :options="['192250251','192256001' , '254821225']" 
                    multiple 
                    id="productBarcode1" 
                    aria-expanded="false" 
                    v-model="formData.productBarcode1"
                    placeholder="لیبل اولیه محصول را انتخاب کنید" 
                    />
                    <div class="form-text text-danger">
                        {{formData.productBarcode1Validate}}
                    </div>
                </div>

                <div class="form-group col-3">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfWasteBorderCutting1" 
                        placeholder="تعداد محصول را وارد کنید"
                        v-model="formData.numberOfWasteBorderCutting1"
                        >
                        <div class="form-text text-danger">
                        {{formData.numberOfWasteBorderCutting1Validate}}
                        </div>
                </div>

                <div class="col-md-1">
                            <button
                              @click="addwasteBorderCuttingRow"
                              type="button"
                              class="btn btn-outline-info btn-block btn-lg"
                              :disabled="wasteBorderCuttingRow.row === 1"                            
                            >
                              <i class="ft ft-plus"></i>
                            </button>
                </div>  
            </div>

            
            <div class="form-row" v-if="wasteBorderCuttingRow.row < 4">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteBorderCuttingType2"  v-model="formData.wasteBorderCuttingType2" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteBorderCuttingType2Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                    <v-select 
                    class="input-lg" 
                    :options="['192250251','192256001' , '254821225']" 
                    multiple 
                    id="productBarcode2" 
                    aria-expanded="false" 
                    v-model="formData.productBarcode2"
                    placeholder="لیبل اولیه محصول را انتخاب کنید" 
                    />
                    <div class="form-text text-danger">
                        {{formData.productBarcode2Validate}}
                    </div>
                </div>

                <div class="form-group col-3">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfWasteBorderCutting2" 
                        v-model="formData.numberOfWasteBorderCutting2"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteBorderCutting2Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteBorderCuttingRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteBorderCuttingRow.row < 3"                            
                        >
                        <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
            <div class="form-row" v-if="wasteBorderCuttingRow.row < 3">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteBorderCuttingType3" v-model="formData.wasteBorderCuttingType3" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteBorderCuttingType3Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                    <v-select 
                    class="input-lg" 
                    :options="['192250251','192256001' , '254821225']" 
                    multiple 
                    id="productBarcode3" 
                    aria-expanded="false" 
                    v-model="formData.productBarcode3"
                    placeholder="لیبل اولیه محصول را انتخاب کنید" 
                    />
                    <div class="form-text text-danger">
                        {{formData.productBarcode3Validate}}
                    </div>
                </div>


                <div class="form-group col-3">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfWasteBorderCutting3" 
                        v-model="formData.numberOfWasteBorderCutting3"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteBorderCutting3Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteBorderCuttingRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteBorderCuttingRow.row === 1"                            
                        >
                        <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
            <div class="form-row" v-if="wasteBorderCuttingRow.row < 2">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteBorderCuttingType4" v-model="formData.wasteBorderCuttingType4" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteBorderCuttingType4Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                    <v-select 
                    class="input-lg" 
                    :options="['192250251','192256001' , '254821225']" 
                    multiple 
                    id="productBarcode4" 
                    aria-expanded="false" 
                    v-model="formData.productBarcode4"
                    placeholder="لیبل اولیه محصول را انتخاب کنید" 
                    />
                    <div class="form-text text-danger">
                        {{formData.productBarcode4Validate}}
                    </div>
                </div>


                <div class="form-group col-3">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfWasteBorderCutting4"
                        v-model="formData.numberOfWasteBorderCutting4"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteBorderCutting4Validate}}
                    </div>
                </div>

                <div class="col-md-1" v-if="wasteBorderCuttingRow.row < 2">
                        <button
                          @click="delWasteBorderCuttingRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteBorderCuttingRow.row === 0"                            
                        >
                            <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
        </div>
                 <!-- --waste number end-- -->

                 <div class="form-group">
                    <label class="font-medium-5 d-block text-center" for="infoWasteReportBorderCutting">توضیحات</label>
                    <textarea 
                    class="form-control position-relative input-lg" 
                    id="infoWasteReportBorderCutting" 
                    rows="2"
                    placeholder="توضیحات بیشتر را وارد کنید" 
                    ></textarea>
                  </div>                     

                <button class="btn btn-info btn-block text-center mt-3" type="submit">تایید فرم</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';

export default {
    
data(){

return{


}
},

    methods:{


    },

setup(){

const wasteBorderCuttingRow = reactive({row: 4});

const formData = reactive({
        orderProduct1:'',
        orderProduct1Validate:'',
        wasteBorderCuttingType1:'',
        wasteBorderCuttingType2:'',
        wasteBorderCuttingType3:'',
        wasteBorderCuttingType4:'',
        wasteBorderCuttingType1Validate:'',
        wasteBorderCuttingType2Validate:'',
        wasteBorderCuttingType3Validate:'',
        wasteBorderCuttingType4Validate:'',
        productBarcode1:'',
        productBarcode2:'',
        productBarcode3:'',
        productBarcode4:'',
        productBarcode1Validate:'',
        productBarcode2Validate:'',
        productBarcode3Validate:'',
        productBarcode4Validate:'',
        numberOfWasteBorderCutting1:'',
        numberOfWasteBorderCutting2:'',
        numberOfWasteBorderCutting3:'',
        numberOfWasteBorderCutting4:'',
        numberOfWasteBorderCutting1Validate:'',
        numberOfWasteBorderCutting2Validate:'',
        numberOfWasteBorderCutting3Validate:'',
        numberOfWasteBorderCutting4Validate:'',

    })




function addwasteBorderCuttingRow() {
    wasteBorderCuttingRow.row = wasteBorderCuttingRow.row- 1;
}

function delWasteBorderCuttingRow() {
    wasteBorderCuttingRow.row = wasteBorderCuttingRow.row + 1;
}

function validate(){
    if(wasteBorderCuttingRow.row === 4){
        if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteBorderCuttingType1 === ""){
            formData.wasteBorderCuttingType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteBorderCuttingType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteBorderCutting1 === ""){
            formData.numberOfWasteBorderCutting1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteBorderCutting1Validate = ''
        }
    }
        

    if(wasteBorderCuttingRow.row == 3){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteBorderCuttingType1 === ""){
            formData.wasteBorderCuttingType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteBorderCuttingType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteBorderCutting1 === ""){
            formData.numberOfWasteBorderCutting1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteBorderCutting1Validate = ''
        }

        if(formData.wasteBorderCuttingType2 === ""){
            formData.wasteBorderCuttingType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteBorderCuttingType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteBorderCutting2 === ""){
            formData.numberOfWasteBorderCutting2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteBorderCutting2Validate = ''
        }
        }

    if(wasteBorderCuttingRow.row == 2){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteBorderCuttingType1 === ""){
            formData.wasteBorderCuttingType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteBorderCuttingType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteBorderCutting1 === ""){
            formData.numberOfWasteBorderCutting1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteBorderCutting1Validate = ''
        }

        if(formData.wasteBorderCuttingType2 === ""){
            formData.wasteBorderCuttingType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteBorderCuttingType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteBorderCutting2 === ""){
            formData.numberOfWasteBorderCutting2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteBorderCutting2Validate = ''
        }

        if(formData.wasteBorderCuttingType3 === ""){
            formData.wasteBorderCuttingType3Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteBorderCuttingType3Validate = ''
        }

        if(formData.productBarcode3 === ""){
            formData.productBarcode3Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode3Validate = ''
        }

        if(formData.numberOfWasteBorderCutting3 === ""){
            formData.numberOfWasteBorderCutting3Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteBorderCutting3Validate = ''
        }
        }   

    if(wasteBorderCuttingRow.row == 1){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteBorderCuttingType1 === ""){
            formData.wasteBorderCuttingType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteBorderCuttingType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteBorderCutting1 === ""){
            formData.numberOfWasteBorderCutting1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteBorderCutting1Validate = ''
        }

        if(formData.wasteBorderCuttingType2 === ""){
            formData.wasteBorderCuttingType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteBorderCuttingType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteBorderCutting2 === ""){
            formData.numberOfWasteBorderCutting2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteBorderCutting2Validate = ''
        }

        if(formData.wasteBorderCuttingType3 === ""){
            formData.wasteBorderCuttingType3Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteBorderCuttingType3Validate = ''
        }

        if(formData.productBarcode3 === ""){
            formData.productBarcode3Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode3Validate = ''
        }

        if(formData.numberOfWasteBorderCutting3 === ""){
            formData.numberOfWasteBorderCutting3Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteBorderCutting3Validate = ''
        }

        if(formData.wasteBorderCuttingType4 === ""){
            formData.wasteBorderCuttingType4Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteBorderCuttingType4Validate = ''
        }

        if(formData.productBarcode4 === ""){
            formData.productBarcode4Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode4Validate = ''
        }

        if(formData.numberOfWasteBorderCutting4 === ""){
            formData.numberOfWasteBorderCutting4Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteBorderCutting4Validate = ''
        }
        }   
    }



    return{
        wasteBorderCuttingRow,
        addwasteBorderCuttingRow,
        delWasteBorderCuttingRow,
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