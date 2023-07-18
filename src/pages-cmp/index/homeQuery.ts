const homeQuery = `query{
    stronaGlowna{
      data{
        id
        attributes{
          Tytul
          Opis
          Zdjecia{
            data{
              attributes{
                url
                formats
              }
            }
          }
        }
      }
    }
  }`;

export default homeQuery;
