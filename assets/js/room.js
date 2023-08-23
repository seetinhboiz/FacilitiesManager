const get = document.querySelector.bind(document)
const gets = document.querySelectorAll.bind(document)

const app = {
    currentPage: 1,
    itemPerPage: 12,
    startItem: 0,
    endItem: 12,
    rooms: [
        {
            id: 1,
            path: "./assets/img/room.png",
            title: "P-001",
            content: `Tầng trệt, phòng 1`,
            status: "OK",
        },
        {
            id: 2,
            path: "./assets/img/room.png",
            title: "P-002",
            content: `Tầng trệt, phòng 2`,
            status: "OK",
        },
        {
            id: 3,
            path: "./assets/img/room.png",
            title: "P-003",
            content: `Tầng trệt, phòng 3`,
            status: "OK",
        },
        {
            id: 4,
            path: "./assets/img/room.png",
            title: "P-004",
            content: `Tầng trệt, phòng 4`,
            status: "OK",
        },
        {
            id: 5,
            path: "./assets/img/room.png",
            title: "P-005",
            content: `Tầng trệt, phòng 5`,
            status: "OK",
        },
        {
            id: 6,
            path: "./assets/img/room.png",
            title: "P-006",
            content: `Tầng trệt, phòng 6`,
            status: "OK",
        },
        {
            id: 7,
            path: "./assets/img/room.png",
            title: "P-007",
            content: `Tầng trệt, phòng 7`,
            status: "OK",
        },
        {
            id: 8,
            path: "./assets/img/room.png",
            title: "P-008",
            content: `Tầng trệt, phòng 8`,
            status: "OK",
        },
        {
            id: 9,
            path: "./assets/img/room.png",
            title: "P-009",
            content: `Tầng trệt, phòng 9`,
            status: "OK",
        },
        {
            id: 10,
            path: "./assets/img/room.png",
            title: "P-010",
            content: `Tầng trệt, phòng 10`,
            status: "OK",
        },
        {
            id: 11,
            path: "./assets/img/room.png",
            title: "P-011",
            content: `Tầng trệt, phòng 11`,
            status: "OK",
        },
        {
            id: 12,
            path: "./assets/img/room.png",
            title: "P-012",
            content: `Tầng trệt, phòng 12`,
            status: "OK",
        },
        {
            id: 13,
            path: "./assets/img/room.png",
            title: "P-101",
            content: `Tầng một, phòng 1`,
            status: "OK",
        },
        {
            id: 14,
            path: "./assets/img/room.png",
            title: "P-102",
            content: `Tầng một, phòng 2`,
            status: "OK",
        },
        {
            id: 15,
            path: "./assets/img/room.png",
            title: "P-103",
            content: `Tầng một, phòng 3`,
            status: "OK",
        },
        {
            id: 16,
            path: "./assets/img/room.png",
            title: "P-104",
            content: `Tầng một, phòng 4`,
            status: "OK",
        },
        {
            id: 17,
            path: "./assets/img/room.png",
            title: "P-105",
            content: `Tầng một, phòng 5`,
            status: "OK",
        },
        {
            id: 18,
            path: "./assets/img/room.png",
            title: "P-106",
            content: `Tầng một, phòng 6`,
            status: "OK",
        },
        {
            id: 19,
            path: "./assets/img/room.png",
            title: "P-107",
            content: `Tầng một, phòng 7`,
            status: "OK",
        },
        {
            id: 20,
            path: "./assets/img/room.png",
            title: "P-108",
            content: `Tầng một, phòng 8`,
            status: "OK",
        },
        {
            id: 21,
            path: "./assets/img/room.png",
            title: "P-109",
            content: `Tầng một, phòng 9`,
            status: "OK",
        },
        {
            id: 22,
            path: "./assets/img/room.png",
            title: "P-110",
            content: `Tầng một, phòng 10`,
            status: "OK",
        },
        {
            id: 23,
            path: "./assets/img/room.png",
            title: "P-111",
            content: `Tầng một, phòng 11`,
            status: "OK",
        },
        {
            id: 24,
            path: "./assets/img/room.png",
            title: "P-112",
            content: `Tầng một, phòng 12`,
            status: "OK",
        },
        {
            id: 25,
            path: "./assets/img/room.png",
            title: "P-201",
            content: `Tầng hai, phòng 1`,
            status: "OK",
        },
        {
            id: 26,
            path: "./assets/img/room.png",
            title: "P-202",
            content: `Tầng hai, phòng 2`,
            status: "OK",
        },
        {
            id: 27,
            path: "./assets/img/room.png",
            title: "P-203",
            content: `Tầng hai, phòng 3`,
            status: "OK",
        },
        {
            id: 28,
            path: "./assets/img/room.png",
            title: "P-204",
            content: `Tầng hai, phòng 4`,
            status: "OK",
        },
        {
            id: 29,
            path: "./assets/img/room.png",
            title: "P-205",
            content: `Tầng hai, phòng 5`,
            status: "OK",
        },
        {
            id: 30,
            path: "./assets/img/room.png",
            title: "P-206",
            content: `Tầng hai, phòng 6`,
            status: "OK",
        },
        {
            id: 31,
            path: "./assets/img/room.png",
            title: "P-207",
            content: `Tầng hai, phòng 7`,
            status: "OK",
        },
        {
            id: 32,
            path: "./assets/img/room.png",
            title: "P-208",
            content: `Tầng hai, phòng 8`,
            status: "OK",
        },
        {
            id: 33,
            path: "./assets/img/room.png",
            title: "P-209",
            content: `Tầng hai, phòng 9`,
            status: "OK",
        },
        {
            id: 34,
            path: "./assets/img/room.png",
            title: "P-210",
            content: `Tầng hai, phòng 10`,
            status: "OK",
        },
        {
            id: 35,
            path: "./assets/img/room.png",
            title: "P-211",
            content: `Tầng hai, phòng 11`,
            status: "OK",
        },
        {
            id: 36,
            path: "./assets/img/room.png",
            title: "P-212",
            content: `Tầng hai, phòng 12`,
            status: "OK",
        },
        {
            id: 37,
            path: "./assets/img/room.png",
            title: "P-301",
            content: `Tầng ba, phòng 1`,
            status: "OK",
        },
        {
            id: 38,
            path: "./assets/img/room.png",
            title: "P-302",
            content: `Tầng ba, phòng 2`,
            status: "OK",
        },
        {
            id: 39,
            path: "./assets/img/room.png",
            title: "P-303",
            content: `Tầng ba, phòng 3`,
            status: "OK",
        },
        {
            id: 40,
            path: "./assets/img/room.png",
            title: "P-304",
            content: `Tầng ba, phòng 4`,
            status: "OK",
        },
        {
            id: 41,
            path: "./assets/img/room.png",
            title: "P-305",
            content: `Tầng ba, phòng 5`,
            status: "OK",
        },
        {
            id: 42,
            path: "./assets/img/room.png",
            title: "P-306",
            content: `Tầng ba, phòng 6`,
            status: "OK",
        },
        {
            id: 43,
            path: "./assets/img/room.png",
            title: "P-307",
            content: `Tầng ba, phòng 7`,
            status: "OK",
        },
        {
            id: 44,
            path: "./assets/img/room.png",
            title: "P-308",
            content: `Tầng ba, phòng 8`,
            status: "OK",
        },
        {
            id: 45,
            path: "./assets/img/room.png",
            title: "P-309",
            content: `Tầng ba, phòng 9`,
            status: "OK",
        },
        {
            id: 46,
            path: "./assets/img/room.png",
            title: "P-310",
            content: `Tầng ba, phòng 10`,
            status: "OK",
        },
        {
            id: 47,
            path: "./assets/img/room.png",
            title: "P-311",
            content: `Tầng ba, phòng 11`,
            status: "OK",
        },
        {
            id: 48,
            path: "./assets/img/room.png",
            title: "P-312",
            content: `Tầng ba, phòng 12`,
            status: "OK",
        },
        {
            id: 49,
            path: "./assets/img/room.png",
            title: "P-401",
            content: `Tầng bốn, phòng 1`,
            status: "OK",
        },
        {
            id: 50,
            path: "./assets/img/room.png",
            title: "P-402",
            content: `Tầng bốn, phòng 2`,
            status: "OK",
        },
        {
            id: 51,
            path: "./assets/img/room.png",
            title: "P-403",
            content: `Tầng bốn, phòng 3`,
            status: "OK",
        },
        {
            id: 52,
            path: "./assets/img/room.png",
            title: "P-404",
            content: `Tầng bốn, phòng 4`,
            status: "OK",
        },
        {
            id: 53,
            path: "./assets/img/room.png",
            title: "P-405",
            content: `Tầng bốn, phòng 5`,
            status: "OK",
        },
        {
            id: 54,
            path: "./assets/img/room.png",
            title: "P-406",
            content: `Tầng bốn, phòng 6`,
            status: "OK",
        },
        {
            id: 55,
            path: "./assets/img/room.png",
            title: "P-407",
            content: `Tầng bốn, phòng 7`,
            status: "OK",
        },
        {
            id: 56,
            path: "./assets/img/room.png",
            title: "P-408",
            content: `Tầng bốn, phòng 8`,
            status: "OK",
        },
        {
            id: 57,
            path: "./assets/img/room.png",
            title: "P-409",
            content: `Tầng bốn, phòng 9`,
            status: "OK",
        },
        {
            id: 58,
            path: "./assets/img/room.png",
            title: "P-410",
            content: `Tầng bốn, phòng 10`,
            status: "OK",
        },
        {
            id: 59,
            path: "./assets/img/room.png",
            title: "P-411",
            content: `Tầng bốn, phòng 11`,
            status: "OK",
        },
        {
            id: 60,
            path: "./assets/img/room.png",
            title: "P-412",
            content: `Tầng bốn, phòng 12`,
            status: "OK",
        },
        {
            id: 61,
            path: "./assets/img/room.png",
            title: "P-501",
            content: `Tầng năm, phòng 1`,
            status: "OK",
        },
        {
            id: 62,
            path: "./assets/img/room.png",
            title: "P-502",
            content: `Tầng năm, phòng 2`,
            status: "OK",
        },
        {
            id: 63,
            path: "./assets/img/room.png",
            title: "P-503",
            content: `Tầng năm, phòng 3`,
            status: "OK",
        },
        {
            id: 64,
            path: "./assets/img/room.png",
            title: "P-504",
            content: `Tầng năm, phòng 4`,
            status: "OK",
        },
        {
            id: 65,
            path: "./assets/img/room.png",
            title: "P-505",
            content: `Tầng năm, phòng 5`,
            status: "OK",
        },
        {
            id: 66,
            path: "./assets/img/room.png",
            title: "P-506",
            content: `Tầng năm, phòng 6`,
            status: "OK",
        },
        {
            id: 67,
            path: "./assets/img/room.png",
            title: "P-507",
            content: `Tầng năm, phòng 7`,
            status: "OK",
        },
        {
            id: 68,
            path: "./assets/img/room.png",
            title: "P-508",
            content: `Tầng năm, phòng 8`,
            status: "OK",
        },
        {
            id: 69,
            path: "./assets/img/room.png",
            title: "P-509",
            content: `Tầng năm, phòng 9`,
            status: "OK",
        },
        {
            id: 70,
            path: "./assets/img/room.png",
            title: "P-510",
            content: `Tầng năm, phòng 10`,
            status: "OK",
        },
    ],
    renderRooms: (arr, component, start, end) => {
        const htmls = arr.map((product, index) => {
            if (index >= start && index < end) {
                return `
                <div class="room-item col l-3 m-4 c-6" data-index="">
                    <a onclick="return false" href="" class="room-item">
                        <div class="room-item__img"
                            style="background-image: url(${product.path}); background-repeat: no-repeat; background-position: center; background-size: cover;">
                        </div>
                        <h2 class="room-item__name">
                            ${product.title}
                        </h2>

                        <div class="room-item__info">
                            <h5>${product.content}</h5>
                            <div class="room-item__status">
                            <span>${product.status}</span>
                            <i class="${product.status == "OK" ? "room-item__status-ok" : "room-item__status-error"} fas fa-circle"></i>
                            </div>
                        </div>
                    </a>
                </div>
                `
            }
        })
        component.innerHTML = htmls.join('')

    },
    handleEvent: function () {
        const _this = this
        const homeroomsList = get('.room>.row')


        get('.room').onclick = function (e) {
            const x = e.target.closest('.room-item')
        }

        _this.renderRooms(this.rooms, homeroomsList, this.startItem, this.endItem)

        const numberPages = Math.ceil(this.rooms.length / this.itemPerPage)
        let htmls = `<ul class="mobile">`
        for (let i = 1; i <= numberPages; i++) {
            if (i == 1) {
                htmls += `
            <li class="pagination-item" data-index="${i}">
                <a>Tầng trệt</a>
            </li>`
            } else {
                htmls += `
                <li class="pagination-item" data-index="${i}">
                    <a>Tầng ${i - 1}</a>
                </li>
            `
            }
        }
        htmls += `</ul>`
        get('.pagination-list').innerHTML = htmls

        //active Page
        activePageBtn = (page) => {
            gets('.pagination-list li').forEach(item => {
                item.classList.remove('active');
            });
            page.classList.add('active');
        }

        activePageBtn(gets('.pagination-list li')[0])

        gets('.pagination-list li').forEach((item, index) => {
            item.onclick = function () {
                _this.currentPage = index + 1;
                _this.gotoPage(_this.currentPage)
                _this.renderRooms(_this.rooms, homeroomsList, _this.startItem, _this.endItem)
            }
        })

    },
    renderNumberPage(number) {
        this.startItem = (number - 1) * this.itemPerPage
        this.endItem = number * this.itemPerPage
        activePageBtn(gets('.pagination-list li')[number - 1])
    },
    gotoPage: function (page) {
        this.currentPage = page
        this.renderNumberPage(this.currentPage)
    },
    start: function () {
        this.handleEvent()
    }
}

app.start()