<template>
  <div>
    <div class="card-block">
        <div class="card-header">
            <h1 class="text-center">مرحله ورق</h1>
        </div>
        <div class="card-body">
            <form class="needs-validation was-validated" novalidate>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label 
                        class="font-medium-5"
                        for="reciveSheet1"
                        >تعداد ورق دریافتی
                        </label>
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="reciveSheet1" 
                        placeholder="تعداد ورق هایی که دریافت کرده اید را وارد کنید" 
                        >
                    </div>
                    <div class="col-md-6 mb-3">
                        <label 
                        class="font-medium-5"
                        for="returnSheet1"
                        >تعداد ورق مرجوعی
                        </label>
                        <div class="input-group">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="returnSheet1" 
                        placeholder="تعداد ورق مرجوعی را وارد کنید" 
                        >
                        <div class="input-group-append">
                            <button class="btn btn-outline-success" type="button" id="button-addon2">علت مرجوعی</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label
                        class="font-medium-5" 
                        for="ReplaceSheet1"
                        >تعداد ورق جایگزین
                        </label>
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="ReplaceSheet1" 
                        placeholder="تعداد ورق جایگزین شده را وارد کنید"
                        >
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="font-medium-5" for="oiler">مسئول روغن زنی</label>
                        <select                     
                        id="oiler"
                        class="select-size-sm form-control input-lg"
                        aria-label=".form-select-sm example"
                        required
                        >
                            <option value="">انتخاب کنید</option>
                            <option value="1">1- علی احمدی</option>
                            <option value="2">2- علیرضا حسین نیا</option>
                            <option value="3">3- حسن عطاری</option>
                            <option value="4">4- محمد واحدیان</option>
                            <option value="5">5- شاهین صدری</option>
                            <option value="6">6- مهرداد پورعظیمی</option>
                            <option value="7">7- سوده ضیعمی</option>
                            <option value="8">8- رامبد رستگاری</option>
                            <option value="9">9- امیر امیرپور</option>
                            <option value="10">10- فاطمه موسوی</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label class="font-medium-5" for="seconder">تایید کننده</label>
                        <select                     
                        id="seconder"
                        class="select-size-sm form-control input-lg"
                        aria-label=".form-select-sm example"
                        required
                        >
                            <option value="">انتخاب کنید</option>
                            <option value="1">1- علی احمدی</option>
                            <option value="2">2- علیرضا حسین نیا</option>
                            <option value="3">3- حسن عطاری</option>
                            <option value="4">4- محمد واحدیان</option>
                            <option value="5">5- شاهین صدری</option>
                            <option value="6">6- مهرداد پورعظیمی</option>
                            <option value="7">7- سوده ضیعمی</option>
                            <option value="8">8- رامبد رستگاری</option>
                            <option value="9">9- امیر امیرپور</option>
                            <option value="10">10- فاطمه موسوی</option>
                        </select>
                    </div>
                    <div class="mb-3 col-md-6">
                        <label
                        class="font-medium-5" 
                        for="formWriterID1"
                        >شناسه شما
                        </label>
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="formWriterID1" 
                        placeholder="کد شناسه خود را وارد کنید"
                        required
                        >
                    </div>
                </div>
                <button class="btn btn-primary" type="submit">فرم ارسال</button>
            </form>
    </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>