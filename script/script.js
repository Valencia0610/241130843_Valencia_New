document.quwerySelectorAll('.card-produk').forEach(card => {
    const input= card.quwerySelector('.quantity input');
    const minus= card.quwerySelector('.minus');
    const plus= card.quwerySelector('.plus');
});

plus.addEventListener('click',() => {
    const hargacard.quwerySelector('.price');
    const nominalHarga = harga.textContent.match(/\d+/)[0];
 
    let value = parentInt(input.value);
input.value = value + 1;
})

minus.addEventListener('click',() => {
    const hargacard.quwerySelector('.price');
    const nominalHarga = harga.textContent.match(/\d+/)[0];
 
    let value = parentInt(input.value);
    if (value > 1) {input.value -1}
})

