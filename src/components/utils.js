 export const convertDatesToRequiredFormat = (dateInput)=>{
        var initializedDate;
        initializedDate = new Date(dateInput);
          var day = initializedDate.getDate().toString();
          var monthIndex = (initializedDate.getMonth()+1).toString();
          var year = initializedDate.getFullYear();
          
          day = day.length >1 ? day : '0'+day; 
          monthIndex = monthIndex.length >1 ?monthIndex:'0'+monthIndex;
          
          return monthIndex + '/' + day +  '/' +year ;
      
      }

