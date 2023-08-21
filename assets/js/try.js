const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


//đảo ngược chuỗi (cắt sang mảng -> đảo ngược mảng -> nối lại thành chuỗi)
function reverseString(string){
    return string.split("").reverse().join("")
}
//chuyển số sang dạng chuỗi tiền tệ (xxx.xxx.xxxđ)
function numberToCoin(number){
    const string = number.toString();
    let x = "";
    for (let i = 0; i < string.length; i+=3) {
        if (i < string.length - 3) {
            x += reverseString(string.slice(string.length - (i + 3), string.length - i)) + "."
        } else {
            x += reverseString(string.slice(0, string.length - i))
            return reverseString(x);
        }
    }
}


const app = {
    currentPage: 1,
    itemPerPage: 12,
    startItem: 0,
    endItem: 12,
    quantity: 1,
    countCart: 0,
    isLogin: false,
    idUser: null,
    products: [
        {
            id: 1,
            path: "./assets/img/dog-shop/corgi-thuan-chung.jpg",
            title: "Corgi thuần chủng",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18g theo đúng quy định chỉ thị 16+. Tìm bố mẹ cho các bé chó Corgi nhà đẻ hơn 2 tháng, ăn cơm, ăn hạt rất khoẻ. Đã chich ngừa đầy đủ và sổ giun! Các bé ngoan và rất thông minh! Mông to, chân lùn! Giá 7,5 triệu/bé. Khách muốn ship tận nhà, gửi hình zalo mình ship đến!`,
            price: 7500000,
            sale: 0,
            favorite: 0,
            sold: 225,
            star: 5,
            brand: "Bảo Ngọc",
            origin: "Việt Nam",
            new: 0,
            phone: "0122 234 234",
        },
        {
            id: 2,
            path: "./assets/img/dog-shop/poodle-nau-do.jpg",
            title: "Poodle Nâu Đỏ con 66 ngày tuổi",
            content: `Đàn 4 bé cái và đực màu nâu đỏ. Chó nhà nuôi đẻ, đã chích ngừa có sổ sức khoẻ đầy đủ. Giá từ 3,7 triệu… Khách muốn ship tận nhà, gửi hình zalo mình ship đến!`,
            price: 3700000,
            sale: 0,
            favorite: true,
            sold: 157,
            star: 4,
            brand: "Nguyễn Ánh",
            origin: "Việt Nam",
            new: 0,
            phone: "0122 234 235",
        },
        {
            id: 3,
            path: "./assets/img/dog-shop/corgi-tricolor.jpg",
            title: "Chó Corgi Tricolor siêu đẹp giá sinh viên",
            content: `Nhà có đàn corgi nhà đẻ tricolor phong thuỷ tuyệt đẹp, màu đẹp của dòng Corgi. Chó nhà đẻ, đực cái có đủ. Cứng cáp khoẻ mạnh, lanh lợi. Giá từ 5tr5. Có nhận ship tận nhà!!`,
            price: 5500000,
            sale: 0,
            favorite: 0,
            sold: 179,
            star: 4,
            brand: "Nguyễn An",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 4,
            path: "./assets/img/dog-shop/samoyed-size-bu.jpg",
            title: "Chó Samoyed size bự, nhà đẻ",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18g theo đúng quy định chỉ thị 16+. Rã bầy chó Samoyed thuần chủng nhà đẻ. 2 đực 2 cái. Size bự, mặt gấu, cực đẹp! Giá từ 6 triệu… Chó nhà đẻ, khoẻ mạnh, bao thuần chủng trọn đời! Xem chó tại nhà! Xin cảm ơn!`,
            price: 6000000,
            sale: 0,
            favorite: 0,
            sold: 206,
            star: 5,
            brand: "An Lê",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 5,
            path: "./assets/img/dog-shop/banh-chuong-mini.jpg",
            title: "Đồ chơi banh chuông mini cho chó mèo",
            content: `Sản phẩm sở hữu độ an toàn cao, có màu sắc bắt mắt cùng trọng lượng nhẹ sẽ giúp cho thú cưng dễ dàng di chuyển. Với thiết kế quả cầu tròn có lục lạc phía trong, khi thú cưng của bạn chạm vào thì sẽ phát ra âm thanh nghe rất vui tai. 👉 Được làm bằng chất liệu nhựa cao cấp, sẽ là món quà ý nghĩa của bạn dành cho thú cưng của mình. 👉 Bạn cũng có thể dùng sản phẩm chơi cùng với thú cưng của mình để xả stress, hay huấn luyện cho thú cưng tập bắt/tha bóng về. Đường kính 4cm`,
            price: 15000,
            sale: 0,
            favorite: true,
            sold: 125,
            star: 4,
            brand: "Arela Pet Shop",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 6,
            path: "./assets/img/dog-shop/banh-gai.jpg",
            title: "Đồ chơi banh gai cho chó mèo",
            content: `Bóng  gai là phụ kiện cần thiết cho các chủ nhân khi đang sở hữu những chú chó, chú mèo. Nó không chỉ là đồ chơi cho thú cưng nhà bạn. Bên cạnh đó nó còn là phụ kiện hữu ích để huấn luyện thú cưng được thông minh và nhanh nhẹn qua những lần chúng tiếp xúc với quả bóng và bắt kịp những quả bóng. Với món đồ chơi bóng gặm gai sạch răng cho thú cưng chắc hẳn bạn sẽ không còn lo lắng thú cưng bị buồn chán, hay sau khi chúng ăn xong bạn cũng không phải lo lắng không thể vệ sinh sạch răng cho chúng rồi nhé. Món đồ chơi này sẽ giúp bạn làm việc này. Đây là đồ chơi thực sự cần thiết cho thú cưng của bạn nếu như bạn thực sự quan tâm đến chúng`,
            price: 25000,
            sale: 0,
            favorite: true,
            sold: 189,
            star: 4,
            brand: "Arela Pet Shop",
            origin: "Việt Nam",
            new: false,
            phone: "0122 234 234",
        },
        {
            id: 7,
            path: "./assets/img/dog-shop/husky-thuan.jpg",
            title: "Chó Husky thuần",
            content: `Chó husky mặt ngáo đáng yêu! Chó husky 2 tháng tuổi , có 2 màu hồng phấn và xám trắng siêu đẹp . Các bé rất ngoan và quấn chủ,biết nghe lời. Đã tiêm ngừa đầy đủ. Shop có 2 chi nhánh SG và Cần Thơ và Bình Dương nhé`,
            price: 6000000,
            sale: 0,
            favorite: true,
            sold: 156,
            star: 5,
            brand: "Lê Đông Bình",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 8,
            path: "./assets/img/dog-shop/husky-lai.jpg",
            title: "Chó Husky lai",
            content: `Do dịch bệnh cần tìm chủ mới chó husky lai`,
            price: 3500000,
            sale: 0,
            favorite: false,
            sold: 198,
            star: 4,
            brand: "Nguyễn Văn Tưởng",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 9,
            path: "./assets/img/dog-shop/pate-hug.jpg",
            title: "Pate Hug cho chó",
            content: `Pate Hug cho chó lon 400gram. Thức ăn cho chó hoàn chỉnh dinh dưỡng. Phù hợp tất cả các giống chó và mọi giai đoạn phát triển`,
            price: 450000,
            sale: 15,
            favorite: true,
            sold: 151,
            star: 4,
            brand: "Arele Pet",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 10,
            path: "./assets/img/dog-shop/khay-vs-cho.png",
            title: "Khay vệ sinh cho chó",
            content: `Dễ dàng sử dụng, dễ dàng vệ sinh. Màu sắc khay đa dạng, bền và chịu lực tốt. Hướng dẫn cún đi vệ sinh vào khay để chúng hình thành thói quen tốt`,
            price: 520000,
            sale: 25,
            favorite: true,
            sold: 115,
            star: 5,
            brand: "Shop Pet",
            origin: "Việt Nam",
            new: false,
            phone: "0122 234 234",
        },
        {
            id: 11,
            path: "./assets/img/dog-shop/alaska-cai-1-tuoi.jpg",
            title: "Chó Alaska Cái 1 tuổi",
            content: `Cần ra đi em chó nhà nuôi bao dễ !! Giống cái chưa sinh sản. Không bệnh - Dễ ăn - Lông đã tỉa. Giá gốc rồi ạ! Xin đừng trả giá nếu thật sự muốn mua!`,
            price: 6000000,
            sale: 0,
            favorite: true,
            sold: 181,
            star: 5,
            brand: "Cún Cưng",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 12,
            path: "./assets/img/dog-shop/chuong-cho-inox.jpg",
            title: "Chuồng chó Inox",
            content: `Chuyên sản xuất chuồng chó inox tốt hàng dày bảo hành 5 năm có nhiều kích thước. Chuồng di chuyển chó mới đẻ`,
            price: 530000,
            sale: 50,
            favorite: true,
            sold: 121,
            star: 5,
            brand: "Thuận Phát",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 13,
            path: "./assets/img/dog-shop/cho-phoc-soc-duc.jpg",
            title: "Chó phốc sóc đực 72 ngày",
            content: `Đàn 3 bé phốc sóc đực thuần chủng, chó nhà sinh sản. Có hình chó cha, chó mẹ đăng kèm (2 hình cuối cùng). Các bé đã chích ngừa, có sổ sức khoẻ đầy đủ. Giá từ 5,7 triệu… Khách muốn ship tận nhà, gửi hình zalo mình ship đến! Cám ơn khách đã xem tin!`,
            price: 5700000,
            sale: 0,
            favorite: true,
            sold: 101,
            star: 4,
            brand: "Nguyễn Ánh",
            origin: "Việt Nam",
            new: false,
            phone: "0122 234 234",
        },
        {
            id: 14,
            path: "./assets/img/dog-shop/cho-tini-poodle.jpg",
            title: "Chó tini Poodle trắng",
            content: `Cần rã bầy Tiny Poodle trắng nhà đẻ. Đã tiêm phòng có sổ. Cứng cáp, khoẻ mạnh. Chỉ có đực. Xem chó tại nhà và giao chó tận nơi!`,
            price: 3900000,
            sale: 0,
            favorite: false,
            sold: 272,
            star: 5,
            brand: "Nguyễn Ánh",
            origin: "Việt Nam",
            new: false,
            phone: "0122 234 234",
        },
        {
            id: 15,
            path: "./assets/img/dog-shop/sua-tam-yu.jpg",
            title: "Sữa tắm Yú cho chó",
            content: `Cần rã bầy Tiny Poodle trắng nhà đẻ. Đã tiêm phòng có sổ. Cứng cáp, khoẻ mạnh. Chỉ có đực. Xem chó tại nhà và giao chó tận nơi!`,
            price: 520000,
            sale: 15,
            favorite: true,
            sold: 275,
            star: 5,
            brand: "Shop Pet",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 16,
            path: "./assets/img/dog-shop/pug.jpg",
            title: "Pug thuần chủng",
            content: `Mình có bầy pug nay được 55 ngày tuổi, ăn uống khỏe mạnh. Mình đang cho bé ăn hạt royal ngâm, sổ giun đầy đủ, tiêm ngừa, mình có bảo hành sức khoe`,
            price: 3000000,
            sale: 0,
            favorite: true,
            sold: 127,
            star: 5,
            brand: "Shop Pet",
            origin: "Việt Nam",
            new: false,
            phone: "0122 234 234",
        },
        {
            id: 17,
            path: "./assets/img/dog-shop/poodle-cai.jpg",
            title: "Poodle cái trắng 3 tháng",
            content: `Giống poodle cái 3 tháng tuổi màu trắng, tiêm ngừa có sổ kèm theo`,
            price: 3200000,
            sale: 0,
            favorite: true,
            sold: 298,
            star: 5,
            brand: "Poodle Pet",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 18,
            path: "./assets/img/dog-shop/long-banh-xe.jpg",
            title: "Lồng bánh xe di động cao cấp cho chó mèo HSFT-95",
            content: `Lồng được làm bằng sắt cao cấp, độ bền cao, chịu lực tốt, không bị gỉ sét, và đặc biệt là có 4 bánh xe ở phía dưới nên có thể di chuyển lồng đến bất cứ nơi đâu bạn muốn mà không phải khiêng cả lồng lên để bảo vệ sàn nhà yêu quý của bạn. Lồng có kèm khay vệ sinh bên dưới giúp dễ dàng kéo ra vệ sinh ạ.`,
            price: 1750000,
            sale: 75,
            favorite: true,
            sold: 191,
            star: 5,
            brand: "Pet VN",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 19,
            path: "./assets/img/dog-shop/pull-phap.jpg",
            title: "Chó Pull Pháp",
            content: `Chó bull pháp bò sữa ( thuần chủng ). Hiện 15 tháng ( ăn uống rất dễ bánh mì không cũng ăn nha. Chó bi cà đầy đủ về phối giống tốt. Ace thích qua xem trực tiếp bé rất ngoan. Chó ngoài đẹp hơn trong hình`,
            price: 4000000,
            sale: 0,
            favorite: true,
            sold: 114,
            star: 5,
            brand: "Pull Shop",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 20,
            path: "./assets/img/dog-shop/samoyed-nhat.jpg",
            title: "Samoyed Nhật 2 tháng",
            content: `Tìm chủ mới cho các bé xù ú nu. Hiện tại các bé đã tiêm tẩy giun đường ruột, 2 tháng tuổi, ăn cơm mạnh. bạn nào quan tâm vui lòng call trước khi qua xem bé tại nhà m.`,
            price: 1200000,
            sale: 0,
            favorite: true,
            sold: 164,
            star: 3,
            brand: "Nguyễn An",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 21,
            path: "./assets/img/dog-shop/fox-soc.jpg",
            title: "Chó Fox Sóc nhà nuôi",
            content: `Cún nhà foc sóc bk nhà mình nuôi đẻ 1 bầy , 4 bé đực, 4 bé cái. Đăng tin tìm chủ mới cho các bé cún chân lùn mini, 2 tháng tuổi, các bé ăn cơm mạnh. Bạn nào quan tâm vui lòng điện thoại ghé xem tại nhà m.`,
            price: 1500000,
            sale: 0,
            favorite: true,
            sold: 190,
            star: 4,
            brand: "Fox Shop",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 22,
            path: "./assets/img/dog-shop/pom.jpg",
            title: "Pom F1 500gram 2 tháng",
            content: `cần tìm chủ mới yêu thương cho các bé cún fox f1 mini, đực cái đều có. các bé được 2 tháng tuổi. cực lanh lợi. ăn cơm mạnh. đã tiêm đường ruột và tây giun đầy đủ. Các b add zalo để trao đổi thông tin các bé nếu ở xa. Ban nào quan tam vui lòng Call trước khi qua xem cún tại nhà m.`,
            price: 1700000,
            sale: 0,
            favorite: true,
            sold: 120,
            star: 3,
            brand: "Pom Shop",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 23,
            path: "./assets/img/dog-shop/long-van-chuyen.jpg",
            title: "Lồng vận chuyển chó mèo",
            content: `Lồng vận chuyển hàng không nhỏ cho chó mèo, chất liệu tốt, không kích ứng da lông, bền, đẹp. Chất liệu nhựa, có tay cầm dễ di chuyển khắp mọi nơi, có lưới thoáng khí.`,
            price: 600000,
            sale: 20,
            favorite: true,
            sold: 290,
            star: 5,
            brand: "Arele Shop",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 24,
            path: "./assets/img/dog-shop/long-banh-xee.png",
            title: "Lồng bánh xe di động cao cấp",
            content: `Lồng bánh xe di động cao cấp!`,
            price: 1450000,
            sale: 15,
            favorite: true,
            sold: 152,
            star: 4,
            brand: "Arele Shop",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 25,
            path: "./assets/img/dog-shop/rottweiler.jpg",
            title: "Chó Rottweiler thông minh",
            content: `Cần tìm nhà mới cho các bé Rottweiler`,
            price: 12500000,
            sale: 0,
            favorite: true,
            sold: 62,
            star: 5,
            brand: "Pet Shop",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 26,
            path: "./assets/img/dog-shop/cho-bac-kinh.jpg",
            title: "Chó Bắc Kinh Nhật mini",
            content: `Tìm chủ mới yêu thương cho các bé cún mini mập lùn, ú nu. Các bé hiện được 2 tháng tuổi, ăn cơm mạnh, đã tiêm 1 mũi tẩy giun, chó nhà nuôi nên ăn mạnh, liên hệ sdt trước khi qua xem trực tiếp giúp m nhé.`,
            price: 1500000,
            sale: 0,
            favorite: true,
            sold: 129,
            star: 4,
            brand: "Shop Bắc Kinh",
            origin: "Việt Nam",
            new: false,
            phone: "0122 234 234",
        },
        {
            id: 27,
            path: "./assets/img/dog-shop/cho-con.jpg",
            title: "Chó con lai Nhật",
            content: `Bé giống được, sinh ngày 11/6, chưa chích ngừa, chưa sổ lãi, bạn nào muốn bé về với gia đình mình thì qua nhà mình lấy hoặc book ship qua lấy nha, hỗ trợ mình 500k tiền sữa, cảm ơn!`,
            price: 500000,
            sale: 0,
            favorite: true,
            sold: 241,
            star: 5,
            brand: "Uyên My",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 28,
            path: "./assets/img/dog-shop/tini-poodle.jpg",
            title: "Tini Poodle 2.5 tháng",
            content: `cần tìm chủ mới yêu thuơng cho bày cún nhỏ, đực cái, đầy đủ. Cún nhà m nuôi đẻ, bảo đảm sức khỏe. đã tiêm 1 mũi vaccine, sổ sức khỏe đây đủ.`,
            price: 3600000,
            sale: 0,
            favorite: 0,
            sold: 169,
            star: 5,
            brand: "Lê Anh",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 29,
            path: "./assets/img/dog-shop/phu-quoc.jpg",
            title: "Chó Phú Quốc F1",
            content: `Cha f1 phú quốc. Mẹ lai phú quốc. 2 cái 2 đực đã ăn đc tốt. Tất cả có xoáy....nhanh nhẹn, quấn chủ. Tìm chủ mới...`,
            price: 2300000,
            sale: 0,
            favorite: true,
            sold: 176,
            star: 5,
            brand: "Văn Quang",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 30,
            path: "./assets/img/dog-shop/chuong-inox.jpg",
            title: "Chuồng Inox",
            content: `Bảo hành sản phẩm 10 năm cho khách yên tâm sử dụng, giao hàng toàn quốc. Kb Zalo để xem nhiều clip chuồng và đc tư vấn kĩ hơn về mẫu mã.`,
            price: 700000,
            sale: 35,
            favorite: 0,
            sold: 129,
            star: 5,
            brand: "Hải Trúc",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 31,
            path: "./assets/img/dog-shop/vong-co.jpg",
            title: "Vòng cổ cà vạt thú cưng",
            content: `Vòng cổ cà vạt cho thú cưng`,
            price: 50000,
            sale: 25,
            favorite: false,
            sold: 156,
            star: 5,
            brand: "Shoppp",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 32,
            path: "./assets/img/dog-shop/poodle-trang.jpg",
            title: "Poodle trắng",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18g theo đúng quy định chỉ thị 16+. Rã đàn chó Tiny Poodle thuần chủng 2,5 tháng!`,
            price: 3900000,
            sale: 0,
            favorite: true,
            sold: 145,
            star: 5,
            brand: "Thanh An",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 33,
            path: "./assets/img/dog-shop/cho-bac-ha.jpg",
            title: "Chó Bắc Hà",
            content: `Mình sắp chuyển nhà cần tìm nhà mới cho chó Bắc hà đực trưởng thành 1 năm tuổi. Rất dũng mãnh và sung. Chó thông minh, trung thành và bảo vệ chủ.`,
            price: 4500000,
            sale: 0,
            favorite: true,
            sold: 126,
            star: 4,
            brand: "Shop Bắc Hà",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 34,
            path: "./assets/img/dog-shop/bully.jpg",
            title: "Chó Bully",
            content: `Bé ở khu vực Hồ Chí Minh. Giá yêu thương cho ba mẹ mới`,
            price: 7500000,
            sale: 0,
            favorite: true,
            sold: 212,
            star: 5,
            brand: "Shop TPHCM",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 35,
            path: "./assets/img/dog-shop/corgi-thuan.jpg",
            title: "Chó Corgi thuần",
            content: `Các bé ở khu vực Hồ Chí Minh. Giá cả yêu thương cho các sen`,
            price: 5000000,
            sale: 0,
            favorite: true,
            sold: 124,
            star: 5,
            brand: "Shop TPHCM",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 36,
            path: "./assets/img/dog-shop/poddle-den.jpg",
            title: "Poodle Đen",
            content: `Bé chó nhà em cần tìm nhà mới`,
            price: 4000000,
            sale: 0,
            favorite: true,
            sold: 181,
            star: 5,
            brand: "Shop Poodle",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 37,
            path: "./assets/img/dog-shop/corgi-soc.jpg",
            title: "Corgi phối sóc",
            content: `Mẹ corgy phối cha phóc sóc trắng cực đẹp và khôn ngoan, được 1,5 tháng tuổi rồi! Anh chị nào thích thì hãy nhanh tay liên hệ với Mình để chọn 1 bé (chỉ ra đi 1trong 2). 2 bé cực kỳ thông minh dễ mến giống như mẹ, biết hôn, biết lạy...`,
            price: 3000000,
            sale: 0,
            favorite: true,
            sold: 145,
            star: 4,
            brand: "An Lê",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 38,
            path: "./assets/img/dog-shop/phoc-soc.jpg",
            title: "Chó Phốc Sóc 2 tháng",
            content: `Chó mẹ nhà sinh 3 em Chó Phốc Sóc cần rã bầy
                    - 2 cái 1 đực
                    - Dưới 1kg
                    - Chó nhà sinh được 2 tháng tuổi.
                    - Đã sổ giun, chích ngừa 5 bệnh.`,
            price: 3400000,
            sale: 0,
            favorite: true,
            sold: 124,
            star: 5,
            brand: "Dương Tiễn",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 39,
            path: "./assets/img/dog-shop/phoc.jpg",
            title: "Phốc Sóc",
            content: `Phóc sóc , đực , tiêm ngừa đủ , 3 tháng , thuần chủng.`,
            price: 5200000,
            sale: 0,
            favorite: true,
            sold: 118,
            star: 4,
            brand: "Shop pet",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 40,
            path: "./assets/img/dog-shop/corgi-pembroke.jpg",
            title: "Chó Corgi Pembroke vàng trắng",
            content: `Giống chó xinh xắn, nhỏ gọn.`,
            price: 4200000,
            sale: 0,
            favorite: true,
            sold: 102,
            star: 5,
            brand: "Dogily Petshop",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        
    ],
    renderProducts: function(arr, component, start, end) {
        const htmls = arr.map(function(product, index){
            if (index >= start && index < end) {
                return `
                <div class="product-item col l-3 m-4 c-6" data-index="">
                    <a onclick="return false" href="" class="home-product-item">
                        <div class="home-product-item__img"
                            style="background-image: url(${product.path}); background-repeat: no-repeat; background-position: center; background-size: cover;">
                        </div>
                        <h4 class="home-product-item__name">
                            ${product.title}
                        </h4>
                        <div class="home-product-item__price">
                            <span style="display: ${product.sale ? "" : "none"}"class="home-product-item__price-old">${numberToCoin(product.price)}đ</span>
                            <span class="home-product-item__price-current">
                                ${product.sale ? numberToCoin((product.price * (100 - product.sale) / 100).toFixed()) : numberToCoin(product.price)}đ
                            </span>
                        </div>
                        <div class="home-product-item__action">
                            <span class="home-product-item__like">
                            <i class="home-product-item__like-icon-empty far fa-heart"></i>
                            <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                            </span>
                            <div class="home-product-item__rating">
                            <i class="${product.star >= 1 ? "home-product-item__rating--gold" : ""} fas fa-star"></i>
                            <i class="${product.star >= 2 ? "home-product-item__rating--gold" : ""} fas fa-star"></i>
                            <i class="${product.star >= 3 ? "home-product-item__rating--gold" : ""} fas fa-star"></i>
                            <i class="${product.star >= 4 ? "home-product-item__rating--gold" : ""} fas fa-star"></i>
                            <i class="${product.star >= 5 ? "home-product-item__rating--gold" : ""} fas fa-star"></i>
                            </div>
                            <span class="home-product-item__sold">
                                ${product.sold} đã bán
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
        const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
        const objLS = localStorage.getItem('obj') ? JSON.parse(localStorage.getItem('obj')) : {}

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
