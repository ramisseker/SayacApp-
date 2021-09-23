const calculateBill = (
  okunanDeg,
  ilkSayacDeg,
  birimFiyati,
  atikSuBedeli,
  kdvOrani,
  ctvBedeli,
) => {
  const kullanim = okunanDeg - ilkSayacDeg;
  const tutar = kullanim * birimFiyati;
  const atiksu = kullanim * atikSuBedeli;
  const toplamTutar = tutar + atiksu;
  const kvdLi = toplamTutar * kdvOrani + toplamTutar;
  const ctvLi = kullanim * ctvBedeli;
  const toplam = kvdLi + ctvLi;
  return toplam;
};

export {calculateBill};
