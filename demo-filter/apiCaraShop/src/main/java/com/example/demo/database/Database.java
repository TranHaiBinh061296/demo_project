package com.example.demo.database;


import com.example.demo.entity.*;
import com.example.demo.repositories.*;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;


@Configuration
public class Database {
    @Autowired
    private ProductRepository repository;

    //logger
    private static final Logger logger =  LoggerFactory.getLogger(Database.class);

    // Fake Data Product

    @Bean
    CommandLineRunner initDatabase(ProductRepository productRepository, UsersRepository usersRepository,
                                   OrdersRepository orderRepository, OrdersDetailRepository ordersDetailRepository,
                                   FeedBackRepository feedBackRepository, CategoriesRepository categoriesRepository){

        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {

                Categories cate1 = new Categories("Nam", null);
                Products p1 = new Products("Áo khoác bomber", "Áo khoác ấm nam bomber được sử dụng hầu hết các mùa trong năm bởi tính ứng dụng cao và phạm vi sử dụng lớn.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate1, null);
                Products p2 = new Products("Áo khoác bóng chày", "Mang dáng vẻ trẻ trung, năng động và đậm tính thể thao, đây là kiểu áo khoác được nhiều tín đồ thời trang trẻ tuổi yêu thích.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate1,null);
                Products p3 = new Products("Quần Jeans", "Với sự đa dạng về mẫu mã và kiểu dáng, quần jeans trường tồn bất diệt với thời gian trong suốt hàng thế kỉ qua.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate1, null);
                Products p4 = new Products("Áo khoác Field Jacket", " Kiểu dáng áo khoác nam này mang dáng vẻ bụi băm, phong trần và khá hợp với thời trang đường phố.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate1,null);
                Products p6 = new Products("Áo Thun Ngắn Tay", "Khoảng 14.000 mục trên toàn thế giới! Một bộ sưu tập Peanuts mới được tạo bởi các nghệ sĩ thế hệ tiếp theo", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate1, null);
                Products p7 = new Products("Áo TAY NGẮN Disney", "Những bức vẽ đầy màu sắc về chuột Mickey và những người bạn của anh ấy của nghệ sĩ Steven Harrington đến từ LA, hiện đang ở Cara!", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate1, null);
                Products p8 = new Products("Áo Thun Cổ Tròn Dài Tay", "Phong cách đơn giản được khách hàng yêu thích. Được thiết kế hiện đại và tận tâm.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate1, null);
                Products p9 = new Products("Quần Jean Siêu Co Giãn Dáng Skinny Fit", "Độ co giãn đáng ngạc nhiên mang đến vẻ ngoài thời trang nhưng vẫn thoải mái. Dáng skinny fit ôm vừa vặn dễ chịu.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate1, null);

                Categories cate2 = new Categories("Nữ", null);
                Products p10 = new Products("Áo trễ vai", "Đây có thể đánh giá là item khó mặc, kén dáng người, dường như chỉ phù hợp với các cô nàng có bờ vai thon thả", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate2, null);
                Products p11= new Products("Áo Sơ Mi Linen Pha Cổ Trụ Tay Lửng 3/4", "Áo sơ mi cổ trụ với chất liệu linen mát mẻ thoải mái. Có thể mặc như một lớp khoác ngoài.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate2, null);
                Products p12 = new Products("AIRism Áo Khoác Khóa Kéo Chống UV Vải Mắt Lưới", "Vải AIRism mắt lưới thoáng khí cao tạo cảm giác êm ái và mát mẻ khi mặc, đồng thời cung cấp khả năng chống tia UV với chỉ số UPF50 +.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate2, null);
                Products p13 = new Products("Đồ Bộ Mặc Nhà Vải Jersey Ngắn Tay Dáng Rủ", "Đồ mặc nhà sành điệu mà bạn sẽ muốn mặc đi chơi.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate2, null);
                Products p14 = new Products("AIRism Quần Leggings Mềm Chống UV", "Khô nhanh cho cảm giác luôn tươi mát. Quần legging mềm mại và thoải mái với khả năng chống tia cực tím.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate2, null);
                Products p15 = new Products("Đầm Xòe Vải Georgette Ngắn Tay In Họa Tiết", "Đầm chữ A loe phù hợp với mọi dáng người.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate2, null);
                Products p16 = new Products("Áo Ngực Không Gọng Thể Thao Cổ Vuông", "Một chiếc áo ngực hiệu suất cao với các tính năng giúp dễ dàng di chuyển và thoáng khí tuyệt vời. Tuyệt vời để mặc khi chơi các môn thể thao.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate2, null);

                Categories cate3 = new Categories("Trẻ Em", null);
                Products p17 = new Products("Bộ Mặc Nhà Cotton Pha Ngắn Tay", "Nhẹ nhàng, mang đến cảm giác sảng khoái cho một giấc ngủ thoải mái.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate3, null);
                Products p18 = new Products("Marvel UT Áo Thun Ngắn Tay", "Nhiều phân cảnh nổi tiếng từ Vũ Trụ Điện Ảnh Marvel đã làm say đắm thế giới sẽ đến với bộ sưu tập UT này!", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate3, null);
                Products p19 = new Products("Quần Leggings Mềm Chống UV", "Quần cạp cao có thiết kế được cải tiến. Quần legging thoải mái với khả năng chống tia UV.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate3, null);
                Products p20 = new Products("Áo Thun Ngắn Tay", "Một bộ sưu tập dựa trên chủ đề \"nhiếp ảnh\" ghi lại những khoảnh khắc quý giá và sự gắn bó giữa Chuột Mickey và những người bạn của mình!", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate3, null);
                Products p21 = new Products("Áo Khoác Nỉ Siêu Co Giãn Dry Có Mũ Kéo Khóa Dài Tay", "Nhanh khô và dễ dàng di chuyển. Những chiếc áo thấm mồ hôi hiệu suất cao này là lựa chọn hoàn hảo cho những đứa trẻ năng động.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate3, null);
                Products p22 = new Products("Chân Váy Ren", "Thiết kế ren trang nhã. Thắt lưng co giãn thoải mái.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate3, null);
                Products p23 = new Products("Áo Thun Cotton Pha Dáng Ngắn", "Chất liệu với bề ngoài của cotton đi kèm với cảm giác mịn màng của AIRism. Kiểu dáng đẹp, độ dài ngắn.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate3, null);

                Categories cate4 = new Categories("Trẻ Sơ Sinh", null);
                Products p24 = new Products("Cotton Áo Thun Ngắn Tay", "Vẻ ngoài của bông với hiệu suất AIRism. Một tủ quần áo đa năng rất cần thiết.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate4, null);
                Products p25 = new Products("Áo Thun Cotton Dài Tay", "Bề ngoài của bông với hiệu suất AIRism. Hoa văn sọc mát mẻ.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate4, null);
                Products p26 = new Products("Pyjama Dài Tay", "Chất liệu vải co giãn giúp bạn dễ dàng di chuyển và có một giấc ngủ thoải mái vào đêm.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate4, null);
                Products p27 = new Products("Áo Thun Cotton Cổ Tròn Ngắn Tay", "Áo cotton với AIRism. Thiết kế đáng yêu với kích thước oversize.", (double) (Math.round((new Random().nextDouble() * 9999) * 100) / 100),new Random().nextInt(10),"",null, cate4, null);


                Users customer1 = new Users("Nguyễn","Vạn Phi", "nvp@gmail.com","02135466","pppppp1", true, true, null, null);
                Users customer2 = new Users("Nguyễn","Thành Luân", "ntl@gmail.com","02135466","llllll1", false, true, null, null);
                Users customer3 = new Users("Hoàng","Hữu Nghĩa", "hhn@gmail.com","02135466","nnnnnn1", false, true, null, null);

                Orders order1 = new Orders(customer2,true, null);
                Orders order2 = new Orders(customer2, false,null);
                Orders order3 = new Orders(customer3, false,null);

                OrdersDetail ordersDetail1 = new OrdersDetail(888.1,4,"..", order1,p1);
                OrdersDetail ordersDetail2 = new OrdersDetail(84.45,1,"..", order2,p2);
                OrdersDetail ordersDetail3 = new OrdersDetail(41604,3,"..", order3,p3);




                //save user
                usersRepository.save(customer1);
                usersRepository.save(customer2);
                usersRepository.save(customer3);



                //save categories
                categoriesRepository.save(cate1);
                categoriesRepository.save(cate2);
                categoriesRepository.save(cate3);
                categoriesRepository.save(cate4);


                //save products
                List<Products> save1 =
                        Arrays.asList(p1,p2,p3,p4,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17
                                ,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27);
                productRepository.saveAll(save1);

                // save order
                orderRepository.save(order1);
                orderRepository.save(order2);
                orderRepository.save(order3);


                //save orderDetail
                List<OrdersDetail> save = Arrays.asList(ordersDetail1,ordersDetail2,ordersDetail3);
                ordersDetailRepository.saveAll(save);


            }
        };


    }

}
