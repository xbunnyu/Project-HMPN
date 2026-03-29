// คลังข้อมูลสัตว์หิมพานต์ครบทุกตัวตามลิสต์
const himaphanData = [
    // 1. ตระกูลกุญชร (ผสมช้าง)
    { name: "กุญชรวารี", type: "ตระกูลกุญชร", desc: "ช้างหางปลา", mean: "ความพริ้วไหวในพละกำลัง", story: "อาศัยในทะเลสีทันดร เป็นสัตว์ที่ว่ายน้ำได้เร็วและทรงพลังมาก", img: "img1.png" },
    { name: "วารีกุญชร", type: "ตระกูลกุญชร", desc: "ช้างที่มีครีบและหางเป็นปลา (สลับตำแหน่งส่วนประกอบ)", mean: "ผู้พิทักษ์น่านน้ำ", story: "มักสับสนกับกุญชรวารี แต่มีลักษณะเกล็ดที่ชัดเจนกว่าตามลำตัว", img: "img2.png" },
    { name: "ช้างเผือก", type: "ตระกูลกุญชร", desc: "ช้างมงคล 10 ตระกูล (เช่น ฉัททันต์, อุโบสถ)", mean: "บุญบารมีและสิริมงคล", story: "ช้างคู่บุญบารมีของพระมหากษัตริย์และพระพุทธเจ้า", img: "img3.png" },
    { name: "เอราวัณ", type: "ตระกูลกุญชร", desc: "ช้าง 33 เศียร กายสีขาว", mean: "พาหนะแห่งสวรรค์", story: "พาหนะของพระอินทร์ เนรมิตตนขึ้นมาเพื่อรับใช้เทพบุตร", img: "img4.png" },
    { name: "กรินทร์ปักษา", type: "ตระกูลกุญชร", desc: "ช้างมีปีกนก", mean: "อิสระเหนือพสุธา", story: "ช้างวิเศษที่บินข้ามเขาสัตตบริภัณฑ์ได้อย่างง่ายดาย", img: "img5.png" },
    { name: "ปักษาคชสีห์", type: "ตระกูลกุญชร", desc: "สิงห์หัวช้างมีปีก", mean: "พลังอำนาจทั้งสามภพ", story: "รวมจุดเด่นของช้าง สิงห์ และนกเข้าด้วยกัน", img: "img6.png" },

    // 2. ตระกูลสิงห์ (ผสมสิงโต)
    { name: "ไกรสรราชสีห์", type: "ตระกูลสิงห์", desc: "สิงโตเผือก สง่างามที่สุด", mean: "อำนาจสูงสุดและการปกครอง", story: "ราชาแห่งสัตว์บก เสียงคำรามทำให้สัตว์อื่นต้องสยบ", img: "img7.png" },
    { name: "คชสีห์", type: "ตระกูลสิงห์", desc: "ตัวเป็นสิงห์ หัวเป็นช้าง", mean: "ตบะและความน่าเกรงขาม", story: "สัญลักษณ์ของฝ่ายกลาโหม สื่อถึงพลังอำนาจ", img: "img8.png" },
    { name: "นรสีห์", type: "ตระกูลสิงห์", desc: "ตัวเป็นสิงห์ หน้าเป็นมนุษย์", mean: "ปัญญาและพละกำลัง", story: "มักเฝ้าสถานที่ศักดิ์สิทธิ์ ปรากฏในงานสถาปัตยกรรมไทย", img: "img9.png" },
    { name: "เหมราช", type: "ตระกูลสิงห์", desc: "ตัวเป็นสิงห์ หัวเป็นหงส์", mean: "ความสูงส่งแห่งสายเลือด", story: "สัตว์ชั้นสูงที่รวมความสง่างามของนกและสิงโตเข้าด้วยกัน", img: "img10.png" },
    { name: "บัณฑุราชสีห์", type: "ตระกูลสิงห์", desc: "สิงห์ตัวสีเหลืองกินเนื้อสัตว์", mean: "สัญชาตญาณนักล่า", story: "อาศัยในถ้ำทองของป่าหิมพานต์", img: "img11.png" },
    { name: "ติณสีหะ", type: "ตระกูลสิงห์", desc: "สิงห์กินหญ้า กายสีแดงดั่งเท้ากวาง", mean: "ความสงบในความแข็งแกร่ง", story: "สิงห์กินพืชที่ไม่เบียดเบียนสัตว์อื่น", img: "img12.png" },
    { name: "โต", type: "ตระกูลสิงห์", desc: "สิงห์ผสมกวาง มีเขา", mean: "ความแปลกใหม่และคล่องแคล่ว", story: "นิยมทำเป็นหุ่นเชิดในเทศกาลแถบภาคเหนือ", img: "img13.png" },
    { name: "สิงหพานร", type: "ตระกูลสิงห์", desc: "สิงห์ผสมลิง", mean: "ความว่องไวและดุดัน", story: "สัตว์ผสมที่มีพละกำลังของสิงห์และความซุกซนของลิง", img: "img14.png" },
    { name: "ไกรสรจำแลง", type: "ตระกูลสิงห์", desc: "สิงห์ผสมมังกร", mean: "การผสานวัฒนธรรม", story: "เชื่อว่าได้รับอิทธิพลจากการแลกเปลี่ยนศิลปะกับจีน", img: "img15.png" },
    { name: "สกุณไกรสร", type: "ตระกูลสิงห์", desc: "สิงห์มีปีกและหางนก", mean: "นักล่าเวหา", story: "ราชสีห์ที่สามารถโฉบเหยื่อจากบนอากาศได้", img: "img16.png" },
    { name: "กาฬสีหะ", type: "ตระกูลสิงห์", desc: "สิงห์สีดำกินหญ้า", mean: "ความลึกลับและสันโดษ", story: "ราชสีห์กายสีดำขลับที่กินพืชเป็นอาหาร", img: "img17.png" },

    // 3. ตระกูลปักษี (นกและสัตว์ปีก)
    { name: "พญาครุฑ", type: "ตระกูลปักษี", desc: "จ้าวแห่งนก ครึ่งคนครึ่งนกอินทรี", mean: "ความกตัญญูและอำนาจเหนือฟ้า", story: "พาหนะพระนารายณ์ ศัตรูคู่อาฆาตของพญานาค", img: "img18.png" },
    { name: "กินรี / กินนร", type: "ตระกูลปักษี", desc: "ครึ่งคนครึ่งนก", mean: "ศิลปวิทยาการและความงาม", story: "อาศัยที่สระอโนดาต ชำนาญการดนตรีและร่ายรำ", img: "img19.png" },
    { name: "หงส์", type: "ตระกูลปักษี", desc: "นกชั้นสูง พาหนะพระพรหม", mean: "ความบริสุทธิ์และสูงส่ง", story: "ว่ายน้ำในสระสวรรค์ มีเสียงร้องไพเราะดั่งพิณ", img: "img20.png" },
    { name: "การเวก", type: "ตระกูลปักษี", desc: "นกวิเศษในป่าหิมพานต์", mean: "เสียงสวรรค์ที่สะกดทุกสรรพสิ่ง", story: "เมื่อส่งเสียงร้อง สัตว์ทั้งป่าจะหยุดนิ่งเพื่อรับฟัง", img: "img21.png" },
    { name: "สัมพาที / สดายุ", type: "ตระกูลปักษี", desc: "นกยักษ์พี่น้อง", mean: "ความกล้าหาญและความเสียสละ", story: "พญานกในรามเกียรติ์ที่ช่วยพระรามตามหานางสีดา", img: "img22.png" },
    { name: "นกเทศ", type: "ตระกูลปักษี", desc: "นกหน้าคน", mean: "ความแปลกประหลาด", story: "สัตว์หิมพานต์ที่มักถูกวาดประดับตามสมุดไทย", img: "img23.png" },
    { name: "สกุณเหรา", type: "ตระกูลปักษี", desc: "นกผสมจระเข้", mean: "ความดุร้ายแห่งน่านฟ้า", story: "สัตว์ผสมที่ดักจับเหยื่อทั้งบนฟ้าและผิวน้ำ", img: "img24.png" },
    { name: "มยุระคนธรรพ์", type: "ตระกูลปักษี", desc: "นกยูงผสมคน", mean: "เสน่ห์และการร่ายรำ", story: "มีปีกและหางที่รำแพนได้สวยงามดั่งนกยูง", img: "img25.png" },
    { name: "อสุรปักษี", type: "ตระกูลปักษี", desc: "ตัวเป็นนก หน้าเป็นยักษ์", mean: "ผู้พิทักษ์ที่ดุดัน", story: "ทำหน้าที่อารักขาเขตแดนไม่ให้ผู้บุกรุกเข้าป่าหิมพานต์", img: "img26.png" },
    { name: "นกสัมพาที", type: "ตระกูลปักษี", desc: "นกไม่มีขนแต่มีฤทธิ์", mean: "ความอดทนและรอคอย", story: "ถูกสาปให้ขนร่วงจนกว่าจะได้พบทหารพระราม", img: "img27.png" },

    // 4. ตระกูลมัจฉาและสัตว์น้ำ
    { name: "พญานาค", type: "ตระกูลมัจฉา", desc: "เจ้าแห่งงูและน้ำ", mean: "โชคลาภและความอุดมสมบูรณ์", story: "เจ้าแห่งเมืองบาดาล ผู้ดูแลทรัพย์สมบัติและสายน้ำ", img: "img28.png" },
    { name: "มัจฉานุ", type: "ตระกูลมัจฉา", desc: "ลิงหางปลา", mean: "สายเลือดแห่งยอดนักรบ", story: "ลูกหนุมานกับนางสุพรรณมัจฉา มีฤทธิ์ทั้งบนบกและใต้น้ำ", img: "img29.png" },
    { name: "สุพรรณมัจฉา", type: "ตระกูลมัจฉา", desc: "นางเงือก (ครึ่งคนครึ่งปลา)", mean: "เสน่ห์แห่งท้องทะเล", story: "ธิดาของทศกัณฐ์ที่ถูกสั่งให้ทำลายถนนของพระราม", img: "img30.png" },
    { name: "เงือก", type: "ตระกูลมัจฉา", desc: "สัตว์ครึ่งคนครึ่งปลา", mean: "ความลึกลับของผืนน้ำ", story: "ปรากฏในวรรณคดีไทยหลายเรื่อง เช่น พระอภัยมณี", img: "img31.png" },
    { name: "มกร", type: "ตระกูลมัจฉา", desc: "ผสมจระเข้ พญานาค และช้าง", mean: "การรวมพลังของธาตุน้ำ", story: "มักประดับอยู่ตามราวบันไดวัด คอยเฝ้าทางเข้าโบสถ์", img: "img32.png" },
    { name: "เหมวารี", type: "ตระกูลมัจฉา", desc: "หงส์หางปลา", mean: "ความงามเหนือผิวน้ำ", story: "สัตว์วิเศษที่ลอยล่องอยู่ตามสระใหญ่ในหิมพานต์", img: "img33.png" },
    { name: "สกุณมัจฉา", type: "ตระกูลมัจฉา", desc: "นกหางปลา", mean: "นักประดาน้ำติดปีก", story: "สามารถว่ายน้ำและพุ่งทะยานขึ้นฟ้าได้ในคราวเดียว", img: "img34.png" },
    { name: "สิงหมัจฉา", type: "ตระกูลมัจฉา", desc: "สิงห์หางปลา", mean: "ราชาแห่งเกลียวคลื่น", story: "ราชสีห์ที่ปรับตัวให้อาศัยและล่าเหยื่อในทะเลได้", img: "img35.png" },

    // 5. สัตว์ผสมอื่นๆ
    { name: "อัสดรวิหค", type: "ตระกูลอื่นๆ", desc: "ม้ามีปีก", mean: "ความรวดเร็วไร้ขีดจำกัด", story: "ม้าสวรรค์ที่วิ่งได้ทั้งบนบกและโบยบินในอากาศ", img: "img36.png" },
    { name: "อัสดรเหรา", type: "ตระกูลอื่นๆ", desc: "ม้าผสมจระเข้", mean: "ความทรหดและดุร้าย", story: "สัตว์ที่พละกำลังดุจม้าแต่มีสัญชาตญาณดั่งจระเข้", img: "img37.png" },
    { name: "ม้ามังกร", type: "ตระกูลอื่นๆ", desc: "ม้าที่มีเกล็ดและเขาดั่งมังกร", mean: "ความซื่อสัตย์และแข็งแกร่ง", story: "ม้านิลมังกร พาหนะคู่กายของสุดสาคร", img: "img38.png" },
    { name: "นารีผล", type: "ตระกูลอื่นๆ", desc: "ผลไม้รูปสตรี", mean: "กิเลสและการทดสอบจิตใจ", story: "ออกผลที่ป่าหิมพานต์ ดึงดูดเหล่าวิทยาธรให้หลงใหล", img: "img39.png" },
    { name: "มนุสสาสีห์", type: "ตระกูลอื่นๆ", desc: "ตัวเป็นคน ปลายเท้าเป็นกรงเล็บสัตว์", mean: "ร่องรอยแห่งสัญชาตญาณ", story: "อมนุษย์ที่อาศัยลึกเข้าไปในป่าหิมพานต์", img: "img40.png" },
    { name: "กิเลน", type: "ตระกูลอื่นๆ", desc: "สัตว์ผสมตามคติจีน", mean: "โชคลาภและบุญบารมี", story: "สัตว์มงคลที่ศิลปินไทยนำมาปรับประยุกต์ลวดลายให้เป็นไทย", img: "img41.png" }
];

const spinner = document.getElementById('spinner');
const totalCards = himaphanData.length;

const cardWidth = 300; 
const radius = Math.round((cardWidth / 2) / Math.tan(Math.PI / totalCards));

// 🌟 เพิ่มบรรทัดนี้: ส่งค่ารัศมีให้ CSS เพื่อดันวงกลมถอยหลัง
document.documentElement.style.setProperty('--radius', radius);

himaphanData.forEach((animal, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    
    // คำนวณองศาให้เรียงเป็นวงกลมพอดี
    const angle = (index / totalCards) * 360;
    card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    
    // แสดงเฉพาะรูปภาพอย่างเดียว ลบส่วนชื่อออก
    card.innerHTML = `
        <img src="${animal.img}" alt="${animal.name}" onerror="this.src='https://via.placeholder.com/250x350/222/d4af37?text=${animal.name}'">
    `;
    
    // เมื่อคลิกให้ส่ง Object ไปที่ฟังก์ชัน openModal
    card.onclick = () => openModal(animal);
    spinner.appendChild(card);
});

// ฟังก์ชันเปิด Modal
function openModal(animal) {
    const modal = document.getElementById("infoModal");
    const spinnerElement = document.getElementById("spinner");
    
    // ใส่ข้อมูลลงใน HTML
    document.getElementById("modalTitle").innerText = animal.name;
    document.getElementById("modalType").innerText = `หมวดหมู่: ${animal.type}`;
    document.getElementById("modalAppearance").innerText = animal.desc;
    document.getElementById("modalMeaning").innerText = animal.mean;
    document.getElementById("modalStory").innerText = animal.story;
    
    // จัดการรูปภาพ (ถ้าไม่มีรูป ให้ใช้ placeholder ก่อน)
    const imgElement = document.getElementById("modalImg");
    imgElement.src = animal.img;
    imgElement.onerror = function() {
        this.src = `https://via.placeholder.com/300x400/333/d4af37?text=${animal.name}`;
    };
    
    modal.style.display = "block";
    spinnerElement.style.animationPlayState = "paused"; // หยุดหมุน
}

// ฟังก์ชันปิด Modal
function closeModal() {
    const modal = document.getElementById("infoModal");
    const spinnerElement = document.getElementById("spinner");
    
    modal.style.display = "none";
    spinnerElement.style.animationPlayState = "running"; // หมุนต่อ
}

// คลิกพื้นที่ว่างเพื่อปิด Modal
window.onclick = function(event) {
    const modal = document.getElementById("infoModal");
    if (event.target == modal) {
        closeModal();
    }
}