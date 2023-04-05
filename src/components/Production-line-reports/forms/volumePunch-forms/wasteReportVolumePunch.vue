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
                        <select class="input-lg custom-select custom-select-lg" id="wasteGrindingType1" v-model="formData.wasteGrindingType1" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteGrindingType1Validate}}
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
                        id="numberOfWasteGrinding1" 
                        placeholder="تعداد محصول را وارد کنید"
                        v-model="formData.numberOfWasteGrinding1"
                        >
                        <div class="form-text text-danger">
                        {{formData.numberOfWasteGrinding1Validate}}
                        </div>
                </div>

                <div class="col-md-1">
                            <button
                              @click="addwasteGrindingRow"
                              type="button"
                              class="btn btn-outline-info btn-block btn-lg"
                              :disabled="wasteGrindingRow.row === 1"                            
                            >
                              <i class="ft ft-plus"></i>
                            </button>
                </div>  
            </div>

            
            <div class="form-row" v-if="wasteGrindingRow.row < 4">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteGrindingType2"  v-model="formData.wasteGrindingType2" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteGrindingType2Validate}}
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
                        id="numberOfWasteGrinding2" 
                        v-model="formData.numberOfWasteGrinding2"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteGrinding2Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteGrindingRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteGrindingRow.row < 3"                            
                        >
                        <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
            <div class="form-row" v-if="wasteGrindingRow.row < 3">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteGrindingType3" v-model="formData.wasteGrindingType3" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteGrindingType3Validate}}
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
                        id="numberOfWasteGrinding3" 
                        v-model="formData.numberOfWasteGrinding3"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteGrinding3Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteGrindingRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteGrindingRow.row === 1"                            
                        >
                        <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
            <div class="form-row" v-if="wasteGrindingRow.row < 2">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteGrindingType4" v-model="formData.wasteGrindingType4" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteGrindingType4Validate}}
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
                        id="numberOfWasteGrinding4"
                        v-model="formData.numberOfWasteGrinding4"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteGrinding4Validate}}
                    </div>
                </div>

                <div class="col-md-1" v-if="wasteGrindingRow.row < 2">
                        <button
                          @click="delWasteGrindingRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteGrindingRow.row === 0"                            
                        >
                            <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
        </div>
                 <!-- --waste number end-- -->

                 <div class="form-group">
                    <label class="font-medium-5 d-block text-center" for="infoWasteReportGrinding">توضیحات</label>
                    <textarea 
                    class="form-control position-relative input-lg" 
                    id="infoWasteReportGrinding" 
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

const wasteGrindingRow = reactive({row: 4});

const formData = reactive({
        orderProduct1:'',
        orderProduct1Validate:'',
        wasteGrindingType1:'',
        wasteGrindingType2:'',
        wasteGrindingType3:'',
        wasteGrindingType4:'',
        wasteGrindingType1Validate:'',
        wasteGrindingType2Validate:'',
        wasteGrindingType3Validate:'',
        wasteGrindingType4Validate:'',
        productBarcode1:'',
        productBarcode2:'',
        productBarcode3:'',
        productBarcode4:'',
        productBarcode1Validate:'',
        productBarcode2Validate:'',
        productBarcode3Validate:'',
        productBarcode4Validate:'',
        numberOfWasteGrinding1:'',
        numberOfWasteGrinding2:'',
        numberOfWasteGrinding3:'',
        numberOfWasteGrinding4:'',
        numberOfWasteGrinding1Validate:'',
        numberOfWasteGrinding2Validate:'',
        numberOfWasteGrinding3Validate:'',
        numberOfWasteGrinding4Validate:'',

    })




function addwasteGrindingRow() {
    wasteGrindingRow.row = wasteGrindingRow.row- 1;
}

function delWasteGrindingRow() {
    wasteGrindingRow.row = wasteGrindingRow.row + 1;
}

function validate(){
    if(wasteGrindingRow.row === 4){
        if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteGrindingType1 === ""){
            formData.wasteGrindingType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteGrindingType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteGrinding1 === ""){
            formData.numberOfWasteGrinding1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteGrinding1Validate = ''
        }
    }
        

    if(wasteGrindingRow.row == 3){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteGrindingType1 === ""){
            formData.wasteGrindingType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteGrindingType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteGrinding1 === ""){
            formData.numberOfWasteGrinding1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteGrinding1Validate = ''
        }

        if(formData.wasteGrindingType2 === ""){
            formData.wasteGrindingType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteGrindingType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteGrinding2 === ""){
            formData.numberOfWasteGrinding2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteGrinding2Validate = ''
        }
        }

    if(wasteGrindingRow.row == 2){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteGrindingType1 === ""){
            formData.wasteGrindingType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteGrindingType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteGrinding1 === ""){
            formData.numberOfWasteGrinding1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteGrinding1Validate = ''
        }

        if(formData.wasteGrindingType2 === ""){
            formData.wasteGrindingType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteGrindingType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteGrinding2 === ""){
            formData.numberOfWasteGrinding2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteGrinding2Validate = ''
        }

        if(formData.wasteGrindingType3 === ""){
            formData.wasteGrindingType3Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteGrindingType3Validate = ''
        }

        if(formData.productBarcode3 === ""){
            formData.productBarcode3Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode3Validate = ''
        }

        if(formData.numberOfWasteGrinding3 === ""){
            formData.numberOfWasteGrinding3Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteGrinding3Validate = ''
        }
        }   

    if(wasteGrindingRow.row == 1){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteGrindingType1 === ""){
            formData.wasteGrindingType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteGrindingType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteGrinding1 === ""){
            formData.numberOfWasteGrinding1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteGrinding1Validate = ''
        }

        if(formData.wasteGrindingType2 === ""){
            formData.wasteGrindingType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteGrindingType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteGrinding2 === ""){
            formData.numberOfWasteGrinding2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteGrinding2Validate = ''
        }

        if(formData.wasteGrindingType3 === ""){
            formData.wasteGrindingType3Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteGrindingType3Validate = ''
        }

        if(formData.productBarcode3 === ""){
            formData.productBarcode3Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode3Validate = ''
        }

        if(formData.numberOfWasteGrinding3 === ""){
            formData.numberOfWasteGrinding3Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteGrinding3Validate = ''
        }

        if(formData.wasteGrindingType4 === ""){
            formData.wasteGrindingType4Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteGrindingType4Validate = ''
        }

        if(formData.productBarcode4 === ""){
            formData.productBarcode4Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode4Validate = ''
        }

        if(formData.numberOfWasteGrinding4 === ""){
            formData.numberOfWasteGrinding4Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteGrinding4Validate = ''
        }
        }   
    }



    return{
        wasteGrindingRow,
        addwasteGrindingRow,
        delWasteGrindingRow,
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