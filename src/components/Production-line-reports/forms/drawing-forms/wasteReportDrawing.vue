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
                        <select class="input-lg custom-select custom-select-lg" id="wasteDrawingType1" v-model="formData.wasteDrawingType1" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteDrawingType1Validate}}
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
                        id="numberOfWasteDrawing1" 
                        placeholder="تعداد محصول را وارد کنید"
                        v-model="formData.numberOfWasteDrawing1"
                        >
                        <div class="form-text text-danger">
                        {{formData.numberOfWasteDrawing1Validate}}
                        </div>
                </div>

                <div class="col-md-1">
                            <button
                              @click="addWasteDrawingRow"
                              type="button"
                              class="btn btn-outline-info btn-block btn-lg"
                              :disabled="wasteDrawingRow.row === 1"                            
                            >
                              <i class="ft ft-plus"></i>
                            </button>
                </div>  
            </div>

            
            <div class="form-row" v-if="wasteDrawingRow.row < 4">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteDrawingType2"  v-model="formData.wasteDrawingType2" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteDrawingType2Validate}}
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
                        id="numberOfWasteDrawing2" 
                        v-model="formData.numberOfWasteDrawing2"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteDrawing2Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteDrawingRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteDrawingRow.row < 3"                            
                        >
                        <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
            <div class="form-row" v-if="wasteDrawingRow.row < 3">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteDrawingType3" v-model="formData.wasteDrawingType3" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteDrawingType3Validate}}
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
                        id="numberOfWasteDrawing3" 
                        v-model="formData.numberOfWasteDrawing3"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteDrawing3Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteDrawingRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteDrawingRow.row === 1"                            
                        >
                        <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
            <div class="form-row" v-if="wasteDrawingRow.row < 2">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteDrawingType4" v-model="formData.wasteDrawingType4" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteDrawingType4Validate}}
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
                        id="numberOfWasteDrawing4"
                        v-model="formData.numberOfWasteDrawing4"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteDrawing4Validate}}
                    </div>
                </div>

                <div class="col-md-1" v-if="wasteDrawingRow.row < 2">
                        <button
                          @click="delWasteDrawingRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteDrawingRow.row === 0"                            
                        >
                            <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
        </div>
                 <!-- --waste number end-- -->

                 <div class="form-group">
                    <label class="font-medium-5 d-block text-center" for="infoWasteReportDrawing">توضیحات</label>
                    <textarea 
                    class="form-control position-relative input-lg" 
                    id="infoWasteReportDrawing" 
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

const wasteDrawingRow = reactive({row: 4});

const formData = reactive({
        orderProduct1:'',
        orderProduct1Validate:'',
        wasteDrawingType1:'',
        wasteDrawingType2:'',
        wasteDrawingType3:'',
        wasteDrawingType4:'',
        wasteDrawingType1Validate:'',
        wasteDrawingType2Validate:'',
        wasteDrawingType3Validate:'',
        wasteDrawingType4Validate:'',
        productBarcode1:'',
        productBarcode2:'',
        productBarcode3:'',
        productBarcode4:'',
        productBarcode1Validate:'',
        productBarcode2Validate:'',
        productBarcode3Validate:'',
        productBarcode4Validate:'',
        numberOfWasteDrawing1:'',
        numberOfWasteDrawing2:'',
        numberOfWasteDrawing3:'',
        numberOfWasteDrawing4:'',
        numberOfWasteDrawing1Validate:'',
        numberOfWasteDrawing2Validate:'',
        numberOfWasteDrawing3Validate:'',
        numberOfWasteDrawing4Validate:'',

    })




function addWasteDrawingRow() {
    wasteDrawingRow.row = wasteDrawingRow.row- 1;
}

function delWasteDrawingRow() {
    wasteDrawingRow.row = wasteDrawingRow.row + 1;
}

function validate(){
    if(wasteDrawingRow.row === 4){
        if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteDrawingType1 === ""){
            formData.wasteDrawingType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteDrawingType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteDrawing1 === ""){
            formData.numberOfWasteDrawing1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteDrawing1Validate = ''
        }
    }
        

    if(wasteDrawingRow.row == 3){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteDrawingType1 === ""){
            formData.wasteDrawingType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteDrawingType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteDrawing1 === ""){
            formData.numberOfWasteDrawing1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteDrawing1Validate = ''
        }

        if(formData.wasteDrawingType2 === ""){
            formData.wasteDrawingType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteDrawingType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteDrawing2 === ""){
            formData.numberOfWasteDrawing2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteDrawing2Validate = ''
        }
        }

    if(wasteDrawingRow.row == 2){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteDrawingType1 === ""){
            formData.wasteDrawingType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteDrawingType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteDrawing1 === ""){
            formData.numberOfWasteDrawing1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteDrawing1Validate = ''
        }

        if(formData.wasteDrawingType2 === ""){
            formData.wasteDrawingType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteDrawingType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteDrawing2 === ""){
            formData.numberOfWasteDrawing2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteDrawing2Validate = ''
        }

        if(formData.wasteDrawingType3 === ""){
            formData.wasteDrawingType3Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteDrawingType3Validate = ''
        }

        if(formData.productBarcode3 === ""){
            formData.productBarcode3Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode3Validate = ''
        }

        if(formData.numberOfWasteDrawing3 === ""){
            formData.numberOfWasteDrawing3Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteDrawing3Validate = ''
        }
        }   

    if(wasteDrawingRow.row == 1){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteDrawingType1 === ""){
            formData.wasteDrawingType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteDrawingType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteDrawing1 === ""){
            formData.numberOfWasteDrawing1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteDrawing1Validate = ''
        }

        if(formData.wasteDrawingType2 === ""){
            formData.wasteDrawingType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteDrawingType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteDrawing2 === ""){
            formData.numberOfWasteDrawing2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteDrawing2Validate = ''
        }

        if(formData.wasteDrawingType3 === ""){
            formData.wasteDrawingType3Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteDrawingType3Validate = ''
        }

        if(formData.productBarcode3 === ""){
            formData.productBarcode3Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode3Validate = ''
        }

        if(formData.numberOfWasteDrawing3 === ""){
            formData.numberOfWasteDrawing3Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteDrawing3Validate = ''
        }

        if(formData.wasteDrawingType4 === ""){
            formData.wasteDrawingType4Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteDrawingType4Validate = ''
        }

        if(formData.productBarcode4 === ""){
            formData.productBarcode4Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode4Validate = ''
        }

        if(formData.numberOfWasteDrawing4 === ""){
            formData.numberOfWasteDrawing4Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteDrawing4Validate = ''
        }
        }   
    }



    return{
        wasteDrawingRow,
        addWasteDrawingRow,
        delWasteDrawingRow,
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