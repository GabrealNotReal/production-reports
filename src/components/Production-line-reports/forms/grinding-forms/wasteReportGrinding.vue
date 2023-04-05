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
                        <select class="input-lg custom-select custom-select-lg" id="wasteVolumePunchType1" v-model="formData.wasteVolumePunchType1" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteVolumePunchType1Validate}}
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
                        id="numberOfWasteVolumePunch1" 
                        placeholder="تعداد محصول را وارد کنید"
                        v-model="formData.numberOfWasteVolumePunch1"
                        >
                        <div class="form-text text-danger">
                        {{formData.numberOfWasteVolumePunch1Validate}}
                        </div>
                </div>

                <div class="col-md-1">
                            <button
                              @click="addwasteVolumePunchRow"
                              type="button"
                              class="btn btn-outline-info btn-block btn-lg"
                              :disabled="wasteVolumePunchRow.row === 1"                            
                            >
                              <i class="ft ft-plus"></i>
                            </button>
                </div>  
            </div>

            
            <div class="form-row" v-if="wasteVolumePunchRow.row < 4">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteVolumePunchType2"  v-model="formData.wasteVolumePunchType2" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteVolumePunchType2Validate}}
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
                        id="numberOfWasteVolumePunch2" 
                        v-model="formData.numberOfWasteVolumePunch2"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteVolumePunch2Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteVolumePunchRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteVolumePunchRow.row < 3"                            
                        >
                        <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
            <div class="form-row" v-if="wasteVolumePunchRow.row < 3">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteVolumePunchType3" v-model="formData.wasteVolumePunchType3" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteVolumePunchType3Validate}}
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
                        id="numberOfWasteVolumePunch3" 
                        v-model="formData.numberOfWasteVolumePunch3"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteVolumePunch3Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteVolumePunchRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteVolumePunchRow.row === 1"                            
                        >
                        <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
            <div class="form-row" v-if="wasteVolumePunchRow.row < 2">

                <div class="form-group col-3">
                        <select class="input-lg custom-select custom-select-lg" id="wasteVolumePunchType4" v-model="formData.wasteVolumePunchType4" aria-expanded="false" >
                        <option value="">نوع محصول را انتخاب کنید</option>
                        <option value="1">محصول گرید B</option>
                        <option value="2">محصول گرید C</option>
                        <option value="3">محصول ضایعات</option>
                        <option value="4">محصول ارفاقی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.wasteVolumePunchType4Validate}}
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
                        id="numberOfWasteVolumePunch4"
                        v-model="formData.numberOfWasteVolumePunch4"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfWasteVolumePunch4Validate}}
                    </div>
                </div>

                <div class="col-md-1" v-if="wasteVolumePunchRow.row < 2">
                        <button
                          @click="delWasteVolumePunchRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteVolumePunchRow.row === 0"                            
                        >
                            <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
        </div>
                 <!-- --waste number end-- -->

                 <div class="form-group">
                    <label class="font-medium-5 d-block text-center" for="infoWasteReportVolumePunch">توضیحات</label>
                    <textarea 
                    class="form-control position-relative input-lg" 
                    id="infoWasteReportVolumePunch" 
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

const wasteVolumePunchRow = reactive({row: 4});

const formData = reactive({
        orderProduct1:'',
        orderProduct1Validate:'',
        wasteVolumePunchType1:'',
        wasteVolumePunchType2:'',
        wasteVolumePunchType3:'',
        wasteVolumePunchType4:'',
        wasteVolumePunchType1Validate:'',
        wasteVolumePunchType2Validate:'',
        wasteVolumePunchType3Validate:'',
        wasteVolumePunchType4Validate:'',
        productBarcode1:'',
        productBarcode2:'',
        productBarcode3:'',
        productBarcode4:'',
        productBarcode1Validate:'',
        productBarcode2Validate:'',
        productBarcode3Validate:'',
        productBarcode4Validate:'',
        numberOfWasteVolumePunch1:'',
        numberOfWasteVolumePunch2:'',
        numberOfWasteVolumePunch3:'',
        numberOfWasteVolumePunch4:'',
        numberOfWasteVolumePunch1Validate:'',
        numberOfWasteVolumePunch2Validate:'',
        numberOfWasteVolumePunch3Validate:'',
        numberOfWasteVolumePunch4Validate:'',

    })




function addwasteVolumePunchRow() {
    wasteVolumePunchRow.row = wasteVolumePunchRow.row- 1;
}

function delWasteVolumePunchRow() {
    wasteVolumePunchRow.row = wasteVolumePunchRow.row + 1;
}

function validate(){
    if(wasteVolumePunchRow.row === 4){
        if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteVolumePunchType1 === ""){
            formData.wasteVolumePunchType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteVolumePunchType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteVolumePunch1 === ""){
            formData.numberOfWasteVolumePunch1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteVolumePunch1Validate = ''
        }
    }
        

    if(wasteVolumePunchRow.row == 3){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteVolumePunchType1 === ""){
            formData.wasteVolumePunchType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteVolumePunchType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteVolumePunch1 === ""){
            formData.numberOfWasteVolumePunch1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteVolumePunch1Validate = ''
        }

        if(formData.wasteVolumePunchType2 === ""){
            formData.wasteVolumePunchType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteVolumePunchType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteVolumePunch2 === ""){
            formData.numberOfWasteVolumePunch2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteVolumePunch2Validate = ''
        }
        }

    if(wasteVolumePunchRow.row == 2){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteVolumePunchType1 === ""){
            formData.wasteVolumePunchType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteVolumePunchType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteVolumePunch1 === ""){
            formData.numberOfWasteVolumePunch1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteVolumePunch1Validate = ''
        }

        if(formData.wasteVolumePunchType2 === ""){
            formData.wasteVolumePunchType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteVolumePunchType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteVolumePunch2 === ""){
            formData.numberOfWasteVolumePunch2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteVolumePunch2Validate = ''
        }

        if(formData.wasteVolumePunchType3 === ""){
            formData.wasteVolumePunchType3Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteVolumePunchType3Validate = ''
        }

        if(formData.productBarcode3 === ""){
            formData.productBarcode3Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode3Validate = ''
        }

        if(formData.numberOfWasteVolumePunch3 === ""){
            formData.numberOfWasteVolumePunch3Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteVolumePunch3Validate = ''
        }
        }   

    if(wasteVolumePunchRow.row == 1){
            if(formData.orderProduct1 === ""){
            formData.orderProduct1Validate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProduct1Validate = ''
        }

        if(formData.wasteVolumePunchType1 === ""){
            formData.wasteVolumePunchType1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteVolumePunchType1Validate = ''
        }

        if(formData.productBarcode1 === ""){
            formData.productBarcode1Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode1Validate = ''
        }

        if(formData.numberOfWasteVolumePunch1 === ""){
            formData.numberOfWasteVolumePunch1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteVolumePunch1Validate = ''
        }

        if(formData.wasteVolumePunchType2 === ""){
            formData.wasteVolumePunchType2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteVolumePunchType2Validate = ''
        }

        if(formData.productBarcode2 === ""){
            formData.productBarcode2Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode2Validate = ''
        }

        if(formData.numberOfWasteVolumePunch2 === ""){
            formData.numberOfWasteVolumePunch2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteVolumePunch2Validate = ''
        }

        if(formData.wasteVolumePunchType3 === ""){
            formData.wasteVolumePunchType3Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteVolumePunchType3Validate = ''
        }

        if(formData.productBarcode3 === ""){
            formData.productBarcode3Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode3Validate = ''
        }

        if(formData.numberOfWasteVolumePunch3 === ""){
            formData.numberOfWasteVolumePunch3Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteVolumePunch3Validate = ''
        }

        if(formData.wasteVolumePunchType4 === ""){
            formData.wasteVolumePunchType4Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.wasteVolumePunchType4Validate = ''
        }

        if(formData.productBarcode4 === ""){
            formData.productBarcode4Validate = "لیبل اولیه محصول را انتخاب کنید!"
        }
        else{
            formData.productBarcode4Validate = ''
        }

        if(formData.numberOfWasteVolumePunch4 === ""){
            formData.numberOfWasteVolumePunch4Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfWasteVolumePunch4Validate = ''
        }
        }   
    }



    return{
        wasteVolumePunchRow,
        addwasteVolumePunchRow,
        delWasteVolumePunchRow,
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