$(document).ready(() => {
    var menu = [{
        id: 1,
        name: 'แกงปลากดคัง',
        price: 180,
        img: 'https://i.ytimg.com/vi/DDHH1c-ijbQ/maxresdefault.jpg'
    },{
        id: 2,
        name: 'แกงปลาทับทิม+กุ้งฝอย',
        price: 120,
        img: 'https://i.ytimg.com/vi/lq737zouDF0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBuWf2MCWwqH8KlRkpVQC7o86YGlw'
    },{
        id: 3,
        name: 'ลาบปลา (สุก/ดิบ)',
        price: 80,
        img: 'https://i.ytimg.com/vi/KNu045o27Js/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDPvhV9U39emOwgLjdu7LRP_EJKhA'
    },{
        id: 4,
        name: 'ลาบหลน',
        price: 70,
        img: 'https://i.ytimg.com/vi/807ZaXGdy_Y/maxresdefault.jpg'
    },{
        id: 5,
        name: 'นํ้าพริกปลาทับทิม',
        price: 80,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ppsQxFFyqE55v6-282BmoJJ8FPSS_YQtDA&s'
    },{
        id: 6,
        name: 'นํ้าพริกหมู',
        price: 80,
        img: 'https://img-global.cpcdn.com/recipes/d6f0e82301341cc1/1200x630cq70/photo.jpg'
    },{
        id: 7,
        name: 'นํ้าพริกกะปิ',
        price: 80,
        img: 'https://bandtahnbuk.com/wp-content/uploads/2023/11/Shrimp-paste-chili-paste-article-1.jpg'
    },{
        id: 8,
        name: 'ทะเลจุ่ม',
        price: 150,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJHzLmJkfB1GTRek5KqtHJqcAhg1nEQjwjQ&s'
    },{
        id: 9,
        name: 'ปลากดคังจุ่ม',
        price: 180,
        img: 'https://i.ytimg.com/vi/ii50sXWD-h0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCWlCxonaKwXhJUYGzZoDzehxZ5kg'
    },{
        id: 10,
        name: 'หมูจุ่ม',
        price: 120,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLYRv-0iVdrRKpARPmqqigN0oQObMFexEYw&s'
    },{
        id: 11,
        name: 'รวมจุ่ม',
        price: 180,
        img: 'https://s.isanook.com/tr/0/ui/288/1441475/S__124452917.jpg'
    },{
        id: 12,
        name: 'บิ๊กทะเลจุ่ม',
        price: 250,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zcBmoIsIGXmQ_VWwwIiwI-ekGaLidtcDrA&s'
    },{
        id: 13,
        name: 'เนื้อปลา (ตัว)',
        price: 150,
        img: 'https://f.ptcdn.info/809/025/000/1416578878-1-o.jpg'
    },{
        id: 14,
        name: 'เนื้อปลาทับทิม',
        price: 60,
        img: 'https://pcdaily.co.th/wp-content/uploads/2020/08/PD-000100899.jpg'
    },{
        id: 15,
        name: 'เนื้อปลากดคัง',
        price: 100,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlZzP6m5OdZXLFpweHTZdnG21QA75HTfitg&s'
    },{
        id: 16,
        name: 'ทะเลสด',
        price: 80,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQtrPf6VE5b5Wz2KR7PwLUdAWuQxO-ciC4w&s'
    },{
        id: 17,
        name: 'ตับสด',
        price: 60,
        img: 'https://image.makewebeasy.net/makeweb/m_1920x0/si08IWcIs/DefaultData/%E0%B8%95%E0%B8%B1%E0%B8%9A%E0%B9%82%E0%B8%9B%E0%B8%A3.jpg'
    },{
        id: 18,
        name: 'หมูสด',
        price: 60,
        img: 'https://www.rama.mahidol.ac.th/ramachannel/wp-content/uploads/2024/07/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%83%E0%B8%99%E0%B8%9A%E0%B8%97%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1-%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%94%E0%B8%B4%E0%B8%9A-2.webp'
    },{
        id: 19,
        name: 'เต้าหู้ไข่',
        price: 30,
        img: 'https://s359.kapook.com/pagebuilder/508514f9-1566-4ef3-b7d2-d9a5eab3e3fe.jpg'
    },{
        id: 20,
        name: 'หมึกสด',
        price: 80,
        img: 'https://www.terraceseafood.com/wp-content/uploads/2023/03/%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%AB%E0%B8%A1%E0%B8%B6%E0%B8%81_%E0%B9%92%E0%B9%93%E0%B9%90%E0%B9%94%E0%B9%91%E0%B9%90.jpg'
    },{
        id: 21,
        name: 'ปลาหมึกย่าง',
        price: 150,
        img: 'https://s359.kapook.com/pagebuilder/7736cd31-1e93-4765-aeae-3bf14a554ab8.jpg'
    },{
        id: 22,
        name: 'ปลาหมึกนึ่งมะนาว',
        price: 150,
        img: 'https://i.ytimg.com/vi/7q3EEtUdLBg/maxresdefault.jpg'
    },{
        id: 23,
        name: 'กุ้งลวกจิ้ม',
        price: 80,
        img: 'https://i.ytimg.com/vi/9JKH4Ol8lsc/maxresdefault.jpg'
    },{
        id: 24,
        name: 'ปลาหมึกลวกจิ้ม',
        price: 80,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBXseMwEVK_AdacFC4NbExKt1wJLjwQ-Rm9g&s'
    },{
        id: 25,
        name: 'ไข่ไก่',
        price: 7,
        img: 'https://www.thaihealth.or.th/data/content/32547/cms/thaihealth_c_bcegjkmpy147.jpg'
    },{
        id: 26,
        name: 'ปูอัด',
        price: 40,
        img: 'https://s359.kapook.com/pagebuilder/43db2728-cdcf-414f-ac3d-6407aa206a02.jpg'
    },{
        id: 27,
        name: 'ผักสด',
        price: 20,
        img: 'https://img.wongnai.com/p/1920x0/2020/02/04/f3085a1cc88e440dbeaac0c0211cd876.jpg'
    },{
        id: 28,
        name: 'เห็ดเข็มทอง',
        price: 30,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyycrPLibxIryK7vt9DvErqAbvLI3Go6h7g&s'
    },{
        id: 29,
        name: 'วุ้นเส้น',
        price: 15,
        img: 'https://static5-th.orstatic.com/userphoto/Article/0/2S/000JX49BFF96A3C4FE8A43j.jpg'
    },{
        id: 30,
        name: 'ลาบปลาสุก',
        price: 80,
        img: 'https://img.kapook.com/u/2017/surauch/cooking/y5_16.jpg'
    },{
        id: 31,
        name: 'ลาบปลาดิบ',
        price: 80,
        img: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0334_1200x630.jpg'
    },{
        id: 32,
        name: 'ส้มตำทอด',
        price: 70,
        img: 'https://www.deksomboon.com/thumb.html?w=900&h=450&src=media_center/recipe/2018/10/1/405/recipe405201810016353.jpg&type=auto'
    },{
        id: 33,
        name: 'สามชั้นทอดกระเทียม',
        price: 80,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlftRqnh-_52wlJs9hJRyCLU3XfvCjFPMHD4tek8u1EhsgI4egC7emsOv7WXYaIWCIX70&usqp=CAU'
    },{
        id: 34,
        name: 'น้ำพริกกะปิ',
        price: 80,
        img: 'https://bandtahnbuk.com/wp-content/uploads/2023/11/Shrimp-paste-chili-paste-article-1.jpg'
    },{
        id: 35,
        name: 'น้ำพริกปลาทับทิม',
        price: 80,
        img: 'https://i.ytimg.com/vi/1_byqkMCoxk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCrdOsYXsN8fqjWewyL5dc2xAjXDA'
    },{
        id: 36,
        name: 'แกงส้มชะอมกุ้ง',
        price: 150,
        img: 'https://i.ytimg.com/vi/9hBsf_Ho9jM/maxresdefault.jpg'
    },{
        id: 37,
        name: 'ยำตะไคร้กุ้งสด',
        price: 80,
        img: 'https://i.ytimg.com/vi/aW8ySdfbK4Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwy3-b4_AtVRmzr3CLvApuG526QA'
    },{
        id: 38,
        name: 'ปลาถอดเสื้อ(เล็ก)',
        price: 180,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7uIEo4o_u1SPEdPitckjFgssyJQ0s98eZQ&s'
    },{
        id: 39,
        name: 'ปลาถอดเสื้อ(ใหญ่)',
        price: 200,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7uIEo4o_u1SPEdPitckjFgssyJQ0s98eZQ&s'
    },{
        id: 40,
        name: 'ปลาทอดกระเทียม(เล็ก)',
        price: 180,
        img: 'https://www.1376delivery.com/productimages/1722_Deep%20Fried%20Tilapia%20Fish%20with%20Crispy%20Garlic%20served%20with%20Seafood%20Sauce.jpg'
    },{
        id: 41,
        name: 'ปลาทอดกระเทียม(ใหญ่)',
        price: 200,
        img: 'https://1376delivery.com/productimages/4524_.jpg'
    },{
        id: 42,
        name: 'ปลาราดพริก(เล็ก)',
        price: 180,
        img: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBRWQsu26czvh4H4Y9IYkj0fPgxLHhimGdoSLlEBDkfIOiPYD1.webp'
    },{
        id: 43,
        name: 'ปลาราดพริก(ใหญ่)',
        price: 200,
        img: 'https://www.easycookingmenu.com/media/k2/items/cache/0aa2526f21d94ec0cf0dfc24eb7661b7_XL.jpg'
    },{
        id: 44,
        name: 'ปลาน้ำตก(เล็ก)',
        price: 180,
        img: 'https://i.ytimg.com/vi/VEig7ZF2xMI/maxresdefault.jpg'
    },{
        id: 45,
        name: 'ปลาน้ำตก(ใหญ่)',
        price: 200,
        img: 'https://www.nittayakaiyang.com/wp-content/uploads/2023/04/%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81-07.jpg'
    },{
        id: 46,
        name: 'ปลาทอดทรงเครื่อง(เล็ก)',
        price: 180,
        img: 'https://api2.krua.co/wp-content/uploads/2022/01/RT1067_%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B8%97%E0%B8%AD%E0%B8%94%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87_ImageBanner_1140x507.jpg'
    },{
        id: 47,
        name: 'ปลาทอดทรงเครื่อง(ใหญ่)',
        price: 200,
        img: 'https://api2.krua.co/wp-content/uploads/2022/01/RT1067_%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B8%97%E0%B8%AD%E0%B8%94%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87_ImageBanner_1140x507.jpg'
    },{
        id: 48,
        name: 'ปลาทอดลุยสวน(เล็ก)',
        price: 180,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZygf96cq_nCnLyRoaPCLa4gYoUpCmtYdpg&s'
    },{
        id: 49,
        name: 'ปลาทอดลุยสวน(ใหญ่)',
        price: 200,
        img: 'https://img.wongnai.com/p/1920x0/2022/05/23/0a04068f6b154a64b911d9d9ba25b11d.jpg'
    },{
        id: 50,
        name: 'เมี่ยงปลาเผา(เล็ก)',
        price: 190,
        img: 'https://s.isanook.com/wo/0/ud/50/251169/tnls2.jpg?ip/crop/w670h402/q80/jpg'
    },{
        id: 51,
        name: 'เมี่ยงปลาเผา(ใหญ่)',
        price: 200,
        img: 'https://www.sgethai.com/wp-content/uploads/2021/10/11-1.jpg'
    },{
        id: 52,
        name: 'หมึกย่าง',
        price: 150,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzx3Me6dODOtutku07PdUy3AAfwpmcSt-r2HX8QvLCP9nNAzpLaVW6CGYhyi2FMOCDW20&usqp=CAU'
    },{
        id: 53,
        name: 'ผัดเห็ดหอมกุ้งสด',
        price: 80,
        img: 'https://img-global.cpcdn.com/recipes/0f856754a723df0f/680x482cq80/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B9%80%E0%B8%AB%E0%B8%94%E0%B8%AB%E0%B8%AD%E0%B8%A1%E0%B8%AA%E0%B8%94%E0%B8%9C%E0%B8%94%E0%B8%99%E0%B8%B3%E0%B8%A1%E0%B8%99%E0%B8%AB%E0%B8%AD%E0%B8%A2%E0%B9%83%E0%B8%AA%E0%B8%81%E0%B8%87.jpg'
    },{
        id: 54,
        name: 'ผัดเห็ดเข็มทอง',
        price: 70,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjX0aaxmKYL7EdrXb9sFXKoZ4uu7anVimb75m_UVDjXHZ1xQvx7NIH8kInU8WobRq9lJ0&usqp=CAU'
    },{
        id: 55,
        name: 'ผัดผักบุ้ง',
        price: 50,
        img: 'https://i.ytimg.com/vi/ZWqf7ktA20k/sddefault.jpg'
    },{
        id: 56,
        name: 'ผัดคะน้าน้ำมันหอย',
        price: 50,
        img: 'https://img.wongnai.com/p/1920x0/2020/11/09/5b901fed9a1b466da1b4256f13a2801e.jpg'
    },{
        id: 57,
        name: 'ผัดเห็ดรวมกุ้ง',
        price: 80,
        img: 'https://i.ytimg.com/vi/JF1YYwGgpPg/maxresdefault.jpg'
    },{
        id: 58,
        name: 'กระหล่ำปลีน้ำปลา',
        price: 60,
        img: 'https://i.ytimg.com/vi/h3iwdEzqQWk/maxresdefault.jpg'
    },{
        id: 59,
        name: 'ผัดมะระไข่',
        price: 70,
        img: 'https://i.ytimg.com/vi/xUOvKrGBEeM/maxresdefault.jpg'
    },{
        id: 60,
        name: 'ปลาทับทิมนึ่งซีอิ้ว(เล็ก)',
        price: 180,
        img: 'https://pbs.twimg.com/media/DhKOzp4U8AApjNT.jpg'
    },{
        id: 61,
        name: 'ปลาทับทิมนึ่งซีอิ้ว(ใหญ่)',
        price: 200,
        img: 'https://img-global.cpcdn.com/recipes/c33134cafa1a52ad/680x482cq80/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%97%E0%B8%9A%E0%B8%97%E0%B8%A1%E0%B8%99%E0%B8%87%E0%B8%8B%E0%B8%AD%E0%B8%A7-%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%94%E0%B8%81.jpg'
    },{
        id: 62,
        name: 'ปลาทับทิมนึ่งบ๊วย(เล็ก)',
        price: 180,
        img: 'https://img.kapook.com/u/2017/surauch/cooking/c1_34.jpg'
    },{
        id: 63,
        name: 'ปลาทับทิมนึ่งบ๊วย(ใหญ่)',
        price: 200,
        img: 'https://i.ytimg.com/vi/VKKV2LzxsU4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAoVNZLCyQGijksEmLAv2DvxX0ipg'
    },{
        id: 64,
        name: 'ปลาทับทิมนึ่งลุยสวน(เล็ก)',
        price: 180,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFhC0OhLbrkY2BOE2JLORCMEOfd4Vf_JEnQ&s'
    },{
        id: 65,
        name: 'ปลาทับทิมนึ่งลุยสวน(ใหญ่)',
        price: 200,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFhC0OhLbrkY2BOE2JLORCMEOfd4Vf_JEnQ&s'
    },{
        id: 66,
        name: 'หมึกนึ่งมะนาว',
        price: 150,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5zkqL-4opWRr3egyA_5tqoaaBEi8hBDbTz_k7_m-7LjjBgDQ8W_xFrrKTdMX7df1oFw&usqp=CAU'
    },{
        id: 67,
        name: 'กุ้งอบวุ้นเส้น',
        price: 180,
        img: 'https://pangpond.com/wp-content/uploads/%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87%E0%B8%AD%E0%B8%9A%E0%B8%A7%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99.jpg'
    },{
        id: 68,
        name: 'ปลาทับทิมลวกจิ้ม',
        price: 80,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqc-xiAe7jdjNQPnf5rdWGHOVy556CB6NVOmjqV33rh9-Nb3tGrwylWjTCTqaStbjmVg&usqp=CAU'
    },{
        id: 69,
        name: 'ไส้ตันลวกจิ้ม',
        price: 80,
        img: 'https://i.ytimg.com/vi/3Udr0aJ5ww4/sddefault.jpg'
    },{
        id: 70,
        name: 'ทะเลลวกจิ้ม',
        price: 80,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4gKYrNcbbrfDEMpUW-phEbEDDE8SdbEHOw&s'
    },{
        id: 71,
        name: 'หมึกลวกจิ้ม',
        price: 80,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBXseMwEVK_AdacFC4NbExKt1wJLjwQ-Rm9g&s'
    },{
        id: 72,
        name: 'กุ้วลวกจิ้ม',
        price: 80,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQ7odGbMCdtjnEWfb5EJ7y8e5QlRcbk4s4g&s'
    },{
        id: 73,
        name: 'ลูกชิ้นปลาลวกจิ้ม',
        price: 70,
        img: 'https://api2.krua.co/wp-content/uploads/2020/06/SlideBanner1140x507-546.jpg'
    },{
        id: 74,
        name: 'ต้มยำปลากดคัง',
        price: 180,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI1SZQJI48lB7Cxa7Ce1ecK0bIlKgqb0ilVw&s'
    },{
        id: 75,
        name: 'ต้มยำปลาทับทิม',
        price: 120,
        img: 'https://i.ytimg.com/vi/66R2Z3vIK9Y/maxresdefault.jpg'
    },{
        id: 76,
        name: 'แกงปลากดคัง',
        price: 180,
        img: 'https://i.ytimg.com/vi/5bbYp7LOxk4/maxresdefault.jpg'
    },{
        id: 77,
        name: 'แกงปลาทับทิม',
        price: 120,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrolJppKUhgGL4yMJv5PMvUKLlSs1gBgRkdg&s'
    },{
        id: 78,
        name: 'ต้มโคล้งปลากดคัง',
        price: 190,
        img: 'https://i.ytimg.com/vi/FPWBwyc85sI/maxresdefault.jpg'
    },{
        id: 79,
        name: 'ต้มโคล้งปลาทับทิม',
        price: 150,
        img: 'https://pbs.twimg.com/media/E32nWV4UYAYdIIN?format=jpg&name=large'
    },{
        id: 80,
        name: 'ต้มโคล้งปลาช่อน(เล็ก)',
        price: 180,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_s1jdEwsSO2GlQO3YG7Ll46AalIqYBoiHyg&s'
    },{
        id: 81,
        name: 'ต้มโคล้งปลาช่อน(ใหญ่)',
        price: 200,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_s1jdEwsSO2GlQO3YG7Ll46AalIqYBoiHyg&s'
    },{
        id: 82,
        name: 'แป๊ะซะปลาช่อน(เล็ก)',
        price: 180,
        img: 'https://patternpack.org/wp-content/uploads/2024/01/1.jpg'
    },{
        id: 83,
        name: 'แป๊ะซะปลาช่อน(ใหญ่)',
        price: 200,
        img: 'https://patternpack.org/wp-content/uploads/2024/01/1.jpg'
    },{
        id: 84,
        name: 'แป๊ะซะปลาทับทิม',
        price: 150,
        img: 'https://img.wongnai.com/p/1920x0/2019/08/11/d94515d0b4024892971df1ed1cdafd2a.jpg'
    },{
        id: 85,
        name: 'โป๊ะแตกทะเล',
        price: 180,
        img: 'https://i.ytimg.com/vi/D7nEAkpLHFI/maxresdefault.jpg'
    },{
        id: 86,
        name: 'ต้มยำทะเล',
        price: 180,
        img: 'https://aowtakiabseafood.com/delivery/wp-content/uploads/2019/06/20180606_115316.jpg'
    },{
        id: 87,
        name: 'ต้มยำปลาหมึก',
        price: 150,
        img: 'https://i.ytimg.com/vi/Y2oLzXjhkO8/maxresdefault.jpg'
    },{
        id: 88,
        name: 'ต้มแซบกระดูกอ่อน',
        price: 120,
        img: 'https://menu-ded.com/wp-content/uploads/2023/08/%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B9%81%E0%B8%8B%E0%B9%88%E0%B8%9A.webp'
    },{
        id: 89,
        name: 'เล้งแซ่บ',
        price: 80,
        img: 'https://www.dplusguide.com/wp-content/uploads/2016/11/leng-sap-13.jpg'
    },{
        id: 90,
        name: 'ต้มแซ่บเอ็นไก่',
        price: 120,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTsQqQjsC4UHMN_q5ZiV4MbwfkTw4e0q1bzg&s'
    },{
        id: 91,
        name: 'ปลากดคังผัดฉ่า',
        price: 120,
        img: 'https://i.ytimg.com/vi/nNFLtnkkbQg/maxresdefault.jpg'
    },{
        id: 92,
        name: 'ปลาทับทิมผัดฉ่า',
        price: 80,
        img: 'https://i.ytimg.com/vi/IUQbNgWIpm8/maxresdefault.jpg'
    },{
        id: 93,
        name: 'ทะเลผัดฉ่า',
        price: 80,
        img: 'https://img.wongnai.com/p/1920x0/2018/12/17/71ede90ccda64400a10a97c851f1c0bc.jpg'
    },{
        id: 94,
        name: 'ปูม้าผัดฉ่า',
        price: 120,
        img: 'https://i.pinimg.com/736x/e5/10/18/e5101884035da5ddddfeb5a3eee3a0d6.jpg'
    },{
        id: 95,
        name: 'ปลากดคังผัดคื่นฉ่าย',
        price: 120,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw008bQE5bAeWdcG5e3UKvCRw5v6l8rdwz3Q&s'
    },{
        id: 96,
        name: 'ปลาทับทิมผัดคื่นฉ่าย',
        price: 80,
        img: 'https://i.ytimg.com/vi/ggU9OZDx9mc/maxresdefault.jpg'
    },{
        id: 97,
        name: 'ทะเลผัดผงกะหรี่',
        price: 90,
        img: 'https://www.kruakhunkung.co.th/img/menu/%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%9C%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%AB%E0%B8%A3%E0%B8%B5%E0%B9%88_1.jpg'
    },{
        id: 98,
        name: 'ปูม้าผัดผงกะหรี่',
        price: 150,
        img: 'https://i.ytimg.com/vi/ouHuGTqWM2U/maxresdefault.jpg'
    },{
        id: 99,
        name: 'หมึกผัดไข่เค็ม',
        price: 90,
        img: 'https://yalamarketplace.com/upload/1646994814480.jpg'
    },{
        id: 100,
        name: 'ผัดพริกแกงหมู',
        price: 80,
        img: 'https://food.mthai.com/app/uploads/2019/05/Stir-Fried-Crispy-Pork-with-Red-Curry-17.jpg'
    },{
        id: 101,
        name: 'ผัดพริกแกงปลา',
        price: 80,
        img: 'https://cheewajit.com/app/uploads/2018/06/edit-600x400-1.jpg'
    },{
        id: 102,
        name: 'ผัดพริกแกงทะเล',
        price: 80,
        img: 'https://i.ytimg.com/vi/pg_DWxNUuqA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6FiM5jN4_ob3EZ7sfpRSBuCOeAA'
    },{
        id: 103,
        name: 'ผัดพริกเผาหมู',
        price: 80,
        img: 'https://img.kapook.com/u/2017/surauch/cooking/k1_13.jpg'
    },{
        id: 104,
        name: 'ผัดพริกเผาปลา',
        price: 80,
        img: 'https://i.pinimg.com/736x/fd/3f/76/fd3f762c71c252aa14934e90dc875324.jpg'
    },{
        id: 105,
        name: 'ผัดพริกเผาทะเล',
        price: 80,
        img: 'https://i.ytimg.com/vi/v65NAbhNIIk/maxresdefault.jpg'
    },{
        id: 106,
        name: 'ผัดเผ็ดหมู',
        price: 80,
        img: 'https://www.maggi.co.th/sites/default/files/styles/home_stage_944_531/public/srh_recipes/96d7fcfe22a6c8f0e8d15602fb3f771e.jpg?h=4f5b30f1&itok=0z8nIacQ'
    },{
        id: 107,
        name: 'ผัดเผ็ดปลา',
        price: 80,
        img: 'https://img.wongnai.com/p/1920x0/2024/03/04/d4d8ff850c0c4038af140b8e07b53d44.jpg'
    },{
        id: 108,
        name: 'ผัดเผ็ดทะเล',
        price: 80,
        img: 'https://i.ytimg.com/vi/pg_DWxNUuqA/maxresdefault.jpg'
    },{
        id: 109,
        name: 'ผัดกะเพราหมู',
        price: 80,
        img: 'https://www.maggi.co.th/sites/default/files/styles/home_stage_944_531/public/srh_recipes/c07747088f182ba6cfabe8be6724229e.jpg?h=74b9fe57&itok=Uz4HIxlX'
    },{
        id: 110,
        name: 'ผัดกะเพราทะเล',
        price: 80,
        img: 'https://i.ytimg.com/vi/n9XlQg5FWdA/maxresdefault.jpg'
    },{
        id: 111,
        name: 'กะเพราไข่เยี่ยวม้า',
        price: 70,
        img: 'https://s359.kapook.com/pagebuilder/139ae41d-16d7-4c4d-8a1b-f9e7b2c5a3f6.jpg'
    },{
        id: 112,
        name: 'ลาบปลาหลน',
        price: 70,
        img: 'https://img.kapook.com/u/2015/surauch/Cook/northen-1.jpg'
    },{
        id: 113,
        name: 'ตำกุ้งฝอย',
        price: 70,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSny-fspr57UlSsE69QjxlSwkFyZUeelNyfhA&s'
    },{
        id: 114,
        name: 'ยำเม็ดมะม่วง',
        price: 100,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcoX7uPyhZwMk25xtH4UV3XaHEFLuMjhDj-1sgSDKtKqDB1vAx-F-q_nk5NtI3pN_4dc&usqp=CAU'
    },{
        id: 115,
        name: 'ยำทะเล',
        price: 80,
        img: 'https://longdan.co.uk/cdn/shop/articles/spicy-mixed-seafood-salad-with-thai-food-ingredients_1200x.jpg?v=1700554699'
    },{
        id: 116,
        name: 'ยำรวม',
        price: 80,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYLzwVu5HZe8FxFDDqEchytle9FXJ5f3aHw&s'
    },{
        id: 117,
        name: 'ยำคะน้ากุ้งสด',
        price: 80,
        img: 'https://www.pholfoodmafia.com/wp-content/uploads/2020/04/4Spicy-Chinese-Broccoli-and-Prawn-Salad.jpg'
    },{
        id: 118,
        name: 'พล่าปลาหมึก',
        price: 80,
        img: 'https://img-global.cpcdn.com/recipes/5da49b2e20376a12/680x482cq80/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%AB%E0%B8%A1%E0%B8%81-%E0%B8%81%E0%B8%A3%E0%B8%9A%E0%B9%86-%E0%B8%81%E0%B8%A3%E0%B8%AD%E0%B8%9A%E0%B9%86-%E0%B9%80%E0%B8%9C%E0%B8%94%E0%B9%86-%E0%B9%81%E0%B8%8B%E0%B8%9A%E0%B9%86.jpg'
    },{
        id: 119,
        name: 'ยำปลาหมึก',
        price: 80,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaO79sz8KoIaivrwN9OF6widgiueEo9D3L3Q&s'
    },{
        id: 120,
        name: 'ยำกุ้งสด(ดิบ)',
        price: 80,
        img: 'https://img.wongnai.com/p/400x0/2021/04/22/38c1db6c6bff4b1e974fd7b6acf73180.jpg'
    },{
        id: 121,
        name: 'ยำกุ้งสด(สุก)',
        price: 80,
        img: 'https://obs-ect.line-scdn.net/r/ect/ect/cj0xODBlMHVmb2U0ZDZvJnM9anA2JnQ9bSZ1PTFmdmF0MDMzazViZzAmaT0w'
    },{
        id: 122,
        name: 'ยำปูม้า(ดิบ)',
        price: 120,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUeCxsyOujOnjNUfScoBk6mud199K7-ywWg&s'
    },{
        id: 123,
        name: 'ยำปูม้า(สุก)',
        price: 120,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTXABb-mpmuyNcF90iXeLTa2UD06vo8lqaNg&s'
    },{
        id: 124,
        name: 'ยำกุนเชียง',
        price: 80,
        img: 'https://i.ytimg.com/vi/zWc2fmk1_uc/maxresdefault.jpg'
    },{
        id: 125,
        name: 'ยำหมูยอ',
        price: 70,
        img: 'https://i.ytimg.com/vi/HxvsilHu-Fc/maxresdefault.jpg'
    },{
        id: 126,
        name: 'ยำไข่เยี่ยวม้า',
        price: 70,
        img: 'https://img.wongnai.com/p/1920x0/2019/01/03/f992513c8af24bdeaecc0e93466b34d2.jpg'
    },{
        id: 127,
        name: 'หมูมะนาว',
        price: 70,
        img: 'https://s359.kapook.com/pagebuilder/74f67b9b-cea8-4cc3-a7ea-0b871a5778f3.jpg'
    },{
        id: 128,
        name: 'หมูน้ำตก',
        price: 70,
        img: 'https://i.ytimg.com/vi/mCIAuOs7nNc/maxresdefault.jpg'
    },{
        id: 129,
        name: 'ตับหวาน',
        price: 70,
        img: 'https://recipe.sgethai.com/wp-content/uploads/2025/05/08052025-spicy-pork-liver-salad-1.webp'
    },{
        id: 130,
        name: 'ยำเล็บมือนาง',
        price: 70,
        img: 'https://i.ytimg.com/vi/jC3Po2tD91k/maxresdefault.jpg'
    },{
        id: 131,
        name: 'ยำผักบุ้งกรอบ',
        price: 70,
        img: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RT0711_1200x630.jpg'
    },{
        id: 132,
        name: 'ยำเห็ดเข็มทอง(ลวก)',
        price: 70,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdA1zz5r56neb24XIHpe2zwQJ7QR7jPyDRLw&s'
    },{
        id: 133,
        name: 'ยำเห็ดเข็มทอง(ทอด)',
        price: 70,
        img: 'https://www.easycookingmenu.com/media/k2/items/cache/1e6a90ec1f25564654b093c54a8ddd7e_XL.jpg'
    },{
        id: 134,
        name: 'ยำสามสหาย',
        price: 70,
        img: 'https://api2.krua.co/wp-content/uploads/2020/06/RT1449_SEOImage_1200x630-scaled.jpg'
    },{
        id: 135,
        name: 'ยำสามสหาย(รวมผักทอด)',
        price: 70,
        img: 'https://img-global.cpcdn.com/recipes/4b12f60a5b907533/680x482cq80/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%A2%E0%B8%B3%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%AB%E0%B8%B2%E0%B8%A2.jpg'
    },{
        id: 136,
        name: 'ยำแหนม',
        price: 70,
        img: 'https://food.mthai.com/app/uploads/2018/10/Spicy-Sour-Sausage-Salad.jpg'
    },{
        id: 137,
        name: 'ยำสามกรอบ',
        price: 80,
        img: 'https://i.ytimg.com/vi/txC1F_XyeF4/maxresdefault.jpg'
    },{
        id: 138,
        name: 'ยำปลากรอบ(ทับทิม)',
        price: 80,
        img: 'https://s.isanook.com/wo/0/ud/16/82649/82649-thumbnail.jpg'
    },{
        id: 139,
        name: 'ยำปลากรอบ(ปลาเล็ก)',
        price: 80,
        img: 'https://i.ytimg.com/vi/JotSsed4rV8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCPalBjkm-EK0t_1zbpMN5L8j_khg'
    },{
        id: 140,
        name: 'ไข่เยี่ยวม้าทรงเครื่อง',
        price: 70,
        img: 'https://obs-ect.line-scdn.net/r/ect/ect/cj03bjk1aWl1ZzU4OWo1JnM9anA2JnQ9bSZ1PTFmdmNraTEyMDRuMDAmaT0w'
    },{
        id: 141,
        name: 'เม็ดมะม่วงทรงเครื่อง',
        price: 100,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpvJNVsCjmglcLKNQBcayhTrzBxhihiRBGg&s'
    },{
        id: 142,
        name: 'ปูอัดวาซาบิ',
        price: 70,
        img: 'https://kaimods.com/images/best-seller/wasabi-crab-stick/wasabi-crab-stick-1.jpg'
    },{
        id: 143,
        name: 'ออเดิฟ',
        price: 150,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7y3AQ3AhIfaPB7sVLDtSDIRHogQQSVvPog&s'
    },{
        id: 144,
        name: 'นํ้าพริกหนุ่ม',
        price: 70,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nqMM57tI2tV7k91HLD9LQQOYnJvmVrDZHg&s'
    },{
        id: 145,
        name: 'ปลาหมึกสด',
        price: 80,
        img: 'https://s.isanook.com/he/0/ud/6/32641/squid.jpg'
    },{
        id: 146,
        name: 'ออเดิฟทะเล',
        price: 220,
        img: 'https://www.somkaew.com/upload/picture/full/3/098c52cbb3a26aeabd8777dda41439db.jpg'
    },{
        id: 147,
        name: 'เมี่ยงทะเล',
        price: 220,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUgkSDtCbTP4K_Z9XeGLqCP4A50lfCzPdeaw&s'
    },{
        id: 148,
        name: 'เม็ดมะม่วงทอด',
        price: 90,
        img: 'https://www.nittayakaiyang.com/wp-content/uploads/2023/04/%E0%B9%80%E0%B8%A1%E0%B9%87%E0%B8%94%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%94-07.jpg'
    },{
        id: 149,
        name: 'กุังเทมปุระ',
        price: 80,
        img: 'https://www.easycookingmenu.com/media/k2/items/cache/063ee9aeb9f60efa02823e51450f82ce_XL.jpg'
    },{
        id: 150,
        name: 'คางกุ้งทอด',
        price: 60,
        img: 'https://recipe.sgethai.com/wp-content/uploads/2025/06/cover-11062025-deep-fried-crispy-shrimp-head.webp'
    },{
        id: 151,
        name: 'เฟรนฟาย',
        price: 70,
        img: 'https://down-th.img.susercontent.com/file/th-11134207-7r98r-luuhruttx3qme7'
    },{
        id: 152,
        name: 'ไข่เจียวหมูสับ',
        price: 50,
        img: 'https://recipe.sgethai.com/wp-content/uploads/2025/04/160425-Thai-Pork-Omelet-cover.webp'
    },{
        id: 153,
        name: 'ไข่เจียกุ้งสับ',
        price: 80,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoaxg7ETpaXWLms0aJAZPJg_TzNQp9c0qDp4Qq3UR9xEFPWZEO6zPbt7EXP-v8pV5GFPA&usqp=CAU'
    },{
        id: 154,
        name: 'ปูอัดทอดเกร็ดขนมปัง',
        price: 60,
        img: 'https://img.wongnai.com/p/1968x0/2020/11/04/f327854e53a1469aacb6f4afc7876d0d.jpg'
    },{
        id: 155,
        name: 'หัวหอมใหญ่ทอด',
        price: 60,
        img: 'https://img.kapook.com/u/surauch/movie2/Deep-fried-onion.jpg'
    },{
        id: 156,
        name: 'ซี่โครงหมูทอด',
        price: 70,
        img: 'https://i.ytimg.com/vi/V8XLydMxyqs/maxresdefault.jpg'
    },{
        id: 157,
        name: 'ปลาหมึกทอด',
        price: 80,
        img: 'https://s359.kapook.com/pagebuilder/8cb7c41b-416c-4174-837b-520bfb2b9738.jpg'
    },{
        id: 158,
        name: 'ไส้ตันทอด',
        price: 70,
        img: 'https://i.ytimg.com/vi/5ZR6MX7GWFI/maxresdefault.jpg'
    },{
        id: 159,
        name: 'ปอเปี๊ยะทอด',
        price: 60,
        img: 'https://www.mapfood.co.th/wp-content/uploads/2024/03/deep-fried-spring-rolls-scaled.jpg'
    },{
        id: 160,
        name: 'เห็ดหอมทอด',
        price: 60,
        img: 'https://api2.krua.co/wp-content/uploads/2023/08/RI1852_SEOImage_1200x630.jpg'
    },{
        id: 161,
        name: 'ส้มตำไท',
        price: 50,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3yCweysZoRjSM8kGbNIATLLfhcLH7dc_gQ&s'
    },{
        id: 162,
        name: 'ส้มตำปูปลาร้า',
        price: 50,
        img: 'https://app-thanyaburi.com/images/product/2/199_1.jpg'
    },{
        id: 163,
        name: 'ตำถาดไท',
        price: 120,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5-kdqKHAPqWOnXxXEcbhy_JzAemPe7O8dg&s'
    },{
        id: 164,
        name: 'ตำถาดปูปลาร้า',
        price: 120,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQfF0o03LgDC4xb8TQ5dphwvVmmLmqGTHCQ&s'
    },{
        id: 165,
        name: 'เหลากุ้งสด(ดิบ)',
        price: 120,
        img: 'https://www.khaosod.co.th/wpapp/uploads/2020/11/Untitled-1-107.jpg'
    },{
        id: 166,
        name: 'เหลากุ้งสด(สุก)',
        price: 120,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ima-JtVOAWbr9rUxoBCmlveBhIczM_yqTw&s'
    },{
        id: 167,
        name: 'ตำปูม้า(ดิบ)',
        price: 80,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcxyNxDHEqXZZ4YP6moo-alUeVUrl2ozwlA&s'
    },{
        id: 168,
        name: 'ตำปูม้า(สุก)',
        price: 80,
        img: 'https://i.ytimg.com/vi/UhKk9nYrvvE/maxresdefault.jpg'
    },{
        id: 169,
        name: 'ส้มตำไข่เค็ม',
        price: 60,
        img: 'https://siriranya.wordpress.com/wp-content/uploads/2016/08/4083707.jpg'
    },{
        id: 170,
        name: 'ตำโคราช',
        price: 50,
        img: 'https://image.bangkokbiznews.com/uploads/images/contents/w1024/2022/06/79ZQ3S1J7xpZyCwBc5DG.webp?x-image-process=style/lg-webp'
    },{
        id: 171,
        name: 'ส้มตำทะเล',
        price: 80,
        img: 'https://cms.dmpcdn.com/ugcarticle/2020/05/20/3bd05bc0-3f01-11eb-b864-3f6e4beb508a_original.JPG'
    },{
        id: 172,
        name: 'ตำแตง',
        price: 50,
        img: 'https://img.youtube.com/vi/QfRmtTmpofY/0.jpg'
    },{
        id: 173,
        name: '(ตำแตงหมูยอ)',
        price: 60,
        img: 'https://img.wongnai.com/p/1920x0/2019/02/27/73ca1b89faed4676977aaae9f0eb60ef.jpg'
    },{
        id: 174,
        name: 'ตำเล็บมือนาง',
        price: 70,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCUJATQkCmcEMyTYthbK2epSTtPIa5eH3gA&s'
    },{
        id: 175,
        name: 'ข้าวผัดหมู(เล็ก)',
        price: 40,
        img: 'https://www.sgethai.com/wp-content/uploads/2023/05/AnyConv.com__89-3.webp'
    },{
        id: 176,
        name: 'ข้าวผัดหมู(กลาง)',
        price: 80,
        img: 'https://www.maggi.co.th/sites/default/files/srh_recipes/a1b6cab9710d963ab0d30f62e5d3a88a.jpeg'
    },{
        id: 177,
        name: 'ข้าวผัดหมู(ใหญ่)',
        price: 120,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCzQ0tNMf46tm8zLeETtkhpaUbAv5_8FDOWAhuYuq4FIS8Y3kcFrFbMud-64bDIQ96Z8&usqp=CAU'
    },{
        id: 178,
        name: 'ข้าวผัดทะเล(เล็ก)',
        price: 50,
        img: 'https://pairsu57.wordpress.com/wp-content/uploads/2016/11/e0b882e0b989e0b8b2e0b8a7e0b89ce0b8b1e0b894e0b897e0b8b0e0b980e0b8a5e0b983e0b895e0b989.jpg'
    },{
        id: 179,
        name: 'ข้าวผัดทะเล(กลาง)',
        price: 80,
        img: 'https://img.wongnai.com/p/1920x0/2018/02/14/021350fce478468b98c775abd057a3c0.jpg'
    },{
        id: 180,
        name: 'ข้าวผัดทะเล(ใหญ่)',
        price: 150,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XOr6ibq799ntmkvsVusojICH7gbTxBWxmA&s'
    },{
        id: 181,
        name: 'กะเพราราดข้าว(หมู)',
        price: 40,
        img: 'https://www.thammculture.com/wp-content/uploads/2024/01/Untitled-612.jpg'
    },{
        id: 182,
        name: 'กะเพราราดข้าว(ทะเล)',
        price: 50,
        img: 'https://api2.krua.co/wp-content/uploads/2020/06/RT1493_ImageBanner_1140x507.jpg'
    },{
        id: 183,
        name: 'ไข่เยี่ยวม้ากะเพรากรอบราดข้าว',
        price: 50,
        img: 'https://yalamarketplace.com/upload/1614519743399.jpg'
    },{
        id: 184,
        name: 'ผัดพริกแกงหมู(ราดข้าว)',
        price: 40,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldEoAF0I1u04I4jmfeDGRuSKx2-irruSiUw&s'
    },{
        id: 185,
        name: 'ผัดพริกแกงทะเล(ราดข้าว)',
        price: 50,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNu98u_VdgQN79-iaClTtr0G-pjNcHxZ0Bg&s'
    },{
        id: 186,
        name: 'ผัดพริกเผาหมู(ราดข้าว)',
        price: 40,
        img: 'https://th.openrice.com/userphoto/Recipe/0/1C/0009KGAB407498AF5B200El.jpg'
    },{
        id: 187,
        name: 'ผัดพริกเผาทะเล(ราดข้าว)',
        price: 50,
        img: 'https://yalamarketplace.com/upload/1637304460365.jpg'
    },{
        id: 188,
        name: 'ข้าวต้มปลา',
        price: 45,
        img: 'https://i.ytimg.com/vi/Ej4nieQl80k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDfUbL3tTN3JiraDV6sViYSutPq2Q'
    },{
        id: 189,
        name: 'ข้าวต้มหมู',
        price: 40,
        img: 'https://static.thairath.co.th/media/Dtbezn3nNUxytg04ajYeYjoS8LHtzcdf2H50J76ZsA9DcK.webp'
    },{
        id: 190,
        name: 'ข้าวไข่เจียวหมูสับ',
        price: 40,
        img: 'https://img.kapook.com/u/2016/wanwanat/0_edit/385698979x.jpg'
    },{
        id: 191,
        name: 'ไข่ดาว',
        price: 10,
        img: 'https://www.sgethai.com/wp-content/uploads/2023/08/AnyConv.com__41-3-1.webp'
    },{
        id: 192,
        name: 'ข้าวสวย(จาน)',
        price: 15,
        img: 'https://www.thammculture.com/wp-content/uploads/2022/06/Untitled-221.jpg'
    },{
        id: 193,
        name: 'ข้าวสวย(โถ)',
        price: 50,
        img: 'https://img.wongnai.com/p/1920x0/2016/12/18/830f9f6c9dbb433ea2e8676c2194e3cf.jpg'
    },{
        id: 194,
        name: 'ข้าวเหนียว',
        price: 15,
        img: 'https://fit-d.com/uploads/food/19b66ec416796841107f89fbe9cd26fb.jpg'
    }]

    console.log(menu)

    var html = '';
    for (let i = 0; i < menu.length; i++) {
        html += `
        <div onclick="selectproduct(${menu[i].id}, '${menu[i].name}', ${menu[i].price} )" class="product-items">
            <img src="${menu[i].img}" alt="">
            <div class="product-info">
                <h3>${menu[i].name}</h3>
                <p>${menu[i].price} THB</p>
            </div>
        </div>
        `
    }
    $("#productbox").html(html)
})

var list =[]
function selectproduct(mid, mname, mprice) {
    console.log(mid, mname, mprice)
    var pass = true;

    for (let i = 0; i < list.length; i++) {
        if(list[i].id == mid) {
            list[i].count++;
            pass = false;
        }
    }

    if(pass) {
        list.push({
            id: mid,
            name: mname,
            price: mprice,
            count: 1
        })
    }

    console.log('list : ',list)
    var html = '';
    var sumprice = 0;
    for (let i = 0; i < list.length; i++) {
        sumprice += list[i].price * list[i].count;
        html += `
        <div class="list-item">
                <p>[x${list[i].count}]${list[i].name}</p>
                <p>${numberWrithComma(list[i].price * list[i].count)} THB</p>
            </div>
            `;
        
        
    }
    html += `
    <div class="list-item list-summary">
                <p>รวมราคา</p>
                <p>${numberWrithComma(sumprice)} THB</p>
    </div>
    `;
    $("#listbox").html(html)
}

function numberWrithComma(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function clearlist() {
    list = [];
    $("#listbox").html(`<p>โปรดเลือกรายการอาหาร</p>`)
}

function printlistnew() {
    console.log('list',list)
    var gotolist = JSON.stringify(list)
    console.log('gotolist',gotolist)
    localStorage.setItem('menulist', gotolist)
    window.location.href = 'bill.html'
}
function searchMenu() {
        let input = document.getElementById('searchInput').value.toLowerCase();
        let items = document.getElementsByClassName('product-items');

        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let name = item.getElementsByTagName('h3')[0].innerText.toLowerCase();

            if (name.indexOf(input) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    }
