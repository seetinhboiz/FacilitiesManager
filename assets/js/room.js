const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = {
    currentPage: 1,
    itemPerPage: 12,
    startItem: 0,
    endItem: 12,
    quantity: 1,
    class: [
        {
            id: 1,
            path: "./img/room.png",
            title: "P-001",
            content: `Tầng trệt, phòng 1`,
            status: "OK",
        },
        {
            id: 2,
            path: "./img/room.png",
            title: "P-002",
            content: `Tầng trệt, phòng 2`,
            status: "OK",
        },
        {
            id: 3,
            path: "./img/room.png",
            title: "P-003",
            content: `Tầng trệt, phòng 3`,
            status: "OK",
        },
        {
            id: 4,
            path: "./img/room.png",
            title: "P-004",
            content: `Tầng trệt, phòng 4`,
            status: "OK",
        },
        {
            id: 5,
            path: "./img/room.png",
            title: "P-005",
            content: `Tầng trệt, phòng 5`,
            status: "OK",
        },
        {
            id: 6,
            path: "./img/room.png",
            title: "P-006",
            content: `Tầng trệt, phòng 6`,
            status: "OK",
        },
        {
            id: 7,
            path: "./img/room.png",
            title: "P-007",
            content: `Tầng trệt, phòng 7`,
            status: "OK",
        },
        {
            id: 8,
            path: "./img/room.png",
            title: "P-008",
            content: `Tầng trệt, phòng 8`,
            status: "OK",
        },
        {
            id: 9,
            path: "./img/room.png",
            title: "P-009",
            content: `Tầng trệt, phòng 9`,
            status: "OK",
        },
        {
            id: 10,
            path: "./img/room.png",
            title: "P-010",
            content: `Tầng trệt, phòng 10`,
            status: "OK",
        },
        {
            id: 11,
            path: "./img/room.png",
            title: "P-011",
            content: `Tầng trệt, phòng 11`,
            status: "OK",
        },
        {
            id: 12,
            path: "./img/room.png",
            title: "P-012",
            content: `Tầng trệt, phòng 12`,
            status: "OK",
        },
        {
            id: 13,
            path: "./img/room.png",
            title: "P-101",
            content: `Tầng một, phòng 1`,
            status: "OK",
        },
        {
            id: 14,
            path: "./img/room.png",
            title: "P-102",
            content: `Tầng một, phòng 2`,
            status: "OK",
        },
        {
            id: 15,
            path: "./img/room.png",
            title: "P-103",
            content: `Tầng một, phòng 3`,
            status: "OK",
        },
        {
            id: 16,
            path: "./img/room.png",
            title: "P-104",
            content: `Tầng một, phòng 4`,
            status: "OK",
        },
        {
            id: 17,
            path: "./img/room.png",
            title: "P-105",
            content: `Tầng một, phòng 5`,
            status: "OK",
        },
        {
            id: 18,
            path: "./img/room.png",
            title: "P-106",
            content: `Tầng một, phòng 6`,
            status: "OK",
        },
        {
            id: 19,
            path: "./img/room.png",
            title: "P-107",
            content: `Tầng một, phòng 7`,
            status: "OK",
        },
        {
            id: 20,
            path: "./img/room.png",
            title: "P-108",
            content: `Tầng một, phòng 8`,
            status: "OK",
        },
        {
            id: 21,
            path: "./img/room.png",
            title: "P-109",
            content: `Tầng một, phòng 9`,
            status: "OK",
        },
        {
            id: 22,
            path: "./img/room.png",
            title: "P-110",
            content: `Tầng một, phòng 10`,
            status: "OK",
        },
        {
            id: 23,
            path: "./img/room.png",
            title: "P-111",
            content: `Tầng một, phòng 11`,
            status: "OK",
        },
        {
            id: 24,
            path: "./img/room.png",
            title: "P-112",
            content: `Tầng một, phòng 12`,
            status: "OK",
        },
        {
            id: 25,
            path: "./img/room.png",
            title: "P-201",
            content: `Tầng hai, phòng 1`,
            status: "OK",
        },
        {
            id: 26,
            path: "./img/room.png",
            title: "P-202",
            content: `Tầng hai, phòng 2`,
            status: "OK",
        },
        {
            id: 27,
            path: "./img/room.png",
            ttitle: "P-203",
            content: `Tầng hai, phòng 3`,
            status: "OK",
        },
        {
            id: 28,
            path: "./img/room.png",
            title: "P-204",
            content: `Tầng hai, phòng 4`,
            status: "OK",
        },
        {
            id: 29,
            path: "./img/room.png",
            title: "P-205",
            content: `Tầng hai, phòng 5`,
            status: "OK",
        },
        {
            id: 30,
            path: "./img/room.png",
            title: "P-206",
            content: `Tầng hai, phòng 6`,
            status: "OK",
        },
        {
            id: 31,
            path: "./img/room.png",
            title: "P-207",
            content: `Tầng hai, phòng 7`,
            status: "OK",
        },
        {
            id: 32,
            path: "./img/room.png",
            title: "P-208",
            content: `Tầng hai, phòng 8`,
            status: "OK",
        },
        {
            id: 33,
            path: "./img/room.png",
            title: "P-209",
            content: `Tầng hai, phòng 9`,
            status: "OK",
        },
        {
            id: 34,
            path: "./img/room.png",
            title: "P-210",
            content: `Tầng hai, phòng 10`,
            status: "OK",
        },
        {
            id: 35,
            path: "./img/room.png",
            title: "P-211",
            content: `Tầng hai, phòng 11`,
            status: "OK",
        },
        {
            id: 36,
            path: "./img/room.png",
            ttitle: "P-212",
            content: `Tầng hai, phòng 12`,
            status: "OK",
        },
        {
            id: 37,
            path: "./img/room.png",
            title: "P-301",
            content: `Tầng ba, phòng 1`,
            status: "OK",
        },
        {
            id: 38,
            path: "./img/room.png",
            title: "P-302",
            content: `Tầng ba, phòng 2`,
            status: "OK",
        },
        {
            id: 39,
            path: "./img/room.png",
            title: "P-303",
            content: `Tầng ba, phòng 3`,
            status: "OK",
        },
        {
            id: 40,
            path: "./img/room.png",
            title: "P-304",
            content: `Tầng ba, phòng 4`,
            status: "OK",
        },
        {
            id: 41,
            path: "./img/room.png",
            title: "P-305",
            content: `Tầng ba, phòng 5`,
            status: "OK",
        },
        {
            id: 42,
            path: "./img/room.png",
            title: "P-306",
            content: `Tầng ba, phòng 6`,
            status: "OK",
        },
        {
            id: 43,
            path: "./img/room.png",
            title: "P-307",
            content: `Tầng ba, phòng 7`,
            status: "OK",
        },
        {
            id: 44,
            path: "./img/room.png",
            title: "P-308",
            content: `Tầng ba, phòng 8`,
            status: "OK",
        },
        {
            id: 45,
            path: "./img/room.png",
            title: "P-309",
            content: `Tầng ba, phòng 9`,
            status: "OK",
        },
        {
            id: 46,
            path: "./img/room.png",
            title: "P-310",
            content: `Tầng ba, phòng 10`,
            status: "OK",
        },
        {
            id: 47,
            path: "./img/room.png",
            title: "P-311",
            content: `Tầng ba, phòng 11`,
            status: "OK",
        },
        {
            id: 48,
            path: "./img/room.png",
            title: "P-312",
            content: `Tầng ba, phòng 12`,
            status: "OK",
        },
        {
            id: 49,
            path: "./img/room.png",
            title: "P-401",
            content: `Tầng bốn, phòng 1`,
            status: "OK",
        },
        {
            id: 50,
            path: "./img/room.png",
            title: "P-402",
            content: `Tầng bốn, phòng 2`,
            status: "OK",
        },
        {
            id: 51,
            path: "./img/room.png",
            title: "P-403",
            content: `Tầng bốn, phòng 3`,
            status: "OK",
        },
        {
            id: 52,
            path: "./img/room.png",
            title: "P-404",
            content: `Tầng bốn, phòng 4`,
            status: "OK",
        },
        {
            id: 53,
            path: "./img/room.png",
            title: "P-405",
            content: `Tầng bốn, phòng 5`,
            status: "OK",
        },
        {
            id: 54,
            path: "./img/room.png",
            title: "P-406",
            content: `Tầng bốn, phòng 6`,
            status: "OK",
        },
        {
            id: 55,
            path: "./img/room.png",
            title: "P-407",
            content: `Tầng bốn, phòng 7`,
            status: "OK",
        },
        {
            id: 56,
            path: "./img/room.png",
            title: "P-408",
            content: `Tầng bốn, phòng 8`,
            status: "OK",
        },
        {
            id: 57,
            path: "./img/room.png",
            title: "P-409",
            content: `Tầng bốn, phòng 9`,
            status: "OK",
        },
        {
            id: 58,
            path: "./img/room.png",
            title: "P-410",
            content: `Tầng bốn, phòng 10`,
            status: "OK",
        },
        {
            id: 59,
            path: "./img/room.png",
            title: "P-411",
            content: `Tầng bốn, phòng 11`,
            status: "OK",
        },
        {
            id: 60,
            path: "./img/room.png",
            title: "P-412",
            content: `Tầng bốn, phòng 12`,
            status: "OK",
        },
        {
            id: 61,
            path: "./img/room.png",
            title: "P-501",
            content: `Tầng năm, phòng 1`,
            status: "OK",
        },
        {
            id: 62,
            path: "./img/room.png",
            title: "P-502",
            content: `Tầng năm, phòng 2`,
            status: "OK",
        },
        {
            id: 63,
            path: "./img/room.png",
            title: "P-503",
            content: `Tầng năm, phòng 3`,
            status: "OK",
        },
        {
            id: 64,
            path: "./img/room.png",
            title: "P-504",
            content: `Tầng năm, phòng 4`,
            status: "OK",
        },
        {
            id: 65,
            path: "./img/room.png",
            title: "P-505",
            content: `Tầng năm, phòng 5`,
            status: "OK",
        },
        {
            id: 66,
            path: "./img/room.png",
            title: "P-506",
            content: `Tầng năm, phòng 6`,
            status: "OK",
        },
        {
            id: 67,
            path: "./img/room.png",
            title: "P-507",
            content: `Tầng năm, phòng 7`,
            status: "OK",
        },
        {
            id: 68,
            path: "./img/room.png",
            title: "P-508",
            content: `Tầng năm, phòng 8`,
            status: "OK",
        },
        {
            id: 69,
            path: "./img/room.png",
            title: "P-509",
            content: `Tầng năm, phòng 9`,
            status: "OK",
        },
        {
            id: 70,
            path: "./img/room.png",
            title: "P-510",
            content: `Tầng năm, phòng 10`,
            status: "OK",
        }   
    ], renderClass: function(arr, component, start, end) {
        const htmls = arr.map((product, index) => {
            if (index >= start && index < end) {
                return `
                <div class="product-item col l-3 m-4 c-6" data-index="${index}">
                    <a onclick="return false" href="" class="home-product-item">
                        <div class="home-product-item__img"
                            style="background-image: url(${product.path}); background-repeat: no-repeat; background-position: center; background-size: cover;">
                        </div>
                        <h4 class="home-product-item__name">
                            ${product.title}
                        </h4>
                        <div class="home-product-item__action">
                            <span class="home-product-item__sold">
                                Tình trạng: ${product.status} 
                            </span>
                        </div>
    
                        <div class="home-product-item__origin">
                            <span class="home-product-item__brand">${product.brand}</span>
                            <span class="home-product-item__origin-name">${product.origin}</span>
                        </div>
    
                        <div style="display: ${product.favorite ? "block" : "none"}" class="home-product-item__favorite">
                            <i class="fas fa-check"></i>
                            <span>Yêu thích</span>
                        </div>
    
                        <div style="display: ${product.sale ? "block" : "none"}" class="home-product-item__sale-off">
                            <span class="home-product-item__sale-off-percent">${product.sale}%</span>
                            <span class="home-product-item__sale-off-label">GIẢM</span>
                        </div>
                    </a>
                </div>
                `
            }
        })
        component.innerHTML = htmls.join('')
        
    },
    handleEvent: function(){
        const _this = this
        const homeFilterBtns = $$('.btn.home-filter__label-btn')
        const homeProductsList = $('.home-product>.row')

        //render thông tin
        $('.home-product').onclick = function(e){
            const x = e.target.closest('.product-item')
            homeFilterBtns.forEach((homeFilterBtn, index) => {
                if(homeFilterBtn.classList.contains('btn--primary')) {
                    _this.renderShoppingCart(homeFilter[index], x.dataset.index)
                    _this.quantity = 1
                }
            })
            showInfoProduct()
        }


        const newList = this.products.filter((product) => product.new)
        const favList = this.products.filter((product) => product.favorite)
        const homeFilter = [this.products, newList, favList]
        _this.renderProducts(this.products, homeProductsList, this.startItem, this.endItem)

        //render page
        const numberPages = Math.ceil(this.products.length / this.itemPerPage)
        let htmls = `<ul>`
        for(let i = 1; i <= numberPages; i++) {
            htmls += `
                <li class="pagination-item" data-index="${i}">
                    <a>Tầng ${i}</a>
                </li>
            `
        }
        htmls += `</ul>`
        $('.pagination-list').innerHTML = htmls
    
        //active Page
        activePageBtn = function(page){
            $$('.pagination-list li').forEach(item => {
                item.classList.remove('active');
            });
            page.classList.add('active');
        }

        //active page khi load vào trang
        activePageBtn($$('.pagination-list li')[0])

        //renderlist theo phổ biến, mới, yêu thích
        function renderlist(){
            homeFilterBtns.forEach((homeFilterBtn, index) => {
                if(homeFilterBtn.classList.contains('btn--primary')) {
                    _this.renderProducts(homeFilter[index], homeProductsList, _this.startItem, _this.endItem)
                }
            })
        }

        $$('.pagination-list li').forEach((item, index) => {
            item.onclick = function(){
                _this.currentPage = index + 1;
                _this.gotoPage(_this.currentPage)
                renderlist()
                renderFilterPage()
            }
        })

        //localStorage mua từ giỏ -> true, mua ngay -> false
        setLocalStorage = function(key, value){
            objLS[key] = value
            localStorage.setItem('obj', JSON.stringify(objLS))
        }


    },
    renderNumberPage(number){
        this.startItem = (number - 1) * this.itemPerPage
        this.endItem = number * this.itemPerPage
        activePageBtn($$('.pagination-list li')[number - 1])
    },
    gotoPage: function (page) {
        this.currentPage = page
        this.renderNumberPage(this.currentPage)
    },
    nextPage: function () {
        const numberPages = Math.ceil(this.products.length / this.itemPerPage)
        this.currentPage++
        if (this.currentPage > numberPages) {
            this.currentPage = numberPages
        }
        this.renderNumberPage(this.currentPage)
    },
    prevPage: function () {
        this.currentPage--
        if (this.currentPage < 1) {
            this.currentPage = 1
        }
        this.renderNumberPage(this.currentPage)
    },
    start: function(){
        this.handleEvent()
    }
}

app.start()