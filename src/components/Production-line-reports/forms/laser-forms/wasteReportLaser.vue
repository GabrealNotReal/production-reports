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
                        <select class="input-lg custom-select custom-select-lg" id="wasteLaseringType1" v-model="formData.wasteLaseringType1" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteLaseringType1Validate}}
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
                        id="numberOfWasteLasering1" 
                        placeholder="تعداد محصول را وارد کنید"
                        v-model="formData.numberOfWasteLasering1"
                        >
                        <div class="form-text text-danger">
                        {{formData.numberOfWasteLasering1Validate}}
                        </div>
                </div>

                <div class="col-md-1">
                            <button
                              @click="addwasteLaseringRow"
                              type="button"
                              class="btn btn-outline-info btn-block btn-lg"
                              :disabled="wasteLaseringRow.row === 1"                            
                            >
                              <i class="ft ft-plus"></i>
                            </button>
                </div>  
            </div>

            
            <div class="form-row" v-if="wasteLaseringRow.row < 4">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteLaseringType2"  v-model="formData.wasteLaseringType2" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteLaseringType2Validate}}
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
                        id="numberOfWasteLasering2" 
                        v-model="formData.numberOfWasteLasering2"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteLasering2Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteLaseringRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteLaseringRow.row < 3"                            
                        >
                        <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
            <div class="form-row" v-if="wasteLaseringRow.row < 3">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteLaseringType3" v-model="formData.wasteLaseringType3" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteLaseringType3Validate}}
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
                        id="numberOfWasteLasering3" 
                        v-model="formData.numberOfWasteLasering3"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteLasering3Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteLaseringRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteLaseringRow.row === 1"                            
                        >
                        <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
            <div class="form-row" v-if="wasteLaseringRow.row < 2">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteLaseringType4" v-model="formData.wasteLaseringType4" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteLaseringType4Validate}}
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
                        id="numberOfWasteLasering4"
                        v-model="formData.numberOfWasteLasering4"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteLasering4Validate}}
                    </div>
                </div>

                <div class="col-md-1" v-if="wasteLaseringRow.row < 2">
                        <button
                          @click="delWasteLaseringRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteLaseringRow.row === 0"                            
                        >
                            <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
        </div>
                 <!-- --waste number end-- -->

                 <div class="form-group">
                    <label class="font-medium-5 d-block text-center" for="infoWasteReportLasering">توضیحات</label>
                    <textarea 
                    class="form-control position-relative input-lg" 
                    id="infoWasteReportLasering" 
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

const wasteLaseringRow = reactive({row: 4});

const formData = reactive({
        orderProduct1:'',
        orderProduct1Validate:'',
        wasteLaseringType1:'',
        wasteLaseringType2:'',
        wasteLaseringType3:'',
        wasteLaseringType4:'',
        wasteLaseringType1Validate:'',
        wasteLaseringType2Validate:'',
        wasteLaseringType3Validate:'',
        wasteLaseringType4Validate:'',
        productBarcode1:'',
        productBarcode2:'',
        productBarcode3:'',
        productBarcode4:'',
        productBarcode1Validate:'',
        productBarcode2Validate:'',
        productBarcode3Validate:'',
        productBarcode4Validate:'',
        numberOfWasteLasering1:'',
        numberOfWasteLasering2:'',
        numberOfWasteLasering3:'',
        numberOfWasteLasering4:'',
        numberOfWasteLasering1Validate:'',
        numberOfWasteLasering2Validate:'',
        numberOfWasteLasering3Validate:'',
        numberOfWasteLasering4Validate:'',

    })




function addwasteLaseringRow() {
    wasteLaseringRow.row = wasteLaseringRow.row- 1;
}

function delWasteLaseringRow() {
    wasteLaseringRow.row = wasteLaseringRow.row + 1;
}

function validate(){
    if(wasteLaseringRow.row === 4){
        if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteLaseringType1 === ""){
            formData.wasteLaseringType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteLaseringType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteLasering1 === ""){
            formData.numberOfWasteLasering1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteLasering1Validate = ''
        }
    }
        

    if(wasteLaseringRow.row == 3){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteLaseringType1 === ""){
            formData.wasteLaseringType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteLaseringType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteLasering1 === ""){
            formData.numberOfWasteLasering1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteLasering1Validate = ''
        }

        if(formData.wasteLaseringType2 === ""){
            formData.wasteLaseringType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteLaseringType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteLasering2 === ""){
            formData.numberOfWasteLasering2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteLasering2Validate = ''
        }
        }

    if(wasteLaseringRow.row == 2){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteLaseringType1 === ""){
            formData.wasteLaseringType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteLaseringType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteLasering1 === ""){
            formData.numberOfWasteLasering1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteLasering1Validate = ''
        }

        if(formData.wasteLaseringType2 === ""){
            formData.wasteLaseringType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteLaseringType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteLasering2 === ""){
            formData.numberOfWasteLasering2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteLasering2Validate = ''
        }

        if(formData.wasteLaseringType3 === ""){
            formData.wasteLaseringType3Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteLaseringType3Validate = ''
        }

        if(formData.productBarcode3 === ""){
            formData.productBarcode3Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode3Validate = ''
        }

        if(formData.numberOfWasteLasering3 === ""){
            formData.numberOfWasteLasering3Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteLasering3Validate = ''
        }
        }   

    if(wasteLaseringRow.row == 1){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteLaseringType1 === ""){
            formData.wasteLaseringType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteLaseringType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteLasering1 === ""){
            formData.numberOfWasteLasering1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteLasering1Validate = ''
        }

        if(formData.wasteLaseringType2 === ""){
            formData.wasteLaseringType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteLaseringType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteLasering2 === ""){
            formData.numberOfWasteLasering2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteLasering2Validate = ''
        }

        if(formData.wasteLaseringType3 === ""){
            formData.wasteLaseringType3Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteLaseringType3Validate = ''
        }

        if(formData.productBarcode3 === ""){
            formData.productBarcode3Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode3Validate = ''
        }

        if(formData.numberOfWasteLasering3 === ""){
            formData.numberOfWasteLasering3Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteLasering3Validate = ''
        }

        if(formData.wasteLaseringType4 === ""){
            formData.wasteLaseringType4Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteLaseringType4Validate = ''
        }

        if(formData.productBarcode4 === ""){
            formData.productBarcode4Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode4Validate = ''
        }

        if(formData.numberOfWasteLasering4 === ""){
            formData.numberOfWasteLasering4Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteLasering4Validate = ''
        }
        }   
    }



    return{
        wasteLaseringRow,
        addwasteLaseringRow,
        delWasteLaseringRow,
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