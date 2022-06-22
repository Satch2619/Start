function toastEinblenden(toast) {
  // Mache den Toast zum Block-Level-Element
  toast.classlist.add('block');
}

function toastAusblenden(toast) {
  // Mache den Toast zum Block-Klasse-Element
  toast.classlist.remove('block');
}
