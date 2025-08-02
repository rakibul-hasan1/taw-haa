const courseItem = [
    {
        img: "images/Auth8-2.jpg",
        title: "Authentic Recitation of The Glorious Quran (Auth8)",
        disc: "সম্মানিত দ্বীনি ভাই ও বোনেরা ইনশাআল্লাহ আগামী ১ সেপ্টেম্বর, ২০২৫ ইং থেকে শুরু হতে যাচ্ছে পবিত্র কুরআনুল কারিম শিক্ষার একটি নতুন সিজনের ক্লাস।",
        btn: "course details"
    },
     {
        img: "images/TAD2.jpg",
        title: "Tadabbure Quran (S02)",
        disc: `আলহামদুলিল্লাহ, পবিত্র ইদুল ফিতরের পর থেকে শুরু হতে যাচ্ছে পবিত্র কু্রআনের অর্থ শেখার বিশেষ কোর্স "তাদাব্বুরে কুরআন" এর দ্বিতীয় সিজন। রেজিষ্ট্রেশন করুন এখনই।`,
        btn: "course details"
    },
     {
        img: "images/Siratunnabi-sm-Learning-Course-Season-05.jpg",
        title: `Siratunnabi (ﷺ) Learning Course (SS5)`,
        disc: `আলহামদুলিল্লাহ, আগামী আগষ্ট থেকে শুরু হতে যাচ্ছে রাসূল (সাঃ) এর পবিত্র জীবনী শেখার অনন্য কোর্স "সিরাতুন্নবী (সাঃ) শিক্ষা কোর্স" এর পঞ্চম সিজন। রেজিষ্ট্রেশন করুন এখনই।`,
        btn: "course details"
    },
     {
        img: "images/Aqida-S2.jpg",
        title: "Aqida Learning Course",
        disc: "সম্মানিত দ্বীনি ভাই ও বোনেরা ইনশাআল্লাহ আগামী ২০ মে ২০২৫ ইং থেকে শুরু হতে যাচ্ছে ইসলামী মৌলিক আক্বীদা শিক্ষার একটি অনন্য কোর্স।",
        btn: "course details"
    },
];

const eventItem = [
    {
        img: "images/Conference-Guest.jpg",
        title: "Sirat Conference 1446 Hijri",
        disc: "আলহামদুলিল্লাহ, আগামী ২২ ফেব্রুয়ারী ইং 'ত্ব-হা যিন নূরাঈন অনলাইন মাদ্রাসা'র ব্যবস্থাপনায় অনুষ্ঠিত হবে 'Sirat Conference Season 02' ইনশাআল্লাহ।",
        btn: "event details"
    },
     {
        img: "images/9-aug-seminar.jpg",
        title: "The life of a believer in the light of the Sirat - Seminar",
        disc: `ইনশাল্লাহ আগামী ৯ই আগষ্ট ২০২৫ রোজ শনিবার রাজধানী ঢাকার অদূরে অনুষ্ঠিত হতে যাচ্ছে "সিরাতের আলোকে মুমিনের জীবনী" শীর্ষক সেমিনার।`,
        btn: "event details"
    },
     {
        img: "images/Al-Aqsa-Conference-web.jpg",
        title: `Hurmat E Aqsa Conference`,
        disc: `Taw Haa Zin Nurain Islamic Center -এর উদ্যোগে আগামী ২৫শে মার্চ ২০২৫ ইং রোজ মঙ্গলবার রাজধানী ঢাকায় অনুষ্ঠিত হতে যাচ্ছে "হুরমতে আকসা কনফারেন্স"।`,
        btn: "event details"
    },
];

// course items
const itemContainer = document.querySelector(".items");

window.addEventListener("DOMContentLoaded", function() {
    let displayItems = courseItem.map(function(item) {
        return `
             <div class="item">
                <a href="#">
                    <img class="item-photo" src="${item.img}" alt="">
                </a>
                <a href="#">
                    <h3>${item.title}</h3>
                </a>
                <p class="item-para">${item.disc}</p>
                <button class="item-btn btn">${item.btn}</button>
            </div>
        `
    });
    itemContainer.innerHTML = displayItems.join("");
});



// events items
const eventContainer = document.querySelector(".event-items");

window.addEventListener("DOMContentLoaded", function() {
    let displayItems = eventItem.map(function(item) {
        return `
             <div class="item">
                <a href="#">
                    <img class="item-photo" src="${item.img}" alt="">
                </a>
                <a href="#">
                    <h3>${item.title}</h3>
                </a>
                <p class="item-para">${item.disc}</p>
                <button class="item-btn btn">${item.btn}</button>
            </div>
        `
    });
    eventContainer.innerHTML = displayItems.join("");
});
