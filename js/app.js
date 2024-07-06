

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const homeFilters =  $$('.js-home-filter__label');
const paginations = $$('.js-pagination__item');
const categorys = $$('.categoty-item ');
const listSpApi = 'http://localhost:3000/posts';

const app = {
        listSps: [
            {
                image: 'img/img-sp/sp-1.jpg',
                name: 'Áo Hoodie Thời Trang Thu Đông Size S-3XL 7 Màu Tùy Chọn Cho Nam Và Nữ Thích Hợp Cho Các Cặp Đôi',
                priceOld: '200.000đ',
                priceNew: '150.000đ',
                itemSoid: '100 Đã bán',
                originBrand: 'Hàn Quốc',
                originName: 'Nước ngoài',
                favourite: 'Yêu thích',
                percent: '10%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-2.jpg',
                name: 'Guốc cao gót mặt đá gót đồng mã M35',
                priceOld: '290.000đ',
                priceNew: '139.000đ',
                itemSoid: '1,3k Đã bán',
                originBrand: 'Thái Bình',
                originName: 'Trong nước',
                favourite: 'Yêu thích',
                percent: '40%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-2.jpg',
                name: 'Guốc cao gót mặt đá gót đồng mã M35',
                priceOld: '290.000đ',
                priceNew: '139.000đ',
                itemSoid: '1,3k Đã bán',
                originBrand: 'Thái Bình',
                originName: 'Trong nước',
                favourite: 'Yêu thích',
                percent: '40%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-2.jpg',
                name: 'Guốc cao gót mặt đá gót đồng mã M35',
                priceOld: '290.000đ',
                priceNew: '139.000đ',
                itemSoid: '1,3k Đã bán',
                originBrand: 'Thái Bình',
                originName: 'Trong nước',
                favourite: 'Yêu thích',
                percent: '40%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-2.jpg',
                name: 'Guốc cao gót mặt đá gót đồng mã M35',
                priceOld: '290.000đ',
                priceNew: '139.000đ',
                itemSoid: '1,3k Đã bán',
                originBrand: 'Thái Bình',
                originName: 'Trong nước',
                favourite: 'Yêu thích',
                percent: '40%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-2.jpg',
                name: 'Guốc cao gót mặt đá gót đồng mã M35',
                priceOld: '290.000đ',
                priceNew: '139.000đ',
                itemSoid: '1,3k Đã bán',
                originBrand: 'Thái Bình',
                originName: 'Trong nước',
                favourite: 'Yêu thích',
                percent: '40%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-2.jpg',
                name: 'Guốc cao gót mặt đá gót đồng mã M35',
                priceOld: '290.000đ',
                priceNew: '139.000đ',
                itemSoid: '1,3k Đã bán',
                originBrand: 'Thái Bình',
                originName: 'Trong nước',
                favourite: 'Yêu thích',
                percent: '40%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-2.jpg',
                name: 'Guốc cao gót mặt đá gót đồng mã M35',
                priceOld: '290.000đ',
                priceNew: '139.000đ',
                itemSoid: '1,3k Đã bán',
                originBrand: 'Thái Bình',
                originName: 'Trong nước',
                favourite: 'Yêu thích',
                percent: '40%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-1.jpg',
                name: 'Áo Hoodie Thời Trang Thu Đông Size S-3XL 7 Màu Tùy Chọn Cho Nam Và Nữ Thích Hợp Cho Các Cặp Đôi',
                priceOld: '200.000đ',
                priceNew: '150.000đ',
                itemSoid: '100 Đã bán',
                originBrand: 'Hàn Quốc',
                originName: 'Nước ngoài',
                favourite: 'Yêu thích',
                percent: '10%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-1.jpg',
                name: 'Áo Hoodie Thời Trang Thu Đông Size S-3XL 7 Màu Tùy Chọn Cho Nam Và Nữ Thích Hợp Cho Các Cặp Đôi',
                priceOld: '200.000đ',
                priceNew: '150.000đ',
                itemSoid: '100 Đã bán',
                originBrand: 'Hàn Quốc',
                originName: 'Nước ngoài',
                favourite: 'Yêu thích',
                percent: '10%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-1.jpg',
                name: 'Áo Hoodie Thời Trang Thu Đông Size S-3XL 7 Màu Tùy Chọn Cho Nam Và Nữ Thích Hợp Cho Các Cặp Đôi',
                priceOld: '200.000đ',
                priceNew: '150.000đ',
                itemSoid: '100 Đã bán',
                originBrand: 'Hàn Quốc',
                originName: 'Nước ngoài',
                favourite: 'Yêu thích',
                percent: '10%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-1.jpg',
                name: 'Áo Hoodie Thời Trang Thu Đông Size S-3XL 7 Màu Tùy Chọn Cho Nam Và Nữ Thích Hợp Cho Các Cặp Đôi',
                priceOld: '200.000đ',
                priceNew: '150.000đ',
                itemSoid: '100 Đã bán',
                originBrand: 'Hàn Quốc',
                originName: 'Nước ngoài',
                favourite: 'Yêu thích',
                percent: '10%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-1.jpg',
                name: 'Áo Hoodie Thời Trang Thu Đông Size S-3XL 7 Màu Tùy Chọn Cho Nam Và Nữ Thích Hợp Cho Các Cặp Đôi',
                priceOld: '200.000đ',
                priceNew: '150.000đ',
                itemSoid: '100 Đã bán',
                originBrand: 'Hàn Quốc',
                originName: 'Nước ngoài',
                favourite: 'Yêu thích',
                percent: '10%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-1.jpg',
                name: 'Áo Hoodie Thời Trang Thu Đông Size S-3XL 7 Màu Tùy Chọn Cho Nam Và Nữ Thích Hợp Cho Các Cặp Đôi',
                priceOld: '200.000đ',
                priceNew: '150.000đ',
                itemSoid: '100 Đã bán',
                originBrand: 'Hàn Quốc',
                originName: 'Nước ngoài',
                favourite: 'Yêu thích',
                percent: '10%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-1.jpg',
                name: 'Áo Hoodie Thời Trang Thu Đông Size S-3XL 7 Màu Tùy Chọn Cho Nam Và Nữ Thích Hợp Cho Các Cặp Đôi',
                priceOld: '200.000đ',
                priceNew: '150.000đ',
                itemSoid: '100 Đã bán',
                originBrand: 'Hàn Quốc',
                originName: 'Nước ngoài',
                favourite: 'Yêu thích',
                percent: '10%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-1.jpg',
                name: 'Áo Hoodie Thời Trang Thu Đông Size S-3XL 7 Màu Tùy Chọn Cho Nam Và Nữ Thích Hợp Cho Các Cặp Đôi',
                priceOld: '200.000đ',
                priceNew: '150.000đ',
                itemSoid: '100 Đã bán',
                originBrand: 'Hàn Quốc',
                originName: 'Nước ngoài',
                favourite: 'Yêu thích',
                percent: '10%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-1.jpg',
                name: 'Áo Hoodie Thời Trang Thu Đông Size S-3XL 7 Màu Tùy Chọn Cho Nam Và Nữ Thích Hợp Cho Các Cặp Đôi',
                priceOld: '200.000đ',
                priceNew: '150.000đ',
                itemSoid: '100 Đã bán',
                originBrand: 'Hàn Quốc',
                originName: 'Nước ngoài',
                favourite: 'Yêu thích',
                percent: '10%',
                lable: 'GIẢM'
            },

            {
                image: 'img/img-sp/sp-1.jpg',
                name: 'Áo Hoodie Thời Trang Thu Đông Size S-3XL 7 Màu Tùy Chọn Cho Nam Và Nữ Thích Hợp Cho Các Cặp Đôi',
                priceOld: '200.000đ',
                priceNew: '150.000đ',
                itemSoid: '100 Đã bán',
                originBrand: 'Hàn Quốc',
                originName: 'Nước ngoài',
                favourite: 'Yêu thích',
                percent: '10%',
                lable: 'GIẢM'
            }
        ],


        // getList: function(callback){
        //     fetch(listSpApi)
        //         .then(jsons => {
        //             return jsons.json()
        //         })

        //         .then(callback)
        // },



        render: function(){
            var htmms = this.listSps.map(function(listSp){
                return `<div class="col l-2 ">
                            <a href="">
                                <div class="home-ptoduct-item">
                                    <div class="home-ptoduct-item__img" style="background-image: url(${listSp.image});"></div> 
                                    <h5 class="home-ptoduct-item__name">${listSp.name}</h5>
                                    <div class="home-ptoduct-item__price">
                                        <span class="home-ptoduct-item__price-old">${listSp.priceOld}</span>
                                        <span class="home-ptoduct-item__price-new">${listSp.priceNew}</span>
                                    </div>
                                    <div class="home-ptoduct-item__icon">
                                        <!-- home-ptoduct-item__icon-like--liked thay doi do -->
                                        <span class="home-ptoduct-item__icon-like ">
                                            <i class="home-ptoduct-item__icon-like-icon-no far fa-heart"></i>
                                            <i class="home-ptoduct-item__icon-like-icon-yes fas fa-heart"></i> 
                                        </span>
                                        <div class="home-ptoduct-item__star">
                                            <i class="home-ptoduct-item__star--gold fas fa-star"></i>
                                            <i class="home-ptoduct-item__star--gold fas fa-star"></i>
                                            <i class="home-ptoduct-item__star--gold fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>

                                            <span class="home-ptoduct-item-soid">${listSp.itemSoid}</span>
                                        </div>
                                    </div>
                                    <div class="home-ptoduct-item__origin">
                                        <span class="home-ptoduct-item__brand">${listSp.originBrand}</span>
                                        <span class="home-ptoduct__origin-name">${listSp.originName}</span>
                                    </div>
                                    <div class="home-ptoduct-item__like">
                                        <i class="fas fa-check"></i>
                                        <span>${listSp.favourite}</span>
                                    </div>
                                    <div class="home-ptoduct-item__sale-off">
                                        <span class="home-ptoduct-item__percent">${listSp.percent}</span>
                                        <span class="home-ptoduct-item__lable">${listSp.lable}</span>
                                    </div>

                                    <div class="product-conten-sub">
                                        <span class="product-conten-sub-text"> Tìm sản phẩm tương ứng </span>
                                        
                                    </div>
                                </div>
                            </a>
                        </div>
                        `; 
            })
            $('.js-row').innerHTML = htmms.join('');
        },

        btn: function(){
            homeFilters.forEach(function(homeFilter){
                homeFilter.onclick = function(){
                    $('.home-filter__btn.btn.btn--primary.js-home-filter__label').classList.remove('btn--primary');
                    this.classList.add('btn--primary');
                }
            })

            paginations.forEach(function(pagination){
                pagination.onclick = function(e){
                    $('.pagination__item.js-pagination__item.pagination__item-active').classList.remove('pagination__item-active');
                    this.classList.add('pagination__item-active');
                    e.preventDefault();
                }
            })

            categorys.forEach(function(category){
                category.onclick = function(){
                    $('.categoty-item.categoty-item-active').classList.remove('categoty-item-active');
                    this.classList.add('categoty-item-active');
                }
            })

        },

        start: function(){
            this.render()

            
            this.btn();
        }
}
app.start();

