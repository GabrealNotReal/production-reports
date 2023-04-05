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
                        <select class="input-lg custom-select custom-select-lg" id="wasteOmeraType1" v-model="formData.wasteOmeraType1" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteOmeraType1Validate}}
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
                        id="numberOfWasteOmera1" 
                        placeholder="تعداد محصول را وارد کنید"
                        v-model="formData.numberOfWasteOmera1"
                        >
                        <div class="form-text text-danger">
                        {{formData.numberOfWasteOmera1Validate}}
                        </div>
                </div>

                <div class="col-md-1">
                            <button
                              @click="addwasteOmeraRow"
                              type="button"
                              class="btn btn-outline-info btn-block btn-lg"
                              :disabled="wasteOmeraRow.row === 1"                            
                            >
                              <i class="ft ft-plus"></i>
                            </button>
                </div>  
            </div>

            
            <div class="form-row" v-if="wasteOmeraRow.row < 4">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteOmeraType2"  v-model="formData.wasteOmeraType2" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteOmeraType2Validate}}
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
                        id="numberOfWasteOmera2" 
                        v-model="formData.numberOfWasteOmera2"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteOmera2Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteOmeraRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteOmeraRow.row < 3"                            
                        >
                        <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
            <div class="form-row" v-if="wasteOmeraRow.row < 3">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteOmeraType3" v-model="formData.wasteOmeraType3" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteOmeraType3Validate}}
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
                        id="numberOfWasteOmera3" 
                        v-model="formData.numberOfWasteOmera3"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteOmera3Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteOmeraRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteOmeraRow.row === 1"                            
                        >
                        <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
            <div class="form-row" v-if="wasteOmeraRow.row < 2">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteOmeraType4" v-model="formData.wasteOmeraType4" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteOmeraType4Validate}}
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
                        id="numberOfWasteOmera4"
                        v-model="formData.numberOfWasteOmera4"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteOmera4Validate}}
                    </div>
                </div>

                <div class="col-md-1" v-if="wasteOmeraRow.row < 2">
                        <button
                          @click="delWasteOmeraRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteOmeraRow.row === 0"                            
                        >
                            <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
        </div>
                 <!-- --waste number end-- -->

                 <div class="form-group">
                    <label class="font-medium-5 d-block text-center" for="infoWasteReportOmera">توضیحات</label>
                    <textarea 
                    class="form-control position-relative input-lg" 
                    id="infoWasteReportOmera" 
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

const wasteOmeraRow = reactive({row: 4});

const formData = reactive({
        orderProduct1:'',
        orderProduct1Validate:'',
        wasteOmeraType1:'',
        wasteOmeraType2:'',
        wasteOmeraType3:'',
        wasteOmeraType4:'',
        wasteOmeraType1Validate:'',
        wasteOmeraType2Validate:'',
        wasteOmeraType3Validate:'',
        wasteOmeraType4Validate:'',
        productBarcode1:'',
        productBarcode2:'',
        productBarcode3:'',
        productBarcode4:'',
        productBarcode1Validate:'',
        productBarcode2Validate:'',
        productBarcode3Validate:'',
        productBarcode4Validate:'',
        numberOfWasteOmera1:'',
        numberOfWasteOmera2:'',
        numberOfWasteOmera3:'',
        numberOfWasteOmera4:'',
        numberOfWasteOmera1Validate:'',
        numberOfWasteOmera2Validate:'',
        numberOfWasteOmera3Validate:'',
        numberOfWasteOmera4Validate:'',

    })




function addwasteOmeraRow() {
    wasteOmeraRow.row = wasteOmeraRow.row- 1;
}

function delWasteOmeraRow() {
    wasteOmeraRow.row = wasteOmeraRow.row + 1;
}

function validate(){
    if(wasteOmeraRow.row === 4){
        if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteOmeraType1 === ""){
            formData.wasteOmeraType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteOmeraType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteOmera1 === ""){
            formData.numberOfWasteOmera1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteOmera1Validate = ''
        }
    }
        

    if(wasteOmeraRow.row == 3){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteOmeraType1 === ""){
            formData.wasteOmeraType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteOmeraType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteOmera1 === ""){
            formData.numberOfWasteOmera1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteOmera1Validate = ''
        }

        if(formData.wasteOmeraType2 === ""){
            formData.wasteOmeraType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteOmeraType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteOmera2 === ""){
            formData.numberOfWasteOmera2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteOmera2Validate = ''
        }
        }

    if(wasteOmeraRow.row == 2){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteOmeraType1 === ""){
            formData.wasteOmeraType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteOmeraType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteOmera1 === ""){
            formData.numberOfWasteOmera1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteOmera1Validate = ''
        }

        if(formData.wasteOmeraType2 === ""){
            formData.wasteOmeraType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteOmeraType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteOmera2 === ""){
            formData.numberOfWasteOmera2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteOmera2Validate = ''
        }

        if(formData.wasteOmeraType3 === ""){
            formData.wasteOmeraType3Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteOmeraType3Validate = ''
        }

        if(formData.productBarcode3 === ""){
            formData.productBarcode3Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode3Validate = ''
        }

        if(formData.numberOfWasteOmera3 === ""){
            formData.numberOfWasteOmera3Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteOmera3Validate = ''
        }
        }   

    if(wasteOmeraRow.row == 1){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteOmeraType1 === ""){
            formData.wasteOmeraType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteOmeraType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteOmera1 === ""){
            formData.numberOfWasteOmera1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteOmera1Validate = ''
        }

        if(formData.wasteOmeraType2 === ""){
            formData.wasteOmeraType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteOmeraType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteOmera2 === ""){
            formData.numberOfWasteOmera2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteOmera2Validate = ''
        }

        if(formData.wasteOmeraType3 === ""){
            formData.wasteOmeraType3Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteOmeraType3Validate = ''
        }

        if(formData.productBarcode3 === ""){
            formData.productBarcode3Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode3Validate = ''
        }

        if(formData.numberOfWasteOmera3 === ""){
            formData.numberOfWasteOmera3Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteOmera3Validate = ''
        }

        if(formData.wasteOmeraType4 === ""){
            formData.wasteOmeraType4Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteOmeraType4Validate = ''
        }

        if(formData.productBarcode4 === ""){
            formData.productBarcode4Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode4Validate = ''
        }

        if(formData.numberOfWasteOmera4 === ""){
            formData.numberOfWasteOmera4Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteOmera4Validate = ''
        }
        }   
    }



    return{
        wasteOmeraRow,
        addwasteOmeraRow,
        delWasteOmeraRow,
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