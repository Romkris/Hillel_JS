// ДЗ 9.1. BigBoss

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };
  
  function findValueByKey(companyObj, companyName) {
    if (companyObj.name === companyName) {
      return companyObj;
    }

    if (companyObj.clients) {
      for (let subCompany of companyObj.clients) {
       
        const found = findValueByKey(subCompany, companyName);
        if (found) {
          return found;
        }
      }
    }
  
    if (companyObj.partners) {
      for (let partner of companyObj.partners) {
        const found = findValueByKey(partner, companyName);
        if (found) {
          return found;
        }
      }
    }
  }
  
  console.log(findValueByKey(company, 'Клієнт 1.2.3'));