export  class StringUtils {
  static makeUnique(s) {
      return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[ ]+/g," ").trim();
  }

  static replaceAllSpecialCharactersAndSetLowerCase(s){
      let sVal = s.toLocaleLowerCase().trim();
      
      sVal = sVal.replace(/[áàãâä]/g, 'a');
      sVal = sVal.replace(/[éèêë]/g, 'e');
      sVal = sVal.replace(/[íìîï]/g, 'i');
      sVal = sVal.replace(/[óòõôö]/g, 'o');
      sVal = sVal.replace(/[úùûü]/g, 'u');
      sVal = sVal.replace(/[ç]/g, 'c');
      sVal = sVal.replace(/_+/, '_');
      sVal = sVal.replace(/[^a-z0-9 ]/g, '');
      sVal = sVal.replace(/[ ]+/g, ' ');
  
      return sVal;
  }
}
